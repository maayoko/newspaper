class Application {
	ready(app) {
		this.app = app;
		return this;
	}

	start() {
		this.app(this);
	}
}

export default Application;
