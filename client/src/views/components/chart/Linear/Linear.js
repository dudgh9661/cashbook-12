import Component from '@lib/Component';
import LinearChart from 'linear-chart-js';
import { MONTHS } from '@constants';
import $ from '@utils/dom';
import './Linear.scss';

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

    setTimeout(() => {
      LinearChart('linearChart', MONTHS, data, {
        highlightIndex: data.length - 1,
        wayPointsCount: 10,
      });
    }, 0);
  }
}

export default Linear;
