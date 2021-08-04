import Component from '@lib/Component';
import { chevronDown } from '@assets/icons';
import './Dropdown.scss';

const onClickDropdown = e => {
  const $dropdownList = e.target.closest('label').nextElementSibling;
  $dropdownList.classList.toggle('dropdown__list--active');
};

class Dropdown extends Component {
  constructor(props) {
    super(props);

    this.init();
  }

  render() {
    const $dropdown = document.createElement('div');
    $dropdown.classList.add('dropdown', `dropdown--${this.props.id}`);
    $dropdown.innerHTML = `
      <label class="label">
        ${this.props.label}
        <button type="button" id="dropdown-${
          this.props.id
        }" class="dropdown__select-button">
          ${`<span class="
          ${this.props.selectedItem ? '' : 'dropdown__placeholder'}">
            ${this.props.selectedItem ? this.props.selectedItem : '선택하세요'}
          </span>${chevronDown}`}          
        </button>
      </label>
      <ul class="dropdown__list">
        ${this.props.listItems
          .map(
            item => `      
                    <li data-id="${item.id}" data-name="${item.name}">
                      <button type="button" id="dropdown-${item.name}-${item.id}" class="dropdown__list-button">${item.content}</button>
                    </li>
                  `,
          )
          .join('')}
      </ul>
    `;

    return $dropdown;
  }

  setEvent() {
    this.addEvent('click', `#dropdown-${this.props.id}`, onClickDropdown);
  }
}
export default Dropdown;
