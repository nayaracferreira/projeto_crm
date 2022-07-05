let botaoAdicionar = document.getElementById('botaoAdicionarServico');

let listaServicoAtuais = document.getElementById('listaServicos');

let botaoAgendar = document.getElementById('botaoAgendarServico');

let testoAgendado = document.getElementById('testoAgendado');

let botaoLimpar = document.getElementById('botaoLimpar');

botaoAdicionar.addEventListener('click',AdicionarServicoLista); 

botaoAgendar.addEventListener('click',MostrarInformacaoNaPagina);

botaoLimpar.addEventListener('click',limparMensagem);

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
    InformacoesAgendadasCliente.logradouro = document.getElementById("logradouro").value;
    InformacoesAgendadasCliente.numero = document.getElementById("numero").value;
    InformacoesAgendadasCliente.bairro = document.getElementById("bairro").value;
    InformacoesAgendadasCliente.localidade = document.getElementById("localidade").value;
    InformacoesAgendadasCliente.uf = document.getElementById("uf").value;    
    InformacoesAgendadasCliente.servico = listaServicoAtuais.value;
    InformacoesAgendadasCliente.data = document.getElementById("dataAgendada").value;

    testoAgendado.textContent = `Cliente de nome ${InformacoesAgendadasCliente.nome} com o telefone ${InformacoesAgendadasCliente.telefone} que mora na rua ${InformacoesAgendadasCliente.logradouro}, ${InformacoesAgendadasCliente.numero} no bairro ${InformacoesAgendadasCliente.bairro}, ${InformacoesAgendadasCliente.localidade}, ${InformacoesAgendadasCliente.uf} e com e-mail  ${InformacoesAgendadasCliente.email} está com o serviço de ${InformacoesAgendadasCliente.servico } agendado para o dia ${InformacoesAgendadasCliente.data}`
    
    botaoLimpar.hidden=false;
    testoAgendado.hidden=false;
}

function limparMensagem(){
  botaoLimpar.hidden=true;
  testoAgendado.hidden=true;
}

const cep = document.querySelector("#cep");
  const options = {
    method:'GET',
    mode: 'cors',
    cache: 'default'
  }

  const showData = (result) => {
    for(const campo in result) {
      if(document.querySelector("#"+campo)){
        document.querySelector("#"+campo).value = result[campo];
      }
    }
  }
  cep.addEventListener("blur", (e) => {
    let search = cep.value.replace("-", "");
    console.log(search);
    fetch(`https://viacep.com.br/ws/${search}/json/`, options)
    .then(response =>{
      response.json()
      .then(dados =>{
        document.querySelector("#logradouro").value=dados.logradouro;
        document.querySelector("#localidade").value=dados.localidade;
        document.querySelector("#bairro").value=dados.bairro;
        document.querySelector("#uf").value = dados.uf;
        document.querySelector("#nr_end").focus();
      })
    })
  })

  let foneMask = document.getElementById('telefoneDoCliente');  
  let maskOptions = {
   mask: '+{55}(00)00000-0000'
  }
 
   let mask = IMask(foneMask, maskOptions); 
