// ---------------------------contact------------------------
function open_contact() {
    document.getElementById('contact').style.transform = 'none';
    document.getElementById('contact').style.left = '0';
}

function close_contact() {
    document.getElementById('contact').style.transform = 'scaleX(0)';
    document.getElementById('contact').style.left = '100%';
}
// ---------------------------strength------------------------
function open_strength() {
    document.getElementById('strength').style.transform = 'none';
    document.getElementById('strength').style.opacity = '1';
    document.getElementById('strength').style.top = '0';
}

function close_strength() {
    document.getElementById('strength').style.opacity = '0';
    document.getElementById('strength').style.top = '100%';
    document.getElementById('strength').style.transform = 'scaleY(0)';
}
// ---------------------------portfolio------------------------
function open_portfolio() {
    document.getElementById('portfolio').style.transform = 'none';
    document.getElementById('portfolio').style.right = '0';
}

function close_portfolio() {
    document.getElementById('portfolio').style.transform = 'scaleX(0)';
    document.getElementById('portfolio').style.right = '100%';
}

function web() {
    document.getElementById('js').classList.remove('active-filter-li')
    document.getElementById('trick').classList.remove('active-filter-li')
    document.getElementById('web').classList.add('active-filter-li')
    document.getElementById('trick-card').style.display = 'none'
    document.getElementById('js-card').style.display = 'none'
    document.getElementById('web-card').style.display = 'flex'
}

function trick() {
    document.getElementById('js').classList.remove('active-filter-li')
    document.getElementById('web').classList.remove('active-filter-li')
    document.getElementById('trick').classList.add('active-filter-li')
    document.getElementById('web-card').style.display = 'none'
    document.getElementById('js-card').style.display = 'none'
    document.getElementById('trick-card').style.display = 'flex'
}

function js() {
    document.getElementById('web').classList.remove('active-filter-li')
    document.getElementById('trick').classList.remove('active-filter-li')
    document.getElementById('js').classList.add('active-filter-li')
    document.getElementById('web-card').style.display = 'none'
    document.getElementById('trick-card').style.display = 'none'
    document.getElementById('js-card').style.display = 'flex'
}

function modal(){
    document.getElementsByClassName('modaal')[0].style.transform = 'none';
    document.getElementsByClassName('modaal')[0].style.opacity = '1';
}