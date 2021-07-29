import Component from '@lib/Component';
import { Layout } from '@components';
import './MainPage.scss';

class MainPage extends Component {
  constructor() {
    super();

    this.init();
  }

  render() {
    const $div = document.createElement('div');
    $div.className = 'main-page';

    $div.appendChild(new Layout().getElement());

    return $div;
  }
}

export default MainPage;
