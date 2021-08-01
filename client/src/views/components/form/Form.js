import Component from '@lib/Component';
import { Dropdown, Input } from '@components';
import { minus, check } from '@assets/icons';
import './Form.scss';

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
        label: '일자',
        placeholder: '입력하세요',
      }).getElement(),
      new Dropdown({
        label: '분류',
        listItems: ['생활', '식비', '교통', '쇼핑/뷰티', '의료', '건강'],
      }).getElement(),
      new Input({
        label: '내용',
        placeholder: '입력하세요',
      }).getElement(),
      new Dropdown({
        label: '결제수단',
        listItems: ['생활', '식비', '교통', '쇼핑/뷰티', '의료', '건강'],
      }).getElement(),
      new Input({
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
}

export default Form;
