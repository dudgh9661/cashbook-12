import Component from '@lib/Component';
import { DateInfo, History } from '@store';
import $ from '@utils/dom';
import CalendarHeader from './Header/Header';
import CalendarBody from './Body/Body';
import CalendarFooter from './Footer/Footer';
import Modal from '../form/Modal/Modal';

const onConfirmHandler = () => {
  window.location.reload();
};

class Calendar extends Component {
  constructor() {
    super();
    this.state = {
      modalVisible: false,
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
    this.state.modalVisible = !history;

    return $(
      'section',
      { class: 'calendar' },
      new CalendarHeader(),
      new CalendarBody({ today, current, history }),
      new CalendarFooter({ total }),
      new Modal({
        visible: this.state.modalVisible,
        headerText:
          '소비 내역을 불러오는데 문제가 있습니다. 잠시 후 다시 시도해주세요!',
        confirmText: '새로고침',
        toggleModal: this.toggleModal.bind(this),
        onConfirmHandler,
      }),
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
