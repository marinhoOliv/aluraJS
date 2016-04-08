// Aula 5.3
//funções

var trsPacientes = document.getElementsByClassName("paciente");// trs array

percorreArray(trsPacientes, imprimeNome);

function imprimeNome(pacienteTr) { 

	var pacienteAtual = montaPaciente(pacienteTr); 
	console.log(pacienteAtual.nome);

}
