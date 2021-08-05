import Observable from '@lib/Observable';
import api from '@utils/api';
import route from '@utils/route';

class User extends Observable {
  async setUser() {
    try {
      const user = await api.fetchUser();
      this.state.user = user;
    } catch (err) {
      route.goLoginPage();
    }
  }
}

const initialState = {
  user: null,
};

export default new User(initialState);
