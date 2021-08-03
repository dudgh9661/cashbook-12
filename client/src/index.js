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

fetch('http://localhost:5000/api/users')
  .then(res => {
    console.log(res);
    return res;
  })
  .then(user => {
    console.log('d', user);
    if (user) {
      alert(`hi, ${user.name}`);
      router.render(window.location.pathname);
    } else {
      router.render('/login');
    }
    return user;
  });
