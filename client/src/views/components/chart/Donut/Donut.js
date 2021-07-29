import Component from '@lib/Component';
import DonutChart from 'doughnut-chart-js';
import ChartWrapper from '../Wrapper/Wrapper';
import './Donut.scss';

const data = [
  { label: '생활', value: 536460, color: '#4A6CC3' },
  { label: '의료/건강', value: 125300, color: '#6ED5EB' },
  { label: '쇼핑/뷰티', value: 56000, color: '#4CB8B8' },
  { label: '교통', value: 45340, color: '#94D3CC' },
  { label: '식비', value: 40540, color: '#4CA1DE' },
  { label: '문화/여가', value: 20800, color: '#D092E2' },
  { label: '미분류', value: 10200, color: '#817DCE' },
];

class Donut extends Component {
  constructor() {
    super();

    this.init();
  }

  render() {
    const $chartContent = document.createElement('div');
    $chartContent.className = 'chart-content';

    const $chart = document.createElement('div');
    $chart.className = 'chart-content__chart';

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
    $info.className = 'chart-content__info';

    $chartContent.appendChild($chart);
    $chartContent.appendChild($info);

    return new ChartWrapper({
      content: $chartContent,
    }).getElement();
  }
}

export default Donut;
