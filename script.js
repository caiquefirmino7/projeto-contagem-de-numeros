    function contar(){
    let inputInicio = document.querySelector('input#inputInicio');
    let inputFim = document.querySelector('input#inputFim');
    let inputPasso = document.querySelector('input#inputPasso');
    let resposta = document.querySelector('div#resposta');
    resposta.innerText = '';

    if(inputInicio.value.length == 0|| inputFim.value.length == 0 || inputPasso.value.length == 0 || inputPasso.value == 0){
        alert('[Preencha todos os campos!]')
        resposta.innerText = 'Impossivel contar!'
    } else {
      let inicio = parseInt(inputInicio.value);
      let fim = parseInt(inputFim.value);
      let passo = parseInt(inputPasso.value);

        if(inicio < fim){
            for( let i = inicio; i <= fim; i+=passo){
                resposta.innerHTML += ` ${i} `;
            }
      } else {
        for( let i = inicio; i >= fim; i-=passo){
            resposta.innerHTML += ` ${i} `;
        }
      }
    }
  };