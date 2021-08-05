import Component from '@lib/Component';
import { Header } from '@components';
import $ from '@utils/dom';
import './Layout.scss';

class Layout extends Component {
  constructor(props) {
    super(props);

    this.init();
  }

  render() {
    const { className, children } = this.props;

    return $(
      'div',
      { class: `layout ${className}` },
      $('div', { class: 'layout__point-bg' }),
      $(
        'div',
        { class: 'layout__container' },
        new Header(),
        $('main', {}, ...children),
      ),
    );
  }
}

export default Layout;
