import Component from '@lib/Component';

class Child extends Component {
  template() {
    return `
      <div class="child">
        ${this.props.count}
      </div>
    `;
  }
}

export default Child;
