const sql = require("./db");

const Equipamento = function (equipamento) {
	this.equipamento = equipamento.equipamento;
	this.horaatual = equipamento.horaatual;
	this.producao = equipamento.producao;
	this.ritmominuto = equipamento.ritmominuto;
	this.ritmodia = equipamento.ritmodia;
	this.ritmometa = equipamento.ritmometa;
	this.metaatual = equipamento.metaatual;
	this.pctmeta = equipamento.pctmeta;
	this.pctretrabalho = equipamento.pctretrabalho;
	this.disponibilidade = disponibilidade;
	this.performance = equipamento.performance;
	this.qualidade = equipamento.qualidade;
	this.unidade = equipamento.unidade;
	this.labelparada = equipamento.labelparada;
	this.TempoParado = equipamento.TempoParado;
	this.inicioparada = equipamento.inicioparada;
}

Equipamento.findByID = (equipamentoId, result) => {
	sql.query(`SELECT * FROM oee_telao WHERE id_equipamento = ${equipamentoId}`, (err, res) =>{
		if(err){
			console.log("error", err);
			result(err, null);
			return;
		}

		if (res.legth) {
			console.log("Found equipamento: ", res[0]);
			result(null, res[0]);
			return;
		}
		return({ kind: "not_found"}, null);
	});
}


Equipamento.getAll = (result) => {
	sql.query("SELECT * FROM oee_telao", (err, res) => {
	  if (err) {
		 console.log("error: ", err);
		 result(null, err);
		 return;
	  }
 
	  console.log("equipamento: ", res);
	  result(null, res);
	});
 };

 module.exports = Equipamento;