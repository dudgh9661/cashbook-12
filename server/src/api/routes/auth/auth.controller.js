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

    res.sendStatus(403);
  } catch (err) {
    Logger.error(err);
    next(err);
  }
};

export const handleLogout = async (req, res) => {
  res.clearCookie('token');
  res.redirect('/');
};
