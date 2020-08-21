
const alimentaRel = (relatorio) => {
	
	
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
			if (relatorio[t].metaoee < Config.alertaoee.vermelho) {
				alOee = 'vermelho'
			} else if (relatorio[t].metaoee < Config.alertaoee.amarelo) {
				alOee = 'amarelo'
			} else {
				alOee = 'verde'
			}
		}

		if (relatorio[t].inicioparada != null) {
			iconWarning = `${relatorio[t].descricao}<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-exclamation-triangle-fill float-right" fill="orange" xmlns="http://www.w3.org/2000/svg">
			<path fill-rule="evenodd" d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 5zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
		  </svg>`
		} else {
			iconWarning = '-'
		}

		if (relatorio[t].TempoParado != null) {
			timeStop = `<td style="background-color: orange;" class="text-sm-center align-middle font-weight-bolder">${relatorio[t].TempoParado}</td>`
		} else {
			timeStop = `<td class="text-sm-center align-middle">-</td>`
		}

		

		$('#lista-relatorio').append(`
		<tr>
		<td class="align-middle">${relatorio[t].equipamento}</td>
		<td class="text-sm-center align-middle ">${Math.round(relatorio[t].producao).toFixed(1)}</td>
		<td class="text-sm-center align-middle font-weight-bolder ${alMeta}">${Math.round(relatorio[t].pctmeta).toFixed(1) + " %"}</td>
		<td class="text-sm-center align-middle font-weight-bolder ${alOee}">${Math.round(relatorio[t].metaoee).toFixed(1) + " %"}</td>
		<td class="align-middle">${iconWarning}</td>
		${timeStop}
		<td class="text-sm-center align-middle"><a href="javascript:telaoView()">
		<svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-eye" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
			<path fill-rule="evenodd" d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.134 13.134 0 0 0 1.66 2.043C4.12 11.332 5.88 12.5 8 12.5c2.12 0 3.879-1.168 5.168-2.457A13.134 13.134 0 0 0 14.828 8a13.133 13.133 0 0 0-1.66-2.043C11.879 4.668 10.119 3.5 8 3.5c-2.12 0-3.879 1.168-5.168 2.457A13.133 13.133 0 0 0 1.172 8z"/>
			<path fill-rule="evenodd" d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
		  </svg>
	  </a></td>
		</tr>`);
	}

}

 const eqp = {
	 size: 0,
	 dP: new Date(),
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