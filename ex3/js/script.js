function contar() {
    let txt1 = document.querySelector('#txtn1')
    let txt2 = document.querySelector('#txtn2')
    let txt3 = document.querySelector('#txtn3')
    let res = document.querySelector('#res')


    inicio = Number(txt1.value)
    fim = Number(txt2.value)
    passo = Number(txt3.value)
    res.style.whitespace = 'nowrap'

    if (txt1 == '' || txt2 == '' || txt3 == '') {
        alert('[Error]Verifique os dados e tente novamente!')
        res.innerHTML = `Faltou colocar algum valor :(</p`
    } else {
        res.innerHTML = '' // limpar o valor 

        // verificação
        if (passo <= 0) {
            alert('Passo invalido, Considerado passo 1.')
            passo = 1
        }

        let cont = 1

        for (let i = inicio; i <= fim; i += passo) {
            res.innerHTML += `${i} \u{1F449} `
            cont++
        }

        res.innerHTML += `\u{1F3C1} Chegamos ao fim!`

    }

}