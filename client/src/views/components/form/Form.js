import Component from '@lib/Component';
import { Dropdown, Input } from '@components';
import { minus, check } from '@assets/icons';
import './Form.scss';

const onInputDate = e => console.log(e.target.value);
const onInputContent = e => console.log(e.target.value);
const onInputAmount = e => console.log(e.target.value);

class Form extends Component {
  constructor() {
    super();

    this.init();
  }

  render() {
    const $form = document.createElement('form');
    $form.classList.add('form');

    const $btn = document.createElement('button');
    $btn.classList.add('btn', 'active');
    $btn.innerHTML = check;

    $form.append(
      new Input({
        id: 'input-date',
        label: '일자',
        placeholder: '입력하세요',
      }).getElement(),
      new Dropdown({
        id: 'category',
        label: '분류',
        listItems: [
          { name: '생활', value: 'life' },
          { name: '식비', value: 'food' },
          { name: '교통', value: 'transportation' },
          { name: '쇼핑/뷰티', value: 'beauty' },
          { name: '의료', value: 'medical' },
          { name: '건강', vlaue: 'healthy' },
        ],
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
          { name: '생활', value: 'life' },
          { name: '식비', value: 'food' },
          { name: '교통', value: 'transportation' },
          { name: '쇼핑/뷰티', value: 'beauty' },
          { name: '의료', value: 'medical' },
          { name: '건강', vlaue: 'healthy' },
        ],
      }).getElement(),
      new Input({
        id: 'input-amount',
        label: '금액',
        prefix: minus,
        suffix: '원',
        prefixClass: 'input-prefix',
        suffixClass: 'input-suffix',
        placeholder: '입력하세요',
        customClass: 'input-amount',
      }).getElement(),
      $btn,
    );
    return $form;
  }

  setEvent() {
    this.addEvent('input', '#input-date', onInputDate);
    // this.addEvent('click', '#input-date', onInputDate);
    this.addEvent('input', '#input-content', onInputContent);
    // this.addEvent('click', '#input-date', onInputDate);
    this.addEvent('input', '#input-amount', onInputAmount);
  }
}

export default Form;
