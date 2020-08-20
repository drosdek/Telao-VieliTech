const alimentaDoc = (equipamento) => {
	if (equipamento) {
		if (equipamento.inicioparada && equipamento.inicioparada !== 'null') {
			eqp.dP = new Date(equipamento.inicioparada);

			$('#lista-header').html(`
				<div class="row">
				<div class="col-lg-12 col-md-12 col-sm-12 borda">
					<div style='background-color: orange; color: black' class="card color-text margem font-vieli">
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
			`);

			$('#linha-producao').html(`
				<div class="row">
					<div class="col-lg-6 col-md-6 col-sm-6 borda">
						<div style='background-color: orange;' class="card margem font-vieli">
							<div class="card-body borda alinha-text justify-content-center">
								<div class="font-status"><b>PARADA DESDE: </b></div> 
								<div class="font-status" id="inicioparada">
									Parada Desde
								</div>
							</div>
						</div>
					</div>
					<div class="col-lg-6 col-md-6 col-sm-6 borda">
						<div style='background-color: orange;' class="card margem font-vieli">
							<div class="card-body borda alinha-text justify-content-center font-status font-weight-bolder" id="motivoparada">
								Motivo Parada
							</div>
						</div>
					</div>
				</div>

				<div class="row">
					<div class="col-lg-12 col-md-12 col-sm-12 borda">
						<div style='background-color: orange;' class="card margem font-vieli">
							<div class="card-body borda alinha-text justify-content-center">
								<div id="TempoParado" class="font-weight-bolder cronometro"> 00:00:00 </div>
							</div>
						</div>
					</div>
				</div>

				<div class="row">
					<div class="col-lg-4 col-md-4 col-sm-4 borda">
						<div style='background-color: orange;' class="card margem font-vieli">
							<div class="card-header text-sm-center font-weight-bolder sub-title">PRODUZIDO</div>
							<div class="card-body text-sm-center font-meta font-weight-bolder" id="producao">
								Produzido
							</div>
						</div>
					</div>
					<div class="col-lg-4 col-md-4 col-sm-4 borda">
						<div class="card margem color-text font-vieli alertaMeta">
							<div class="card-header text-sm-center font-weight-bolder sub-title">% META</div>
							<div class="card-body text-sm-center font-meta font-weight-bolder	pctmeta" id="pctmeta">
								% Meta
							</div>
						</div>
					</div>
					<div class="col-lg-4 col-md-4 col-sm-4 borda">
						<div style='background-color: orange;' class="card margem color-text font-vieli alertaRetrabalho">
							<div class="card-header text-sm-center font-weight-bolder sub-title">RETRABALHO</div>
							<div class="card-body text-sm-center font-meta font-weight-bolder" id="retrabalho">
								10 %
							</div>
						</div>
					</div>
				</div>
			`);
		} else {
			$('#lista-header').html(`
				<div class="row">
				<div class="col-lg-12 col-md-12 col-sm-12 borda font-title ">
					<div style='background-color: green;' class="card color-text margem font-vieli">
						<div class="card-body">
							<div class="float-sm-left font-weight-bolder text-sm-center" id="equipamento">
								NOME EQUIPAMENTO
							</div>
							<div class="float-sm-right font-weight-bolder text-sm-center" id="horaatual">
								HORA ATUAL
							</div>
						</div>
					</div>
				</div>
				</div>
			`);
			$('#linha-producao').html(`
				<div class="row">
					<div class="col-lg-9 col-md-9 col-sm-9 borda">
						<div style="background-color: green;" class="card color-text font-weight-bolder margem font-vieli">
							<div class="card-body borda alinha-text justify-content-center">
								<div class="col-lg-8 col-md-8 col-sm-8 font-producao" id="producao">
									2000
								</div>
								<div class="col-lg-3 col-md-3 col-sm-3 font-weight-bolder font-um-producao" id="unidade">
									UM
								</div>
							</div>
						</div>
					</div>
					<div class="col-lg-3 col-md-3 col-sm-3 borda">
						<div style="background-color: green;" class="card color-text margem font-vieli">
							<div class="card-header font-weight-bolder sub-title">
								<div class="row justify-content-center">
									<div class="float-sm-left">RITMO - <div class="float-sm-right" id="unidades">PC/min</div>
									</div>
								</div>
							</div>
							<div class="card-body tamanho-font">
								<div class="row justify-content-center">
									<div class="col-sm-5 borda">Atual:</div>
									<div class="col-sm-4 text-sm-right borda font-weight-bolder" id="ritmominuto">10</div>
								</div>								
								<div class="row justify-content-center">
									<div class="col-sm-5 borda">Dia:</div>
									<div class="col-sm-4 text-sm-right borda font-weight-bolder" id="ritmodia">240</div>
								</div>
								<div class="row justify-content-center">
									<div class="col-sm-5 borda">Meta:</div>
									<div class="col-sm-4 text-sm-right borda font-weight-bolder" id="ritmometa">300</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			<div class="row">
				<div class="col-lg-5 col-md-5 col-sm-5 borda">
					<div style="background-color: green;" class="card margem color-text font-vieli">
						<div class="card-header text-sm-center font-weight-bolder sub-title">META</div>
							<div class="card-body text-sm-center font-meta font-weight-bolder" id="metaatual">
								1000
							</div>
					</div>
				</div>
				<div class="col-lg-4 col-md-4 col-sm-4 borda">
					<div style="background-color: green;" class="card margem color-text font-vieli alertaMeta">
						<div class="card-header text-sm-center font-weight-bolder sub-title">% META</div>
							<div class="card-body text-sm-center font-meta font-weight-bolder" id="pctmeta">
								50 %
							</div>
					</div>
				</div>
				<div class="col-lg-3 col-md-3 col-sm-3 borda">
					<div style="background-color: green;" class="card margem color-text font-vieli alertaRetrabalho">
						<div class="card-header text-sm-center font-weight-bolder sub-title">RETRABALHO</div>
							<div class="card-body text-sm-center font-meta font-weight-bolder" id="retrabalho">
								10 %
							</div>
					</div>
				</div>
			</div>
			`);
		}

		$('#equipamento').html(equipamento.equipamento);
		$('#producao').html(Math.round(equipamento.producao).toFixed(1));
		$('#ritmominuto').html(Math.round(equipamento.ritmominuto).toFixed(1));
		$('#ritmodia').html(Math.round(equipamento.ritmodia).toFixed(1));
		$('#ritmometa').html(Math.round(equipamento.ritmometa).toFixed(1));
		$('#metaatual').html(Math.round(equipamento.metaatual).toFixed(1));
		$('#pctmeta').html(Math.round(equipamento.pctmeta).toFixed(1) + " %");
		$('#retrabalho').html(Math.round(equipamento.retrabalho).toFixed(1) + " %");
		$('#disponibilidade').html(Math.round(equipamento.disponibilidade).toFixed(1) + " %");
		$('#performance').html(Math.round(equipamento.performance).toFixed(1) + " %");
		$('#qualidade').html(Math.round(equipamento.qualidade).toFixed(1) + " %");
		$('#unidade').html(equipamento.unidade);
		$('#unidades').html(equipamento.unidade);
		$('#labelparada').html(equipamento.labelparada);
		$('#inicioparada').html(new Date(equipamento.inicioparada).toLocaleString());
		$('#oee').html(Math.round(equipamento.metaoee).toFixed(1) + " %");
		$('#motivoparada').html(equipamento.descricao);

		//IF Baseado na % Meta ou %OEE
		if (Config.metaoee == true) {
			if (equipamento.pctmeta < Config.valores.vermelho) {
				$(".alertaMeta").css({
					backgroundColor: "red",
					color: "white"
				});
			} else if (equipamento.pctmeta < Config.valores.amarelo) {
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
		} else {
			if (equipamento.metaoee < Config.valores.vermelho) {
				$(".alertaOee").css({
					backgroundColor: "red",
					color: "white"
				});
			} else if (equipamento.metaoee < Config.valores.amarelo) {
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
			if (equipamento.oee < Config.oee.vermelho) {
				$(".alertaPctOee").css({
					backgroundColor: "red",
					color: "white"
				});
			} else if (equipamento.oee < Config.oee.amarelo) {
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
};

const cron = () => {
	const dif = new Date(Math.abs(new Date().getTime() - eqp.dP.getTime()));
	$('#TempoParado').html(`${dif.getDate()} Dias - ${dif.toLocaleTimeString()}`);
	setTimeout(cron, 1000);
}

const horaAtual = () => {
	const horaatual = new Date();
	$('#horaatual').html(`${horaatual.toLocaleDateString()} - ${horaatual.toLocaleTimeString()}`);
	setTimeout(horaAtual, 1000);
}

const reqEven = async() => {
	request().then(async() => {
		eqp.size = equipamentos.length;
		alimentaDoc(equipamentos[eqp.index]);
		eqp.index = eqp.index === (eqp.size - 1) ? 0 : eqp.index += 1;
		if (eqp.size === 0) {
			$('#erro').modal('show');
		} else {
			$('#erro').modal('hide');
		}
	}).catch(() => {
		$('#erro').modal('show');
	});
	setTimeout(reqEven, Config.tempodetransicao);
	}

$(document).ready(() => {
	reqEven();
	cron();
	horaAtual();
});