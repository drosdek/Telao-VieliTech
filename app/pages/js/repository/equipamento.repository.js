const url = Config.conecta_url+"/equipamentos"
const equipamentos = []

const request = (paramns='') => {
	return fetch(url + `${paramns}`, {
		method: 'GET',
	})
		.then((res) => res.json())
		// .then((res) => {console.log(res); return res.json()})
		.then((response) => {
			if (response && Array.isArray(response)) {
				while (equipamentos.length) {
					equipamentos.pop();
				}
				response.forEach(item => {
					equipamentos.push(item);
				});
			} else if (response) {
				while (equipamentos.length) {
					equipamentos.pop()
				}
				equipamentos.push(response)
			}
		});
}

/**											*
 *	_____________________________________	*
 *	Evento de requisicao pagina relatorio	*
 *											*/

const reqEvenRel = async() => {
	const paramns = (eqp.id ? '/single/' + eqp.id : '') || (eqp.grupo ? '/group/' + eqp.grupo : '');
	request(paramns).then(async() => {
		eqp.size = equipamentos.length;
		alimentaRel(equipamentos);
		if (eqp.size === 0) {
			$('#error').modal('show');
		} else {
			$('#error').modal('hide');
		}
	}).catch(() => {
		$('#error').modal('show');
	});
	setTimeout(reqEvenRel, Config.tempodetransicao);
}

/**											*
 *	_____________________________________	*
 *	  Evento de requisicao pagina Telao  	*
 *											*/

const reqEvenTel = async() => {
	const paramns = (eqp.id ? '/single/' + eqp.id : '') || (eqp.grupo ? '/group/' + eqp.grupo : '');
	request(paramns).then(async() => {
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
	setTimeout(reqEvenTel, Config.tempodetransicao);
}