# Development Guide

This document provides instructions for setting up and running the Project Library application locally after removing Replit dependencies.

## What Was Changed

### Removed
- `.replit` configuration file (Replit-specific)
- All Replit-specific dependencies and configurations

### Added
- Comprehensive `.gitignore` file
- Environment configuration examples (`.env.example` files)
- Development setup scripts (`setup-dev.ps1` for Windows, `setup-dev.sh` for Unix/macOS)
- Enhanced npm scripts for better local development
- Proper directory structure with `.gitkeep` files
- Comprehensive README.md with setup instructions

### Updated
- Next.js to latest secure version (14.2.33)
- Fixed TypeScript compilation errors
- Enhanced npm scripts with type checking, linting, and database management

## Quick Start

### Option 1: Using Setup Script (Windows)
```powershell
.\setup-dev.ps1
```

### Option 2: Using Setup Script (Unix/macOS)
```bash
chmod +x setup-dev.sh
./setup-dev.sh
```

### Option 3: Manual Setup

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Set up Environment Variables**
   ```bash
   # Backend
   cp backend/.env.example backend/.env
   # Edit backend/.env with your database credentials
   
   # Frontend
   cp frontend/.env.example frontend/.env.local
   ```

3. **Set up Database**
   ```bash
   # Make sure PostgreSQL is running
   npm run db:setup
   ```

4. **Start Development Servers**
   ```bash
   npm run dev
   ```

## Available Commands

### Root Level Commands
- `npm run dev` - Start both frontend and backend
- `npm run build` - Build both applications
- `npm run type-check` - Type check both applications
- `npm run lint` - Lint frontend code
- `npm run db:setup` - Set up database (generate + migrate)
- `npm run db:reset` - Reset database
- `npm run db:studio` - Open Prisma Studio
- `npm run clean` - Clean all node_modules and build files

### Individual Application Commands
- `npm run dev:backend` - Start only backend (port 3000)
- `npm run dev:frontend` - Start only frontend (port 5000)
- `npm run build:backend` - Build backend
- `npm run build:frontend` - Build frontend

## Environment Configuration

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

## Database Setup

1. **Create PostgreSQL Database**
   ```sql
   CREATE DATABASE project_library;
   ```

2. **Update Environment Variables**
   Edit `backend/.env` with your database credentials.

3. **Run Migrations**
   ```bash
   npm run db:setup
   ```

## Application URLs

- **Frontend**: http://localhost:5000
- **Backend API**: http://localhost:3000
- **Database Studio**: Run `npm run db:studio` (opens in browser)

## Troubleshooting

### Common Issues

1. **Port Already in Use**
   - Make sure ports 3000 and 5000 are available
   - Kill any processes using these ports

2. **Database Connection Error**
   - Verify PostgreSQL is running
   - Check DATABASE_URL in backend/.env
   - Ensure database exists

3. **TypeScript Errors**
   - Run `npm run type-check` to identify issues
   - All current TypeScript errors have been resolved

4. **Module Not Found**
   - Run `npm install` in root directory
   - If issues persist, run `npm run clean` then `npm install`

### Reset Everything
```bash
npm run clean
npm install
npm run db:reset
```

## Development Workflow

1. **Making Changes**
   - Both frontend and backend support hot reload
   - TypeScript changes are automatically compiled

2. **Database Changes**
   - Modify `backend/prisma/schema.prisma`
   - Run `npm run db:generate && npm run db:migrate`

3. **Adding Dependencies**
   - For frontend: `cd frontend && npm install package-name`
   - For backend: `cd backend && npm install package-name`
   - For both: Add to root package.json if it's a shared dependency

## Project Structure

```
project-library/
├── backend/              # Fastify API server
│   ├── src/             # Source code
│   ├── prisma/          # Database schema and migrations
│   ├── storage/         # File storage
│   ├── .env.example     # Environment template
│   └── package.json     # Backend dependencies
├── frontend/            # Next.js React application
│   ├── src/            # Source code
│   ├── public/         # Static assets
│   ├── .env.example    # Environment template
│   └── package.json    # Frontend dependencies
├── setup-dev.ps1       # Windows setup script
├── setup-dev.sh        # Unix/macOS setup script
├── README.md           # Main documentation
├── DEVELOPMENT.md      # This file
├── .gitignore          # Git ignore rules
└── package.json        # Workspace configuration
```

## Security Notes

- All Replit-specific configurations have been removed
- Next.js has been updated to the latest secure version
- Environment files are properly gitignored
- No sensitive information is committed to the repository

The application is now fully ready for local development without any Replit dependencies!

