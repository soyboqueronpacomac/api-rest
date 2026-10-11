import { model, Schema } from "mongoose";

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, "El nombre es obligatorio"]
  },
  email: {
    type: String,
    required: [true, "El correo es obligatorio"],
    unique: true
  },
  password: {
    type: String,
    required: [true, "La contraseña es obligatoria"]
  },
  img: {
    type: String
  },
  roles: {
    type: [String],
    default: ["USER_ROLE"],
    enum: ["USER_ROLE", "ADMIN_ROLE"]
  }
});
export const UserModel = model("User", userSchema);