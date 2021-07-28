import Observable from '@lib/Observable';

class Name extends Observable {
  changeName() {
    this.state.name = 'hello';
  }
}

const initialState = {
  name: 'default',
};

export default new Name(initialState);
