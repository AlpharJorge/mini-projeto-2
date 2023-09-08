
const nomeInput = document.getElementById('nome');
const emailInput = document.getElementById('email');
const cadastrarButton = document.getElementById('cadastrar');
const listaDados = document.getElementById('lista-dados');


const dadosCadastrados = [];


function adicionarDado(nome, email) {
    const novoDado = { nome, email };
    dadosCadastrados.push(novoDado);


    nomeInput.value = '';
    emailInput.value = '';


    atualizarLista();
}

function atualizarLista() {
    listaDados.innerHTML = ''; 

    dadosCadastrados.forEach((dado, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${dado.nome}</span>
            <span>${dado.email}</span>
            <button onclick="editarDado(${index})">Editar</button>
            <button onclick="excluirDado(${index})">Excluir</button>
        `;
        listaDados.appendChild(li);
    });
}


function editarDado(index) {
    const dado = dadosCadastrados[index];

    
    nomeInput.value = dado.nome;
    emailInput.value = dado.email;

    
    dadosCadastrados.splice(index, 1);

    
    atualizarLista();
}


function excluirDado(index) {
    
    dadosCadastrados.splice(index, 1);

    
    atualizarLista();
}


cadastrarButton.addEventListener('click', () => {
    const nome = nomeInput.value.trim();
    const email = emailInput.value.trim();

    if (nome !== '' && email !== '') {
        adicionarDado(nome, email);
    } else {
        alert('Por favor, preencha todos os campos.');
    }
});


atualizarLista();
