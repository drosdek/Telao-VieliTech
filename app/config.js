const Config = {
	metaoee: true, // Marque como false caso trabalhado com PCT de Meta
	pctmeta: false,
	valores: { // Valores para alertas
		vermelho: 65.0, // Valores acima de
		amarelo: 76.0, // Valores acimda de e abaixo do anterior
		verde: 100.0, // Valores abaixo de
	},
	pctretrabalho: true,
	retrabalho: {
		vermelho: 100.0, // Valores acima de
		amarelo: 5.0, // Valores acimda de e abaixo do anterior
		verde: 0.0, // Valores abaixo de
	},
	pctdisponibilidade: true,
	disponibilidade: {
		vermelho: 10.0, // Valores acima de
		amarelo: 20.0, // Valores acimda de e abaixo do anterior
		verde: 100.0, // Valores abaixo de
	},
	pctperformance: true,
	performance: {
		vermelho: 50.0, // Valores acima de
		amarelo: 55.0, // Valores acimda de e abaixo do anterior
		verde: 100.0, // Valores abaixo de
	},
	pctqualidade: true,
	qualidade: {
		vermelho: 50.0, // Valores acima de
		amarelo: 55.0, // Valores acimda de e abaixo do anterior
		verde: 100.0, // Valores abaixo de
	},
	pctoee: true,
	oee: {
		vermelho: 50.0, // Valores acima de
		amarelo: 55.0, // Valores acimda de e abaixo do anterior
		verde: 100.0, // Valores abaixo de
	},
	//Cada segundo = 1000
	tempodetransicao: 15000,
}