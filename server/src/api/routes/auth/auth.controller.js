import Logger from '../../../loaders/logger';
import { getGihubUserInfo, getGithubAccessToken } from '../../../services/auth';
import config from '../../../config';
import jwt from '../../../utils/jwt';

const handleGithubCallback = async (req, res, next) => {
  try {
    const { code } = req.query;
    const accessToken = await getGithubAccessToken(code);
    const user = await getGihubUserInfo(accessToken);

    const token = jwt.sign({ usernam: user.username, isLogin: true });

    res.cookie('secureCookie', JSON.stringify({ token }), {
      secure: config.isDev,
      httpOnly: true,
    });

    res.redirect('/');
  } catch (err) {
    Logger.error(err);
    next(err);
  }
};

export default handleGithubCallback;
