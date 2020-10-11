import Boom from '@hapi/boom';
import Logger from '../utils/Logger';
import { ResponseHandler } from '../utils';

export const validate = schema => {
  return async (req, res, next) => {
    try {
      const validation = await schema.validate(req.body);
      if (validation.error) {
        const errors = validation.error.details.map(e => e.message);
        Logger.error('Error in the request', errors);
        throw Boom.badRequest(errors);
      }
      next();
    } catch (e) {
      ResponseHandler.error(e, res);
    }
  };
};
