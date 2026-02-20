import { Router } from 'express';
import { authenticate } from '../middleware/authenticate';

const router = Router();

// All invoice routes require authentication
router.use(authenticate);

// GET /api/invoices - List invoices with filtering
router.get('/', (req, res) => {
  res.status(501).json({ message: 'Not implemented yet' });
});

// GET /api/invoices/unpaid - Get unpaid invoices
router.get('/unpaid', (req, res) => {
  res.status(501).json({ message: 'Not implemented yet' });
});

// GET /api/invoices/paid - Get paid invoices
router.get('/paid', (req, res) => {
  res.status(501).json({ message: 'Not implemented yet' });
});

// GET /api/invoices/sent - Get sent invoices
router.get('/sent', (req, res) => {
  res.status(501).json({ message: 'Not implemented yet' });
});

// GET /api/invoices/unsent - Get unsent invoices
router.get('/unsent', (req, res) => {
  res.status(501).json({ message: 'Not implemented yet' });
});

// GET /api/invoices/:id - Get single invoice
router.get('/:id', (req, res) => {
  res.status(501).json({ message: 'Not implemented yet' });
});

// POST /api/invoices - Create invoice
router.post('/', (req, res) => {
  res.status(501).json({ message: 'Not implemented yet' });
});

// PUT /api/invoices/:id - Update invoice
router.put('/:id', (req, res) => {
  res.status(501).json({ message: 'Not implemented yet' });
});

// PUT /api/invoices/:id/status - Update invoice status
router.put('/:id/status', (req, res) => {
  res.status(501).json({ message: 'Not implemented yet' });
});

// POST /api/invoices/:id/send - Send invoice to client
router.post('/:id/send', (req, res) => {
  res.status(501).json({ message: 'Not implemented yet' });
});

// POST /api/invoices/:id/paid - Mark invoice as paid
router.post('/:id/paid', (req, res) => {
  res.status(501).json({ message: 'Not implemented yet' });
});

// POST /api/invoices/:id/reminder - Send payment reminder
router.post('/:id/reminder', (req, res) => {
  res.status(501).json({ message: 'Not implemented yet' });
});

// DELETE /api/invoices/:id - Delete invoice
router.delete('/:id', (req, res) => {
  res.status(501).json({ message: 'Not implemented yet' });
});

export default router;
