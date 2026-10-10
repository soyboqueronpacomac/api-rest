import { RegisterUserDto } from '@/domain/dtos/auth/register-user.dto';
import {type Request, type Response } from 'express';



/**
 * Handles Auth HTTP requests.
 */
export class AuthController {
  constructor() {
    
  }
  public registerUser = (req: Request, res: Response) => {
    // Handle user registration logic here
    // registre DTO (Data Transfer Object)
    const [error, userCreatedDto] = RegisterUserDto.create(req.body);
    if (error) {
      return res.status(400).json({ error });
    }
    return res.status(201).json({ user: userCreatedDto });
  }
  public loginUser = (req: Request, res: Response) => {
    // Handle user login logic here
    res.status(200).json({ message: "User logged in successfully" });
  }
  
}
