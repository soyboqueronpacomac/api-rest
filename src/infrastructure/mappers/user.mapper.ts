import { CustomError, UserEntity } from "@/domain";

export class UserMapper {
  static userEntityFromObject(object: { [key: string]: any }) {
    const { id, _id, name, email, password, roles } = object;
    if (!id || !_id) throw CustomError.badRequest('No has proporcinado el ID');
    if (!name) throw CustomError.badRequest('No has proporcinado el nombre');
    if (!email) throw CustomError.badRequest('No has proporcinado el email');
    if (!password) throw CustomError.badRequest('No has proporcinado el password');
    if (!roles) throw CustomError.badRequest('No has proporcinado los roles');
    return new UserEntity(
      id || _id,
      name,
      email,
      password,
      roles
    );
  }
}