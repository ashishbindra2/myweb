// var myh1 =  document.querySelector('h1');

// console.log(myh1)

// myh1.style.color="red";
// myh1.textContent = "ashish"

// var myh1 =  document.querySelectorAll('h1');
// console.log(myh1)
// var myh1 =  document.getElementsByTagName('h1');


// console.log(document.getElementsByTagName('h1'));

// console.log(document.getElementById('first'))
// console.log(document.getElementsByClassName('special'))
// console.log(document.getElementsByClassName('special')[0])

// console.log(document.getElementsByTagName('p'))


// console.log(document.querySelector('#first')) 
// console.log(document.querySelector('.special'))

// console.log(document.querySelectorAll('.special'))
// console.log(document.querySelectorAll('.special')[0])


// console.log(document.querySelector('h1+p'))  
// p#first.special

// var p1 = document.querySelector('#first')
// var p4 = document.querySelector('#last')

// p1.style.color = 'red';
// p4.style.color = 'green';

// var h1 = document.querySelector('h1')
// var p = document.querySelector('p')
// var h2 = document.querySelector('h2')
// var ul = document.querySelector('ul')

// // console.log(document.querySelector('h1'))
// h1.style.color = "red"
// h2.style.color = "cyan"
// p.style.color = "orange"
// ul.style.color = "green"

// function getRandomColor(){
//     var letters = "0123456789ABCSEDF";
//     var color = "#"

//     for (var i = 0; i<6; i++){

//         var ch = Math.floor(Math.random() * 16)
//         color = color + letters[ch]
//     }
//     return color
// }

// var h1 = document.querySelector('h1')
// var p = document.querySelector('p')
// var h2 = document.querySelector('h2')
// var ul = document.querySelector('ul')


// function changeColor(){

//     h1.style.color = getRandomColor()
//     h2.style.color = getRandomColor()
//     p.style.color  = getRandomColor()
//     ul.style.color = getRandomColor()
// }

// nIntervId = setInterval(changeColor, 1000)

// document.getElementById("start").addEventListener("click", changeColor);

// function stopTextColor() {
//     clearInterval(nIntervId);
//     // release our intervalID from the variable
//     nIntervId = null;
//   }


// var myh1 = document.querySelector('h1');

// console.log(myh1.textContent)

// myh1.textContent = "Ashish Bindra"

// var myh1 = document.querySelector('h1');

// myh1.innerHTML = '<a href = "https://abc.com"> abc.com</a>'

// myh1.innerText = "as"

// var abc = document.querySelector('a')
// console.log(abc.getAttribute('href')) //https://abc.com

// abc.setAttribute('href', "http://test.com")
// console.log(abc.getAttribute('href')) // http://test.com

// var links = document.querySelectorAll('a')

// for(link of links){
//     link.style.color = 'white'
//     link.style.background = 'Green'
// }

function getRandomColor(){
    var letters = "0123456789ABCSEDF";
    var color = "#"

    for (var i = 0; i<6; i++){

        var ch = Math.floor(Math.random() * 16)
        color = color + letters[ch]
    }
    return color
}

function  getRandomName(){
    var names = ["HYD", "BANGALOR", "CHENNAI", "MUMBAI", "PATIALA", "LUCKHNOW", "PUNE", "MOHALI"]
    
    var i = Math.floor(Math.random() *(names.length))
    console.log(names[i])
    return names[i]
}

// var btn = document.querySelector('#background')
var btn1 = document.querySelector('#b1')
var btn2 = document.querySelector('#b2')
var btn3 = document.querySelector('#b3')

btn1.addEventListener('click',function (){
    var body = document.querySelector('body')
    body.style.background = getRandomColor();
}
);

btn2.addEventListener('click',function (){
    btn2.style.background = getRandomColor();
}
);
btn3.addEventListener('mouseover',function (){
    btn3.style.color = 'white';
    btn3.textContent = getRandomName();
    btn3.style.background = getRandomColor();
}
);
btn3.addEventListener('mouseout',function (){
    btn3.style.background = 'red';
    btn3.style.color = 'white';

    btn3.textContent = "Hover mee"
}
);