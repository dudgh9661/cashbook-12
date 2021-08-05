import Component from '@lib/Component';
import DonutChart from 'donut-chart-js';
import $ from '@utils/dom';

class Donut extends Component {
  constructor(props) {
    super(props);

    this.init();
  }

  render() {
    return $('canvas', { id: 'donutChart', width: 230, height: 230 });
  }

  didMount() {
    const { data } = this.props;

    new DonutChart(this.$element, {
      data,
      holeSize: 0.65,
      animationSpeed: 0.5,
    });
  }
}

export default Donut;
