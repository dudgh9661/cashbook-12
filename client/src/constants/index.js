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

export const CHART_SAMPLE_DATA = {
  total: 798180,
  category: [
    { id: 1, label: '생활', color: '#4A6CC3', value: 500000 },
    { id: 5, label: '의료/건강', color: '#6ED5EB', value: 125300 },
    { id: 4, label: '쇼핑/뷰티', color: '#4CB8B8', value: 56000 },
    { id: 3, label: '교통', color: '#94D3CC', value: 45340 },
    { id: 2, label: '식비', color: '#4CA1DE', value: 40540 },
    { id: 6, label: '문화/여가', color: '#D092E2', value: 20800 },
    { id: 7, label: '미분류', color: '#817DCE', value: 10200 },
  ],
};

export const CALENDAR_SAMPLE_DATA = {
  total: {
    income: 1822480,
    expenses: 798180,
    earning: 1024300,
  },
  history: {
    2: { income: 0, expenses: -5400, earning: -5400 },
    4: { income: 0, expenses: -132000, earning: -132000 },
    7: { income: 0, expenses: -65900, earning: -65900 },
    9: { income: 1822480, expenses: -9500, earning: 1812980 },
    10: { income: 0, expenses: -519140, earning: -519140 },
    13: { income: 0, expenses: -10000, earning: -10000 },
    15: { income: 0, expenses: -56240, earning: -56240 },
  },
};
