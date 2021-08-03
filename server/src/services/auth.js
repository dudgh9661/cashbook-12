import axios from 'axios';
import config from '../config';
import User from '../models/user';

export const getGithubAccessToken = async code => {
  const res = await axios.post(
    'https://github.com/login/oauth/access_token',
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

export const getGihubUserInfo = async accessToken => {
  const res = await axios.get('https://api.github.com/user', {
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
