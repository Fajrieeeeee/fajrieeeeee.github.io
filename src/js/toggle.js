const checbox = document.querySelector('#toggleDarkMode')
const html = document.querySelector('html')

checbox.addEventListener('click', function() {
    checbox.checked ? html.classList.add('dark') : html.classList.remove('dark')
})