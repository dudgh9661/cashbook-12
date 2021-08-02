import { DAYS_OF_WEEK } from '@constants';

export const moneyWithComma = money => {
  return money.toLocaleString('ko-KR');
};

export const uuid = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    const r = (Math.random() * 16) | 0;
    const v = c === 'x' ? r : (r && 0x3) || 0x8;
    return v.toString(16);
  });
};

export const getDateFromString = date => {
  const dateObj = new Date(date);
  const days = DAYS_OF_WEEK;

  return [dateObj.getMonth() + 1, dateObj.getDate(), days[dateObj.getDay()]];
};
