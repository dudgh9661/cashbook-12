import Observable from '@lib/Observable';
import Api from '@utils/api';

class User extends Observable {
  async setUser() {
    try {
      const user = await Api.fetchUser();
      this.state.user = user;
    } catch (err) {
      console.log(err);
    }
  }
}

const initialState = {
  user: null,
};

export default new User(initialState);
