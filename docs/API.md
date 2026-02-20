# Smart Account API Documentation

## Base URL

```
http://localhost:5000/api
```

## Authentication

All protected endpoints require a JWT token in the Authorization header:

```
Authorization: Bearer <access_token>
```

## Endpoints

### Authentication

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/auth/register` | Register new user |
| POST | `/auth/login` | User login |
| POST | `/auth/logout` | User logout |
| POST | `/auth/refresh` | Refresh access token |
| POST | `/auth/forgot-password` | Request password reset |
| POST | `/auth/reset-password` | Reset password with token |

### Users

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/users/profile` | Get current user profile |
| PUT | `/users/profile` | Update user profile |
| PUT | `/users/password` | Change password |

### Categories

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/categories` | List all categories |
| GET | `/categories/:id` | Get single category |
| POST | `/categories` | Create category |
| PUT | `/categories/:id` | Update category |
| DELETE | `/categories/:id` | Delete category |

### Transactions

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/transactions` | List all transactions |
| GET | `/transactions/income` | List income transactions |
| GET | `/transactions/expenses` | List expense transactions |
| GET | `/transactions/:id` | Get single transaction |
| POST | `/transactions` | Create transaction |
| PUT | `/transactions/:id` | Update transaction |
| DELETE | `/transactions/:id` | Delete transaction |

### Clients

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/clients` | List all clients |
| GET | `/clients/:id` | Get single client |
| GET | `/clients/:id/invoices` | Get client's invoices |
| POST | `/clients` | Create client |
| PUT | `/clients/:id` | Update client |
| DELETE | `/clients/:id` | Delete client |

### Invoices

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/invoices` | List invoices |
| GET | `/invoices/:id` | Get single invoice |
| POST | `/invoices` | Create invoice |
| PUT | `/invoices/:id` | Update invoice |
| POST | `/invoices/:id/send` | Send invoice to client |
| POST | `/invoices/:id/paid` | Mark invoice as paid |
| DELETE | `/invoices/:id` | Delete invoice |

### Dashboard

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/dashboard/summary` | Get dashboard summary |
| GET | `/dashboard/profit-loss` | Get profit/loss report |
| GET | `/dashboard/monthly` | Get monthly breakdown |
| GET | `/dashboard/category` | Get category breakdown |

### Export

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/export/transactions/csv` | Export transactions CSV |
| GET | `/export/invoices/:id/pdf` | Export invoice as PDF |

## Response Format

All responses follow this format:

```json
{
  "success": true,
  "message": "Operation successful",
  "data": { ... }
}
```

Error responses:

```json
{
  "success": false,
  "message": "Error message",
  "error": {
    "code": "ERROR_CODE",
    "details": [...]
  }
}
```
