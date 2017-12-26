document.addEventListener('DOMContentLoaded', () => {
    console.log('Game Ready');
    let count = 0;
    document.querySelectorAll('.col').forEach(el => {
        el.addEventListener('click', e => {
            if (el.classList.length >= 3) {
                return false;
            } //같은 위치에 놓을시 false
            count += 1;
            if (count % 2 !== 0) {
                el.classList.add("white");
            } else {
                el.classList.add("black");
            } //count 변수 통해 번갈아가며 돌 놓기

            console.log(el.classList.length);
            console.log(Array.from(el.closest('.row').classList));
        })
    })
});