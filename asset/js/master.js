// ---------------------------contact------------------------
function open_contact() {
    document.getElementById('contact').style.visibility = 'visible'
    document.getElementById('contact').style.opacity = '1'
    document.getElementById('contact').style.transform = 'scaleX(1)'
    document.getElementById('contact').style.left = '0'

}

function close_contact() {
    document.getElementById('contact').style.visibility = 'hidden'
    document.getElementById('contact').style.opacity = '1'
    document.getElementById('contact').style.transform = 'scaleX(0)'
    document.getElementById('contact').style.left = '100%'
}
// ---------------------------strength------------------------
function open_strength() {
    document.getElementById('strength').style.opacity = '1'
    document.getElementById('strength').style.transform = 'scaleY(1)'
    document.getElementById('strength').style.top = '0'

}

function close_strength() {
    document.getElementById('strength').style.opacity = '0'
    document.getElementById('strength').style.transform = 'scaleY(0)'
    document.getElementById('strength').style.top = '100%'
}