-- Migration: Create invoice_status_history table
-- Description: Audit trail for invoice status changes

CREATE TABLE invoice_status_history (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    invoice_id UUID NOT NULL,
    old_status VARCHAR(20),
    new_status VARCHAR(20) NOT NULL,
    changed_by UUID,
    notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_status_history_invoice FOREIGN KEY (invoice_id)
        REFERENCES invoices(id) ON DELETE CASCADE,
    CONSTRAINT fk_status_history_user FOREIGN KEY (changed_by)
        REFERENCES users(id) ON DELETE SET NULL
);

CREATE INDEX idx_status_history_invoice ON invoice_status_history(invoice_id);
CREATE INDEX idx_status_history_created ON invoice_status_history(created_at);
