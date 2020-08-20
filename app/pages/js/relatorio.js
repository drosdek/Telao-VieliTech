const alimentaRel = (relatorio) => {
	for (t in relatorio) {
		$('#lista-relatorio').append(`
			<tr>
				<td>${relatorio[t].equipamento}</td>
				<td>${Math.round(relatorio[t].producao).toFixed(1)}</td>
				<td>${Math.round(relatorio[t].pctmeta).toFixed(1) + " %"}</td>
				<td>${relatorio[t].descricao}</td>
				<td>${Math.round(relatorio[t].disponibilidade).toFixed(1) + " %"}</td>
				<td>${Math.round(relatorio[t].performance).toFixed(1) + " %"}</td>
				<td>${Math.round(relatorio[t].qualidade).toFixed(1) + " %"}</td>
				<td>${Math.round(relatorio[t].metaoee).toFixed(1) + " %"}</td>
			</tr>`);
	}
}

 const eqp = {
 	size: 0,
 	index: 0,
 	dP: new Date(),
 };


const reqEventRel = async() => {
	request().then(async() => {
		eqp.size = equipamentos.length;
		alimentaRel(equipamentos);
		if (eqp.size === 0) {
			$('#erro').modal('show');
		} else {
			$('#erro').modal('hide');
		}
	}).catch (() => {
		$('#erro').modal('show');
	});
}

$(document).ready(() => {
	reqEventRel();
});