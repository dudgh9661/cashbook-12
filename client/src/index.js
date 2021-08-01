import router from '@lib/Router';
import { MainPage, LoginPage, CalendarPage, NotFoundPage } from '@pages';
import '@styles/base.scss';

const $app = document.getElementById('app');

router.initRoutes($app, {
  '/': MainPage,
  '/login': LoginPage,
  '/calendar': CalendarPage,
  NotFound: NotFoundPage,
});

router.render(window.location.pathname);
