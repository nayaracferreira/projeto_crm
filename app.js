function fncValida(){
    let razaoSocial = document.getElementById("razaoSocial").value;    
    let uf = document.querySelector("#uf");    
        
      if(uf.selectedIndex==0){
        alert('Por favor, selecione o estado (UF)!');
        return false;    
      } 

      let mensagem = document.querySelector("#mensagem");
      mensagem.style.display = '';

      let tituloMensagem = document.querySelector("#tituloMensagem");
      tituloMensagem.innerHTML = 'O cadastro da empresa ' + razaoSocial + " foi concluído com sucesso!" ;  
      
    document.getElementById("paragrafo").innerHTML = `Agora poderá agendar e consultar os horários de seus clientes com mais facilidade, basta clicar em "Entrar" e fazer o seu login`;
    

    }

    let btnEnviar = document.querySelector("#btnEnviar");
    btnEnviar.addEventListener("click", function(){
    fncValida();
  });

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

  
 