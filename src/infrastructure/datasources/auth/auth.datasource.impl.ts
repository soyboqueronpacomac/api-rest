import { BcryptAdapter } from "@/adapter";
import { UserModel } from "@/database";
import { CustomError, UserEntity, type AuthDataSource, type RegisterUserDto } from "@/domain";
import { UserMapper } from "@/infrastructure/mappers";
type hashFunction = (password: string) => string;
type compareFunction = (password: string, hashedPassword: string) => boolean;
export class AuthDatasourceImpl implements AuthDataSource {
  private readonly userMapper: UserMapper;
  constructor(
    private readonly hash: hashFunction = BcryptAdapter.hash,
    private readonly compare: compareFunction = BcryptAdapter.compare
  ) {
    this.userMapper = new UserMapper();
  }
  async register(userDTO: RegisterUserDto): Promise<UserEntity> {
    const { name, email, password } = userDTO;
    try {
      // Verificar si correo existe en la base de datos
      const existingUser = await UserModel.findOne({ email });
      if (existingUser) throw CustomError.badRequest("El correo ya está registrado");
      const user = await UserModel.create({
        name,
        email,
        password: this.hash(password)
      })
      await user.save();
      //  Mapear la repuesta a nuestra entidad

      return UserMapper.userEntityFromObject(user);

    } catch (error) {
      if (error instanceof CustomError) {
        throw error;
      }
      console.error(error);
      throw CustomError.internalServerError()
    }
  }

}