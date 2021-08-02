import Component from '@lib/Component';
import LinearChart from 'linear-chart-js';
import './Linear.scss';

class Linear extends Component {
  constructor() {
    super();

    this.init();
  }

  render() {
    const $canvas = document.createElement('canvas');
    $canvas.id = 'linear-canvas';

    setTimeout(() => {
      LinearChart(
        'linear-canvas',
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        [616929, 509637, 563283, 590106, 643752, 568647, 536460],
        {
          highlightIndex: 6,
          wayPointsCount: 10,
        },
      );
    }, 0);

    return $canvas;
  }
}

export default Linear;
