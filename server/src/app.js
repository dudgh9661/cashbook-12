import express from 'express';
import config from './config';
import loadApp from './loaders';
import Logger from './loaders/logger';

async function startServer() {
  const { port } = config;
  const app = express();

  await loadApp(app);
  app.listen(port, err => {
    if (err) {
      Logger.error(err);
      process.exit(1);
    }
    Logger.info(`Server Run on ${port}`);
  });
}

startServer();
