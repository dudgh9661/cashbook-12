import Component from '@lib/Component';
import { Header } from '@components';
import './Layout.scss';

class Layout extends Component {
  constructor() {
    super();

    this.init();
  }

  render() {
    const $layout = document.createElement('div');
    $layout.className = 'layout';

    const $pointBg = document.createElement('div');
    $pointBg.className = 'layout__point-bg';
    $layout.appendChild($pointBg);

    const $container = document.createElement('div');
    $container.className = 'layout__container';
    $layout.appendChild($container);

    $container.appendChild(new Header().getElement());

    const $main = document.createElement('main');
    $container.appendChild($main);

    return $layout;
  }
}

export default Layout;
