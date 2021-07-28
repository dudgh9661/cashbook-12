import { uuid } from '@utils/helper';

export default class Component {
  constructor($parent, props) {
    this.$parent = $parent;
    this.props = props;
    this.key = uuid();
    this.init();
  }

  init() {
    this.setObserver();
    this.appendTemplateToParent();
    this.initTarget();
    this.setEvent();
  }

  appendTemplateToParent() {
    const $fragment = this.getFragmentFromTemplate();
    this.$parent.append($fragment);
  }

  initTarget() {
    this.$target = document.querySelector(`[data-key="${this.key}"]`);
  }

  render() {
    const targetInnerHTML =
      this.getFragmentFromTemplate().firstElementChild.innerHTML;

    this.$target.innerHTML = targetInnerHTML;
    this.didRender();
  }

  getFragmentFromTemplate() {
    const $template = document.createElement('template');
    $template.innerHTML = this.template()
      .trim()
      .replace(' ', ` data-key="${this.key}" `);

    return $template.content.cloneNode(true);
  }

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

  setObserver() {}

  template() {}

  setEvent() {}

  didRender() {}
}
