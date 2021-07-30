import Component from '@lib/Component';
import LinearChart from 'linear-chart-js';
import ChartWrapper from '../Wrapper/Wrapper';
import './Linear.scss';

class Linear extends Component {
  constructor() {
    super();

    this.init();
  }

  render() {
    const $chartContent = document.createElement('div');
    $chartContent.className = 'chart-content linear';

    const $chartTitle = document.createElement('h1');
    $chartTitle.className = 'chart-content__title';
    $chartTitle.innerText = '생활 카테고리 소비 추이';
    $chartContent.appendChild($chartTitle);

    const $canvas = document.createElement('canvas');
    $canvas.id = 'target';

    setTimeout(function () {
      LinearChart(
        'target',
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        [616929, 509637, 563283, 590106, 643752, 568647, 536460],
        {
          highlightIndex: 6,
          wayPointsCount: 10,
        },
      );
    }, 0);

    $chartContent.appendChild($canvas);

    return new ChartWrapper({
      content: $chartContent,
    }).getElement();
  }
}

export default Linear;
