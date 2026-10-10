import type { AuthRepository, RegisterUserDto, UserEntity, AuthDataSource } from "@/domain";

export class AuthRepositoryImpl implements AuthRepository {
  constructor(
    private readonly datasource: AuthDataSource
  ) {}
  async register(userDTO: RegisterUserDto): Promise<UserEntity> {
    return this.datasource.register(userDTO) ;
  }
}