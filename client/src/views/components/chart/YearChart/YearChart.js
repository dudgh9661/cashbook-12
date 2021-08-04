import Component from '@lib/Component';
import Linear from '../Linear/Linear';
import ChartWrapper from '../Wrapper/Wrapper';
import './YearChart.scss';

class YearChart extends Component {
  constructor() {
    super();

    this.init();
  }

  render() {
    const $yearChart = document.createElement('div');
    $yearChart.className = 'year-chart';

    const $chartTitle = document.createElement('h1');
    $chartTitle.className = 'year-chart__title';
    $chartTitle.innerText = '생활 카테고리 소비 추이';

    const $chartContent = document.createElement('div');
    $chartContent.className = 'year-chart__content';
    $chartContent.appendChild(new Linear().getElement());

    $yearChart.append($chartTitle, $chartContent);

    return new ChartWrapper({
      children: [$yearChart],
    }).getElement();
  }
}

export default YearChart;
