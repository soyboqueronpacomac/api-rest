import jwt, { sign, verify } from 'jsonwebtoken';
import { envsAdapter } from './envs.adapter';
const JWT_SEED = envsAdapter.JWT_SEED;
export class JsonWebTokenAdapter {
  static async generateToken(
    payload: object,
    duration: jwt.SignOptions['expiresIn'] = '1h'
  ): Promise<string | null> {
    return new Promise((resolve) => {
      sign(payload, JWT_SEED, { expiresIn: duration }, (err, token) => {
        if (err) return resolve(null);
        resolve(token!);
      });
    });
  }
  static validateToken<T>(token: string): Promise<T | null>{
    return new Promise((resolve) => {
      verify(token, JWT_SEED,  (err, decoded) => {
        if (err) return resolve(null);
        resolve(decoded as T);
      })
    })
  }
} 