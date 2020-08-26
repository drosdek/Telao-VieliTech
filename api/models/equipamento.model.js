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
	this.metaoee = equipamento.metaoee;
	this.motivoparada = equipamento.descricao;
}

Equipamento.findById = (equipamentoId, result) => {
	sql.query(`SELECT * FROM oee_telao WHERE id_equipamento = ${equipamentoId}`, (err, res) => {
	  if (err) {
		console.log("error: ", err);
		result(err, null);
		return;
	  }
  
	  if (res.length) {
		console.log("found equipament: ", res[0]);
		result(null, res[0]);
		return;
	  }
  
	  // not found Customer with the id
	  result({ kind: "not_found" }, null);
	});
  };


Equipamento.getAll = (result) => {
	sql.query(`SELECT oee_telao.id_equipamento, oee_telao.equipamento, oee_telao.unidade, oee_telao.producao, oee_telao.retrabalho, 
	oee_telao.metaatual, oee_telao.disponibilidade, oee_telao.performance, oee_telao.qualidade, oee_telao.pctmeta, oee_telao.ritmodia,
	oee_telao.ritmometa, oee_telao.TempoParado,oee_telao.metaoee, motparada.descricao, oee_telao.inicioparada, oee_telao.ritmominuto 
	FROM oee_telao INNER JOIN motparada ON oee_telao.id_equipamento = motparada.idmotparada ORDER BY oee_telao.id_equipamento`, (err, res) => {
	  if (err) {
		 console.log("error: ", err);
		 result(null, err);
		 return;
	  }
 
	  console.log("equipamento: ", res);
	  result(null, res);
	});
 };

 Equipamento.findByGroup = (groupId, result) => {
	 sql.query(`SELECT oee_telao.id_equipamento, oee_telao.equipamento, oee_telao.unidade, oee_telao.producao, oee_telao.retrabalho, 
	 oee_telao.metaatual, oee_telao.disponibilidade, oee_telao.performance, oee_telao.qualidade, oee_telao.pctmeta, oee_telao.ritmodia,
	 oee_telao.ritmometa, oee_telao.TempoParado,oee_telao.metaoee, motparada.descricao, oee_telao.inicioparada, oee_telao.ritmominuto, 
	 oee_telao.grupotelao, oee_telao.ordemtelao FROM oee_telao INNER JOIN motparada ON oee_telao.id_equipamento = motparada.idmotparada 
	 WHERE oee_telao.grupotelao = ${groupId} ORDER BY oee_telao.ordemtelao`, (err, res) => {
		if (err) {
			console.log("error: ", err);
			result(null, err);
			return;
		 }
	
		 console.log("equipamento: ", res);
		 result(null, res);
	   });
 }

 module.exports = Equipamento;