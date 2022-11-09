function validaForm() {
	let validaCod = document.forms["cadastrar"]["codigo"].value;
	let validaDat = document.forms["cadastrar"]["data"].value;
	let validaTit = document.forms["cadastrar"]["titulo"].value;
	let validaDir = document.forms["cadastrar"]["diretor"].value;
	let validaAto = document.forms["cadastrar"]["ator"].value;
	let validaNot = document.forms["cadastrar"]["nota"].value;
	let validaRad = document.forms["cadastrar"]["radio"].value;

	if (validaCod == "") {
		alert("o código deve ser preenchido!");
		return false;
	}

	if (validaDat == "") {
		alert("a data deve ser preenchida!");
		return false;
	}

	if (validaTit == "") {
		alert("o título deve ser preenchido!");
		return false;
	}

	if (validaDir == "") {
		alert("o diretor deve ser preenchido!");
		return false;
	}

	if (validaAto == "") {
		alert("o ator/atriz deve ser preenchido!");
		return false;
	}

	if (validaNot == "") {
		alert("a nota deve ser preenchida!");
		return false;
	}

	if (validaRad == "") {
		alert("o gênero deve ser marcado!");
		return false;
	}

}


function insere() {
	let codi = document.forms["cadastrar"]["codigo"].value;
	let data = document.forms["cadastrar"]["data"].value;
	let titu = document.forms["cadastrar"]["titulo"].value;
	let dire = document.forms["cadastrar"]["diretor"].value;
	let ator = document.forms["cadastrar"]["ator"].value;
	let nota = document.forms["cadastrar"]["nota"].value;
	let radi = document.forms["cadastrar"]["radio"].value;

	let inserir = window.document.getElementById("inserirTabela");
	inserir.innerHTML = `<th scope="col"> ${codi} </th>`;
	inserir.innerHTML +=	`<td>${titu}</td>`;
	inserir.innerHTML +=	`<td>${dire}</td>`;
	inserir.innerHTML +=	`<td>${data}</td>`;
	inserir.innerHTML +=	`<td>${radi}</td>`;
	inserir.innerHTML +=	`<td>${ator}</td>`;
	inserir.innerHTML +=	`<td>${nota}</td>`;
	
}