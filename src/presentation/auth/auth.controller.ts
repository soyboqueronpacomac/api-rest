import {type Request, type Response } from 'express';



/**
 * Handles Auth HTTP requests.
 */
export class AuthController {
  constructor() {
    
  }
  public registerUser = (req: Request, res: Response) => {
    // Handle user registration logic here
    res.status(201).json({ message: "User registered successfully" });
  }
  public loginUser = (req: Request, res: Response) => {
    // Handle user login logic here
    res.status(200).json({ message: "User logged in successfully" });
  }
  
}
