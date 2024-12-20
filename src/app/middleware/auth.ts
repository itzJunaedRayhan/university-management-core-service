import { NextFunction, Request, Response } from 'express';
import ApiError from '../../errors/ApiError';
import config from '../../config';
import { jwtHelpers } from '../../helpers/jwtHelper';
import { Secret } from 'jsonwebtoken';

const auth =
  (...requiredRoles: string[]) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      // Get the authorization token:
      const token = req.headers.authorization;
      if (!token) {
        throw new ApiError(401, 'You are not authorized');
      }

      //  verify the token:
      let verifiedUser = null;
      verifiedUser = jwtHelpers.verifyToken(token, config.jwt.secret as Secret);
      req.user = verifiedUser; //  role, userId

      //  For guard using the roles:
      if (requiredRoles.length && !requiredRoles.includes(verifiedUser.role)) {
        throw new ApiError(403, 'Forbidden');
      }
      next();
    } catch (error) {
      next(error);
    }
  };

export default auth;
