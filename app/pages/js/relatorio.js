
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
		<td class="align-middle">${relatorio[t].equipamento}</td>
		<td class="text-sm-center align-middle">${Math.round(relatorio[t].producao).toFixed(1)}</td>
		<td class="text-sm-center align-middle ${alMeta}">${Math.round(relatorio[t].pctmeta).toFixed(1) + " %"}</td>
		<td class="text-sm-center align-middle">${relatorio[t].descricao}</td>
		<td class="text-sm-center align-middle ${alDip}">${Math.round(relatorio[t].disponibilidade).toFixed(1) + " %"}</td>
		<td class="text-sm-center align-middle ${alPerf}">${Math.round(relatorio[t].performance).toFixed(1) + " %"}</td>
		<td class="text-sm-center align-middle ${alQual}">${Math.round(relatorio[t].qualidade).toFixed(1) + " %"}</td>
		<td class="text-sm-center align-middle ${alOee}">${Math.round(relatorio[t].metaoee).toFixed(1) + " %"}</td>
		<td class="text-sm-center align-middle"><button type="button" class="btn btn-info">View</button></td>
		</tr>`);
	}

}

 const eqp = {
 	size: 0,
 };


const reqEventRel = async() => {
	request().then(async() => {
		eqp.size = equipamentos.length;
		alimentaRel(equipamentos);
		if (eqp.size === 0) {
			$('#error').modal('show');
		} else {
			$('#error').modal('hide');
		}
	}).catch (() => {
		$('#error').modal('show');
	});
}

$(document).ready(() => {
	reqEventRel();
});