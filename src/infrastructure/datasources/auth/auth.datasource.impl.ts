import { CustomError, UserEntity, type AuthDataSource, type RegisterUserDto } from "@/domain";

export class AuthDatasourceImpl implements AuthDataSource {
  async register(userDTO: RegisterUserDto): Promise<UserEntity> {
    const { name, email, password } = userDTO;
    try {
      // TODO: Verificar si correo existe en la base de datos
      // TODO: Hash de la contraseña
      // TODO: Mapear la repuesta a nuestra entidad
      return new UserEntity(
        '1',
        name,
        email,
        password,
        ['ADMI_ROLE']
      );
       
      
    } catch (error) {
      if ( error instanceof CustomError) {
        throw error;
      }
      throw CustomError.internalServerError()
    }
  }

}