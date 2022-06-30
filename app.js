  let foneMask = document.getElementById('fone');
  let pessoalMask = document.getElementById('fonePessoal')
  let maskOptions = {
   mask: '+{55}(00)00000-0000'
  }
 let maskpOptions = {
  maskp: '+{55}(00)00000-0000'
   };
   let mask = IMask(foneMask, maskOptions); 
   let maskp = IMask(pessoalMask, maskOptions); 
   
let patternMask = IMask(cnpj, {
   mask: '00.000.000/0000-00'
   });

function funcConfirmar() {
     if (confirm("Deseja confirmar o cadastro?") == true) {
     window.alert('Seu cadastro foi concluído com sucesso!');
     return true;
     }
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
 
