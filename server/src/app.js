import express from 'express';
import config from './config';
import loadApp from './loaders';

async function startServer() {
  const { port } = config;
  const app = express();

  await loadApp(app);
  app.listen(port, err => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    console.info(`Server Run on ${port}`);
  });
}

startServer();
