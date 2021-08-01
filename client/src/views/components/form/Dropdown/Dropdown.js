import Component from '@lib/Component';
import { chevronDown } from '@assets/icons';
import './Dropdown.scss';

const onClickDropdown = e => {
  const $dropdownList = e.target.closest('label').nextElementSibling;
  $dropdownList.classList.toggle('dropdown-list-active');
};

class Dropdown extends Component {
  constructor(props) {
    super(props);

    this.init();
  }

  render() {
    const $dropdown = document.createElement('div');
    $dropdown.classList.add('dropdown');
    $dropdown.innerHTML = `
      <label class="label">
        ${this.props.label}
        <button type="button" id="dropdown-${this.props.id}">
          ${
            this.props.selectedValue
              ? `<span></span>`
              : `<span class="placeholder">선택하세요</span>${chevronDown}`
          }          
        </button>
      </label>
      <ul class="dropdown-list">
        ${this.props.listItems
          .map(
            item => `      
                    <li>
                      <button type="button" id="dropdown-${item.value}" class="dropdown-list-button">${item.name}</button>
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
