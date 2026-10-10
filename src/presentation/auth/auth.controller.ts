import { CustomError } from '@/domain';
import { RegisterUserDto } from '@/domain/dtos/auth/register-user.dto';
import type { AuthRepository } from '@/domain';
import { type Request, type Response } from 'express';



/**
 * Handles Auth HTTP requests.
 */
export class AuthController {
  constructor(
    private readonly repository: AuthRepository
  ) {

  }
  public registerUser = async (req: Request, res: Response) => {
    // Handle user registration logic here
    // registre DTO (Data Transfer Object)
    const [error, userCreatedDto] = RegisterUserDto.create(req.body);

    if (error) {
      const badRequest = CustomError.badRequest(error);
      return res.status(badRequest.statusCode).json({ Error: badRequest });
    }

   

    try {
      const user = await this.repository.register(userCreatedDto!);
      return res.status(201).json({ user });
    } catch (error: any) {
      const internalError = CustomError.internalServerError(error);
      return res.status(internalError.statusCode).json({ Error: internalError });
    }
  }
  public loginUser = (req: Request, res: Response) => {
    // Handle user login logic here
    res.status(200).json({ message: "User logged in successfully" });
  }

}
