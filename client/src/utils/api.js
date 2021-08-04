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

const qureyString = params => {
  return new URLSearchParams(params).toString();
};

export default {
  fetchRoot: () => {
    return requestGet(API_END_POINT);
  },
  fetchHistory: (year, month) => {
    return requestGet(
      `${API_END_POINT}/histories?${qureyString({ year, month })}`,
    );
  },
  postHistory: body => {
    return requestPost(`${API_END_POINT}/histories`, body);
  },
};
