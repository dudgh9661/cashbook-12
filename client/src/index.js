import router from './lib/Router';
import { LoginPage, MainPage, NotFoundPage } from './views/pages';

const $app = document.getElementById('app');

router.initRoutes($app, {
  '/': MainPage,
  '/login': LoginPage,
  '/not-found': NotFoundPage,
});

router.render(window.location.pathname);
