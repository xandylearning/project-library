#!/bin/sh
set -e

echo "🚀 Starting Project Library..."

# Navigate to backend directory
cd /app/backend

# Run Prisma migrations (push schema to database)
echo "📊 Setting up database..."
npx prisma db push --accept-data-loss

# Generate Prisma client (in case it's not available)
echo "🔧 Generating Prisma client..."
npx prisma generate

# Start backend server in the background on internal port 3001
echo "🔌 Starting backend server on port 3001..."
PORT=3001 node dist/index.js &
BACKEND_PID=$!

# Wait for backend to be ready
echo "⏳ Waiting for backend to be ready..."
for i in 1 2 3 4 5 6 7 8 9 10; do
  if node -e "require('http').get('http://localhost:3001/health', (r) => {process.exit(r.statusCode === 200 ? 0 : 1)})" 2>/dev/null; then
    echo "✅ Backend is ready!"
    break
  fi
  echo "Waiting for backend... (attempt $i/10)"
  sleep 3
done

# Start frontend server on port 3000 (Cloud Run exposed port)
echo "🎨 Starting frontend server on port 3000..."
cd /app
# Set backend URL for Next.js rewrites (empty NEXT_PUBLIC_BACKEND_URL means use relative URLs)
export NEXT_PUBLIC_BACKEND_URL=""
export BACKEND_URL="http://localhost:3001"
PORT=3000 node server.js &
FRONTEND_PID=$!

echo "✅ Project Library is running!"
echo "   Backend:  http://localhost:3001 (internal)"
echo "   Frontend: http://localhost:3000 (exposed)"

# Function to handle shutdown
shutdown() {
  echo "🛑 Shutting down gracefully..."
  kill -TERM $BACKEND_PID 2>/dev/null || true
  kill -TERM $FRONTEND_PID 2>/dev/null || true
  wait $BACKEND_PID 2>/dev/null || true
  wait $FRONTEND_PID 2>/dev/null || true
  echo "👋 Shutdown complete"
  exit 0
}

# Trap signals for graceful shutdown
trap shutdown SIGTERM SIGINT

# Wait for both processes
wait

