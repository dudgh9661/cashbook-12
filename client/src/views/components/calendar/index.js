import Component from '@lib/Component';
import { DateInfo, History } from '@store';
import $ from '@utils/dom';
import CalendarHeader from './Header/Header';
import CalendarBody from './Body/Body';
import CalendarFooter from './Footer/Footer';
import Modal from '../form/Modal/Modal';

class Calendar extends Component {
  constructor() {
    super();
    this.state = {
      modalVisible: true,
    };

    this.init();
  }

  setObserver() {
    DateInfo.observe('current', this.reRender.bind(this));
    History.observe('history', this.reRender.bind(this));
    History.observe('total', this.reRender.bind(this));
  }

  render() {
    const { today, current } = DateInfo.state;
    const { history, total } = History.state;
    const { modalVisible } = this.state;

    return $(
      'section',
      { class: 'calendar' },
      new CalendarHeader(),
      new CalendarBody({ today, current, history }),
      new CalendarFooter({ total }),
      !history
        ? new Modal({
            visible: modalVisible,
            headerText: '모달 나와라',
            toggleModal: this.toggleModal.bind(this),
          })
        : '',
    );
  }

  didMount() {
    History.setCurrentMonthHistory();
    History.setCurrentMonthTotal();
  }

  toggleModal() {
    this.state.modalVisible = !this.state.modalVisible;
    this.reRender();
  }
}

export default Calendar;
