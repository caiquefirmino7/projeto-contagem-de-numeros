function contar(){
    var inicio = window.document.getElementById('txtinicio')
    var passo = window.document.getElementById('txtpasso')
    var fim = window.document.getElementById('txtfim')
    var res = window.document.getElementById('res')

    if (inicio.value.length == 0 || passo.value.length == 0 || fim.value.length == 0 ){
        window.alert('[ERRO, preencha todos os campos!')
    } else{

        var inicio = Number(inicio.value)
        var passo = Number(passo.value)
        var fim = Number(fim.value) 
    
            if (inicio < fim){
                while  (inicio <= fim){
                    res.innerHTML+= (`${inicio} `)
                    inicio+= passo
                }

            } else {
                while  (inicio >= fim){
                    res.innerHTML+= (`${inicio} `)
                    inicio-= passo
                }
            }
       
          

    }

   

    
    
    

}