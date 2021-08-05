import jwt from '../../utils/jwt';

const EXECPTTION = ['/api/auth/github', '/api/auth/name'];

const authMiddleWare = (req, res, next) => {
  if (EXECPTTION.includes(req.path) || !req.path.startsWith('/api')) {
    next();
  } else {
    try {
      const { token } = req.cookies;
      if (!token) {
        throw new Error('Invailid token!');
      }

      const user = jwt.verify(token);
      if (!user) {
        throw new Error('Invailid User!');
      }

      req.user = user;
      next();
    } catch (e) {
      res.status(403).send(e);
    }
  }
};

export default authMiddleWare;
