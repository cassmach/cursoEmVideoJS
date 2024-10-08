let num = document.querySelector('#txtn')
let viewResult = document.querySelector('#seltab')
viewResult.innerHTML = ''
let valores = [];


function adicionar() {
    
    if (num.value.length == 0) {
        alert('Adicione os números')
    } else {
        let n = Number(num.value);
        
            
            let item = document.createElement('option')
            item.text = `Valor ${n} adicionado.`
            viewResult.appendChild(item)
           
            valores.push(n)
    }
}


function finalizar () {
   console.log(valores)
}

