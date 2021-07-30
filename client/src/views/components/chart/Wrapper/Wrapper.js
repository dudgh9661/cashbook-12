import Component from '@lib/Component';
import './Wrapper.scss';

class Wrapper extends Component {
  constructor(props) {
    super(props);

    this.init();
  }

  render() {
    const { content } = this.props;

    const $chartWrapper = document.createElement('div');
    $chartWrapper.className = 'chart-wrapper';

    $chartWrapper.appendChild(content);

    return $chartWrapper;
  }
}

export default Wrapper;
