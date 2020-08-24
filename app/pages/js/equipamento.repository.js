const url = Config.conecta_url+"/equipamentos"
const equipamentos = []
const equipamentoId = []

const request = () => {
	return fetch(url, {
		method: 'GET',
	})
		.then((res) => res.json())
		.then((response) => {
			if (response && Array.isArray(response)) {
				while (equipamentos.length) {
					equipamentos.pop();
				}
				response.forEach(item => {
					equipamentos.push(item);
				});
			}
		});
}

const requestById = (id) => {
	const paramsBusca = new URLSearchParams(url+`/${id}`)
	//Iterar os parâmetros de busca.
	for (let p of paramsBusca) {
		result = p[0]
		result
	}
	return fetch(result, {
		method: 'GET'
	}).then((res) => res.json())
	.then((response) => {
		equipamentoId.push(response);
	})
	.catch(erro => console.error(erro))
}
