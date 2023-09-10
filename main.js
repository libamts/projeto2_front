const form = document.getElementById('form-agenda');
const nome = [];
const numero = [];
let linhas = '';
const inputNomeContato = document.getElementById('nome-contato');
const inputNumeroContato = document.getElementById('numero-contato');
const span = document.getElementById("span");

form.addEventListener('submit', function(e){
    e.preventDefault();
    adcionaLinha();
    atualizaTabala()
})

function adcionaLinha(){

    if(nome.includes(inputNomeContato.value)){
        alert(`O contato: ${inputNomeContato.value} já foi cadastrado`)
    } 
    else{
    nome.push(inputNomeContato.value);
    numero.push(inputNumeroContato.value);

    let linha ='<tr>';
    linha +=`<td>${inputNomeContato.value}</td>`;
    linha +=`<td>${inputNumeroContato.value}</td>`;
    linha += '</tr>';

    linhas += linha;

    inputNomeContato.value='';
    inputNumeroContato.value='';

    }}

    function atualizaTabala(){
        const corpoTabela = document.querySelector('tbody');
        corpoTabela.innerHTML = linhas;
        }

    inputNumeroContato.addEventListener('keyup', function(a){
        if(inputNumeroContato.value.length<10){
            inputNumeroContato.classList.add('error')
            span.style.display="block";
        }
        else{
            inputNumeroContato.classList.remove('error')
            span.style.display="none";
        }
    })

