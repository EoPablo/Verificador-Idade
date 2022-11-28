function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res ')
    if (fano.value.lenght == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique Novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        res.innerHTML = `Idade Calculada: ${idade}`
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //Child
                img.setAttribute('src', 'foto-bebe-m.png')
            }else if (idade < 21){
                //Jovem
                img.setAttribute('src', 'foto-jovem-m.png')
            }else if ( idade < 50){
                //Adulto
                img.setAttribute('src','foto-adulto-m.png')
            }else{
                //Idoso.
                img.setAttribute('src','foto-idoso-m.png' )
            }
            
        }else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade < 10){
                //crianca
                img.setAttribute('src', 'foto-bebe-f.png')
            }else if(idade < 21){
                //jovem
                img.setAttribute('src', 'foto-jovem-f.png')
            }else if (idade <50){
                //adulto
                img.setAttribute('src', 'foto-adulto-f.png')
            }else{
                //idosa.
                img.setAttribute('src', 'foto-idoso-f.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
} 