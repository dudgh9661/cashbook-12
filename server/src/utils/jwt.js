import jwt from 'jsonwebtoken';
import config from '../config/index';

const sign = payload => {
  const token = jwt.sign(payload, config.jwt.scretKey, {
    expiresIn: '7d',
  });

  return token;
};

const verify = token => {
  const decoded = jwt.verify(token, config.jwt.scretKey);
  decoded.isRemainedOneDay = decoded.exp - Date.now() / 1000 < 1;

  return decoded;
};

export default {
  sign,
  verify,
};
