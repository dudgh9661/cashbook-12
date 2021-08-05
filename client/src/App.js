import router from '@lib/Router';
import { User } from '@store';
import { NAV_LINK } from '@constants';
import {
  MainPage,
  LoginPage,
  UserPage,
  CalendarPage,
  ChartPage,
  NotFoundPage,
} from '@pages';
import '@styles/base.scss';

class App {
  constructor($app) {
    this.$app = $app;
    this.init();
  }

  init() {
    this.setRouter();
    this.setObserver();
    this.render();
    this.didMount();
  }

  setRouter() {
    const { MAIN, LOGIN, CALENDAR, CHART, USER } = NAV_LINK;

    router.initRoutes(this.$app, {
      [MAIN.link]: MainPage,
      [LOGIN.link]: LoginPage,
      [CALENDAR.link]: CalendarPage,
      [CHART.link]: ChartPage,
      [USER.link]: UserPage,
      NotFound: NotFoundPage,
    });
  }

  setObserver() {
    User.observe('user', this.render.bind(this));
  }

  render() {
    const { LOGIN, USER } = NAV_LINK;
    const { user } = User.state;

    if (user) {
      if (window.location.pathname === LOGIN.link)
        window.location.href = USER.link;
      else router.render(window.location.pathname);
    } else {
      router.render(LOGIN.link);
    }
  }

  didMount() {
    User.setUser();
  }
}

export default App;
