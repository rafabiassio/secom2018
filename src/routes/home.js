module.exports = (app) => {
	let HomeController = app.src.controllers.home
	app.get('/', (req, res) => {HomeController.home(app, req, res)})
}