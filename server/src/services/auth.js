import axios from 'axios';
import config from '../config';

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

  return res.data;
};
