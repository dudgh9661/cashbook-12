import Component from '@lib/Component';

class Layout extends Component {
  constructor() {
    super();

    this.init();
  }

  render() {
    const $layout = document.createElement('div');
    $layout.className = 'layout';

    return $layout;
  }
}

export default Layout;
