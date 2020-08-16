const alimentaDoc = (equipamento) => () => {
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

$(document).ready(async () => {
	request().then(() => {
		equipamentos.forEach((equipamento) => setTimeout(alimentaDoc(equipamento), 15000));
	});
});
