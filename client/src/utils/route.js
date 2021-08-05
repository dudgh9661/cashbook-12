import router from '@lib/Router';

export default {
  goMainPage: () => router.push('/'),
  goCalendarPage: () => router.push('/calendar'),
  goChartPage: () => router.push('/chart'),
};
