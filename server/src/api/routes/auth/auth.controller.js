import Logger from '../../../loaders/logger';
import {
  getGithubUserInfo,
  getGithubAccessToken,
  createUser,
} from '../../../services/auth';
import jwt from '../../../utils/jwt';

export const handleGetAuth = async (req, res, next) => {
  try {
    res.status(200).json(req.user);
  } catch (err) {
    Logger.error(err);
    next(err);
  }
};

export const handleGithubCallback = async (req, res, next) => {
  try {
    const { code } = req.query;
    const accessToken = await getGithubAccessToken(code);
    const user = await getGithubUserInfo(accessToken);

    const token = jwt.sign({ ...user, isLogin: true });

    res.cookie('token', token, {
      httpOnly: true,
    });

    res.redirect('/user');
  } catch (err) {
    res.redirect('/login');
    Logger.error(err);
    next(err);
  }
};

export const handleCreateUser = async (req, res, next) => {
  try {
    const { name } = req.body;
    if (name) {
      const user = await createUser(name);

      const token = jwt.sign({ ...user, isLogin: true });

      res.cookie('token', token, {
        httpOnly: true,
      });

      res.redirect('/user');
    } else {
      res.status(400).json();
    }
  } catch (err) {
    Logger.error(err);
    next(err);
  }
};

export const handleLogout = async (req, res) => {
  res.clearCookie('token');
  res.clearCookie('secureToken');

  res.sendStatus(205);
};
