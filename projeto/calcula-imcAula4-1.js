// Peso / altura * altura

var tdPeso = document.getElementById("peso-1");
var tdAltura = document.getElementById("altura-1");
//
var peso1 = tdPeso.textContent;
var altura1 = tdAltura.textContent;
//
var tdPeso = document.getElementById("peso-2");
var tdAltura = document.getElementById("altura-2");
//
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


var posicaoAtual = 0;

while (posicaoAtual <= pacientes.length - 1) {

	var paciente = pacientes[posicaoAtual];

	if(paciente.altura != 0) {
		var imc = paciente.peso / (paciente.altura * paciente.altura);

		var tdImc = document.getElementById("imc-2");
		tdImc.textContent = imc;

		console.log(imc);
	} else {
		console.log("Não executei porque a altura é igual a zero");
	}

	posicaoAtual++;
}
