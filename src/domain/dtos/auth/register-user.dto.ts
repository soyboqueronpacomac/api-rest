import { ValidatorsAdapter } from "@/adapter";

export class RegisterUserDto {
   private constructor(
    public name: string,
    public email: string,
    public password: string
   ) {}
   
   static create(body: {[key: string]: any}): [string?, RegisterUserDto?] {
     const { name, email, password } = body;
     if (!name) return ['El nombre es obligatorio'];
     if (!email) return ['El correo electrónico es obligatorio'];
     if (!ValidatorsAdapter.email.test(email)) return ['El correo electrónico no es válido'];
     if (!password) return ['La contraseña es obligatoria'];
     if (password.length < 8) return ['La contraseña debe tener al menos 8 caracteres'];
     if (!ValidatorsAdapter.password.test(password)) return ['La contraseña debe tener al menos una mayúscula, una minúscula, un número y un carácter especial (por ejemplo - _)'];
    return [
       undefined,
       new RegisterUserDto(name.trim(), email.toLowerCase().trim(), password.trim())
    ]
   }
}