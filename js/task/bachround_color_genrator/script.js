color1 = document.querySelector(".color1")
color2 = document.querySelector(".color2")
code = document.querySelector('pre')
body = document.getElementsByTagName('body')[0]


function backGround() {
    body.style.background = "linear-gradient(to right," + color1.value + " , " + color2.value + ")";
    code.textContent = body.style.background + ";";
}

color1.addEventListener("input", backGround)
color2.addEventListener("input", backGround)