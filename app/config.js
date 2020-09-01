const Config = {
	/**
	 * Este arquivo contém as seguintes configurações:
	 * 
	 * * Configuracao de alerta baseado em OEE ou % META
	 * * Configuracao de alerta no indicador Disponibilidade
	 * * Configuracao de alerta no indicador Performance
	 * * Configuracao de alerta no indicador Qualidade
	 * * Configuracao de alerta no indicador Retrabalho
	 * * Configuracao do temporizador de transicao entre telao
	 * 
	 */

	 /**
	  * Aqui e definido se deseja criar o alerta baseado pela % META ou OEE
	  */
	pctmeta: true,// Selecione TRUE para ativar FALSE para desativar
	alertameta: { // Valores para alertas
		vermelho: 2500.0, // Valores abaixo de
		amarelo: 2900.0, // Valores acima do anterior e abaixo de
		verde: 3000.0, // Valores abaixo de
	},

	pctoee: true,// Marque como false caso trabalhado com Meta OEE
	alertaoee: { // Valores para alertas
		vermelho: 45.0, // Valores abaixo de
		amarelo: 65.0, // Valores acima do anterior e abaixo de
		verde: 100.0, // Valores abaixo de
	},

	/** ______________________________________________ */
	/** Area voltada para configuracao dos indicadores */
	//Selecione True para ativar alerta na Disponibilidade
	pctdisponibilidade: true,
	disponibilidade: {
		vermelho: 50.0, // Valores abaixo de
		amarelo: 81.0, // Valores acima do anterior e abaixo de
		verde: 90.0, // Valores acima de
	},
	//Selecione True para ativar alerta na Performance
	pctperformance: true,
	performance: {
		vermelho: 50.0, // Valores abaixo de
		amarelo: 55.0, // Valores acima do anterior e abaixo de
		verde: 100.0, // Valores abaixo de
	},
	//Selecione True para ativar alerta na Performance
	pctqualidade: true,
	qualidade: {
		vermelho: 50.0, // Valores abaixo de
		amarelo: 55.0, // Valores acima do anterior e abaixo de
		verde: 100.0, // Valores abaixo de
	},
	//Selecione True para ativar alerta na OEE
	pctoee: true,
	oee: {
		vermelho: 50.0, // Valores abaixo de
		amarelo: 55.0, // Valores acima do anterior e abaixo de
		verde: 100.0, // Valores abaixo de
	},
	//Selecione True para ativar alerta na Performance
	pctretrabalho: true,
	retrabalho: {
		verde: 0.0, // Valores acima de
		amarelo: 5.0, // Valores acima do anterior e
		vermelho: 100.0, // Valores acima de
	},
	//Selecione o tempo de transicao entre equipamentos, cada segundo = 1000
	tempodetransicao: 5000,
	/**
	 * Defina a URL para conexao com API
	 */
	conecta_url: "http://localhost:8081",

}