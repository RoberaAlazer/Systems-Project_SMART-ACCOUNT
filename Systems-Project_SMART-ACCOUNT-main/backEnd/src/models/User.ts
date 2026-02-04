export interface User {
  id: string;
  email: string;
  password_hash: string;
  first_name: string;
  last_name: string;
  phone?: string;
  business_name?: string;
  address_line1?: string;
  address_line2?: string;
  city?: string;
  state?: string;
  postal_code?: string;
  country: string;
  is_verified: boolean;
  is_active: boolean;
  password_reset_token?: string;
  password_reset_expires?: Date;
  created_at: Date;
  updated_at: Date;
}

export type CreateUserData = Pick<User, 'email' | 'password_hash' | 'first_name' | 'last_name'>;

export type UpdateUserData = Partial<
  Omit<User, 'id' | 'email' | 'password_hash' | 'created_at' | 'updated_at'>
>;

export type SafeUser = Omit<User, 'password_hash' | 'password_reset_token' | 'password_reset_expires'>;
