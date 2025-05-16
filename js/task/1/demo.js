// console.log('durga'[2]) // r 
// console.log('durga'[200]) // undefined but no error 
// console.log('durga'[-1]) // undefined

var name=prompt('Enter Your Name:');
var age=prompt('Enter Your Age:'); 

agedays = age*365.25 
remainingdays = (60-age)*365.25; 
alert("Hello "+name+"...\nYour Current Age:"+agedays+" days\nYou will be there on the earth only "+remainingdays+" days. No one can change including God also");
// var num = Number(prompt("Enter any number to check: "))
// alert(typeof num)
// if (num % 2 == 0){
//     alert("Given Number is Even!!!")
// }
// else{
//     alert("Given Number is not Even")
// }


// var age = Number(prompt("Enter Your Age: "))

// if(age > 60){
//     alert("Plz wait some more time definetly you will get best match!!! ")
// }
// else if (age < 18){
//     alert('Ypor age is alredy crossed marriage age...No chance of getting marriage!!!')
// }
// else{
//     alert("Thnaks for registration you will get match details by email!!!")
// }

// var count = 1

// while(count <= 10){
//     console.log("Hello " + count);
//     count++ 
// }

// var s = prompt("Enter some word: ")
// var i = 0

// while(i < s.length){
//     console.log(s[i]);
//     i++
// }

// for (var i = 0; i <10; i++){
//     alert(i)
// }


// var name = prompt("Enter Your Name: ")
// var actor = prompt("Enter Your Favourite Actor:")
// var lucky = prompt("Enter Your Lucky Number:")
// var dish = prompt("Enter Your Favorite Dish:")

// var nameCondition = false
// var actorCondition = false
// var luckyCondition = false
// var dishCondtion = false

// if (name[0] =='d'){
//     nameCondition = true;
// }

// if(actor[actor.length-1] == 'r'){
//     actorCondition = true;
// }

// if(lucky == 7){
//     luckyCondition = true;
// }

// if(dish.length >= 6){
//     dishCondtion = true;
// }

// alert("Hello: " + name + "\n Thanks for providing information")

// if(nameCondition && actorCondition && luckyCondition && dishCondtion){
//     console.log("Helllo Secreate Agent .. Next Operation is");
//     console.log("We have to kill atleast 10 sleeping students in the class room b'z these are burden to the country!");
// }


// function greeting(name="Guest"){
//     console.log('Hello ' + name + " Good Evning")
// }

// var name = prompt("Enter Your Name ")
// greeting()
// greeting(name)


// function squareIt(number){
//     return number * number;
// }

// var result = squareIt(4)

// console.log("The square of 4 is " + result);
// console.log("The square of 5 is " + squareIt(5));

// function captalize(str){
//     return str[0].toUpperCase() + str.slice(1);
// }

// console.log(captalize("ashish"));

// function snakeToKebob(str){
//     var newStr = str.replaceAll("_", "-");
//     return newStr;
// }

// console.log(snakeToKebob("total_number_asd"))

// var x = 10 //global

// function f1(){
//     var x =20; // local variable
//     console.log(x) //20
// }
// f1()

// function singASong(){
//     console.log("Rangamman...Mangamma...")
//     console.log("Jil..Jil ...Jigel...Rani...")
// }
// setInterval(singASong,3000)

// setInterval(function() {console.log("Anonymous Functions")}, 2000)


// var friends = ["ashish", "sunny", "bunny", "chinny"];

// console.log(friends)

// friends[4] = "katrina"
// friends[20] = "kreena" 

// console.log(friends)

// var numbers = [10,10,20,30,20,40]

// console.log(numbers) // (4) [10, 20, 30, 40]

// numbers.push(50)
// console.log(numbers) //(5) [10, 20, 30, 40, 50]

// numbers.pop()
// console.log(numbers) // (4) [10, 20, 30, 40]
// console.log(numbers.pop()) // 40

// numbers.unshift(777)
// console.log(numbers) // (4) [777, 10, 20, 30]

// numbers.shift()
// console.log(numbers)  // (3) [10, 20, 30]

// console.log(numbers.slice(2,5))

// var nums = [
//     [10,20,30], 
//     [40,50,60],
//     [70,80,90]
// ]

// console.log(nums[0][0])
// console.log(nums[0][1])
// console.log(nums[1][0])

// var books = []
// var input = prompt("WHich operation you want to perform [add | view | exit]:")

// while(input != "exit"){
//     if(input == "add"){
//         var newBook = prompt("Enter Name of the Book to add:");
//         books.push(newBook);
//     }
//     else if (input == "view"){
//         console.log("List of Avaliable Book")
//         console.log(books)
//     }
//     else{
//         console.log("Choose valid Operation");
        
//     }
//     input = prompt("Which operation You want to perform [add | view | exit]:")
// }
// console.log("Thanks for using our application")

// var numbers = [10, 20, 30, 40, 50]
// var i = 0

// while(i < numbers.length){
//     console.log(numbers[i]);
//     i++;
// }

// var numbers = [10, 20, 30, 40, 50]

// for(var i = 0; i < numbers.length; i++){
//     alert(numbers[i])
// } 

// var numbers = [10, 20, 30, 40, 50]

// for (x of numbers){
//     alert(x);
// }

// var numbers = [10, 20, 30, 40, 50]

// numbers.forEach(function (x) {alert(x);})

// var heroines = ["sunny", "malika", "veena", "kartrina", "karena"]

// heroines.forEach(alert);

// var heroines = ["sunny", "malika", "veena", "kartrina", "karena"]

// heroines[0] = "money"
// console.log(heroines) // // var heroines = ["sunny", "malika", "veena", "kartrina", "karena"]


// var name = "Sunny"

// name[0] = 'B'
// console.log(name) // Sunny

// nums = [1,2,3,4,5]

// function rev(arr){
//     return arr.reverse();
// }
// console.log(rev(nums))

// nums = [1,2,3,4,5]
// function max(arr){
//     max = arr[0];
//     for(v of arr){
//         if(max<v){
//             max = v;
//         }
//     }
//     return max
// }
// console.log(max(nums))

// nums = [1,2,3,4,5]

// function sumarr(arr){
//     var n = 0
//     for(v of arr){
//         n+=v;
//     }
//     console.log(n)
// }
// sumarr(nums)
// nums = [1,2,3,4,5]
// nums1 = [1,2,3,4,5]
// if(nums == nums1){
//     console.log("yes")
// }else{
//     console.log("no")
// }

// nums = [1,1,1,1,1]

// function iden(arr){
//     var i = arr[0];
//     for(v of arr){
//         if(i!=v){
//             console.log("Not identical");
//             return false
//         }
//     }
//     return true
// }
// console.log(iden(nums))


// var books = []
// var input = prompt("Which operation you want to perform [add | view | delete | exit]:")

// while(input != "exit"){
//     if(input == "add"){
//         addBook();
//     }
//     else if(input == "view"){
//         viewBook();
//     }
//     else if(input == "delete"){
//         deleteBook();
//     }
//     else{
//         console.log("Please choose valid option");
//     }
//     input = prompt("Which operation you want to perform [add | view | delete | exit]:")
// }
// console.log("Thanks for using our application!!")

// function addBook(){
//     var newBook = prompt("Enter Book name to add:")
//     books.push(newBook)
// }

// function viewBook(){
//     console.log("List of avaliable Boos:")
//     for(book of books){
//         console.log(book);
//     }
// }

// function deleteBook(){
//     var name = prompt("Enter Name oof the book to delete:")
//     var index = books.indexOf(name)
    
//     if (index ==-1){
//         console.log("Specified book not Avaliable") 
//     }else{
//         books.splice(index,1)
//         console.log("specified Book Deleted");
//     }
// }

// var movie = {
//     name: "Bahubali",
//     year: 2016,
//     hero: "Prabhas"
// }

// console.log(movie.name);
// console.log(movie["hero"]);

// var nums = {fno: 100, sno: 200, tno: 300}

// for(key in nums){   
//     // console.log(key)
//     // console.log(nums[key])
//     console.log(key + ": "+ nums[key]) // recomended
//     // console.log(key + ": "+ nums.key) Not working
// }

// var movies = [
//     {name: "Sanju", year: 2016, hero: "Prabhas"},
//     {name: "Bahubali", year: 2018, hero: "Ranbir"},
//     {name: "spider", year: 2017, hero: "Mahes"},
// ]
// console.log(movies)
// console.log(movies[1])
// console.log(movies[0]["hero"])

// var myobj = {
//     a: "apple",
//     b: "banana",
//     m1: function(){console.log("Object Method");}
// }

// myobj.m1()

// var movie = {
//     name: "Bahubali",
//     year: 2016,
//     hero: "Prabhas",

//     getInfo: function(){
//         console.log("Moview Name: " + this.name);
//         console.log("Released Year: " + this.year);
//         console.log("Hero Name: " + this.hero);
//     }
// }

// movie.getInfo()

// function demo(){
//     console.log("Name of fun is " + this.name)
// }

// var movie = {
//     name: "Bahubali",
//     year: 2016,
//     hero: "Prabhas",

//     getInfo: demo
// }

// movie.getInfo()
// demo()

// var movies = [
//     {name: "Bahubali", isWatched: "true", isHit: "true"},
//     {name: "Sanju", isWatched: "flase", isHit: "true"},
//     {name: "Spider", isWatched: "true", isHit: "false"},
// ]

// movies.forEach(function(movie){
//     var result = ""

//     if(movie.isWatched == 'true'){
//         result = result + "I watched ";
//     }
//     else{
//         result = result + "I have not seen ";
//     }
    
//     result = result + movie.name

//     if(movie.isHit == 'true'){
//         result = result + " and Movie is Hit!!!"
//     }else{
//         result = result + " and Movie is Flop!!!"
//     }
//     console.log(result);
// });