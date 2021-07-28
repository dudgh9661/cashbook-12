import Component from '@lib/Component';

class Layout extends Component {
  template() {
    return `
      <div class="layout">
        ${this.props.count}
      </div>
    `;
  }
}

export default Layout;
