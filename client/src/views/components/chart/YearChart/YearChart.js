import Component from '@lib/Component';
import { HistoryReport } from '@store';
import $ from '@utils/dom';
import Linear from '../Linear/Linear';
import Wrapper from '../../common/Wrapper/Wrapper';
import './YearChart.scss';

class YearChart extends Component {
  constructor() {
    super();

    this.init();
  }

  setObserver() {
    HistoryReport.observe('curCategoryReport', this.reRender.bind(this));
  }

  render() {
    if (!HistoryReport.state.curCategoryReport) return $('div');

    const { categoryName, data } = HistoryReport.state.curCategoryReport;

    const $chartContent = $(
      'div',
      { class: 'year-chart' },
      $(
        'h1',
        { class: 'year-chart__title' },
        `${categoryName} 카테고리 소비 추이`,
      ),
      $('div', { class: 'year-chart__content' }, new Linear({ data })),
    );

    return new Wrapper({
      className: 'fade',
      children: [$chartContent],
    }).getElement();
  }
}

export default YearChart;
