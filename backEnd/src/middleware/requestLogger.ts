import { Request, Response, NextFunction } from 'express';
import { config } from '../config';

export const requestLogger = (req: Request, res: Response, next: NextFunction): void => {
  const start = Date.now();

  // Log response after it's sent
  res.on('finish', () => {
    const duration = Date.now() - start;
    const logLevel = res.statusCode >= 400 ? 'warn' : 'info';

    if (config.nodeEnv === 'development') {
      const logMessage = `${req.method} ${req.originalUrl} ${res.statusCode} - ${duration}ms`;

      if (logLevel === 'warn') {
        console.warn(`⚠️  ${logMessage}`);
      } else {
        console.log(`📡 ${logMessage}`);
      }
    }
  });

  next();
};
