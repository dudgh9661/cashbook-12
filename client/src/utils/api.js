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

const requestPost = async (url, data) => {
  try {
    const res = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (res.ok) {
      return res;
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
    const res = await fetch(url, { method: 'DELETE' });
    if (!res.ok) throw new Error(res);
  } catch (err) {
    throw new Error(err);
  }
};

const queryString = params => {
  return new URLSearchParams(params).toString();
};

export default {
  fetchUser: () => {
    return requestGet(`${API_END_POINT}/auth/user`);
  },
  fetchCreateUser: name => {
    return requestPost(`${API_END_POINT}/auth/name`, { name });
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
  updateHistory: (id, body) => {
    return requestPut(`${API_END_POINT}/histories/${id}`, body);
  },
  fetchHistory: (year, month) => {
    return requestGet(
      `${API_END_POINT}/histories?${queryString({ year, month })}`,
    );
  },
  postHistory: body => {
    return requestPost(`${API_END_POINT}/histories`, body);
  },
  deleteHistory: id => {
    return requestDelete(`${API_END_POINT}/histories/${id}`);
  },
  postPayment: body => requestPost(`${API_END_POINT}/payments`, body),
  fetchPayments: () => requestGet(`${API_END_POINT}/payments`),
  deletePayment: id => requestDelete(`${API_END_POINT}/payments/${id}`),
  getCategories: () => requestGet(`${API_END_POINT}/categories`),
};
