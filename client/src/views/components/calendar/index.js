import Component from '@lib/Component';
import router from '@lib/Router';
import { DateInfo, History } from '@store';
import $ from '@utils/dom';
import CalendarHeader from './Header/Header';
import CalendarBody from './Body/Body';
import CalendarFooter from './Footer/Footer';
import Modal from '../form/Modal/Modal';

const onConfirmHandler = () => {
  router.push('/calendar');
};

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
            headerText:
              '소비 내역을 불러오는데 문제가 있습니다. 잠시 후 다시 시도해주세요!',
            cancelText: '닫기',
            confirmText: '새로고침',
            toggleModal: this.toggleModal.bind(this),
            onConfirmHandler,
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
