import Logger from '../utils/Logger';

export const catchErrors = fn => {
  return (req, res, next) => {
    return fn(req, res, next).catch(error => {
      const { message } = error;

      Logger.error(`${message}`, error);

      if (message) return res.status(400).send({ error: message });
      res.status(500).send({ error });
    });
  };
};

export const notFound = (req, res) => {
  return res.status(404).send({ error: 'Item was not found' });
};
