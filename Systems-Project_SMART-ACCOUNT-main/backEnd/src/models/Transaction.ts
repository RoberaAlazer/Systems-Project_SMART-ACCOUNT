export type TransactionType = 'income' | 'expense';
export type RecurringFrequency = 'daily' | 'weekly' | 'monthly' | 'yearly';

export interface Transaction {
  id: string;
  user_id: string;
  category_id: string;
  type: TransactionType;
  amount: number;
  description: string;
  transaction_date: Date;
  notes?: string;
  is_recurring: boolean;
  recurring_frequency?: RecurringFrequency;
  created_at: Date;
  updated_at: Date;
}

export interface TransactionWithCategory extends Transaction {
  category_name: string;
  category_color: string;
}

export type CreateTransactionData = Pick<
  Transaction,
  'user_id' | 'category_id' | 'type' | 'amount' | 'description' | 'transaction_date'
> & {
  notes?: string;
  is_recurring?: boolean;
  recurring_frequency?: RecurringFrequency;
};

export type UpdateTransactionData = Partial<
  Omit<Transaction, 'id' | 'user_id' | 'created_at' | 'updated_at'>
>;

export interface TransactionFilter {
  type?: TransactionType;
  category_id?: string;
  start_date?: Date;
  end_date?: Date;
  page?: number;
  limit?: number;
  sort_by?: 'date' | 'amount' | 'category';
  sort_order?: 'asc' | 'desc';
}
