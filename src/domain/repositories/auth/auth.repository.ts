import type { UserEntity } from "@/domain/entities";
import type { RegisterUserDto } from "@/domain/dtos";

export abstract class AuthRepository {
   abstract register(userDTO: RegisterUserDto): Promise<UserEntity>;
}