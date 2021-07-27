export default class Component {
  constructor($target) {
    this.$target = $target;
    this.init();
    this.setEvent();
  }

  init() {}

  template() {
    return '';
  }

  render() {
    this.$target.innerHTML = this.template();
    this.didRender();
  }

  didRender() {}

  setEvent() {}

  addEvent(eventType, selector, callback) {
    const children = [...this.$target.querySelectorAll(selector)];
    const isTarget = target =>
      children.includes(target) || target.closest(selector);

    this.$target.addEventListener(eventType, event => {
      if (!isTarget(event.target)) return false;
      callback(event);
      return true;
    });
  }
}
