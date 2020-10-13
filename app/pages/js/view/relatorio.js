const alimentaRel = (relatorio) => {
	$('#lista-relatorio').empty()
	for (t in relatorio) {
		eqp.dP = new Date(relatorio[t].inicioparada);

		let alMeta;
		let alOee;

		//IF Baseado na % Meta ou %OEE
		if (Config.pctmeta == true) {
			if (relatorio[t].pctmeta < Config.alertameta.vermelho) {
				alMeta = 'vermelho'
			} else if (relatorio[t].pctmeta < Config.alertameta.amarelo) {
				alMeta = 'amarelo'
			} else {
				alMeta = 'verde'
			}
		} 

		if (Config.pctoee == true) {
			mtOee = Math.abs((relatorio[t].disponibilidade * relatorio[t].performance * relatorio[t].qualidade)/10000).toFixed(1)
			if (mtOee < Config.alertaoee.vermelho) {
				alOee = 'vermelho'
			} else if (mtOee < Config.alertaoee.amarelo) {
				alOee = 'amarelo'
			} else {
				alOee = 'verde'
			}
		}

		if (relatorio[t].inicioparada != null) {
			status = 'Parada'
			bgStatus = 'orange'
		} else {
			status = 'Em operação'
			bgStatus = ''
		}

		if (relatorio[t].tp != null) {
			timeStop = `<td style="background-color: orange;" class="text-sm-center align-middle font-weight-bolder">${relatorio[t].tp}</td>`
		} else {
			timeStop = `<td class="text-sm-center align-middle">-</td>`
		}
		$('#lista-relatorio').append(`
		<tr>
		<td class="align-middle font-weight-bolder">${relatorio[t].equipamento}</td>
		<td class="text-sm-center align-middle font-weight-bolder">${Math.abs(relatorio[t].producao).toFixed(1)} ${relatorio[t].unidade}</td>
		<td class="text-sm-center align-middle font-weight-bolder ${alMeta}">${Math.abs(relatorio[t].pctmeta).toFixed(1) + " %"}</td>
		<td class="text-sm-center align-middle font-weight-bolder ${alOee}">${mtOee} %</td>
		<td class="align-middle font-weight-bolder text-center ${bgStatus}">${status}</td>
		${timeStop}
		<td class="text-sm-center align-middle"><button class="btn btn-block teste" onClick="window.location.href = '../index.html?idMaquina=${relatorio[t].id_equipamento}'">
			<svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-eye" fill="blue" xmlns="http://www.w3.org/2000/svg">
				<path fill-rule="evenodd" d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.134 13.134 0 0 0 1.66 2.043C4.12 11.332 5.88 12.5 8 12.5c2.12 0 3.879-1.168 5.168-2.457A13.134 13.134 0 0 0 14.828 8a13.133 13.133 0 0 0-1.66-2.043C11.879 4.668 10.119 3.5 8 3.5c-2.12 0-3.879 1.168-5.168 2.457A13.133 13.133 0 0 0 1.172 8z"/>
				<path fill-rule="evenodd" d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
			</svg>
		</button></td>
		</tr>`)
	}
}

$(document).ready(() => {
	reqEvenRel();
});
