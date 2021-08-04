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
  fetchMonthHistories: (year, month) => {
    return requestGet(`${API_END_POINT}/histories?year=${year}&month=${month}`);
  },
  fetchHistory: (year, month) => {
    return requestGet(
      `${API_END_POINT}/histories?${qureyString({ year, month })}`,
    );
  },
  postHistory: body => {
    return requestPost(`${API_END_POINT}/histories`, body);
  },
  deleteHistory: id => {
    return requestDelete(`${API_END_POINT}/histories/${id}`);
  },
};
