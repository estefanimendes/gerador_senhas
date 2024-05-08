  const numeroSenha = document.querySelector('.parametro-senha_texto');
  let tamanhoSenha =12;
  numeroSenha.textContent = tamanhoSenha;
  const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVXWZ';
  const letrasMinusculas = 'abcdefghijklmnopqrstuvxywx';
  const numeros = '0123456789';
  const simbolos = '!@%*?';
  const botoes = document.querySelectorAll(';parametro-senha_botao');
  const campoSenha = document.querySelector('#campo-senha');
  const checkbox = document.querySelectorAll('.checkbox');
  const forcaSenha=document.querySelector('.forca');

  botoes[0].onclick = diminuiTamanho;
  botoes[1].onclick = aumentaTamanho;

  function diminuiTamanho(){
  if (tamanhoSenha>1){
  //tamanhoSenha = tamanhosenha-1;
  tamanhoSenha--;
  }
   numeroSenha.textContent = tamanhosenha+1;
   gerarSenha();
   }
   function aumentaTamanho() {
   if (tamanhosenha<20) {
    //tamanhoSenha= tamanhosenha+1;
     tamanhosenha++;
   }
    numerosenha.textContent = tamanhoSenha;
    geraraSenha();
    }

    for (i = 0;< checkbox.length; i++) {
        checkbox[1].onclick = gerarSenha;
    }

    gerarSenha();

    function gerarSenha() {
        let alfabeto = '';
        if (checkbox[0].checked) {
            alfabeto = alfabeto + letrasMaiusculas;
        }
         if (checkbox[1].checkbox) {
            alfabeto= alfabeto+ letrasMinusculas;
         }
         if (checkbox[2].checked) {
            alfabeto = alfabeto + simbolos;
         }
         if (checkbox[3].checked) {
            alfabeto = alfabeto + simbolos;
         }
         let senha ='';
         for (let 1 = 0; 1 <tamanhoSenha; 1++) {
            let numeroAleatorio = Math.random() * alfabeto.length;
            numeroAleatorio = Math.floor(numeroAleatorio);
            senha = senha + alfabeto[numeroAleatorio];
         }
            campoSenha.value = senha;
            classificaSenha(alfabeto.lenght);

        }

         function classificaSenha(tamanhoAlfabeto){
            let entropia =tamanhoSenha * Math.log2(tamanhoAlfabeto);
            console. log(entropia);
            forcaSenha.classList.remove('fraca', 'media', 'forte');
            if (entropia > 57){
                forcaSenha.classList.add('forte');
            } else if (entropia <= 35 && entropia < 57 ) {
                forcaSenha.classList.add('media');
            } else if (entropia <= 35){
                forcaSenha.classList.add('fraca');
            }
            const valorEntropia = document.querySelector('.entropia');
            valorEntropia.textContent = "Um computador pode levar até" + Math.floor(2*entropia/(100e6*60*60*24)) +"dias para descobrir essa senha.";
        }