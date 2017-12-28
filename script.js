document.addEventListener('DOMContentLoaded', () => {
    console.log('Game Ready');
    let count = 0;
    let column;
    let row;
    let whitePo = [];
    let blackPo = [];
    document.querySelectorAll('.col').forEach(el => {
        el.addEventListener('click', e => {
            if (el.classList.length >= 3) {
                return false;
            } //같은 위치에 놓을시 false
            count += 1;
            if (count % 2 !== 0) {
                el.classList.add("white");
                for(let i=0;i<11;i++){
                    if(Array.from(el.closest('.row').children).slice(i,i+5).filter(item=>item.classList.contains('white')).length===5){
                        alert('Game over');
                    }
                }
                let curCol=Array.from(el.classList)[0];
                for(let j=0;j<11;j++){
                    if(Array.from(document.querySelectorAll(`.${curCol}`)).slice(j,j+5).filter(item=>item.classList.contains('white')).length===5){
                        alert('Game over');
                    }
                }
                
                // console.log(document.querySelectorAll(Array.from(el.classList)[0]));
                // Array.from(el.closest('.row').classList)
                // console.log(Array.from(document.querySelector('.row-1').children).filter(item => item.includes('white')));
                // let curRow=[];
                // curRow.push([Array.from(el.closest('.row').children).filter(item => item.classList.contains('white'))]);
                // console.log(curRow);
                // if (Array.from(el.closest('.row').children).filter(item => item.classList.contains('white')).length >= 5) {
                //     return console.log(false);
                // }
                // let curPo=[Number(Array.from(el.classList)[0].split('-')[1]), Number(Array.from(el.closest('.row').classList)[0].split('-')[1])];
                // whitePo.push(curPo);
                // console.log(whitePo);
                // console.log(whitePo[0][1] - whitePo[0][0]);
                // console.log(whitePo.map(item => item[0] - item[1]));
            } else {
                el.classList.add("black");
                for(let i=0;i<11;i++){
                    if(Array.from(el.closest('.row').children).slice(i,i+5).filter(item=>item.classList.contains('black')).length===5){
                        alert('Game over');
                    }
                }
                let curCol=Array.from(el.classList)[0];
                for(let j=0;j<11;j++){
                    if(Array.from(document.querySelectorAll(`.${curCol}`)).slice(j,j+5).filter(item=>item.classList.contains('white')).length===5){
                        alert('Game over');
                    }
                }
                // blackPo.push([Number(Array.from(el.classList)[0].split('-')[1]), Number(Array.from(el.closest('.row').classList)[0].split('-')[1])]);
                // console.log(blackPo);
                // blackPo.push([Array.from(el.classList)[0].split('-')[1], Array.from(el.closest('.row').classList)[0].split('-')[1]]);
                // console.log(blackPo);
            }
          
            // document.querySelectorAll('.row').forEach((item, index, array) => {
            //         console.log(Array.from(item.children).findIndex(array => array.includes('white')));

            //     })
                //count 변수 통해 번갈아가며 돌 놓기
                // column = Array.from(el.classList)[0];
                // row = Array.from(el.closest('.row').classList)[0];
                // console.log(Array.from(el.classList)[0].split('-')[1], Array.from(el.closest('.row').classList)[0].split('-')[1]);
                console.log(Array.from(el.classList));
                console.log(Array.from(el.closest('.row').classList));
        })
    })
});