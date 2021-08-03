import jwt from '../utils/jwt';

const EXECPTTION = ['/api/auth/github'];

const authMiddleWare = (req, res, next) => {
  if (
    EXECPTTION.includes(req.originalUrl) ||
    !req.originalUrl.startsWith('/api')
  ) {
    next();
  } else {
    try {
      const { token } = req.cookies;
      const user = jwt.verify(token);
      if (user) {
        req.user = user;
        next();
      } else {
        throw new Error('Invailid User!');
      }
    } catch (e) {
      res.redirect('/');
    }
  }
};

export default authMiddleWare;
