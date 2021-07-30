import Component from '@lib/Component';
import { Layout, DonutChart, LinearChart } from '@components';
import './MainPage.scss';

class MainPage extends Component {
  constructor() {
    super();

    this.init();
  }

  render() {
    const $mainPage = document.createElement('div');
    $mainPage.className = 'main-page';

    const $mainPageFrag = document.createDocumentFragment();
    $mainPageFrag.appendChild(new DonutChart().getElement());
    $mainPageFrag.appendChild(new LinearChart().getElement());

    $mainPage.appendChild(
      new Layout({
        content: $mainPageFrag,
      }).getElement(),
    );

    return $mainPage;
  }
}

export default MainPage;
