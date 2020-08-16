var centesimas = 0;
var segundos = "<?=str_pad($seg, 2, '0', $cronometro);?>";
var minutos = Number("<? echo $cronometroMinuto ?>");
var horas = Number("<? echo $cronometroHora ?>");

function inicio() {
	control = setInterval(cronometro, 10);
}


function cronometro() {
	if (centesimas < 99) {
		centesimas++;
		if (centesimas < 10) { centesimas = "0" + centesimas }
		innerHTML = ":" + centesimas;
	}
	if (centesimas == 99) {
		centesimas = -1;
	}
	if (centesimas == 0) {
		segundos++;
		if (segundos < 10) { segundos = "0" + segundos }
		Segundos.innerHTML = ":" + segundos;
	}
	if (segundos == 59) {
		segundos = -1;
	}
	if ((centesimas == 0) && (segundos == 0)) {
		minutos++;
		if (minutos < 10) { minutos = "0" + minutos }
		Minutos.innerHTML = ":" + minutos;
	}
	if (minutos == 59) {
		minutos = -1;
	}
	if ((centesimas == 0) && (segundos == 0) && (minutos == 0)) {
		horas++;
		if (horas < 10) { horas = "0" + horas }
		Horas.innerHTML = horas;
	 }
}

console.log(segundos)