function verificar () {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('#res')
    
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[Error]Verifique os dados e tente novamente!')
    } else {
        window.alert('tudo ok')
    }
}