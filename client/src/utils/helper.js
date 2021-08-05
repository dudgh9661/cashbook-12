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

  const years = dateObj.getFullYear().toString();
  const month = (dateObj.getMonth() + 1).toString();
  const date = dateObj.getDate().toString();

  return [
    years,
    month.length === 1 ? 0 + month : month,
    date.length === 1 ? 0 + date : date,
  ].join('-');
};

export const makeObjectKeysLowerCase = obj => {
  const newObj = Object.fromEntries(
    Object.entries(obj).map(([k, v]) => [k.toLowerCase(), v]),
  );

  return newObj;
};
