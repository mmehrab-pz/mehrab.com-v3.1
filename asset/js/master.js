function open_contact(){
    document.getElementById('contact').style.transform = 'translateX(0)'
    document.getElementById('contact').style.visibility = 'visible'
    document.getElementById('contact').style.opacity = '1'
    document.getElementById('contact').style.display = 'flex'
}
function close_contact(){
    document.getElementById('contact').style.transform = 'translateX(100%)'
    document.getElementById('contact').style.visibility = 'hidden'
    document.getElementById('contact').style.opacity = '1'
    document.getElementById('contact').style.display = 'none'
}
