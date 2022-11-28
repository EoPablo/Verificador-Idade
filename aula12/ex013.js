var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são exatamente ${hora} hrs.`)
if (hora < 12) {
    console.log(`Bom dia, agora são ${hora} horas.`)

} else if (hora <= 18 ) {
    console.log('Boa Tarde !')
}else {
    console.log('Boa Noiteeeeeeee!')
}