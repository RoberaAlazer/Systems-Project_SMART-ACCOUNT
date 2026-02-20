# Smart Account

A comprehensive financial management tool designed for freelancers to track income, expenses, manage invoices, and generate reports.

## Features

- **User Authentication** - Secure registration, login, and password recovery
- **Transaction Management** - Track income and expenses with categorization
- **Invoice Management** - Create, send, and track invoices to clients
- **Client Management** - Manage client information and relationships
- **Dashboard & Reports** - Visual summaries, profit/loss, and category breakdowns
- **Data Export** - Export transactions and invoices as CSV/PDF

## Tech Stack

### Backend
- Node.js 20.x LTS
- Express.js 4.x
- PostgreSQL 15+
- TypeScript
- JWT Authentication

### Frontend
- React 18.x (TBD)
- TypeScript
- Tailwind CSS (TBD)

## Project Structure

```
SmartAcc/
├── backEnd/           # Express.js API server
│   ├── src/
│   │   ├── config/        # Configuration files
│   │   ├── controllers/   # Request handlers
│   │   ├── database/      # Migrations and seeds
│   │   ├── dto/           # Data Transfer Objects
│   │   ├── exceptions/    # Custom error classes
│   │   ├── middleware/    # Express middleware
│   │   ├── models/        # Data models
│   │   ├── repositories/  # Data access layer
│   │   ├── routes/        # API route definitions
│   │   ├── services/      # Business logic
│   │   ├── types/         # TypeScript types
│   │   └── utils/         # Utility functions
│   └── tests/             # Test files
├── frontEnd/          # React frontend
├── docs/              # Documentation
└── .github/           # GitHub workflows
```

## Getting Started

### Prerequisites

- Node.js 20.x or higher
- PostgreSQL 15 or higher
- npm or yarn

### Backend Setup

```bash
cd backEnd
npm install
cp .env.example .env
# Configure your .env file
npm run migrate
npm run seed
npm run dev
```

### Frontend Setup

```bash
cd frontEnd
npm install
npm start
```

## API Documentation

See [docs/API.md](docs/API.md) for complete API documentation.

## Branch Strategy

- `main` - Production-ready code
- `backend` - Backend development
- `frontend` - Frontend development
- `feature/*` - Feature branches

## Contributing

1. Create a feature branch from `backend` or `frontend`
2. Make your changes
3. Submit a pull request

## License

MIT License
