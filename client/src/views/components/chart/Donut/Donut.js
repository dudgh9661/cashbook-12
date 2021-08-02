import Component from '@lib/Component';
import DonutChart from 'donut-chart-js';
import ChartWrapper from '../Wrapper/Wrapper';
import DataList from '../DataList/DataList';
import './Donut.scss';
import statisticalData from '../../../../_dummies/statistics.json';

class Donut extends Component {
  constructor() {
    super();

    this.init();
  }

  render() {
    const { data } = statisticalData;

    const $chartContent = document.createElement('div');
    $chartContent.className = 'chart-content';

    const $chart = document.createElement('div');
    $chart.className = 'chart-content-chart';

    const $canvas = document.createElement('canvas');
    $canvas.id = 'donutChart';
    $canvas.width = 230;
    $canvas.height = 230;

    new DonutChart($canvas, {
      data,
      holeSize: 0.65,
      animationSpeed: 0.5,
    });

    $chart.appendChild($canvas);

    const $info = document.createElement('div');
    $info.className = 'chart-content-info';

    const $chartTitle = document.createElement('h1');
    $chartTitle.className = 'chart-content-info__title';
    $chartTitle.innerText = '이번 달 지출 금액 834,640';

    $info.appendChild($chartTitle);
    $info.appendChild(new DataList({ data }).getElement());

    $chartContent.append($chart, $info);

    return new ChartWrapper({
      content: $chartContent,
    }).getElement();
  }
}

export default Donut;
