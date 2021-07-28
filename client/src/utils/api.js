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

export default {
  fetchRoot: () => {
    return requestGet(API_END_POINT);
  },
};
