import Component from '@lib/Component';
import { Dropdown, Input, Modal } from '@components';
import { minus, check, cancel } from '@assets/icons';
import './Form.scss';

const onInputDate = () => {};
const onInputContent = () => {};
const onInputAmount = () => {};
const onClickAddMethod = () => {
  const $modal = document.querySelector('.modal');
  $modal.classList.add('open');
};

const methodsDropdownListItem = name =>
  `<span class="dropdown-method-item">${name}${cancel}</span>`;

class Form extends Component {
  constructor(props) {
    super(props);

    this.init();
  }

  render() {
    const $form = document.createElement('form');
    $form.classList.add('form');

    const $btn = document.createElement('button');
    $btn.classList.add('btn', 'active');
    $btn.innerHTML = check();

    $form.append(
      new Input({
        id: 'input-date',
        label: '일자',
        placeholder: '입력하세요',
      }).getElement(),
      new Dropdown({
        id: 'category',
        label: '분류',
        listItems: this.props.categories.map(category => ({
          content: category.name,
          name: category.name,
          id: category.id,
        })),
      }).getElement(),
      new Input({
        id: 'input-content',
        label: '내용',
        placeholder: '입력하세요',
      }).getElement(),
      new Dropdown({
        id: 'method',
        label: '결제수단',
        listItems: [
          ...this.props.paymentMethods.map(method => ({
            content: methodsDropdownListItem(method.name),
            name: method.name,
            id: method.id,
          })),
          { name: 'add-method', id: '0', content: '추가하기' },
        ],
      }).getElement(),
      new Input({
        id: 'input-amount',
        label: '금액',
        prefix: minus,
        suffix: '원',
        placeholder: '입력하세요',
        customClass: 'input-amount',
      }).getElement(),
      $btn,
      new Modal({}).getElement(),
    );
    return $form;
  }

  setEvent() {
    this.addEvent('input', '#input-date', onInputDate);
    this.addEvent('input', '#input-content', onInputContent);
    this.addEvent('input', '#input-amount', onInputAmount);
    this.addEvent('click', '#dropdown-add-method-0', onClickAddMethod);
  }
}

export default Form;
