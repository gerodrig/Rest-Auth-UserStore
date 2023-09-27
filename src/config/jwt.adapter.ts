import jwt from 'jsonwebtoken';
import { envs } from './envs';

export class JwtAdapter {
  //DI?

  static generateToken(payload: any, duration: string = '2h') {
    return new Promise((resolve) => {
      jwt.sign(payload, envs.JWT_SECRET, { expiresIn: duration }, (err, token) => {
        if (err) return resolve(null);

        resolve(token);
      });
    });
  }

  static validateToken(token: string) {
    throw new Error('Method not implemented.');
  }
}