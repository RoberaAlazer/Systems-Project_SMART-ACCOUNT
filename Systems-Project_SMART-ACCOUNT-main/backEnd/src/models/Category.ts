export type CategoryType = 'income' | 'expense';

export interface Category {
  id: string;
  user_id: string | null; // null for default categories
  name: string;
  type: CategoryType;
  color: string;
  icon?: string;
  is_default: boolean;
  is_active: boolean;
  created_at: Date;
  updated_at: Date;
}

export type CreateCategoryData = Pick<Category, 'name' | 'type'> & {
  user_id: string;
  color?: string;
  icon?: string;
};

export type UpdateCategoryData = Partial<Pick<Category, 'name' | 'color' | 'icon' | 'is_active'>>;
