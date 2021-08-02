import { Router } from 'express';
import axios from 'axios';
import config from '../../../config';
const authRouter = Router();

authRouter.get('/github', async (req, res) => {
  const GITHUB_AUTH_URL = 'https://github.com/login/oauth/access_token';
  const { code } = req.query;

  const ret = await axios.post(GITHUB_AUTH_URL, {
    code,
    client_id: config.github.clientId,
    client_secret: config.github.clientSecret,
  });

  console.log(ret.data);
});

export default authRouter;
