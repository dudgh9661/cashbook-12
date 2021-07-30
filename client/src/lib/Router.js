class Router {
  constructor() {
    this.history = window.history;
    this.routes = {};

    window.onpopstate = () => {
      const { pathname } = window.location;
      this.render(pathname);
    };
  }

  initRoutes($app, routes) {
    this.$app = $app;
    this.routes = routes;
  }

  push(pathname, data = {}) {
    window.history.pushState(data, pathname, window.location.origin + pathname);
    this.render(pathname);
  }

  back() {
    this.history.back();
  }

  render(pathname) {
    this.$app.innerHTML = '';
    if (!this.routes[pathname]) {
      const Page404 = this.routes.NotFound;
      this.$app.appendChild(new Page404().getElement());
    } else {
      const Page = this.routes[pathname];
      this.$app.appendChild(new Page().getElement());
    }
  }
}
const router = new Router();

export default router;
