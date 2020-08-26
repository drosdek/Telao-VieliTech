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