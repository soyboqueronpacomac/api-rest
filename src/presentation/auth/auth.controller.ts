import { CustomError } from '@/domain';
import { RegisterUserDto } from '@/domain/dtos/auth/register-user.dto';
import type { AuthRepository } from '@/domain';
import { type Request, type Response } from 'express';
import { JsonWebTokenAdapter } from '@/adapter';
import { UserModel } from '@/database';



/**
 * Handles Auth HTTP requests.
 */
export class AuthController {
  constructor(
    private readonly repository: AuthRepository
  ) {

  }

  private handleError = (error: unknown, res: Response) => {
    const customError = error instanceof CustomError ? error : CustomError.internalServerError();
    return res.status(customError.statusCode).json({ Error: customError });
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
      return res.status(201).json({
        user,
        token: await JsonWebTokenAdapter.generateToken({ id: user.id, email: user.email })
      });
    } catch (error: unknown) {
      return this.handleError(error, res);
    }
  }
  public loginUser = (req: Request, res: Response) => {
    // Handle user login logic here
    res.status(200).json({ message: "User logged in successfully" });
  }
  public getProfile = async (req: Request, res: Response) => {
    // Handle fetching user profile logic here
    try {
      const email = req.params.email;
      const user = await UserModel.findOne({ email }).select('-password');
      if (!user) {
        const notFound = CustomError.notFound('User not found');
        return res.status(notFound.statusCode).json({ Error: notFound });
      }
      return res.status(200).json({
        //user,
        user: req.body.token
      });
    } catch (error: unknown) {
      return this.handleError(error, res);
    }
  }

}
