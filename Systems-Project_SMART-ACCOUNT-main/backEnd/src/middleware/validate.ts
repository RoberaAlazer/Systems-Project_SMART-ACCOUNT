import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';
import { ValidationError } from '../exceptions/ValidationError';

type RequestLocation = 'body' | 'query' | 'params';

export const validate = (schema: Joi.ObjectSchema, location: RequestLocation = 'body') => {
  return (req: Request, res: Response, next: NextFunction): void => {
    const data = req[location];

    const { error, value } = schema.validate(data, {
      abortEarly: false,
      stripUnknown: true,
    });

    if (error) {
      const details = error.details.map((detail) => ({
        field: detail.path.join('.'),
        message: detail.message,
      }));

      throw new ValidationError('Validation failed', details);
    }

    // Replace request data with validated/sanitized data
    req[location] = value;

    next();
  };
};
