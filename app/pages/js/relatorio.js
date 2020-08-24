
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
		<td class="text-sm-center align-middle"><button class="btn btn-primary teste" onClick="teste(${relatorio[t].id_equipamento})">
			<svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-eye" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
				<path fill-rule="evenodd" d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.134 13.134 0 0 0 1.66 2.043C4.12 11.332 5.88 12.5 8 12.5c2.12 0 3.879-1.168 5.168-2.457A13.134 13.134 0 0 0 14.828 8a13.133 13.133 0 0 0-1.66-2.043C11.879 4.668 10.119 3.5 8 3.5c-2.12 0-3.879 1.168-5.168 2.457A13.133 13.133 0 0 0 1.172 8z"/>
				<path fill-rule="evenodd" d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
			</svg>
		</button></td>
		</tr>`);
	}

}

const teste = (x) => {
	capturaEquipamentoId(x)
	console.log(geraTela(equipamentoId))
	
}

const geraTela = (testera) => {

	for (t in testera){
		$('#teste').html(`
			<body>

			<div class="container">
				
				<header id="lista-header">
					<div class="row">
						<div class="col-lg-12 col-md-12 col-sm-12 borda">
							<div style='background-color: green;' class="card color-text margem font-vieli">
								<div class="card-body">
									<div class="float-sm-left font-title font-weight-bolder text-sm-center" id="equipamento">
										NOME EQUIPAMENTO
									</div>
									<div class="float-sm-right font-title font-weight-bolder text-sm-center" id="horaatual">
										HORA ATUAL
									</div>
								</div>
							</div>
						</div>
					</div>
				</header>

				<div class="modal fade" id="erro" tabindex="-1">
					<div class="modal-dialog modal-dialog-centered modal-xl" role="dialog">
						<div class="modal-content">
							<div style="background-color: orange; color: white;"  class="modal-header">
								<h5 class="modal-title font-weight-bolder font-title">Atencao!</h5>
								<button type="button" class="close" data-dismiss="modal" aria-label="Close">
									<span aria-hidden="true">&times;</span>
								</button>
							</div>
							<div class="modal-body font-indicadores text-sm-center">
								Nao foi encontrado nenhum equipamento conectado, ou servidor esta fora!
							</div>
						</div>
					</div>
				</div>

				<section id="linha-producao">
					<div class="row align-items-end">
						<div class="col-lg-9 col-md-9 col-sm-9 borda">
							<div style='background-color: green;' class="card color-text font-weight-bolder margem font-vieli">
								<div class="card-body borda alinha-text justify-content-center">
									<div class="col-lg-10 col-md-10 col-sm-10 font-producao" id="producao">
										0
									</div>
									<div class="col-lg-2 col-md-2 col-sm-2 display-4" id="unidade">
										UM
									</div>
								</div>
							</div>
						</div>
						<div class="col-lg-3 col-md-3 col-sm-3 borda">
							<div style='background-color: green;' class="card color-text margem font-vieli">
								<div class="card-header text-sm-center font-weight-bolder sub-title">RITMO - <div id="unidade">
										UM</div>
								</div>
								<div class="card-body tamanho-font">
									<div class="row">
										<div class="col-sm-5 borda">Atual:</div>
										<div class="col-sm-6 text-sm-right borda font-weight-bolder" id="ritmominuto">0</div>
									</div>
									<div class="row">
										<div class="col-sm-5 borda">Dia:</div>
										<div class="col-sm-6 text-sm-right borda font-weight-bolder" id="ritmodia">0</div>
									</div>
									<div class="row">
										<div class="col-sm-5 borda">Meta:</div>
										<div class="col-sm-6 text-sm-right borda font-weight-bolder" id="ritmometa">0</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div class="row">
						<div class="col-lg-5 col-md-5 col-sm-5 borda">
							<div style='background-color: green;' class="card margem color-text font-vieli">
								<div class="card-header text-sm-center font-weight-bolder sub-title">META</div>
								<div class="card-body text-sm-center font-meta font-weight-bolder" id="metaatual">
									0
								</div>
							</div>
						</div>
						<div class="col-lg-4 col-md-4 col-sm-4 borda">
							<div style='background-color: green;' class="card margem color-text font-vieli">
								<div class="card-header text-sm-center font-weight-bolder sub-title">% META</div>
								<div class="card-body text-sm-center font-meta font-weight-bolder" id="pctmeta">
									0 %
								</div>
							</div>
						</div>
						<div class="col-lg-3 col-md-3 col-sm-3 borda">
							<div style='background-color: green;' class="card margem color-text font-vieli">
								<div class="card-header text-sm-center font-weight-bolder sub-title">RETRABALHO</div>
								<div class="card-body text-sm-center font-meta font-weight-bolder" id="pctretrabalho">
									0 %
								</div>
							</div>
						</div>
					</div>
				</section>

				<footer>
					<div class="row">
						<div class="col-lg-3 col-md-3 col-sm-3 borda">
							<div style='background-color: green;' class="card margem color-text font-vieli alertaDisponibilidade">
								<div class="card-header text-sm-center font-weight-bolder sub-title">Disponibilidade</div>
								<div class="card-body text-sm-center font-indicadores font-weight-bolder" id="disponibilidade">
									0 %
								</div>
							</div>
						</div>
						<div class="col-lg-3 col-md-3 col-sm-3 borda">
							<div style='background-color: green;' class="card margem color-text font-vieli alertaPerformance">
								<div class="card-header text-sm-center font-weight-bolder sub-title">Performance</div>
								<div class="card-body text-sm-center font-indicadores font-weight-bolder" id="performance">
									0 %
								</div>
							</div>
						</div>
						<div class="col-lg-3 col-md-3 col-sm-3 borda">
							<div style='background-color: green;' class="card margem color-text font-vieli alertaQualidade">
								<div class="card-header text-sm-center font-weight-bolder sub-title">Qualidade</div>
								<div class="card-body text-sm-center font-indicadores font-weight-bolder " id="qualidade">
									0 %
								</div>
							</div>
						</div>
						<div class="col-lg-3 col-md-3 col-sm-3 borda">
							<div style='background-color: green;' class="card margem color-text font-vieli alertaOee alertaPctOee">
								<div class="card-header text-sm-center font-weight-bolder sub-title">OEE</div>
								<div class="card-body text-sm-center font-indicadores font-weight-bolder" id="oee">
									0 %
								</div>
							</div>
						</div>
					</div>
					<div class="float-sm-right">
						<img class="logo" src="../assets/img/logo/vieli.svg" alt="Logo" title="Vieli Tech">
					</div>
				</footer>
			</div>
			</body>
		`)
		$('#equipamento').html(testera[t].equipamento);
		$('#producao').html(Math.round(testera[t].producao).toFixed(1));
		$('#ritmominuto').html(Math.round(testera[t].ritmominuto).toFixed(1));
		$('#ritmodia').html(Math.round(testera[t].ritmodia).toFixed(1));
		$('#ritmometa').html(Math.round(testera[t].ritmometa).toFixed(1));
		$('#metaatual').html(Math.round(testera[t].metaatual).toFixed(1));
		$('#pctmeta').html(Math.round(testera[t].pctmeta).toFixed(1) + " %");
		$('#retrabalho').html(Math.round(testera[t].retrabalho).toFixed(1) + " %");
		$('#disponibilidade').html(Math.round(testera[t].disponibilidade).toFixed(1) + " %");
		$('#performance').html(Math.round(testera[t].performance).toFixed(1) + " %");
		$('#qualidade').html(Math.round(testera[t].qualidade).toFixed(1) + " %");
		$('#unidade').html(testera[t].unidade);
		$('#unidades').html(testera[t].unidade);
		$('#labelparada').html(testera[t].labelparada);
		$('#inicioparada').html(new Date(testera[t].inicioparada).toLocaleString());
		$('#oee').html(Math.round(testera[t].metaoee).toFixed(1) + " %");
		$('#motivoparada').html(testera[t].descricao);

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