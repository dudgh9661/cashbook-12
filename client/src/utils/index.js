import { DAYS_OF_WEEK } from '@constants';

export const moneyWithComma = money => {
  return money.toLocaleString('ko-KR');
};

export const getDateFromString = date => {
  const dateObj = new Date(date);
  const days = DAYS_OF_WEEK;

  return [dateObj.getMonth() + 1, dateObj.getDate(), days[dateObj.getDay()]];
};
