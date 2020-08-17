const url = "http://localhost:8081/equipamentos"
const equipamentos = []

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