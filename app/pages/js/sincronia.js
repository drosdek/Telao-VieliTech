const alimentaDoc = (equipamento) => {
	if (equipamento) {
		if (equipamento.inicioparada && equipamento.inicioparada !== 'null') {
			eqp.dP = new Date(equipamento.inicioparada);
	
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
							<div class="card-body borda alinha-text justify-content-center font-status font-weight-bolder" id="descricao">
								Motivo Parada
							</div>
						</div>
					</div>
				</div>

				<div class="row">
					<div class="col-lg-12 col-md-12 col-sm-12 borda">
						<div style='background-color: orange;' class="card margem font-vieli">
							<div class="card-body borda alinha-text justify-content-center" id="TempoParado">
								<body name="view" onload="setInterval('tempo()',983);return false;">
									<form name="view">
										<input class="cronometro font-weight-bolder" type="text" name="cronometro" />
									</form>
								</body>
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
						<div style='background-color: orange;' class="card margem color-text font-vieli">
							<div class="card-header text-sm-center font-weight-bolder sub-title">% META</div>
							<div class="card-body text-sm-center font-meta font-weight-bolder	" id="pctmeta">
								% Meta
							</div>
						</div>
					</div>
					<div class="col-lg-4 col-md-4 col-sm-4 borda">
						<div style='background-color: orange;' class="card margem color-text font-vieli">
							<div class="card-header text-sm-center font-weight-bolder sub-title">RETRABALHO</div>
							<div class="card-body text-sm-center font-meta font-weight-bolder" id="retrabalho">
								10 %
							</div>
						</div>
					</div>
				</div>
			`);
		} else {
			$('#linha-producao').html(`
				<div class="row align-items-end">
				<div class="col-lg-9 col-md-9 col-sm-9 borda">
					<div style="background-color: green;" class="card color-text font-weight-bolder margem font-vieli">
						<div class="card-body borda alinha-text justify-content-center">
							<div class="col-lg-10 col-md-10 col-sm-10 font-producao" id="producao">
								2000
							</div>
							<div class="col-lg-2 col-md-2 col-sm-2 display-4" id="unidade">
								PC/min
							</div>
						</div>
					</div>
				</div>
				<div class="col-lg-3 col-md-3 col-sm-3 borda">
					<div style="background-color: green;" class="card color-text margem font-vieli">
						<div class="card-header text-sm-center font-weight-bolder sub-title">RITMO - <div id="unidade">
						PC/min
						</div></div>
						<div class="card-body tamanho-font">
							<div class="row">
								<div class="col-sm-5 borda">Atual:</div>
								<div class="col-sm-6 text-sm-right borda font-weight-bolder" id="ritmominuto">10</div>
							</div>
							<div class="row">
								<div class="col-sm-5 borda">Dia:</div>
								<div class="col-sm-6 text-sm-right borda font-weight-bolder" id="ritmodia">240</div>
							</div>
							<div class="row">
								<div class="col-sm-5 borda">Meta:</div>
								<div class="col-sm-6 text-sm-right borda font-weight-bolder" id="ritmometa">300</div>
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
					<div style="background-color: green;" class="card margem color-text font-vieli">
						<div class="card-header text-sm-center font-weight-bolder sub-title">% META</div>
							<div class="card-body text-sm-center font-meta font-weight-bolder" id="pctmeta">
								50 %
							</div>
					</div>
				</div>
				<div class="col-lg-3 col-md-3 col-sm-3 borda">
					<div style="background-color: green;" class="card margem color-text font-vieli">
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
		$('#horaatual').html(new Date(equipamento.horaatual).toLocaleString());
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
		$('#labelparada').html(equipamento.labelparada);
		$('#inicioparada').html(new Date(equipamento.inicioparada).toLocaleString());
		$('#oee').html(Math.round(equipamento.oee).toFixed(1) + " %");
	}
}

const eqp = {
	size: 0,
	index: 0,
	dP: new Date(),
};

const cron = () => {
	const dif = new Date(Math.abs(new Date().getTime() - eqp.dP.getTime()));
	$('#TempoParado').html(`${dif.getDate()} - ${dif.toLocaleTimeString()}`);
	setTimeout(cron, 1000);
}

const reqEven = async () => {
	request().then(async () => {
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
	setTimeout(reqEven, 15000);
}

$(document).ready(() => {
	reqEven();
	cron();
});
