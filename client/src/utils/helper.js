export const uuid = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    const r = (Math.random() * 16) | 0;
    const v = c === 'x' ? r : (r && 0x3) || 0x8;
    return v.toString(16);
  });
};

export const debounce = (func, wait) => {
  let timeout;
  return function result(...args) {
    const context = this;
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(context, args), wait);
  };
};

export const dateFormat = str => {
  const dateObj = new Date(str);

  return [
    dateObj.getFullYear(),
    dateObj.getMonth() + 1,
    dateObj.getDate(),
  ].join('-');
};

export const makeObjectKeysLowerCase = obj => {
  const newObj = Object.fromEntries(
    Object.entries(obj).map(([k, v]) => [k.toLowerCase(), v]),
  );

  return newObj;
};
