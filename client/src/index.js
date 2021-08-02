import router from '@lib/Router';
import {
  MainPage,
  LoginPage,
  CalendarPage,
  ChartPage,
  NotFoundPage,
} from '@pages';
import '@styles/base.scss';

const $app = document.getElementById('app');

router.initRoutes($app, {
  '/': MainPage,
  '/login': LoginPage,
  '/calendar': CalendarPage,
  '/chart': ChartPage,
  NotFound: NotFoundPage,
});

router.render(window.location.pathname);
