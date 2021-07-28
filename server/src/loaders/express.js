import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
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

  app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
  });

  app.use((err, req, res) => {
    res.status(err.status || 500).json({
      message: err.message,
      error: err,
    });
  });
};
