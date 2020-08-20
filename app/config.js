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
	  * Para que funcione corretamente apenas uma das duas opcoes pode receber TRUE
	  */
	metaoee: true, // Marque como false caso trabalhado com PCT de Meta
	pctmeta: true,// Marque como false caso trabalhado com Meta OEE
	valores: { // Valores para alertas
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
		amarelo: 60.0, // Valores acima do anterior e abaixo de
		verde: 80.0, // Valores acima de
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
	 * Defina a URL para conexao
	 */
	conecta_url: "http://localhost:8081",

}