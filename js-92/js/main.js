const btn = document.querySelector('.button-open')
const modal = document.querySelector('.modal')

btn.addEventListener('click', () => {
    modal.classList.add('modal--open')
})

modal.addEventListener('click', event => {
    if (event.target && event.target.classList.contains('modal') || event.target.classList.contains('modal-close')) {
        modal.classList.remove('modal--open')
    }
})