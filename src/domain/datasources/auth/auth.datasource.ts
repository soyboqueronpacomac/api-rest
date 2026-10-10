import type { UserEntity } from "@/domain/entities";
import type { RegisterUserDto } from "@/domain/dtos";

export abstract class AuthDataSource {
   abstract register(userDTO: RegisterUserDto): Promise<UserEntity>;
}