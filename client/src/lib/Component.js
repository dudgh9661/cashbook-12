export default class Component {
  constructor(props) {
    this.props = props;
  }

  init() {
    this.$element = this.render();
    this.setObserver();
    this.setEvent();
    this.didMount();
  }

  getElement() {
    return this.$element;
  }

  setObserver() {}

  setEvent() {}

  render() {}

  didMount() {}

  unmount() {
    this.$element.remove();
  }

  reRender() {
    const $newElement = this.render();
    this.$element.replaceWith($newElement);
    this.$element = $newElement;
    this.setEvent();
  }

  addEvent(eventType, selector, callback) {
    const children = [...this.$element.querySelectorAll(selector)];
    const isTarget = target =>
      children.includes(target) || target.closest(selector);

    this.$element.addEventListener(eventType, event => {
      if (!isTarget(event.target)) return false;
      callback(event);
      return true;
    });
  }
}
