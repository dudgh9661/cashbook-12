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
      prefixClass = '',
      prefix,
      placeholder,
      suffixClass = '',
      suffix,
      customClass,
      value,
      type,
      readonly = false,
      max,
    } = this.props;

    const $input = document.createElement('div');
    $input.classList.add('input-container');
    $input.innerHTML = `
      <label for="${id}" class="label">${label}</label>
      <div class="input__wrapper ${customClass || ''}">
        ${
          prefix
            ? `<span class="input--prefix ${prefixClass}">${prefix}</span>`
            : ''
        }
        <input class="input" ${
          readonly ? 'readonly' : ''
        } max="2021-12-31" type="${
      type || 'text'
    }" placeholder="${placeholder}" id="${id}" value="${value}"/>
        ${
          suffix
            ? `<span class="input--suffix ${suffixClass}">${suffix}</span>`
            : ''
        }
      </div>      
    `;

    return $input;
  }
}
export default Input;
