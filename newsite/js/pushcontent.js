// Push content down by navbar height when navbar is fixed to top
function padBody() {
    body.style.paddingTop = (parseInt(document.getElementById('navBar').clientHeight) + 10) + 'px';
    body.style.paddingBottom = (parseInt(document.getElementById('footer').clientHeight) + 10) + 'px';
}

const body = document.getElementById('body');
document.addEventListener('load', padBody(), false);
document.addEventListener('resize', padBody(), false);




