let width = document.querySelector('.width');
let radius = document.querySelector('.radius');
let height = document.querySelector('.height');
let color = document.querySelector('.color');
let ok = document.querySelector('button');
let result = document.querySelector('.result');
let form = document.querySelector('.form');

// let styles = JSON.parse(localStorage.getItem('styles')) || [];

// form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     let obj = {
//         wid: width.value,
//         rad: radius.value,
//         hei: height.value,
//         col: color.value
//     }     
//     styles.push(obj);
//     localStorage.setItem('styles', JSON.stringify(styles));
// });

// const myFun = () => {
//     let keys = Object.keys(styles[0]);
//     keys.forEach(i => {
//         if (i == "wid") {
//             console.log("wid");
//             result.style.width = i.wid;
//             console.log(i);
//         }else if(i== "rad"){
//             console.log('rad');
//         }
//     })
    


// };

// myFun();

form.addEventListener('keyup', (e) =>{
    e.preventDefault();

    result.style.width = width.value + 'px';
    result.style.borderRadius = radius.value + '%' ;
    result.style.height = height.value + 'px';
    result.style.backgroundColor = color.value;
})

form.addEventListener('submit', (e) => {
    e.preventDefault();
    result.style.width = width.value + 'px';
    result.style.borderRadius = radius.value + '%' ;
    result.style.height = height.value + 'px';
    result.style.backgroundColor = color.value;  
})

