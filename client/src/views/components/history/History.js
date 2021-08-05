import Component from '@lib/Component';
import { HistoryHeader, HistoryList } from '@components';
import { add } from '@assets/icons';
import FormStore from '../form/FormStore';
import './History.scss';

const onClickAdd = () => {
  FormStore.toggleShowMobileForm();

  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

class History extends Component {
  constructor() {
    super();

    this.init();
  }

  render() {
    const $history = document.createElement('div');
    $history.classList.add('history');

    const $btn = document.createElement('button');
    $btn.classList.add('history__add-button--mobile');
    $btn.innerHTML = `
      ${add}
    `;

    $history.append(
      new HistoryHeader().getElement(),
      new HistoryList().getElement(),
      $btn,
    );

    return $history;
  }

  setEvent() {
    this.addEvent('click', '.history__add-button--mobile', onClickAdd);
  }
}

export default History;
