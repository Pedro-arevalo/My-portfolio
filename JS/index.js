//EXIBIÇÃO DO MENU EM DISPOSITIVOS MOBILE

var $navList = $('ul.nav_list');
var $navButton = $('button#toggle_nav_button');
var abreMenu = true; //this will be the validation for the mobile button to work properly

function WidthChange(media) {
    /*This makes the bar menu to not bug everytime
	it is opened in a mobile media and switches to
	a higher media query (600px).*/
    function bugMenuMobileAberto(fechado) {
        if (!fechado) {
            $('img.logo').show();
            $('nav.nav_bar').animate(
                {
                    height: '-=100px',
                },
                0
            );
            fechado = true;
        }
        return fechado;
    }

    /*Conditions to both mobile media, and the
	ones larger than 600px.*/
    if (media.matches) {
        $navList.hide();
    } else {
        $navList.show();
        abreMenu = bugMenuMobileAberto(abreMenu);
    }
}

/*Setting how the mobile menu should react
against the user pressing its button 
(showing/ hidding + a little animation,
for style purposes).*/
function menuMobile(fechado) {
    if (fechado) {
        $('img.logo').hide();
        $navList.slideDown();
        $('nav.nav_bar').animate(
            {
                height: '+=100px',
            },
            200
        );
    } else {
        $('img.logo').fadeIn();
        $navList.hide();
        $('nav.nav_bar').animate(
            {
                height: '-=100px',
            },
            200
        );
    }
    fechado = !fechado;
    return fechado;
}

/*Sets the media querys for mobile devices
and to those with a higher screen (600px)*/
if (matchMedia) {
    const media = window.matchMedia('(max-width: 599px)');
    media.addListener(WidthChange);
    WidthChange(media);
}

/*The event button for the mobile dynamic menu*/
$navButton.on('click', function () {
    abreMenu = menuMobile(abreMenu);
});

//EXIBIÇÃO DO IFRAME 'ENTRE EM CONTATO COMIGO'

function showIframe(sourcePath) {
    function closeIframe() {
        //iframe validated to be open again
        iframeFreeToBeDisplayed = true;
        //resetting the environment to be as it was before
        iframeDiv.removeChild(theIframe);
        iframeDiv.style.display = 'none';
        iframeBackg.style.opacity = '1';
    }
    if (iframeFreeToBeDisplayed == true) {
        //iframe unvalidated to be opened while there's already another one with that condition
        iframeFreeToBeDisplayed = false;
        //setting the environment for when the iframe is displayed
        iframeDiv.style.display = 'block';
        iframeBackg.style.opacity = '30%';
        iframeBackg.style.transition = '1s';

        //creating the iframe
        var theIframe = document.createElement('iframe');
        theIframe.setAttribute('src', sourcePath);
        theIframe.setAttribute('class', 'iframeExib');
        iframeDiv.appendChild(theIframe);

        //setting the closing button to be triggered on click
        b_closeIframe.addEventListener('click', closeIframe);
    } else {
        alert('Por favor, feche esta janela antes de abrir outra.');
    }
}

//setting the iframe environment
var iframeBackg = document.getElementById('all');
//creating the div where the iframe will be placed in
var iframeDiv = document.createElement('div');
iframeDiv.setAttribute('id', 'iframeDiv');
document.body.appendChild(iframeDiv);
//creating the button that will close the iframe
var b_closeIframe = document.createElement('button');
b_closeIframe.setAttribute('class', 'closeIframe');
b_closeIframe.innerText = 'Fechar';
iframeDiv.appendChild(b_closeIframe);
iframeDiv.style.display = 'none';
//iframe validation
var iframeFreeToBeDisplayed = true;
//iframe's source
var mainIframe = 'iframes/iframe-comecar.html';
var port_iframeRes = 'iframes/almoco-caseiro/index.html';
var port_iframeLev = 'iframes/escritorio-levis/index.html';

//each button displays a singular iframe throught a click event
var b_mainIframe = document.getElementById('b_mainIframe');
var b_port_iframeRes = document.getElementById('b_port_iframeRes');
var b_port_iframeLev = document.getElementById('b_port_iframeLev');
b_mainIframe.addEventListener('click', function () {
    showIframe(mainIframe);
});
b_port_iframeRes.addEventListener('click', function () {
    showIframe(port_iframeRes);
});
b_port_iframeLev.addEventListener('click', function () {
    showIframe(port_iframeLev);
});
