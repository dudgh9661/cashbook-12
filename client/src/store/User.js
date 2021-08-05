import Observable from '@lib/Observable';
import router from '@lib/Router';
import api from '@utils/api';

class User extends Observable {
  async setUser() {
    // try {
    //   const user = await api.fetchUser();
    //   this.state.user = user;
    // } catch (err) {
    //   router.push('/login');
    // }
  }
}

const initialState = {
  user: null,
};

export default new User(initialState);
