var weekDay = new Date().getDay()
var hour = new Date().getHours()
hour = 9;
var oneTitle = document.querySelector('section#two .sectTitle')
var oneNotice = document.querySelector('.aviso')
oneTitle.innerText = ''
oneNotice.innerText = ''
$('#menu').hide()
if (weekDay >=1 && weekDay < 6) {
    if (hour < 14) {
       oneTitle.innerText = 'Cardápio de hoje:'
       $('#menu').show()
        //CARDÁPIO
    } else {
        oneTitle.innerText = 'Até amanhã!'
        oneNotice.innerHTML = 'Nosso estabelecimento encontra-se <span class="foco">fechado</span> no momento.'
        //HASTA MAÑANA
    }
} else if (weekDay == 6) {
    if (hour < 14) {
        oneTitle.innerText = 'Cardápio de hoje:'
        $('#menu').show()
        //CARDÁPIO
    } else {
        oneTitle.innerText = 'Até segunda!'
        oneNotice.innerHTML = 'Nosso estabelecimento encontra-se <span class="foco">fechado</span> no momento.'
        //HASTA EL LUNES
    }
} else {
    oneTitle.innerText = 'Até amanhã!'
    oneNotice.innerHTML = 'Hoje nosso estabelecimento encontra-se <span class="foco">fechado</span>.'
    //HOY NO ABRIMOS
}

