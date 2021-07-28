import Observable from '@lib/Observable';

class Count extends Observable {
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

export default new Count(initialState);
