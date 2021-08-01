import Component from '@lib/Component';
import { chevronDown } from '@assets/icons';
import './Dropdown.scss';

const renderList = listItems =>
  listItems
    .map(
      item => `      
              <li>
                <button class="dropdown-list-button">${item}</button>
              </li>
            `,
    )
    .join('');

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
        <button>          
          <span>선택하세요</span>        
          ${chevronDown}
        </button>
      </label>
      <ul class="dropdown-list">
        ${renderList(this.props.listItems)}
      </ul>
    `;

    return $dropdown;
  }
}
export default Dropdown;
