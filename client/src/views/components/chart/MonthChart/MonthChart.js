import Component from '@lib/Component';
import ChartWrapper from '../Wrapper/Wrapper';
import Donut from '../Donut/Donut';
import DataList from '../DataList/DataList';
import './MonthChart.scss';
import statisticalData from '../../../../_dummies/statistics.json';

class MonthChart extends Component {
  constructor() {
    super();

    this.init();
  }

  render() {
    const { data } = statisticalData;

    const $monthChart = document.createElement('div');
    $monthChart.className = 'month-chart';

    const $chart = document.createElement('div');
    $chart.className = 'month-chart__chart';
    $chart.appendChild(new Donut({ data }).getElement());

    const $info = document.createElement('div');
    $info.className = 'month-chart__info';

    const $chartTitle = document.createElement('h1');
    $chartTitle.className = 'month-chart__info--title';
    $chartTitle.innerText = '이번 달 지출 금액 834,640';

    $info.append($chartTitle, new DataList({ data }).getElement());

    $monthChart.append($chart, $info);

    return new ChartWrapper({
      content: $monthChart,
    }).getElement();
  }
}

export default MonthChart;
