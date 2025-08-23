const mode = document.getElementById('mode_icon')
const form = document.getElementById('form_login')

function mudar() {

    if (mode.classList.contains('fa-moon')) {
        mode.classList.remove('fa-moon')
        mode.classList.add('fa-sun')

        form.classList.add('dark')

        return;
    }
    
    mode.classList.add('fa-moon')
    mode.classList.remove('fa-sun')
    form.classList.remove('dark')
}