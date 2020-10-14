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
  this.hh = equipamento.hh;
  this.mm = equipamento.mm;
  this.sec = equipamento.sec;
};

Equipamento.findById = (equipamentoId, result) => {
  sql.query(
    `SELECT oee_telao.horaatual, oee_telao.id_equipamento, oee_telao.equipamento, oee_telao.unidade, oee_telao.producao, oee_telao.retrabalho, 
    oee_telao.metaatual, oee_telao.disponibilidade, oee_telao.performance, oee_telao.qualidade, oee_telao.pctmeta, oee_telao.ritmodia,
    oee_telao.ritmometa, oee_telao.TempoParado as tp,oee_telao.metaoee, motparada.descricao, oee_telao.inicioparada, oee_telao.ritmominuto, 
    cast(oee_telao.TempoParado as datetime) as TempoParado, cast(now() as char) as hoje, cast(date_add(now(), interval 1 day) as char) as amanha,
    hour(timediff(horaatual, inicioparada)) as hh, minute(timediff(horaatual, inicioparada)) as mm, second(timediff(horaatual, inicioparada)) as sec
    FROM oee_telao LEFT JOIN motparada ON motparada.idmotparada = oee_telao.id_motivoparada WHERE oee_telao.id_equipamento = ${equipamentoId}`,
    (err, res) => {
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

      // not found Equipamento with the id
      result({ kind: "not_found" }, null);
    }
  );
};

Equipamento.getAll = (result) => {
  sql.query(
    `SELECT oee_telao.horaatual, oee_telao.id_equipamento, oee_telao.equipamento, oee_telao.unidade, oee_telao.producao, oee_telao.retrabalho, 
	oee_telao.metaatual, oee_telao.disponibilidade, oee_telao.performance, oee_telao.qualidade, oee_telao.pctmeta, oee_telao.ritmodia,
	oee_telao.ritmometa, oee_telao.TempoParado as tp,oee_telao.metaoee, motparada.descricao, oee_telao.inicioparada, oee_telao.ritmominuto, 
  cast(oee_telao.TempoParado as datetime) as TempoParado, cast(now() as char) as hoje1, cast(date_add(now(), interval 1 day) as char) as amanha1,
  hour(timediff(horaatual, inicioparada)) as hh, minute(timediff(horaatual, inicioparada)) as mm, second(timediff(horaatual, inicioparada)) as sec
  FROM oee_telao LEFT JOIN motparada ON motparada.idmotparada = oee_telao.id_motivoparada ORDER BY oee_telao.id_equipamento`,
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      console.log("equipamento: ", res);
      result(null, res);
    }
  );
};

Equipamento.findByGroup = (groupId, result) => {
  sql.query(
    `SELECT oee_telao.horaatual, oee_telao.id_equipamento, oee_telao.equipamento, oee_telao.unidade, oee_telao.producao, oee_telao.retrabalho, 
	 oee_telao.metaatual, oee_telao.disponibilidade, oee_telao.performance, oee_telao.qualidade, oee_telao.pctmeta, oee_telao.ritmodia,
	 oee_telao.ritmometa, oee_telao.TempoParado,oee_telao.metaoee, motparada.descricao, oee_telao.inicioparada, oee_telao.ritmominuto, 
	 oee_telao.grupotelao, oee_telao.ordemtelao FROM oee_telao LEFT JOIN motparada ON oee_telao.id_equipamento = motparada.idmotparada 
	 WHERE oee_telao.grupotelao = ${groupId} ORDER BY oee_telao.ordemtelao`,
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      console.log("equipamento: ", res);
      result(null, res);
    }
  );
};

module.exports = Equipamento;
