import Component from '@lib/Component';
import $ from '@utils/dom';
import './Loader.scss';

class Loader extends Component {
  constructor(props) {
    super(props);

    this.init();
  }

  render() {
    return $(
      'div',
      { class: 'loader' },
      $(
        'div',
        {
          class: 'loader__spinner',
          style: `${this.setSize()} ${this.setColor()}`,
        },
        '',
      ),
    );
  }

  setSize() {
    const { size } = this.props;
    if (size) return `width: ${size}px; height:${size}px;`;
    return '';
  }

  setColor() {
    const { color } = this.props;
    if (color === 'grey')
      return 'border: 3px solid var(--color-grey2); border-top-color: var(--color-grey1);';
    return '';
  }
}

export default Loader;
