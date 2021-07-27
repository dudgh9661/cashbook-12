export default class Observable {
  constructor(state) {
    this.state = new Proxy(state, { set: this.stateSetHandler.bind(this) });
    this.handlers = {};
  }

  stateSetHandler(state, property, value, receiver) {
    const result = Reflect.set(state, property, value, receiver);
    if (result) {
      this.handlers[property].forEach(handler =>
        handler({ state, property, value, receiver }),
      );
    }
    return result;
  }

  observe(property, handler) {
    if (!this.handlers[property]) {
      this.handlers[property] = [];
    }
    this.handlers[property].push(handler);
  }
}
