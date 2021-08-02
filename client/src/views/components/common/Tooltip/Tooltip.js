import Component from '@lib/Component';
import './Tooltip.scss';

class Tooltip extends Component {
  constructor(props) {
    super(props);

    this.init();
  }

  render() {
    const { content } = this.props;

    const $tooptip = document.createElement('div');
    $tooptip.className = 'tooltip';

    $tooptip.appendChild(content);

    return $tooptip;
  }
}

export default Tooltip;
