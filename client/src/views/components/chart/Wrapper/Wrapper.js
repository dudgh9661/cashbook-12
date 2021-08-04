import Component from '@lib/Component';
import $ from '@utils/dom';
import './Wrapper.scss';

class Wrapper extends Component {
  constructor(props) {
    super(props);

    this.init();
  }

  render() {
    const { children = [] } = this.props;

    return $('div', { class: 'chart-wrapper' }, ...children);
  }
}

export default Wrapper;
