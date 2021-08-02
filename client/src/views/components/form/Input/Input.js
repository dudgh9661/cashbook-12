import Component from '@lib/Component';
import './Input.scss';

class Input extends Component {
  constructor(props) {
    super(props);

    this.init();
  }

  render() {
    const {
      id,
      label,
      prefixClass,
      prefix,
      placeholder,
      suffixClass,
      suffix,
      customClass,
    } = this.props;
    const $input = document.createElement('div');
    $input.classList.add('input-container');
    $input.innerHTML = `
      <label for="${id}" class="label">${label}</label>
      <div class="input-wrapper ${customClass || ''}">
        ${prefix ? `<span class="${prefixClass}">${prefix}</span>` : ''}
        <input class="input" type="text" placeholder="${placeholder}" id="${id}"/>
        ${suffix ? `<span class="${suffixClass}">${suffix}</span>` : ''}
      </div>      
    `;

    return $input;
  }
}
export default Input;
