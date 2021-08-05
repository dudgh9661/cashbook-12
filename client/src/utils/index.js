import { DAYS_OF_WEEK } from '@constants';

export const moneyWithComma = money => {
  return money.toLocaleString('ko-KR');
};

export const getDateFromString = date => {
  const dateObj = new Date(date);
  const days = DAYS_OF_WEEK;

  return [dateObj.getMonth() + 1, dateObj.getDate(), days[dateObj.getDay()]];
};

export const animateNumber = (start, end, $target) => {
  const target = $target;
  let animation;

  let value = start;
  let diff = end - start;

  function counter() {
    if (diff > 0) {
      value += Math.ceil(diff / 5);
      diff = end - value;
    }
    if (value > end) clearInterval(animation);
    else target.innerText = moneyWithComma(value);
  }

  animation = setInterval(counter, 20);
};
