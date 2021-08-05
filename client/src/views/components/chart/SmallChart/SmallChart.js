import Component from '@lib/Component';
import { DateInfo, HistoryReport } from '@store';
import { animateNumber } from '@utils';
import $ from '@utils/dom';
import route from '@utils/route';
import { CHART_SAMPLE_DATA } from '@constants';
import Wrapper from '../../common/Wrapper/Wrapper';
import Donut from '../Donut/Donut';
import DataList from '../DataList/DataList';
import './SmallChart.scss';

class SmallChart extends Component {
  constructor(props) {
    super(props);

    this.init();
  }

  setData() {
    const { isSample } = this.props;
    if (isSample) return CHART_SAMPLE_DATA;
    return HistoryReport.state.curMonthReport;
  }

  setObserver() {
    DateInfo.observe('current', this.reRender.bind(this));
    HistoryReport.observe('curMonthReport', this.reRender.bind(this));
  }

  render() {
    const { today, current } = DateInfo.state;
    const { total, category } = this.setData();
    const curMonth =
      today.year === current.year && today.month === current.month
        ? '이번 달'
        : `${current.month}월`;

    let $chartContent;
    if (total === 0) {
      $chartContent = `${curMonth}의 지출 내역이 없습니다.`;
    } else {
      $chartContent = $(
        'div',
        { class: 'small-chart' },
        $(
          'div',
          { class: 'small-chart__chart' },
          new Donut({ data: category }),
        ),
        $(
          'div',
          { class: 'small-chart__info' },
          $(
            'h1',
            { class: 'small-chart__info--title' },
            `${curMonth} 지출 금액 `,
            $('span', { class: 'total-value' }, ''),
          ),
          new DataList({
            data: category.slice(0, 2),
            total,
          }),
          $(
            'button',
            { type: 'button', class: 'small-chart__info--btn detail-btn' },
            `${curMonth} 통계 상세히 보러가기`,
          ),
        ),
      );
    }

    return new Wrapper({
      children: [$chartContent],
    }).getElement();
  }

  didMount() {
    HistoryReport.setMonthReport();
  }

  setEvent() {
    const { total } = this.setData();
    const $target = this.$element.querySelector('.total-value');
    if (!$target) return;

    animateNumber(0, total, $target);

    this.addEvent('click', '.detail-btn', route.goChartPage);
  }
}

export default SmallChart;
