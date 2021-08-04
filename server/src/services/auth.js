import axios from 'axios';
import config from '../config';
import User from '../models/user';

const GITHUB_REQUEST_ACCESS_TOKEN_URL =
  'https://github.com/login/oauth/access_token';
const GITHUB_REQUEST_USER_INFO_URL = 'https://api.github.com/user';

export const getGithubAccessToken = async code => {
  const res = await axios.post(
    GITHUB_REQUEST_ACCESS_TOKEN_URL,
    {
      code,
      client_id: config.github.clientId,
      client_secret: config.github.clientSecret,
    },
    {
      headers: {
        Accept: 'application/json',
      },
    },
  );

  return res.data.access_token;
};

export const getGithubUserInfo = async accessToken => {
  const res = await axios.get(GITHUB_REQUEST_USER_INFO_URL, {
    headers: {
      Authorization: `token ${accessToken}`,
    },
  });

  let user = await User.findOne({ where: { github_uid: res.data.id } });
  if (!user) {
    user = await User.create({
      name: res.data.login,
      github_uid: res.data.id,
      avatar_url: res.data.avatar_url,
    });
  }

  return user.toJSON();
};
