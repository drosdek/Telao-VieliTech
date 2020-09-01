const alimentaDoc = (equipamento) => {
	if (equipamento) {
		if (equipamento.inicioparada && equipamento.inicioparada !== 'null') {
			eqp.dP = new Date(equipamento.inicioparada);

			$('#lista-header').html(`
			<div class="row">
				<div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
					<div class="card background-parada font-title-telao">
						<div class="card-body pt-md-0 pb-md-0">
							<div class="col-lg-7 col-md-12 col-sm-12 float-left font-weight-bolder text-lg-left text-md-center text-sm-center font-title-telao" id="equipamento">
								NOME EQUIPAMENTO
							</div>
							<div class="col-lg-5 col-md-12 col-sm-12 float-right font-title font-weight-bolder text-lg-right text-md-center text-sm-center font-time-telao" id="horaatual">
								00/00/0000 - 00:00:00
							</div>
						</div>
					</div>
				</div>
			</div>
			`);

			$('#linha-producao').html(`
			<div class="row">
				<div class="col-lg-12 col-md-12 col-sm-12 mt-1">
					<div class="card background-parada">
						<div class="card-body text-center">
							<span class="font-parada-producao font-weight-bolder">PARADA DESDE: </span>
							<span class="font-parada-date font-weight-bolder" id="inicioparada">00/00/0000 00:00:00</span>
						</div>
					</div>
				</div>
			</div>

			<div class="row">
				<div class="col-lg-12 col-md-12 col-sm-12 mt-1">
					<div class="card background-parada text-center">
						<div class="card-body pt-0 pb-0">
							<span id="TempoParado" class="font-weight-bolder font-cronometro"> 00:00:00 </span>
						</div>
					</div>
				</div>
			</div>

			<div class="row font-weight-bolder">
				<div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 mt-1 pr-md-0">
					<div class="card background-parada text-center">
						<div class="card-header font-header-card">PRODUZIDO</div>
						<div class="card-body font-indicadores pt-0 pb-0 pt-lg-2 pb-lg-2" id="producao">00000,0</div>
					</div>
				</div>
				<div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 mt-1 pr-md-1 pl-md-1">
					<div class="card background-parada text-center alertaMeta">
						<div class="card-header font-header-card">% META</div>
						<div class="card-body font-indicadores pt-0 pb-0 pt-lg-2 pb-lg-2" id="pctmeta">000,0 %</div>
					</div>
				</div>
				<div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 mt-1 pl-md-0">
					<div class="card background-parada text-center alertaRetrabalho">
						<div class="card-header font-header-card">RETRABALHO</div>
						<div class="card-body font-indicadores pt-0 pb-0 pt-lg-2 pb-lg-2" id="pctretrabalho">000,0 %</div>
					</div>
				</div>
			</div>
			`);
		} else {
			$('#lista-header').html(`
			<div class="row">
				<div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
					<div class="card default font-title-telao alertaMeta">
						<div class="card-body pt-md-0 pb-md-0">
							<div class="col-lg-7 col-md-12 col-sm-12 float-left font-weight-bolder text-lg-left text-md-center text-sm-center font-title-telao" id="equipamento">
								NOME EQUIPAMENTO
							</div>
							<div class="col-lg-5 col-md-12 col-sm-12 float-right font-title font-weight-bolder text-lg-right text-md-center text-sm-center font-time-telao" id="horaatual">
								00/00/0000 - 00:00:00
							</div>
						</div>
					</div>
				</div>
			</div>
			`);
			$('#linha-producao').html(`
			<div class="row">
				<div class="col-xl-9 col-lg-9 col-md-12 col-sm-12 mt-1 pr-lg-0">
					<div class="card default alertaMeta">
						<div class="card-body pt-0 pb-0">
							<span class="font-indicador-producao font-weight-bolder" id="producao">00000,0</span>
							<span class="font-um-producao ml-5 font-weight-bolder" id="unidade">UM</span>
						</div>
					</div>
				</div>

				<div class="col-xl-3 col-lg-3 col-md-12 col-sm-12 mt-1 pl-lg-1">
					<div class="card default h-100 alertaMeta">
						<div class="card-header font-header-card justify-content-center">
							<div class="row justify-content-center">
								<span>RITMO - <span id="unidades">UM</span></span>
							</div>
						</div>
						<div class="card-body font-ritmo-producao">
							<div class="row pt-lg-2">
								<div class="col-sm-6 borda">Atual:</div>
								<div class="col-sm-6 text-sm-right font-weight-bolder" id="ritmominuto">00000.0</div>
							</div>
							<div class="row pt-lg-2">
								<div class="col-sm-6 borda">Dia:</div>
								<div class="col-sm-6 text-sm-right font-weight-bolder" id="ritmodia">00000.0</div>
							</div>
							<div class="row pt-lg-2">
								<div class="col-sm-6 borda">Meta:</div>
								<div class="col-sm-6 text-sm-right font-weight-bolder" id="ritmometa">00000.0</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="row font-weight-bolder">
				<div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 mt-1 pr-md-0">
					<div class="card default text-center alertaMeta">
						<div class="card-header font-header-card">META</div>
						<div class="card-body font-indicadores pt-0 pb-0 pt-lg-2 pb-lg-2" id="metaatual">000,0 %</div>
					</div>
				</div>
				<div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 mt-1 pr-md-1 pl-md-1">
					<div class="card default text-center alertaMeta">
						<div class="card-header font-header-card">% META</div>
						<div class="card-body font-indicadores pt-0 pb-0 pt-lg-2 pb-lg-2" id="pctmeta">000,0 %</div>
					</div>
				</div>
				<div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 mt-1 pl-md-0">
					<div class="card default text-center alertaRetrabalho">
						<div class="card-header font-header-card">RETRABALHO</div>
						<div class="card-body font-indicadores pt-0 pb-0 pt-lg-2 pb-lg-2" id="pctretrabalho">000,0 %</div>
					</div>
				</div>
			</div>
			`);
		}

		$('#equipamento').html(equipamento.equipamento);
		$('#producao').html(Math.abs(equipamento.producao).toFixed(1));
		$('#ritmominuto').html(Math.abs(equipamento.ritmominuto).toFixed(1));
		$('#ritmodia').html(Math.abs(equipamento.ritmodia).toFixed(1));
		$('#ritmometa').html(Math.abs(equipamento.ritmometa).toFixed(1));
		$('#metaatual').html(Math.abs(equipamento.metaatual).toFixed(1));
		$('#pctmeta').html(Math.abs(equipamento.pctmeta).toFixed(1) + " %");
		$('#retrabalho').html(Math.abs((equipamento.retrabalho/equipamento.producao)*100).toFixed(1) + " %");
		$('#disponibilidade').html(Math.abs(equipamento.disponibilidade).toFixed(1) + " %");
		$('#performance').html(Math.abs(equipamento.performance).toFixed(1) + " %");
		$('#qualidade').html(Math.abs(equipamento.qualidade).toFixed(1) + " %");
		$('#unidade').html(equipamento.unidade);
		$('#unidades').html(equipamento.unidade);
		$('#labelparada').html(equipamento.labelparada);
		$('#inicioparada').html(new Date(equipamento.inicioparada).toLocaleString('pt-br'));
		$('#oee').html(Math.abs	((equipamento.disponibilidade*equipamento.performance*equipamento.qualidade)/10000).toFixed(1) + " %");
		$('#motivoparada').html(equipamento.descricao);

		//IF Baseado na % Meta
		if (Config.pctmeta == true) {
			if (equipamento.pctmeta < Config.alertameta.vermelho) {
				$(".alertaMeta").css({
					backgroundColor: "red",
					color: "white"
				});
			} else if (equipamento.pctmeta < Config.alertameta.amarelo) {
				$(".alertaMeta").css({
					backgroundColor: "yellow",
					color: "black"
				});
			} else {
				$(".alertaMeta").css({
					backgroundColor: "green",
					color: "white"
				});
			}
		} 
		if (Config.pctoee == true) {
			if (equipamento.metaoee < Config.alertaoee.vermelho) {
				$(".alertaOee").css({
					backgroundColor: "red",
					color: "white"
				});
			} else if (equipamento.metaoee < Config.alertaoee.amarelo) {
				$(".alertaOee").css({
					backgroundColor: "yellow",
					color: "black"
				});
			} else {
				$(".alertaOee").css({
					backgroundColor: "green",
					color: "white"
				});
			}
		}

		// IF baseado no Retrabalho
		if (Config.pctretrabalho == true) {
			if (equipamento.retrabalho <= Config.retrabalho.verde) {
				$(".alertaRetrabalho").css({
					backgroundColor: "green",
					color: "white"
				});
			} else if (equipamento.retrabalho >= Config.retrabalho.vermelho) {
				$(".alertaRetrabalho").css({
					backgroundColor: "red",
					color: "white"
				});
			} else if (equipamento.retrabalho >= Config.retrabalho.amarelo) {
				$(".alertaRetrabalho").css({
					backgroundColor: "yellow",
					color: "black"
				});
			}
		}

		// IF baseado na Disponibilidade
		if (Config.pctdisponibilidade == true) {
			if (equipamento.disponibilidade < Config.disponibilidade.vermelho) {
				$(".alertaDisponibilidade").css({
					backgroundColor: "red",
					color: "white"
				});
			} else if (equipamento.disponibilidade < Config.disponibilidade.amarelo) {
				$(".alertaDisponibilidade").css({
					backgroundColor: "yellow",
					color: "black"
				});
			} else {
				$(".alertaDisponibilidade").css({
					backgroundColor: "green",
					color: "white"
				});
			}
		}

		// IF baseado na Performance
		if (Config.pctperformance == true) {
			if (equipamento.performance < Config.performance.vermelho) {
				$(".alertaPerformance").css({
					backgroundColor: "red",
					color: "white"
				});
			} else if (equipamento.performance < Config.performance.amarelo) {
				$(".alertaPerformance").css({
					backgroundColor: "yellow",
					color: "black"
				});
			} else {
				$(".alertaPerformance").css({
					backgroundColor: "green",
					color: "white"
				});
			}
		}

		// IF baseado na Qualidade
		if (Config.pctqualidade == true) {
			if (equipamento.qualidade < Config.qualidade.vermelho) {
				$(".alertaQualidade").css({
					backgroundColor: "red",
					color: "white"
				});
			} else if (equipamento.qualidade < Config.qualidade.amarelo) {
				$(".alertaQualidade").css({
					backgroundColor: "yellow",
					color: "black"
				});
			} else {
				$(".alertaQualidade").css({
					backgroundColor: "green",
					color: "white"
				});
			}
		}

		// IF baseado na OEE
		if (Config.pctoee == true) {
			pctoee = ((equipamento.disponibilidade * equipamento.performance * equipamento.qualidade)/10000)
			if (pctoee < Config.oee.vermelho) {
				$(".alertaPctOee").css({
					backgroundColor: "red",
					color: "white"
				});
			} else if (pctoee < Config.oee.amarelo) {
				$(".alertaPctOee").css({
					backgroundColor: "yellow",
					color: "black"
				});
			} else {
				$(".alertaPctOee").css({
					backgroundColor: "green",
					color: "white"
				});
			}
		}
	}
}



const eqp = {
	size: 0,
	index: 0,
	dP: new Date(),
	id: null,
	grupo: null,
};

const cron = () => {
	const dif = new Date(new Date().getTime() - eqp.dP.getTime());
	var milliseconds = parseInt((dif % 1000) / 100),
	seconds = Math.floor((dif / 1000) % 60),
	minutes = Math.floor((dif / (1000 * 60)) % 60),
	hours = Math.floor((dif / (1000 * 60 * 60)) % 999);

	hours = (hours < 10) ? "0" + hours : hours;
	minutes = (minutes < 10) ? "0" + minutes : minutes;
	seconds = (seconds < 10) ? "0" + seconds : seconds;

	$('#TempoParado').html(`${hours}:${minutes}:${seconds}`);
	setTimeout(cron, 1000);
}

const horaAtual = () => {
	const horaatual = new Date();
	$('#horaatual').html(`${horaatual.toLocaleDateString('pt-br')} - ${horaatual.toLocaleTimeString('pt-br')}`);
	setTimeout(horaAtual, 1000);
}

const leUrl = () => {
	const urlParams = new URLSearchParams(window.location.search);

	if (urlParams.get('idMaquina') != null) {
		eqp.id = urlParams.get('idMaquina')
	} else if (urlParams.get('vgGrupoMaquina') != null) {
		eqp.grupo = urlParams.get('vgGrupoMaquina')
	}

	urlParams.get('idMaquina')
	urlParams.get('vgGrupoMaquina')
}

$(document).ready(() => {
	leUrl();
	reqEvenTel();
	cron();
	horaAtual();
});