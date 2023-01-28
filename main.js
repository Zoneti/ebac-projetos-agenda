const form = document.getElementById('form-telefone');
let linhas = '';
const contatos = [];


form.addEventListener('submit',function(e){
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
    atualizaTotalContatos();
});

function adicionaLinha(){
    const inputNomeContato = document.getElementById('nome-contato');
    const inputTelContato = document.getElementById('telefone-contato');
    const contato = inputNomeContato.value + ' ('+inputTelContato.value+')';

    if(contatos.includes(contato)){
        alert(`O contato ${contato} já foi inserido`);
    } else{
        contatos.push(contato);
    
        let linha = '<tr>';
        linha += `<td>${inputNomeContato.value}</td>`;
        linha += `<td>${inputTelContato.value}</td>`;
        linha += `</tr>`;
    
        linhas += linha;

    }

    inputNomeContato.value = '';
    inputTelContato.value = '';

}

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function atualizaTotalContatos(){
    const numContatos =contatos.length;

    document.getElementById('total-contatos').innerHTML = numContatos;
}