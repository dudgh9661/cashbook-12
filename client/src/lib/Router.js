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
    if (!this.routes[pathname]) {
      const page404 = new this.routes.NotFound(this.$app);
      page404.render();
    } else {
      const page = new this.routes[pathname](this.$app);
      page.render();
    }
  }
}
const router = new Router();

export default router;
