import router from '@lib/Router';
import { NAV_LINK } from '@constants';

const { MAIN, CALENDAR, CHART, LOGIN, USER } = NAV_LINK;

export default {
  goMainPage: () => router.push(MAIN.link),
  goCalendarPage: () => router.push(CALENDAR.link),
  goChartPage: () => router.push(CHART.link),
  goLoginPage: () => router.push(LOGIN.link),
  goUserPage: () => router.push(USER.link),
};
