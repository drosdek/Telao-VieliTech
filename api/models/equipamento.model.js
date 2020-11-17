const sql = require("./db");

const Equipamento = function (equipamento) {
  this.id_equipamento = equipamento.id_equipamento;
  this.equipamento = equipamento.equipamento;
  this.horaatual = Date(equipamento.horaatual).toLocaleString('pt-br');
  this.producao = equipamento.producao;
  this.ritmominuto = equipamento.ritmominuto;
  this.ritmodia = equipamento.ritmodia;
  this.ritmometa = equipamento.ritmometa;
  this.metaatual = equipamento.metaatual;
  this.pctmeta = equipamento.pctmeta;
  this.pctretrabalho = equipamento.pctretrabalho;
  this.disponibilidade = equipamento.disponibilidade;
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
  this.meta_pct_vrm = equipamento.meta_pct_vrm || 90;
  this.meta_pct_amr = equipamento.meta_pct_amr || 100;
  this.oee_pct_vrm = equipamento.oee_pct_vrm || 60;
  this.oee_pct_amr = equipamento.oee_pct_amr || 70;
  this.disp_pct_vrm = equipamento.disp_pct_vrm || 75;
  this.disp_pct_amr = equipamento.disp_pct_amr || 83;
  this.perf_pct_vrm = equipamento.perf_pct_vrm || 80;
  this.perf_pct_amr = equipamento.perf_pct_amr || 88;
  this.qual_pct_vrm = equipamento.qual_pct_vrm || 92;
  this.qual_pct_amr = equipamento.qual_pct_amr || 96;
  this.retr_pct_vrm = equipamento.retr_pct_vrm || 4;
  this.retr_pct_amr = equipamento.retr_pct_amr || 2;
  this.base_pct_campo = equipamento.base_pct_campo || 'meta';
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
