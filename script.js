document.addEventListener('DOMContentLoaded', () => {
    let count = 0;

    function finish() {
        document.querySelectorAll('.col').forEach(el => {
            el.classList.remove('white');
            el.classList.remove('black');
            count = 0;
        })
    }
    document.querySelectorAll('.col').forEach(el => {
        el.addEventListener('click', e => {
            let curPo = { col: Number(Array.from(el.classList)[0].split('-')[1]), row: Number(Array.from(el.closest('.row').classList)[0].split('-')[1]) };
            let curCol = Array.from(el.classList)[0];
            console.log(curPo);
            if (el.classList.length >= 3) {
                return false;
            } //같은 위치에 놓을시 false
            count += 1;
            if (count % 2 !== 0) {
                el.classList.add("white");

            } else {
                el.classList.add("black");
            } //흑,백 번갈아가면서 두기

        })
    })
});


for (let i = 0; i < 11; i++) {
    if (
        Array.from(el.closest('.row').children).slice(i, i + 5).filter(item => item.classList.contains(stone)).length === 5 ||
        Array.from(document.querySelectorAll(`.${curCol}`)).slice(i, i + 5).filter(item => item.classList.contains(stone)).length === 5
    ) {
        finish();
        alert(`${stone} win!`)
    }
}
let newArr = [];
leftCross = Math.abs(curPo.col - curPo.row);
for (let j = 15; j > leftCross; j--) {
    if (curPo.col - curPo.row >= 0) {
        newArr.push(Array.from(document.querySelector(`.row-${j-leftCross}`).children).find(item => item.classList.contains(`col-${j}`)));
    } else {
        newArr.push(Array.from(document.querySelector(`.row-${j}`).children).find(item => item.classList.contains(`col-${j-leftCross}`)));
    }
}
if (newArr.length >= 5) {
    for (let j = 0; j < 11; j++) {
        if (newArr.slice(j, j + 5).filter(item => item.classList.contains(stone)).length === 5) {
            finish();
            alert(`${stone} win!`)
        }
    }
}
let newArr2 = [];
rightCross = curPo.col + curPo.row;
if (curPo.col + curPo.row > 15) {
    for (let k = 15; k > rightCross - 15; k--) {
        newArr2.push(Array.from(document.querySelector(`.row-${k}`).children).find(item => item.classList.contains(`col-${rightCross-k}`)));
    }
    newArr2.push(Array.from(document.querySelector(`.row-${rightCross-15}`).children).find(item => item.classList.contains('col-15')));
} else {
    for (let l = 1; l < rightCross; l++) {
        newArr2.push(Array.from(document.querySelector(`.row-${l}`).children).find(item => item.classList.contains(`col-${rightCross-l}`)));
    }
}
if (newArr2.length >= 5) {
    for (let m = 0; m < 11; m++) {
        if (newArr2.slice(m, m + 5).filter(item => item.classList.contains(stone)).length === 5) {
            finish();
            alert(`${stone} win!`)
        }
    }
}