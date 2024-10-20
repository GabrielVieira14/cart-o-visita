// import "./style.css"

const text = document.querySelector('.text');
const img = document.querySelector('.img');

text.innerHTML = text.innerText.split('').map(
    (char, i) => 
        `<span style="transform: rotate(${i * 10}deg); color: #fff;">${char}</span>`
        // `<span style="transform: rotate(${i * 8.3}deg); color: #fff;">img</span>`
  ).join('');

// img.innerHTML.split('').map(
//     (img, i)=>
//         `<span style="transform: rotate(${i * 8.3}deg); color: #fff;">${<img></img>}</span>`
// ).join('');