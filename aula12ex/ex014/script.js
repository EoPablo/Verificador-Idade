function carregar () {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()  
    var hora = data.getHours()
    var minutos = data.getMinutes() 
    msg.innerHTML = `Agora são exatamente ${hora}:${minutos}`
    if (hora >= 0 &&  hora < 12) {
        img.src = 'manha.png'
        document.body.style.background = '#FFEF81'
    }else if (hora >= 12 && hora < 18){
        img.src ='tarde.png'
        document.body.style.background ='#C5766A'
    } else {
        img.src= 'noite.png'
        document.body.style.background ='#2A152E'
    }
}
