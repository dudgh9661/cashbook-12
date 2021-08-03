import Logger from '../../../loaders/logger';
import { getGihubUserInfo, getGithubAccessToken } from '../../../services/auth';
import config from '../../../config';
import jwt from '../../../utils/jwt';

export const handleGithubCallback = async (req, res, next) => {
  try {
    const { code } = req.query;
    const accessToken = await getGithubAccessToken(code);
    const user = await getGihubUserInfo(accessToken);

    const token = jwt.sign({ ...user, isLogin: true });

    res.cookie('token', token, {
      secure: !config.isDev,
      httpOnly: true,
    });

    res.redirect('/');
  } catch (err) {
    Logger.error(err);
    next(err);
  }
};

export const handleGetAuth = async (req, res, next) => {
  try {
    res.status(200).json(req.user);
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
