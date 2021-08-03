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

fetch('http://localhost:5000/api/auth')
  .then(res => {
    console.log(res.ok);
    if (res.ok) {
      return res.json();
    }
    throw Error('no ok');
  })
  .then(user => {
    if (!user) {
      throw Error('no user');
    }
    alert(`hi, ${user.name}`);
    router.render(window.location.pathname);
  })
  .catch(e => {
    console.log(e);
    router.push('/login');
  });
