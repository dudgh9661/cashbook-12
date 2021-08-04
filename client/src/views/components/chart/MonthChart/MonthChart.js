import Component from '@lib/Component';
import { DateInfo, HistoryReport } from '@store';
import { animateNumber } from '@utils';
import $ from '@utils/dom';
import ChartWrapper from '../Wrapper/Wrapper';
import Donut from '../Donut/Donut';
import DataList from '../DataList/DataList';
import './MonthChart.scss';

class MonthChart extends Component {
  constructor() {
    super();

    this.init();
  }

  setObserver() {
    DateInfo.observe('current', this.reRender.bind(this));
    HistoryReport.observe('curMonthReport', this.reRender.bind(this));
  }

  render() {
    const { today, current } = DateInfo.state;
    const { total, category } = HistoryReport.state.curMonthReport;
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
        { class: 'month-chart' },
        $(
          'div',
          { class: 'month-chart__chart' },
          new Donut({ data: category }),
        ),
        $(
          'div',
          { class: 'month-chart__info' },
          $(
            'h1',
            { class: 'month-chart__info--title' },
            `${curMonth} 지출 금액 `,
            $('span', { class: 'total-value' }, ''),
          ),
          new DataList({ data: category, total }),
        ),
      );
    }

    return new ChartWrapper({
      children: [$chartContent],
    }).getElement();
  }

  didMount() {
    HistoryReport.setExpenseReport();
  }

  setEvent() {
    const { total } = HistoryReport.state.curMonthReport;
    const $target = this.$element.querySelector('.total-value');
    if (!$target) return;

    animateNumber(0, total, $target);
  }
}

export default MonthChart;
