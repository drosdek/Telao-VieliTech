
const alimentaRel = (relatorio) => {
	
	for (t in relatorio) {

		let alDip;
		let alMeta;
		let alOee;
		let alPerf;
		let alQual;

		//IF Baseado na % Meta ou %OEE
		if (Config.pctmeta == true) {
			if (relatorio[t].pctmeta < Config.valores.vermelho) {
				alMeta = 'vermelho'
			} else if (relatorio[t].pctmeta < Config.valores.amarelo) {
				alMeta = 'amarelo'
			} else {
				alMeta = 'verde'
			}
		} else {
			if (relatorio[t].metaoee < Config.valores.vermelho) {
				alOee = 'vermelho'
			} else if (relatorio[t].metaoee < Config.valores.amarelo) {
				alOee = 'amarelo'
			} else {
				alOee = 'verde'
			}
		}

		if (relatorio[t].disponibilidade < Config.disponibilidade.vermelho) {
			alDip = 'vermelho';
		} else if (relatorio[t].disponibilidade < Config.disponibilidade.amarelo) {
			alDip = 'amarelo';
		} else {
			alDip = 'verde'
		}

		if (relatorio[t].performance < Config.performance.vermelho) {
			alPerf = 'vermelho';
		} else if (relatorio[t].performance < Config.performance.amarelo) {
			alPerf = 'amarelo';
		} else {
			alPerf = 'verde'
		}

		if (relatorio[t].performance < Config.performance.vermelho) {
			alQual = 'vermelho';
		} else if (relatorio[t].performance < Config.performance.amarelo) {
			alQual = 'amarelo';
		} else {
			alQual = 'verde'
		}
		

		$('#lista-relatorio').append(`
		<tr>
		<td>${relatorio[t].equipamento}</td>
		<td class="text-sm-center">${Math.round(relatorio[t].producao).toFixed(1)}</td>
		<td class="text-sm-center ${alMeta}">${Math.round(relatorio[t].pctmeta).toFixed(1) + " %"}</td>
		<td class="text-sm-center">${relatorio[t].descricao}</td>
		<td class="text-sm-center ${alDip}">${Math.round(relatorio[t].disponibilidade).toFixed(1) + " %"}</td>
		<td class="text-sm-center ${alPerf}">${Math.round(relatorio[t].performance).toFixed(1) + " %"}</td>
		<td class="text-sm-center ${alQual}">${Math.round(relatorio[t].qualidade).toFixed(1) + " %"}</td>
		<td class="text-sm-center ${alOee}">${Math.round(relatorio[t].metaoee).toFixed(1) + " %"}</td>
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