import { Request, Response, NextFunction } from 'express';
import { AppError } from '../exceptions/AppError';
import { config } from '../config';

export interface ErrorResponse {
  success: false;
  message: string;
  error?: {
    code: string;
    details?: unknown;
    stack?: string;
  };
}

export const errorHandler = (
  err: Error | AppError,
  req: Request,
  res: Response,
  _next: NextFunction
): void => {
  // Default error values
  let statusCode = 500;
  let message = 'Internal Server Error';
  let errorCode = 'INTERNAL_ERROR';
  let details: unknown = undefined;

  // Handle custom AppError
  if (err instanceof AppError) {
    statusCode = err.statusCode;
    message = err.message;
    errorCode = err.code;
    details = err.details;
  }

  // Handle validation errors from Joi
  if (err.name === 'ValidationError') {
    statusCode = 400;
    message = err.message;
    errorCode = 'VALIDATION_ERROR';
  }

  // Handle JWT errors
  if (err.name === 'JsonWebTokenError') {
    statusCode = 401;
    message = 'Invalid token';
    errorCode = 'INVALID_TOKEN';
  }

  if (err.name === 'TokenExpiredError') {
    statusCode = 401;
    message = 'Token expired';
    errorCode = 'TOKEN_EXPIRED';
  }

  // Log error in development
  if (config.nodeEnv === 'development') {
    console.error('Error:', {
      message: err.message,
      stack: err.stack,
      statusCode,
      path: req.path,
      method: req.method,
    });
  }

  // Build response
  const response: ErrorResponse = {
    success: false,
    message,
    error: {
      code: errorCode,
      details: config.nodeEnv === 'development' ? details : undefined,
      stack: config.nodeEnv === 'development' ? err.stack : undefined,
    },
  };

  res.status(statusCode).json(response);
};
