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
 
