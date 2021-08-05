import Component from '@lib/Component';
import $ from '@utils/dom';
import route from '@utils/route';
import { TAB_LINKS } from '@constants';
import './Tab.scss';
import Icon from '../Icon/Icon';

class Tab extends Component {
  constructor(props) {
    super(props);

    this.init();
  }

  render() {
    const { className = '' } = this.props;

    return $('nav', { class: `tab ${className}` }, ...this.renderTabs());
  }

  renderTabs() {
    const { link } = this.props;

    return TAB_LINKS.map(tab => {
      return Icon(
        $('button', {
          id: `tab-${tab.value}`,
          class: `${tab.link === link ? 'tab--active' : ''}`,
        }),
        tab.icon,
      );
    });
  }

  setEvent() {
    this.addEvent('click', '#tab-main', route.goMainPage);
    this.addEvent('click', '#tab-calendar', route.goCalendarPage);
    this.addEvent('click', '#tab-chart', route.goChartPage);
  }
}

export default Tab;
