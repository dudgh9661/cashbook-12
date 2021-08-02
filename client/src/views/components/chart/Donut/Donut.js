import Component from '@lib/Component';
import DonutChart from 'donut-chart-js';

class Donut extends Component {
  constructor(props) {
    super(props);

    this.init();
  }

  render() {
    const { data } = this.props;

    const $canvas = document.createElement('canvas');
    $canvas.id = 'donutChart';
    $canvas.width = 230;
    $canvas.height = 230;

    new DonutChart($canvas, {
      data,
      holeSize: 0.65,
      animationSpeed: 0.5,
    });

    return $canvas;
  }
}

export default Donut;
