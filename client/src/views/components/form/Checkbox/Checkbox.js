import { check } from '@assets/icons';
import './Checkbox.scss';

const CheckBox = (label, value, id, checked = true) => `
  <label id=${id} class="checkbox">
    <input type="checkbox" checked="${checked}" value="${value}">
    <span class="checkbox__checkmark">
      ${check(11, 11)}
    </span>
    ${label}
  </label>
`;

export default CheckBox;
