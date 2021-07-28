import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';
import config from '../config';
import routes from '../api';

export default app => {
  app.use(express.json());
  app.use(
    express.urlencoded({
      extended: false,
    }),
  );

  app.use(cors());

  app.use(morgan(process.env.NODE_ENV === 'development' ? 'dev' : 'combined'));

  app.use(config.api.prefix, routes);

  app.use(express.static(path.resolve('./dist')));

  app.get('*', (_req, res) => {
    res.sendFile('index.html', { root: path.resolve('./dist') });
  });

  app.use((_req, _res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
  });

  app.use((err, _req, res, _next) => {
    res.status(err.status || 500).json({
      message: err.message,
      error: err.name,
    });
  });
};
