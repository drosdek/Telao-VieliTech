const Equipamento = require("../models/equipamento.model");


// Retrieve all Equipamentos from the database.

exports.findAll = (req, res) => {
	Equipamento.getAll((err, data) => {
		console.log(data);
		data.forEach((item, index) => {
			data[index] = new Equipamento(item);
		});
		if (err)
			res.status(500).send({
			message:
				err.message || "Some error occurred while retrieving equipamentos."
			});
		else res.send(data);
	});
};

// Find a single Equipamento with a equipamentoId
exports.findOne = (req, res) => {
	Equipamento.findById(req.params.equipamentoId, (err, data) => {
		data = new Equipamento(data);
		if (err) {
			if (err.kind === "not_found") {
			res.status(404).send({
				message: `Not found Equipament with id ${req.params.equipamentoId}.`
			});
			} else {
			res.status(500).send({
				message: "Error retrieving Equipament with id " + req.params.equipamentoId
			});
			}
		} else res.send(data);
	});
};

// Find a group Equipamento with a groupId
exports.findGroup = (req, res) => {
	Equipamento.findByGroup(req.params.groupId, (err, data) => {
		if (err) {
			if (err.kind === "not_found") {
			res.status(404).send({
				message: `Not found Equipament with id ${req.params.groupId}.`
			});
			} else {
			res.status(500).send({
				message: "Error retrieving Equipament with id " + req.params.groupId
			});
			}
		} else res.send(data);
	});
};