const url = "https://localhost:3000"
const equipamentos = []

fetch(url, {
	method: 'GET',
})
	.then((res) => res.json())
	.then((response) => {
		while (equipamentos.length) {
			equipamentos.pop();
		 }
		response.forEach(item => {
			equipamentos.push(item);
		});
  })