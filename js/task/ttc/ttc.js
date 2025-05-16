restart = document.querySelector('#restart')
td = document.querySelectorAll('td')

console.log(restart)
console.log(restart.innerHTML)

restart.addEventListener("click",function(){
 for(cell of td){
    cell.textContent = ''
 }
});

function contentChange(){
    if(this.textContent ===''){
        this.textContent = 'X'
    }
    else if (this.textContent == 'X'){
        this.textContent = 'O'
    }
    else{
        this.textContent = ''
    }
}

// for(cell of td){
//     cell.addEventListener('click',contentChange)
// }

td.forEach(function(cell){
    cell.addEventListener('click',contentChange)
})