export type InvoiceStatus = 'draft' | 'sent' | 'paid' | 'overdue' | 'cancelled';

export interface Invoice {
  id: string;
  user_id: string;
  client_id: string;
  invoice_number: string;
  status: InvoiceStatus;
  issue_date: Date;
  due_date: Date;
  subtotal: number;
  tax_rate: number;
  tax_amount: number;
  discount_amount: number;
  total: number;
  notes?: string;
  terms?: string;
  paid_date?: Date;
  paid_amount?: number;
  sent_at?: Date;
  reminder_sent_at?: Date;
  created_at: Date;
  updated_at: Date;
}

export interface InvoiceItem {
  id: string;
  invoice_id: string;
  description: string;
  quantity: number;
  unit_price: number;
  total: number;
  sort_order: number;
  created_at: Date;
  updated_at: Date;
}

export interface InvoiceWithItems extends Invoice {
  items: InvoiceItem[];
  client_name?: string;
  client_email?: string;
}

export interface InvoiceStatusHistory {
  id: string;
  invoice_id: string;
  old_status?: InvoiceStatus;
  new_status: InvoiceStatus;
  changed_by?: string;
  notes?: string;
  created_at: Date;
}

export type CreateInvoiceData = Pick<Invoice, 'user_id' | 'client_id' | 'due_date'> & {
  notes?: string;
  terms?: string;
  tax_rate?: number;
  discount_amount?: number;
  items: CreateInvoiceItemData[];
};

export type CreateInvoiceItemData = Pick<InvoiceItem, 'description' | 'quantity' | 'unit_price'>;

export type UpdateInvoiceData = Partial<
  Pick<Invoice, 'due_date' | 'notes' | 'terms' | 'tax_rate' | 'discount_amount'>
>;

export interface InvoiceFilter {
  status?: InvoiceStatus;
  client_id?: string;
  start_date?: Date;
  end_date?: Date;
  page?: number;
  limit?: number;
}
