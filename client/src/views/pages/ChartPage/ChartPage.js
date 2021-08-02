import Component from '@lib/Component';
import { Layout, DonutChart, LinearChart } from '@components';
import './ChartPage.scss';

class ChartPage extends Component {
  constructor() {
    super();

    this.init();
  }

  render() {
    const $chartPage = document.createElement('div');
    $chartPage.className = 'main-page';

    const $chartPageFrag = document.createDocumentFragment();
    $chartPageFrag.appendChild(new DonutChart().getElement());
    $chartPageFrag.appendChild(new LinearChart().getElement());

    $chartPage.appendChild(
      new Layout({
        content: $chartPageFrag,
      }).getElement(),
    );

    return $chartPage;
  }
}

export default ChartPage;
