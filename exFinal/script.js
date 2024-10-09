/*
  /// Como fiz antes do video
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

*/
// feito vendo o video do curso
let num = document.querySelector('#txtn')
let lista = document.querySelector('#seltab')
let res = document.querySelector('#resultado')
let valores = [];

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}


function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = '';
    } else {
        alert('Valor inválido ou já encontrado na lista.')
    }
    num.value = '';
    num.focus()
}

function finalizar() {
    if (valores.length == 0) {
        alert('Adicione valores antes de finalizar')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for (let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior)
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos]
        }
        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p> Ao todo, temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>A soma dos valores informado foi ${soma}.</p>`
        res.innerHTML += `<p>A media dos valores informado foi ${media.toFixed(2)}.</p>`

    }
}