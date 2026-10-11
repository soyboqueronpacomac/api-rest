import type { Request, Response, NextFunction } from 'express';
import { CustomError } from '@/domain';
import { JsonWebTokenAdapter } from '@/adapter';
import { UserModel } from '@/database';

export class AuthMiddleware {
  static validateToken = async (req: Request, res: Response, next: NextFunction) => {
    // Implement token validation logic here
    const authorization = req.header('authorization');
    if (!authorization) {
      const error = CustomError.unauthorized('Authorization header missing');
      return res.status(error.statusCode).json({ Error: error });
    }
    if (!authorization.startsWith('Bearer ')) {
      const error = CustomError.unauthorized('Invalid authorization header format');
      return res.status(error.statusCode).json({ Error: error });
    }
    const token = authorization.split(' ').at(1) || ''; 
    try {
      const payload = await JsonWebTokenAdapter.validateToken<{ id: string }>(token);
      if (!payload) {
        const error = CustomError.unauthorized('Invalid token');
        return res.status(error.statusCode).json({ Error: error });
      }
      const user = await UserModel.findById(payload.id).select('-password');
      if (!user) {
        const error = CustomError.unauthorized('User not found');
        return res.status(error.statusCode).json({ Error: error });
      }
      req.body.token = user;
      next();
    } catch (error: unknown) {
      const customError = error instanceof CustomError ? error : CustomError.unauthorized('Invalid token');
      return res.status(customError.statusCode).json({ Error: customError });
    }
    // You can add further token validation logic here if needed
    
  }
}