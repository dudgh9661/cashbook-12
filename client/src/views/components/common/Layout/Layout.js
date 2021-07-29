import Component from '@lib/Component';
import { Header } from '@components';

class Layout extends Component {
  constructor() {
    super();

    this.init();
  }

  render() {
    const $layout = document.createElement('div');
    $layout.className = 'layout';

    $layout.appendChild(new Header().getElement());

    return $layout;
  }
}

export default Layout;
