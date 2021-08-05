import Component from '@lib/Component';
import { HistoryHeader, HistoryList } from '@components';
import { FormStore } from '@store';
import { add } from '@assets/icons';
import './History.scss';

const onClickAdd = () => {
  FormStore.toggleShowMobileForm();

  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

const onScrollHandler = () => {
  const $btn = document.querySelector('.history__add-button--mobile');
  if (!$btn) {
    return;
  }
  if (
    !$btn.classList.contains('hide') &&
    document.documentElement.scrollTop > 150
  ) {
    $btn.classList.add('hide');
  } else if (
    $btn.classList.contains('hide') &&
    document.documentElement.scrollTop <= 150
  ) {
    $btn.classList.remove('hide');
  }
};

const addScrollEvent = () => {
  window.removeEventListener('scroll', onScrollHandler);
  window.addEventListener('scroll', onScrollHandler);
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
      new HistoryList({}).getElement(),
      $btn,
    );

    return $history;
  }

  setEvent() {
    this.addEvent('click', '.history__add-button--mobile', onClickAdd);
    addScrollEvent();
  }
}

export default History;
