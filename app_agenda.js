let botaoAdicionar = document.getElementById('botaoAdicionarServico');

let listaServicoAtuais = document.getElementById('listaServicos');

let botaoAgendar = document.getElementById('botaoAgendarServico');

let testoAgendado = document.getElementById('testoAgendado');

botaoAdicionar.addEventListener('click',AdicionarServicoLista); //Evento ao clicar no botão

botaoAgendar.addEventListener('click',MostrarInformacaoNaPagina);

let InformacoesAgendadasCliente= {
    nome : "",
    telefone :"",
    email :"",
    servico: "",
    data: ""
}




function AdicionarServicoLista(){    // função cria um elemento e colocar ele na lista de serviço usando o que usuario colocal de input 
    
    let textoCaixa = document.getElementById('caixaTextoInputServico').value;  //valor do input do usuario
    
    if(textoCaixa != ""){
    
        let elementoLista = document.createElement('option');  //criação do elemento
        elementoLista.text = textoCaixa;
        elementoLista.id = textoCaixa;
        elementoLista.value = textoCaixa;
        listaServicoAtuais.add(elementoLista, null);          
    
    }else{
        alert("Valor invalido");
    }

}

function MostrarInformacaoNaPagina(){

    InformacoesAgendadasCliente.nome = document.getElementById("nomeDoCliente").value;
    InformacoesAgendadasCliente.telefone = document.getElementById("telefoneDoCliente").value;
    InformacoesAgendadasCliente.email = document.getElementById("emailDoCliente").value;
    InformacoesAgendadasCliente.servico = listaServicoAtuais.value;
    InformacoesAgendadasCliente.data = document.getElementById("dataAgendada").value;

    testoAgendado.textContent = `Cliente de nome ${InformacoesAgendadasCliente.nome} com o telefone ${InformacoesAgendadasCliente.telefone} e com e-mail  ${InformacoesAgendadasCliente.email} está com o serviço de ${InformacoesAgendadasCliente.servico } agendado para o dia ${InformacoesAgendadasCliente.data}`

}



