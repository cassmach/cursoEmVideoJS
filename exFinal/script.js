let num = document.querySelector('#txtn')
let viewResult = document.querySelector('#seltab')
viewResult.innerHTML = ''


function adicionar() {
    
    if (num.value.length == 0) {
        alert('Adicione os números')
    } else {
        let n = Number(num.value);
        let valores = [];
            
            let item = document.createElement('option')
            item.text = `Valor ${n} adicionado.`
            viewResult.appendChild(item)
           
            valores.push(n)
    }
}


