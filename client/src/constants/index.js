import { fileText, calendar, chart } from '@assets/icons';

export const DAYS_OF_WEEK = ['일', '월', '화', '수', '목', '금', '토'];

export const MONTHS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

export const GITHUB_REDIRECT_URL =
  'https://github.com/login/oauth/authorize?client_id=04986225983a20a0d8c4';

export const NAV_LINK_MAIN = { value: 'main', link: '/', icon: fileText };
export const NAV_LINK_CALENDAR = {
  value: 'calendar',
  link: '/calendar',
  icon: calendar,
};
export const NAV_LINK_CHART = { value: 'chart', link: '/chart', icon: chart };

export const TAB_LINKS = [NAV_LINK_MAIN, NAV_LINK_CALENDAR, NAV_LINK_CHART];
