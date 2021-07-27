import express from 'express';
import env from './config/index.js';
import loadApp from './loaders/index.js';

async function startServer() {
  const app = express();
  const { PORT } = env;
  await loadApp({ expressApp: app });
  app.listen(PORT, () => {
    console.log(`Server Run on ${PORT}`);
  });
}

startServer();
