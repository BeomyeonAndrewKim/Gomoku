document.addEventListener('DOMContentLoaded', () => {
    let count = 0;
    let stone;

    function finish() {
        document.querySelectorAll('.col').forEach(el => {
            el.classList.remove('white');
            el.classList.remove('black');
            count = 0;
        })
    }

    function crossCheck(arr) {
        if (arr.length >= 5) {
            for (let j = 0; j < 11; j++) {
                if (arr.slice(j, j + 5).filter(item => item.classList.contains(stone)).length === 5) {
                    finish();
                    alert(`${stone} win!`)
                }
            }
        }
    }
    document.querySelectorAll('.col').forEach(el => {
        el.addEventListener('click', e => {
            /*
            `forEach` 메소드가 인덱스를 인자로 넘기므로, 그것을 이용해 curPo를 만들 수 있습니다. 그러면 코드가 조금 더 깔끔해졌을 것 같습니다.
            예를 들어 아래와 같이 할 수 있습니다.
            document.querySelectorAll('.row').forEach((rowEl, rowIndex) => {
                document.querySelectorAll('.col').forEach((colEl, colIndex) => {
                    ...
            */
            let curPo = { col: Number(Array.from(el.classList)[0].split('-')[1]), row: Number(Array.from(el.closest('.row').classList)[0].split('-')[1]) };
            let curCol = Array.from(el.classList)[0];
            console.log(curPo);
            /*
            아래와 같이 체크를 하면 코드의 유지보수성이 나빠집니다.
            예를 들어, 일주일 뒤에 `.col` 클래스를 갖는 모든 요소들에 클래스를 하나 더 추가해야 하는 상황이 발생했다면
            아래 코드까지 같이 수정이 되어야 합니다. (3을 4로 고쳐야겠죠?)
            따라서 아래 코드는 `el.classList.contains('white') || el.classList.contains('black')` 과 같이 수정하는 게 좋습니다.
            */
            if (el.classList.length >= 3) {
                return false;
            } //같은 위치에 놓을시 false
            count += 1;
            if (count % 2 !== 0) {
                el.classList.add("white");
                stone = "white";
            } else {
                el.classList.add("black");
                stone = "black";
            } //흑,백 번갈아가면서 두기
            for (let i = 0; i < 11; i++) {
                if (
                    Array.from(el.closest('.row').children).slice(i, i + 5).filter(item => item.classList.contains(stone)).length === 5 ||
                    Array.from(document.querySelectorAll(`.${curCol}`)).slice(i, i + 5).filter(item => item.classList.contains(stone)).length === 5
                ) {
                    finish();
                    alert(`${stone} win!`)
                }
            } //가로 세로 체크
            let newArr = [];
            leftCross = Math.abs(curPo.col - curPo.row);
            /*
            위에서 `let`을 통해 정의했던 변수 `i`는 `for` 구문 내에서만 유효하기 때문에,
            아래 루프에서도 변수 이름을 `i`로 사용할 수 있습니다.
            */
            for (let j = 15; j > leftCross; j--) {
                if (curPo.col - curPo.row >= 0) {
                    newArr.push(Array.from(document.querySelector(`.row-${j-leftCross}`).children).find(item => item.classList.contains(`col-${j}`)));
                } else {
                    newArr.push(Array.from(document.querySelector(`.row-${j}`).children).find(item => item.classList.contains(`col-${j-leftCross}`)));
                }
            }

            crossCheck(newArr);
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

            crossCheck(newArr2); //크로스체크
        })
    })
});
