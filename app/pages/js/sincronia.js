const alimentaDoc = (equipamento) => {
	$('#equipamento').html(equipamento.equipamento);
	$('#horaatual').html(equipamento.horaatual);
	$('#producao').html(equipamento.producao);
	$('#ritmominuto').html(equipamento.ritmominuto);
	$('#ritmodia').html(equipamento.ritmodia);
	$('#ritmometa').html(equipamento.ritmometa);
	$('#metaatual').html(equipamento.metaatual);
	$('#pctmeta').html(equipamento.pctmeta);
	$('#pctretrabalho').html(equipamento.pctretrabalho);
	$('#disponibilidade').html(equipamento.disponibilidade);
	$('#performance').html(equipamento.performance);
	$('#qualidade').html(equipamento.qualidade);
	$('#unidade').html(equipamento.unidade);
	$('#labelparada').html(equipamento.labelparada);
	$('#TempoParado').html(equipamento.TempoParado);
	$('#inicioparada').html(equipamento.inicioparada);
	$('#oee').html(equipamento.oee);
}

const eqp = {
	size: 0,
	index: 0,
};

const reqEven = async () => {
	request().then(async () => {
		eqp.size = equipamentos.length;
		alimentaDoc(equipamentos[eqp.index]);
		await setTimeout(() => {
			eqp.index = eqp.index === (eqp.size - 1) ? 0 : eqp.index += 1;
		});
	});
	setTimeout(reqEven, 15000);
}

$(document).ready(reqEven);
