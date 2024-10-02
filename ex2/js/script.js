function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('#res')

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[Error]Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', './src/images/criançaM.jpg')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', './src/images/jovemM.jpg')
            } else if (idade < 60) {
                // adulto
                img.setAttribute('src', './src/images/adultoM.jpg')

            } else {
                // idoso
                img.setAttribute('src', './src/images/senhor.jpg')

            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', './src/images/criançaF.jpg')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', './src/images/jovemF.jpg')
            } else if (idade < 60) {
                // adulto
                img.setAttribute('src', './src/images/adultoF.jpg')

            } else {
                // idoso
                img.setAttribute('src', './src/images/senhora.jpg')

            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `<p>Detectamos ${genero} com ${idade} anos.</p`
        res.appendChild(img)
    }
}