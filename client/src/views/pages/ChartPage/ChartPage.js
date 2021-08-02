import Component from '@lib/Component';
import { Layout, MonthChart } from '@components';
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
    $chartPageFrag.appendChild(new MonthChart().getElement());

    $chartPage.appendChild(
      new Layout({
        content: $chartPageFrag,
      }).getElement(),
    );

    return $chartPage;
  }
}

export default ChartPage;
