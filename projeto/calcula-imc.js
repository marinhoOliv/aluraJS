// Aula 5.1
//funções

function calculaImc() {
	if(this.altura != 0) {

		var imc = this.peso / (this.altura * this.altura);
		return imc;

	} else {

		console.log("Não executei porque a altura é igual a zero");

	}
}

function imprimeEModificaTdDeImc(pacienteTr){

    var pacienteAtual = montaPaciente(pacienteTr);    
    var imc = pacienteAtual.pegaImc();

    var tdImc = pacienteTr.getElementsByClassName("info-imc")[0]; 
    tdImc.textContent = imc;

    console.log(imc);
}


var botao = document.getElementById("calcula-imcs");
//botao.onclick = calculaTodosImcs;
//botao.onclick = function(){
//	console.log("Calculando imcs");
//}

//botao.addEventListener("click", calculaTodosImcs);
//botao.addEventListener("click", function(){
//	console.log("Calculando imcs");
//});


botao.addEventListener("click", function() {
	// Array trs
	var trsPacientes = document.getElementsByClassName("paciente");

	percorreArray(trsPacientes, imprimeEModificaTdDeImc);
});