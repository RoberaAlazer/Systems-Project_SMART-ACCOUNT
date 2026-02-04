import { Router } from 'express';
// import { AuthController } from '../controllers/AuthController';
// import { validate } from '../middleware/validate';
// import { registerSchema, loginSchema } from '../dto/auth';

const router = Router();
// const authController = new AuthController();

// POST /api/auth/register - Register new user
router.post('/register', (req, res) => {
  res.status(501).json({ message: 'Not implemented yet' });
});

// POST /api/auth/login - User login
router.post('/login', (req, res) => {
  res.status(501).json({ message: 'Not implemented yet' });
});

// POST /api/auth/logout - User logout
router.post('/logout', (req, res) => {
  res.status(501).json({ message: 'Not implemented yet' });
});

// POST /api/auth/refresh - Refresh access token
router.post('/refresh', (req, res) => {
  res.status(501).json({ message: 'Not implemented yet' });
});

// POST /api/auth/forgot-password - Request password reset
router.post('/forgot-password', (req, res) => {
  res.status(501).json({ message: 'Not implemented yet' });
});

// POST /api/auth/reset-password - Reset password with token
router.post('/reset-password', (req, res) => {
  res.status(501).json({ message: 'Not implemented yet' });
});

export default router;
