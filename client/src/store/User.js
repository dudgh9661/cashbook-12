import Observable from '@lib/Observable';
import api from '@utils/api';
import route from '@utils/route';

class User extends Observable {
  async setUser() {
    try {
      this.setLoading(true);
      const user = await api.fetchUser();
      this.state.user = user;
      this.setLoading(false);
    } catch (err) {
      this.setLoading(false);
      route.goLoginPage();
    }
  }

  async removeUser() {
    await api.fetchLogout();
    this.state.user = null;
    route.goLoginPage();
  }

  async createUser(name) {
    try {
      this.setLoading(true);
      await api.fetchCreateUser(name);
      this.setUser();
    } catch (err) {
      this.setLoading(false);
      route.goLoginPage();
    }
  }

  setLoading(value) {
    this.state.isLoading = value;
  }
}

const initialState = {
  user: null,
  isLoading: false,
};

export default new User(initialState);
