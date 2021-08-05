import Component from '@lib/Component';
import LinearChart from 'linear-chart-js';
import { MONTHS } from '@constants';
import $ from '@utils/dom';

class Linear extends Component {
  constructor(props) {
    super(props);

    this.init();
  }

  render() {
    return $('canvas', { id: 'linearChart' });
  }

  didMount() {
    const { data } = this.props;

    LinearChart(this.$element, MONTHS, data, {
      highlightIndex: data.length - 1,
      wayPointsCount: 10,
      canvasHeight: 350,
    });
  }
}

export default Linear;
