import router from '@lib/Router';
import { LoginPage, MainPage, NotFoundPage } from '@pages';

const $app = document.getElementById('app');

router.initRoutes($app, {
  '/': MainPage,
  '/login': LoginPage,
  NotFound: NotFoundPage,
});

router.render(window.location.pathname);