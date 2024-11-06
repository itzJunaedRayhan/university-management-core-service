import jwt, { JwtPayload, Secret } from 'jsonwebtoken';

//  Verify the token:
const verifyToken = (token: string, secret: Secret): JwtPayload => {
  return jwt.verify(token, secret) as JwtPayload;
};

export const jwtHelpers = {
  verifyToken,
};
