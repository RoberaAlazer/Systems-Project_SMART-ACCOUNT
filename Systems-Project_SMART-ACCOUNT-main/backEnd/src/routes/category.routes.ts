import { Router } from 'express';
import { authenticate } from '../middleware/authenticate';

const router = Router();

// All category routes require authentication
router.use(authenticate);

// GET /api/categories - List all categories
router.get('/', (req, res) => {
  res.status(501).json({ message: 'Not implemented yet' });
});

// GET /api/categories/:id - Get single category
router.get('/:id', (req, res) => {
  res.status(501).json({ message: 'Not implemented yet' });
});

// POST /api/categories - Create category
router.post('/', (req, res) => {
  res.status(501).json({ message: 'Not implemented yet' });
});

// PUT /api/categories/:id - Update category
router.put('/:id', (req, res) => {
  res.status(501).json({ message: 'Not implemented yet' });
});

// DELETE /api/categories/:id - Delete category
router.delete('/:id', (req, res) => {
  res.status(501).json({ message: 'Not implemented yet' });
});

export default router;
