// Peso / altura * altura

/*
var tdPeso = document.getElementById("peso-1");
var tdAltura = document.getElementById("altura-1");
var peso1 = tdPeso.textContent;
var altura1 = tdAltura.textContent;
var tdPeso = document.getElementById("peso-2");
var tdAltura = document.getElementById("altura-2");
var peso2 = tdPeso.textContent;
var altura2 = tdAltura.textContent;

//Criando objeto - Chave e valor
var paciente1 = {peso : peso1, altura : altura1};

//Criando objeto - Chave e valor
var paciente2 = {peso : peso2, altura : altura2};

//Arrray
var pacientes = [paciente1, paciente2];

var primeiro = [0];
var segundo = [1];
*/

var trsPacientes = document.getElementsByClassName("paciente");// Array trs

var posicaoAtual = 0;// variavel de controle

while (posicaoAtual <= trsPacientes.length - 1)//condicao {

	var pacienteTr = trsPacientes[posicaoAtual];

	var tdNome = pacienteTr.getElementsByClassName("info-nome")[0];
	var tdPeso = pacienteTr.getElementsByClassName("info-peso")[0];
	var tdAltura = pacienteTr.getElementsByClassName("info-altura")[0]; 

	var paciente = {nome : tdNome.textContent, peso : tdPeso.textContent, altura : tdAltura.textContent}


	if(paciente.altura != 0) {
		var imc = paciente.peso / (paciente.altura * paciente.altura);
		var tdImc = pacienteTr.getElementsByClassName("info-imc")[0];
		tdImc.textContent = imc;

		console.log(imc);
	} else {
		console.log("Não executei porque a altura é igual a zero");
	}

	posicaoAtual++;// incrementar
}
