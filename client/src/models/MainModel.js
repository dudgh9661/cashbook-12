import Observable from '../core/Observable';

class MainModel extends Observable {
  incrementCount() {
    this.state.count += 1;
  }

  async asyncIncrementCount() {
    const asyncExmaple = () =>
      new Promise(resolve => {
        setTimeout(() => {
          resolve(1);
        }, 2000);
      });
    const add = await asyncExmaple();
    this.state.count += add;
  }
}

const initialState = {
  count: 0,
};

export default new MainModel(initialState);
