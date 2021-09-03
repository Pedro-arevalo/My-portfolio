//EXIBIÇÃO DO MENU EM DISPOSITIVOS MOBILE

var $navList = $('ul.navList')
var $navButton = $('button#navButton')
var abreMenu = true //this will be the validation for the mobile button to work properly

function WidthChange(media) {
	
	/*This makes the bar menu to not bug everytime
	it is opened in a mobile media and switches to
	a higher media query (600px).*/
	function bugMenuMobileAberto(fechado) {
		if (!fechado) {
			$('img.navLogo').show()
			$('nav.navBar').animate({
				height: '-=100px'
			}, 0)
			fechado = true
		}
		return fechado
	}

	/*Conditions to both mobile media, and the
	ones larger than 600px.*/
	if (media.matches) {
		$navList.hide()
	} else {
		$navList.show()
		abreMenu = bugMenuMobileAberto(abreMenu)
	}
}

/*In charge of setting how exactly the mobile
menu should react against the user pressing
its button (showing/ hidding + a little
animation, for style purposes).*/
function menuMobile(fechado) {
	if (fechado) {
		$('img.navLogo').hide()
		$navList.slideDown()
		$('nav.navBar').animate({
			height: '+=100px'
		}, 200)
	} else {
		$('img.navLogo').fadeIn()
		$navList.hide()
		$('nav.navBar').animate({
			height: '-=100px'
		}, 200)	
	}
	fechado = !fechado
	return fechado
}

/*Sets the media querys for mobile devices
and to those with a higher screen (600px)*/
if (matchMedia) {
	const media = window.matchMedia("(max-width: 600px)")
	media.addListener(WidthChange)
	WidthChange(media)
}

/*The event button for the mobile dynamic menu*/
$navButton.on('click', function() {
	abreMenu = menuMobile(abreMenu)
})



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