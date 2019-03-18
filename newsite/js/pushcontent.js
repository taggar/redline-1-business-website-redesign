// Pad body by navbar and footer height when navbar and footer are fixed to top and bottom

const body = document.getElementById('body');
window.addEventListener('load', padBody, false);
window.addEventListener('resize', padBody, false);

function padBody() {
    body.style.paddingTop = (parseInt(document.getElementById('navBar').clientHeight) + 10) + 'px';
    body.style.paddingBottom = (parseInt(document.getElementById('footer').clientHeight) + 10) + 'px';
}




