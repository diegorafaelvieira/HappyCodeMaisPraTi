function inserir() {
    let pet = document.forms["cadastrar"]["nomePet"].value;
    let dono = document.forms["cadastrar"]["nomeDono"].value;
    let tel = document.forms["cadastrar"]["telefone"].value;
    let data = document.forms["cadastrar"]["data"].value;
   

    let inserir = window.document.getElementById("inserirPet");
    inserir.innerHTML = `<td>${pet}</td>`;
    inserir.innerHTML += `<td>${dono}</td>`;
    inserir.innerHTML += `<td>${tel}</td>`;
    inserir.innerHTML += `<td>${data}</td>`; 

    alert("Pet cadastrado com sucesso!"); // Aviso ao efetuar cadastro

}





