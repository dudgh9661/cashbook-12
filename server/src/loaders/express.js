import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';
import routes from '../routes/index.js';

export default ({ app }) => {
  app.use(express.json());
  app.use(
    express.urlencoded({
      extended: false,
    }),
  );
  app.use(cors());
  app.use(morgan(process.env.NODE_ENV === 'development' ? 'dev' : 'combined'));

  app.use('/api', routes);
  app.use(express.static(path.resolve('./backend/public')));

  app.get('*', (req, res) => {
    res.sendFile('index.html', { root: path.resolve('./backend/public') });
  });
};
