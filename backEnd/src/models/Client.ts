export interface Client {
  id: string;
  user_id: string;
  name: string;
  email?: string;
  phone?: string;
  company?: string;
  address_line1?: string;
  address_line2?: string;
  city?: string;
  state?: string;
  postal_code?: string;
  country: string;
  notes?: string;
  is_active: boolean;
  created_at: Date;
  updated_at: Date;
}

export type CreateClientData = Pick<Client, 'user_id' | 'name'> & {
  email?: string;
  phone?: string;
  company?: string;
  address_line1?: string;
  address_line2?: string;
  city?: string;
  state?: string;
  postal_code?: string;
  country?: string;
  notes?: string;
};

export type UpdateClientData = Partial<Omit<Client, 'id' | 'user_id' | 'created_at' | 'updated_at'>>;
