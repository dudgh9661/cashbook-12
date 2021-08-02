import Component from '@lib/Component';
import './Tooltip.scss';

class Tooltip extends Component {
  constructor(props) {
    super(props);

    this.init();
  }

  render() {
    const { content, position = 'bottom' } = this.props;

    const $tooptip = document.createElement('div');
    $tooptip.className = `tooltip tooltip--${position}`;

    $tooptip.appendChild(content);

    return $tooptip;
  }

  getDOMRect() {
    return this.$element.getBoundingClientRect();
  }

  setPosition(size) {
    const { top, bottom, left, right } = size;

    if (top) this.$element.style.top = top;
    if (bottom) this.$element.style.bottom = bottom;
    if (left) this.$element.style.left = left;
    if (right) this.$element.style.right = right;
  }
}

export default Tooltip;
