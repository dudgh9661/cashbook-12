import { fileText, calendar, chart } from '@assets/icons';

export const DAYS_OF_WEEK = ['일', '월', '화', '수', '목', '금', '토'];

export const MONTHS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

export const GITHUB_REDIRECT_URL =
  'https://github.com/login/oauth/authorize?client_id=04986225983a20a0d8c4';

export const NAV_LINK = {
  MAIN: { value: 'main', link: '/', icon: fileText },
  CALENDAR: { value: 'calendar', link: '/calendar', icon: calendar },
  CHART: { value: 'chart', link: '/chart', icon: chart },
  LOGIN: { value: 'login', link: '/login' },
  USER: { value: 'user', link: '/user' },
};

export const TAB_LINKS = [NAV_LINK.MAIN, NAV_LINK.CALENDAR, NAV_LINK.CHART];
