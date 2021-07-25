//EXIBIÇÃO DO MENU EM DISPOSITIVOS MOBILE

/*
var $nav = $('ul.navList')
$nav.hide()
$navButton = $('button#navButton')
$navButton.on('click', function() {
	$('img.navLogo').fadeToggle()
	$('.navList').toggleClass('navListShowed-mobile')
	$nav.fadeToggle()
})*/
var $navList = $('ul.navList')
var $navButton = $('button#navButton')


if (matchMedia) {
	const mq = window.matchMedia("(max-width: 600px)")
	mq.addListener(WidthChange)
	WidthChange(mq)
}

function WidthChange(mq) {
if (mq.matches) {
	var abreMenu = true
	$navList.hide()
	$navButton.on('click', function() {
	$('img.navLogo').fadeToggle()
	if (abreMenu == true) {
		$('nav.navBar').animate({
			height: '+=100px'
		}, 200, function() {
			$navList.slideDown()
		})
	} else {
		$navList.hide()
		$('nav.navBar').animate({
			height: '-=100px'
		}, 200)
	}
	abreMenu = !abreMenu
	})
}}


//EXIBIÇÃO DO IFRAME 'ENTRE EM CONTATO COMIGO'

function exibFrame() { //agregar os elementos iframe, e botão voltar, além de alterar o estilo da corpo em geral, no ato
	if (abreIframe == true) {
		abreIframe = false //invalidando que outro iframe abra quando um ja foi aberto
		var posicao = document.getElementById('iframe') //definindo alocamento do iframe
		var ifr = document.createElement('iframe') //criando iframe
		var sair = document.createElement('button') //criando o botao de voltar do iframe
		ifr.setAttribute('src', 'iframe-comecar.html') //definindo src do iframe
		ifr.setAttribute('class', 'iframeExib') //agregando classe ao iframe
		sair.setAttribute('class', 'iframeVoltar') //agregando classe ao botao do iframe
		sair.innerText = 'Fechar' //definindo o escrito no botão do iframe
		posicao.appendChild(sair) //alocando o botão do iframe no espaço específico
		posicao.appendChild(ifr) //alocando o iframe no espaço especifico
		resto.style.opacity = '30%' //mudanças de estilo ao abrir o iframe
		resto.style.transition = '1s'
		sair.addEventListener('click', saiFrame) //se o botão 'voltar' for acionado a função saiFrame será chamada
	}
	else {
		alert('A janela requisitada já está sendo exibida.') //mensagem exibida se usuário tentar abrir o mesmo iframe simultâneamente
	}
}

function saiFrame() { //deixa de exibir o iframe em questão
	abreIframe = true //valida que o iframe possa ser reaberto, visto que agora será fechado
	var ifram = document.querySelector('iframe.iframeExib') //seleciona o iframe
	var ifbot = document.querySelector('button.iframeVoltar') //seleciona o botão do iframe
	var espaco = document.querySelector('div#iframe') //seleciona de onde serão retirados os dois elementos
	espaco.removeChild(ifram) // exclui o iframe
	espaco.removeChild(ifbot) //exclui o botão do iframe
	resto.style.opacity = '1' // a opacidade do resto da página volta ao normal
}

var abreIframe = true
var botao = document.getElementById('botao')
botao.addEventListener('click', exibFrame)
var resto = document.querySelector('div#tudo')





