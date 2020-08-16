module.exports = (app) => {

	const equipamento = require("../controller/equipamento.controller");

	// Retrieve all Equipament
	app.get("/equipamentos", equipamento.findAll);

	// Retrieve a single Equipament with equipamentoId
	app.get("/equipamentos/:equipamentoId", equipamento.findOne);

	app.get("/eqp", (req, res) => {
		res.send(JSON.stringify([
			{
				"id_equipamento": 1,
				"equipamento": "Nome Equipamento 1",
				"unidade": "PC",
				"horaatual": "2020-08-15T18:24:46.000Z",
				"metamin": 5.683333333,
				"producao": 892.34174,
				"retrabalho": 0,
				"metaatual": 2557.49999985,
				"disponibilidade": 87.82222222,
				"performance": 24.984229565,
				"qualidade": 100,
				"pctmeta": 34.891172632,
				"ritmodia": 1.982981644,
				"ritmometa": 9.0375,
				"ritmomin": null,
				"inicioparada": "2020-08-14T18:24:46.000Z",
				"TempoParado": "242:07:08",
				"oee": 37.984229565
			},
			{
				"id_equipamento": 2,
				"equipamento": "Nome Equipamento 2",
				"unidade": "M2UV",
				"horaatual": "2020-08-15T18:24:46.000Z",
				"metamin": 5.683333333,
				"producao": 892.34174,
				"retrabalho": 0,
				"metaatual": 2557.49999985,
				"disponibilidade": 87.82222222,
				"performance": 24.984229565,
				"qualidade": 100,
				"pctmeta": 34.891172632,
				"ritmodia": 1.982981644,
				"ritmometa": 9.0375,
				"ritmomin": null,
				"inicioparada": "2020-08-14T18:24:46.000Z",
				"TempoParado": "242:07:08",
				"oee": 37.984229565
			}
		]));
	});
}