import env from '@config/env';

const API_END_POINT = `${env.API_URI}/api`;

const requestGet = async url => {
  try {
    const res = await fetch(url);
    if (res.ok) {
      return await res.json();
    }
    throw new Error(res);
  } catch (err) {
    throw new Error(err);
  }
};

const requestDelete = async url => {
  try {
    const res = await fetch(url, { method: 'DELETE' });
    if (!res.ok) throw new Error(res);
  } catch (err) {
    throw new Error(err);
  }
};

export default {
  fetchUser: () => {
    return requestGet(`${API_END_POINT}/auth/user`);
  },
  fetchLogout: () => {
    return requestDelete(`${API_END_POINT}/auth`);
  },
  fetchMonthHistories: (year, month) => {
    return requestGet(`${API_END_POINT}/histories?year=${year}&month=${month}`);
  },
  fetchMonthExpensesReport: (year, month) => {
    return requestGet(
      `${API_END_POINT}/histories/category/all?year=${year}&month=${month}`,
    );
  },
  fetchCategoryExpensesReport: (categoryId, year) => {
    return requestGet(
      `${API_END_POINT}/histories/category/${categoryId}?year=${year}`,
    );
  },
};
