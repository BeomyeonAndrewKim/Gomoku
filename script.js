document.addEventListener('DOMContentLoaded', () => {
    console.log('Game Ready');
    let count = 0;
    document.querySelectorAll('.col').forEach(el => {
        el.addEventListener('click', e => {
            if (el.classList.length >= 3) {
                console.log(false);
                return false;
            }
            count += 1;
            // console.log(count);
            if (count % 2 !== 0) {
                el.classList.add("white");
            } else {
                el.classList.add("black");
            }

            console.log(el.classList.length);
            console.log(Array.from(el.closest('.row').classList));
        })
    })
});