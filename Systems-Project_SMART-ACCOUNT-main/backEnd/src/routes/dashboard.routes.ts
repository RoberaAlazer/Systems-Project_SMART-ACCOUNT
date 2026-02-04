import { Router } from 'express';
import { authenticate } from '../middleware/authenticate';

const router = Router();

// All dashboard routes require authentication
router.use(authenticate);

// GET /api/dashboard/summary - Get dashboard summary
router.get('/summary', (req, res) => {
  res.status(501).json({ message: 'Not implemented yet' });
});

// GET /api/dashboard/profit-loss - Get profit/loss report
router.get('/profit-loss', (req, res) => {
  res.status(501).json({ message: 'Not implemented yet' });
});

// GET /api/dashboard/monthly - Get monthly breakdown
router.get('/monthly', (req, res) => {
  res.status(501).json({ message: 'Not implemented yet' });
});

// GET /api/dashboard/category - Get category breakdown
router.get('/category', (req, res) => {
  res.status(501).json({ message: 'Not implemented yet' });
});

// GET /api/dashboard/income-expenses - Get income vs expenses summary
router.get('/income-expenses', (req, res) => {
  res.status(501).json({ message: 'Not implemented yet' });
});

export default router;
