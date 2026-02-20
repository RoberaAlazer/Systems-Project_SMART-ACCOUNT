# Smart Account Database Schema

## Entity Relationship Diagram

```
Users (1) ----< (M) Categories
Users (1) ----< (M) Transactions
Users (1) ----< (M) Clients
Users (1) ----< (M) Invoices
Users (1) ----< (M) RefreshTokens
Categories (1) ----< (M) Transactions
Clients (1) ----< (M) Invoices
Invoices (1) ----< (M) InvoiceItems
Invoices (1) ----< (M) InvoiceStatusHistory
```

## Tables

### users
| Column | Type | Constraints |
|--------|------|-------------|
| id | UUID | PRIMARY KEY |
| email | VARCHAR(255) | UNIQUE, NOT NULL |
| password_hash | VARCHAR(255) | NOT NULL |
| first_name | VARCHAR(100) | NOT NULL |
| last_name | VARCHAR(100) | NOT NULL |
| phone | VARCHAR(20) | |
| business_name | VARCHAR(255) | |
| address_line1 | VARCHAR(255) | |
| address_line2 | VARCHAR(255) | |
| city | VARCHAR(100) | |
| state | VARCHAR(100) | |
| postal_code | VARCHAR(20) | |
| country | VARCHAR(100) | DEFAULT 'USA' |
| is_verified | BOOLEAN | DEFAULT FALSE |
| is_active | BOOLEAN | DEFAULT TRUE |
| password_reset_token | VARCHAR(255) | |
| password_reset_expires | TIMESTAMP | |
| created_at | TIMESTAMP | DEFAULT NOW() |
| updated_at | TIMESTAMP | DEFAULT NOW() |

### categories
| Column | Type | Constraints |
|--------|------|-------------|
| id | UUID | PRIMARY KEY |
| user_id | UUID | FK users, NULL for defaults |
| name | VARCHAR(100) | NOT NULL |
| type | VARCHAR(20) | CHECK (income, expense) |
| color | VARCHAR(7) | DEFAULT '#6B7280' |
| icon | VARCHAR(50) | |
| is_default | BOOLEAN | DEFAULT FALSE |
| is_active | BOOLEAN | DEFAULT TRUE |
| created_at | TIMESTAMP | DEFAULT NOW() |
| updated_at | TIMESTAMP | DEFAULT NOW() |

### transactions
| Column | Type | Constraints |
|--------|------|-------------|
| id | UUID | PRIMARY KEY |
| user_id | UUID | FK users, NOT NULL |
| category_id | UUID | FK categories, NOT NULL |
| type | VARCHAR(20) | CHECK (income, expense) |
| amount | DECIMAL(15,2) | NOT NULL, > 0 |
| description | VARCHAR(500) | NOT NULL |
| transaction_date | DATE | NOT NULL |
| notes | TEXT | |
| is_recurring | BOOLEAN | DEFAULT FALSE |
| recurring_frequency | VARCHAR(20) | CHECK values |
| created_at | TIMESTAMP | DEFAULT NOW() |
| updated_at | TIMESTAMP | DEFAULT NOW() |

### clients
| Column | Type | Constraints |
|--------|------|-------------|
| id | UUID | PRIMARY KEY |
| user_id | UUID | FK users, NOT NULL |
| name | VARCHAR(255) | NOT NULL |
| email | VARCHAR(255) | |
| phone | VARCHAR(20) | |
| company | VARCHAR(255) | |
| address_* | VARCHAR | |
| notes | TEXT | |
| is_active | BOOLEAN | DEFAULT TRUE |
| created_at | TIMESTAMP | DEFAULT NOW() |
| updated_at | TIMESTAMP | DEFAULT NOW() |

### invoices
| Column | Type | Constraints |
|--------|------|-------------|
| id | UUID | PRIMARY KEY |
| user_id | UUID | FK users, NOT NULL |
| client_id | UUID | FK clients, NOT NULL |
| invoice_number | VARCHAR(50) | UNIQUE per user |
| status | VARCHAR(20) | CHECK values |
| issue_date | DATE | DEFAULT NOW() |
| due_date | DATE | NOT NULL |
| subtotal | DECIMAL(15,2) | DEFAULT 0 |
| tax_rate | DECIMAL(5,2) | DEFAULT 0 |
| tax_amount | DECIMAL(15,2) | DEFAULT 0 |
| discount_amount | DECIMAL(15,2) | DEFAULT 0 |
| total | DECIMAL(15,2) | DEFAULT 0 |
| notes | TEXT | |
| terms | TEXT | |
| paid_date | DATE | |
| paid_amount | DECIMAL(15,2) | |
| sent_at | TIMESTAMP | |
| reminder_sent_at | TIMESTAMP | |
| created_at | TIMESTAMP | DEFAULT NOW() |
| updated_at | TIMESTAMP | DEFAULT NOW() |

### invoice_items
| Column | Type | Constraints |
|--------|------|-------------|
| id | UUID | PRIMARY KEY |
| invoice_id | UUID | FK invoices, NOT NULL |
| description | VARCHAR(500) | NOT NULL |
| quantity | DECIMAL(10,2) | DEFAULT 1 |
| unit_price | DECIMAL(15,2) | NOT NULL |
| total | DECIMAL(15,2) | NOT NULL |
| sort_order | INTEGER | DEFAULT 0 |
| created_at | TIMESTAMP | DEFAULT NOW() |
| updated_at | TIMESTAMP | DEFAULT NOW() |

## Migrations

Run migrations in order:
```bash
psql -d smartaccount -f src/database/migrations/001_create_users.sql
psql -d smartaccount -f src/database/migrations/002_create_refresh_tokens.sql
# ... continue for all migrations
```
