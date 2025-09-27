# Project Library

A comprehensive web-based Project Library platform for AI/ML school projects.

## Project Structure

```
project-library/
├── backend/          # Fastify API server with Prisma ORM
├── frontend/         # Next.js React application
├── package.json      # Root workspace configuration
└── README.md         # This file
```

## Prerequisites

Before running this project, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v18 or higher)
- [PostgreSQL](https://www.postgresql.org/) (v12 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)

## Quick Start

### 1. Clone and Install Dependencies

```bash
# Clone the repository
git clone <your-repo-url>
cd project-library

# Install dependencies for all workspaces
npm install
```

### 2. Database Setup

1. Create a PostgreSQL database:
```sql
CREATE DATABASE project_library;
```

2. Set up environment variables:
```bash
# Backend environment
cp backend/.env.example backend/.env
# Edit backend/.env with your database credentials

# Frontend environment
cp frontend/.env.example frontend/.env.local
# Edit frontend/.env.local if needed
```

3. Run database migrations:
```bash
cd backend
npm run db:generate
npm run db:migrate
```

### 3. Start Development Servers

Run both frontend and backend simultaneously:
```bash
# From the root directory
npm run dev
```

Or run them separately:
```bash
# Backend (runs on http://localhost:3000)
npm run dev:backend

# Frontend (runs on http://localhost:5000)
npm run dev:frontend
```

## Available Scripts

### Root Level
- `npm run dev` - Start both frontend and backend in development mode
- `npm run build` - Build both applications for production
- `npm run dev:backend` - Start only the backend server
- `npm run dev:frontend` - Start only the frontend application

### Backend (`cd backend`)
- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run db:migrate` - Run database migrations
- `npm run db:generate` - Generate Prisma client
- `npm run db:push` - Push schema changes to database
- `npm run db:reset` - Reset database and run migrations
- `npm run db:studio` - Open Prisma Studio (database GUI)

### Frontend (`cd frontend`)
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Environment Variables

### Backend (.env)
```env
DATABASE_URL="postgresql://username:password@localhost:5432/project_library"
PORT=3000
NODE_ENV=development
STORAGE_PATH="./storage"
FRONTEND_URL="http://localhost:5000"
```

### Frontend (.env.local)
```env
NEXT_PUBLIC_API_URL="http://localhost:3000"
NEXT_PUBLIC_APP_NAME="Project Library"
NEXT_PUBLIC_APP_DESCRIPTION="A comprehensive web-based Project Library platform for AI/ML school projects"
```

## Technology Stack

### Backend
- **Fastify** - Fast and low overhead web framework
- **Prisma** - Next-generation ORM for Node.js and TypeScript
- **PostgreSQL** - Open source relational database
- **TypeScript** - Typed superset of JavaScript
- **Zod** - TypeScript-first schema validation

### Frontend
- **Next.js 14** - React framework with App Router
- **React 18** - UI library
- **TypeScript** - Typed superset of JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Unstyled, accessible UI components
- **React Query** - Data fetching and state management
- **React Hook Form** - Performant forms with easy validation

## Development Tips

1. **Database Changes**: After modifying the Prisma schema, run:
   ```bash
   cd backend
   npm run db:generate
   npm run db:migrate
   ```

2. **API Testing**: The backend API will be available at `http://localhost:3000`
   - Health check: `GET /health`
   - API documentation will be available once implemented

3. **Hot Reload**: Both frontend and backend support hot reload during development

4. **Database GUI**: Use Prisma Studio to view and edit your database:
   ```bash
   cd backend
   npm run db:studio
   ```

## Troubleshooting

### Common Issues

1. **Port already in use**: Make sure ports 3000 and 5000 are not being used by other applications
2. **Database connection error**: Verify your PostgreSQL server is running and the DATABASE_URL is correct
3. **Module not found**: Run `npm install` in the root directory to install all dependencies

### Reset Everything
If you need to start fresh:
```bash
# Reset database
cd backend
npm run db:reset

# Reinstall dependencies
cd ..
rm -rf node_modules frontend/node_modules backend/node_modules
npm install
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.
