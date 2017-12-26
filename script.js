document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.col').forEach(el => {
        el.addEventListener('click', e => {
            console.log(Array.from(el.classList));
            console.log(Array.from(el.closest('.row').classList));
        })
    })
})