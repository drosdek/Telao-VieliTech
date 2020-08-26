module.exports = (app) => {

	const equipamento = require("../controller/equipamento.controller");

	// Retrieve all Equipament
	app.get("/equipamentos", equipamento.findAll);

	// Retrieve a single Equipament with equipamentoId
	app.get("/equipamentos/:equipamentoId", equipamento.findOne);

	// Retrieve a group Equipament
	app.get("/equipamentos/group/:groupId", equipamento.findGroup);

}