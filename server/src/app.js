import express from 'express';
import env from './config';
import loadApp from './loaders';

async function startServer() {
  const { PORT } = env;
  const app = express();

  await loadApp(app);
  app.listen(PORT, err => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    console.info(`Server Run on ${PORT}`);
  });
}

startServer();
