-- Seed: Default Categories
-- Description: System-wide default categories for income and expenses

-- Default Income Categories (user_id = NULL means system-wide defaults)
INSERT INTO categories (id, user_id, name, type, color, icon, is_default) VALUES
    (gen_random_uuid(), NULL, 'Salary', 'income', '#10B981', 'briefcase', TRUE),
    (gen_random_uuid(), NULL, 'Freelance', 'income', '#3B82F6', 'code', TRUE),
    (gen_random_uuid(), NULL, 'Investments', 'income', '#8B5CF6', 'trending-up', TRUE),
    (gen_random_uuid(), NULL, 'Consulting', 'income', '#06B6D4', 'users', TRUE),
    (gen_random_uuid(), NULL, 'Royalties', 'income', '#F59E0B', 'music', TRUE),
    (gen_random_uuid(), NULL, 'Other Income', 'income', '#6B7280', 'plus-circle', TRUE);

-- Default Expense Categories
INSERT INTO categories (id, user_id, name, type, color, icon, is_default) VALUES
    (gen_random_uuid(), NULL, 'Rent', 'expense', '#EF4444', 'home', TRUE),
    (gen_random_uuid(), NULL, 'Utilities', 'expense', '#F59E0B', 'zap', TRUE),
    (gen_random_uuid(), NULL, 'Food & Dining', 'expense', '#EC4899', 'coffee', TRUE),
    (gen_random_uuid(), NULL, 'Transportation', 'expense', '#14B8A6', 'truck', TRUE),
    (gen_random_uuid(), NULL, 'Software & Tools', 'expense', '#6366F1', 'monitor', TRUE),
    (gen_random_uuid(), NULL, 'Marketing', 'expense', '#F97316', 'megaphone', TRUE),
    (gen_random_uuid(), NULL, 'Office Supplies', 'expense', '#84CC16', 'clipboard', TRUE),
    (gen_random_uuid(), NULL, 'Professional Services', 'expense', '#8B5CF6', 'briefcase', TRUE),
    (gen_random_uuid(), NULL, 'Insurance', 'expense', '#0EA5E9', 'shield', TRUE),
    (gen_random_uuid(), NULL, 'Taxes', 'expense', '#DC2626', 'file-text', TRUE),
    (gen_random_uuid(), NULL, 'Education', 'expense', '#7C3AED', 'book', TRUE),
    (gen_random_uuid(), NULL, 'Other Expense', 'expense', '#6B7280', 'minus-circle', TRUE);
