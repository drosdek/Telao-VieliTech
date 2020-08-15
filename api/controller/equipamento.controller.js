const Equipamento = require("../models/equipamento.model");


// Retrieve all Equipamentos from the database.
exports.findAll = (req, res) => {
	exports.findAll = (req, res) => {
		Customer.getAll((err, data) => {
		  if (err)
			 res.status(500).send({
				message:
				  err.message || "Some error occurred while retrieving equipamentos."
			 });
		  else res.send(data);
		});
	 };  
};

// Find a single Equipamento with a equipamentoId
exports.findOne = (req, res) => {
	exports.findOne = (req, res) => {
		Customer.findById(req.params.customerId, (err, data) => {
		  if (err) {
			 if (err.kind === "not_found") {
				res.status(404).send({
				  message: `Not found Equipament with id ${req.params.customerId}.`
				});
			 } else {
				res.status(500).send({
				  message: "Error retrieving Equipament with id " + req.params.customerId
				});
			 }
		  } else res.send(data);
		});
	 };  
};