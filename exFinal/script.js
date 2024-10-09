let num = document.querySelector('#txtn')
let viewResult = document.querySelector('#seltab')
let resultado = document.querySelector('#resultado');
viewResult.innerHTML = '';
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

function finalizar() {
    if (valores.length == 0) {
        alert('Nenhum valor foi adicionado !')
    } else {
        let soma = 0;
        console.log(valores)

        for (let i = 0; i < valores.length; i++) {
            soma += valores[i]

        }
        let maiorValor = Math.max(...valores)
        let menorValor = Math.min(...valores)
        let mediaValor = soma / valores.length



        resultado.innerHTML = `
        <p>A soma dos valores é ${soma}</p>
        <p>O maior valor foi ${maiorValor}</p>
        <p>O menor valor foi ${menorValor}</p>
        <p>A media dos valores foi ${mediaValor.toFixed(2)}</p>
        `

    }
}

