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

const requestPost = async (url, body) => {
  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    if (res.ok) {
      return await res.json();
    }
    throw new Error(res);
  } catch (err) {
    throw new Error(err);
  }
};

const requestPut = async (url, body) => {
  try {
    const res = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
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
    const res = await fetch(url, {
      method: 'DELETE',
    });
    if (res.ok) {
      return await res.json();
    }
    throw new Error(res);
  } catch (err) {
    throw new Error(err);
  }
};

const qureyString = params => {
  return new URLSearchParams(params).toString();
};

export default {
  fetchMonthHistories: (year, month) =>
    requestGet(`${API_END_POINT}/histories?${qureyString({ year, month })}`),
  postHistory: body => requestPost(`${API_END_POINT}/histories`, body),
  updateHistory: (id, body) =>
    requestPut(`${API_END_POINT}/histories/${id}`, body),
  deleteHistory: id => requestDelete(`${API_END_POINT}/histories/${id}`),
  postPayment: body => requestPost(`${API_END_POINT}/payments`, body),
  fetchPayments: () => requestGet(`${API_END_POINT}/payments`),
  deletePayment: id => requestDelete(`${API_END_POINT}/payments/${id}`),
  fetchUser: () => {
    return requestGet(`${API_END_POINT}/auth/user`);
  },
  getCategories: () => requestGet(`${API_END_POINT}/categories`),
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
