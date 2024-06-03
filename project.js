function Fruits(points, id) {
    this.points = points;
    this.id = id;
}

let fruits = [];
let fruit1 = new Fruits("3", "strwabarry");
let fruit2 = new Fruits("2", "banana");
let fruit3 = new Fruits("1", "apple");
fruits.push(fruit1);
fruits.push(fruit2);
fruits.push(fruit3);

function instructions() {
    alert("הציפור רוצה לעוף ולנקר פירות אבל יש קקטוסים שמפריעים לה לעשות זאת. עזרו לה לעוף מעליהם ולהינצל מהם וכן עזרו לה לנקר את הפירות כמה שיותר כי היא ממש רעבה!!!");
}

let count = 0, sum = 0, index = 0, fruitNow, startindex = 120, endindex = 150;

document.getElementById("apple").style.display = "none";
document.getElementById("banana").style.display = "none";
document.getElementById("img").style.display = "none";
document.getElementById("cactus").style.display = "none";
document.getElementById("bird").style.display = "none";
document.getElementById("strwabarry").style.display = "none";
document.getElementById("p").style.display = "none";

document.querySelector("input[value='level 1']").addEventListener("click", animationSpeedLevel1);
document.querySelector("input[value='level 2']").addEventListener("click", animationSpeedLevel2);
document.querySelector("input[value='level 3']").addEventListener("click", animationSpeedLevel3);

function jump() {
    if (!bird.classList.contains("jump")) {
        bird.classList.add("jump");
        setTimeout(function () {
            bird.classList.remove("jump");
        }, 600);
    }
}

function checkCollision(bird, fruit) {
    const birdRect = bird.getBoundingClientRect();
    const fruitRect = fruit.getBoundingClientRect();

    return !(
        birdRect.top > fruitRect.bottom ||
        birdRect.bottom < fruitRect.top ||
        birdRect.right < fruitRect.left ||
        birdRect.left > fruitRect.right
    );
}

function resetFruitPosition(fruit) {
    fruit.style.left = "80vw";
    fruit.style.animation = "none";
    fruit.offsetHeight; // Trigger reflow to restart the animation
    fruit.style.animation = "";
}

let checkAlive = setInterval(function () {
    let birdTop = parseInt(window.getComputedStyle(bird).getPropertyValue("top"));
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));

    document.getElementById("img").style.display = "none";

    if (fruitNow == strwabarry) {
        startindex = 120;
        endindex = 150;
    } else if (fruitNow == banana) {
        startindex = 120;
        endindex = 140;
    } else {
        startindex = 120;
        endindex = 130;
    }

    if (cactusLeft > startindex && cactusLeft < endindex && birdTop >= 2) {
        document.getElementById("banana").style.display = "none";
        document.getElementById("img").style.display = "none";
        document.getElementById("cactus").style.display = "none";
        document.getElementById("bird").style.display = "none";
        document.getElementById("strwabarry").style.display = "none";
        document.getElementById("apple").style.display = "none";
        document.getElementById("p").style.display = "flex";
        document.getElementById("p").innerHTML = "game over💔💔💔 \n the num of the points is: " + sum;
    }

    if (checkCollision(bird, fruitNow)) {
        document.getElementById(fruitNow.id).style.display = "none";
        sum += parseInt(fruits[index].points);
        resetFruitPosition(fruitNow);
        document.getElementById(fruitNow.id).style.display = "flex";
    }
}, 10);

document.addEventListener("keydown", function (event) {
    jump();
});

function animationSpeedLevel1() {
    var name = document.getElementById("usn").value;
    localStorage.setItem("usn", name);
    var n = localStorage.getItem("usn");
    alert(n + " ברוכה הבאה");
    index = 0;
    fruitNow = document.getElementById("strwabarry");
    document.getElementById("id01").style.display = "none";
    var element = document.getElementById("cactus");
    element.style.setProperty("animation-duration", "2s");
    document.getElementById("cactus").style.display = "flex";
    document.getElementById("bird").style.display = "flex";
    document.getElementById("strwabarry").style.display = "flex";
}

function animationSpeedLevel2() {
    var name = document.getElementById("usn").value;
    localStorage.setItem("usn", name);
    var n = localStorage.getItem("usn");
    alert(n + " ברוכה הבאה");
    index = 1;
    fruitNow = document.getElementById("banana");
    document.getElementById("id01").style.display = "none";
    var element = document.getElementById("cactus");
    element.style.setProperty("animation-duration", "4s");
    document.getElementById("cactus").style.display = "flex";
    document.getElementById("bird").style.display = "flex";
    document.getElementById("banana").style.display = "flex";
    document.getElementById("game").style.display = "flex";
}

function animationSpeedLevel3() {
    var name = document.getElementById("usn").value;
    localStorage.setItem("usn", name);
    var n = localStorage.getItem("usn");
    alert(n + " ברוכה הבאה");
    index = 2;
    fruitNow = document.getElementById("apple");
    document.getElementById("id01").style.display = "none";
    var element = document.getElementById("cactus");
    element.style.setProperty("animation-duration", "5s");
    document.getElementById("cactus").style.display = "flex";
    document.getElementById("bird").style.display = "flex";
    document.getElementById("apple").style.display = "flex";
    document.getElementById("game").style.display = "flex";
}

function updateClock() {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    if (hours < 10) {
        hours = "0" + hours;
    }

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    let time = hours + ":" + minutes + ":" + seconds;

    let clockElement = document.createElement("div");
    clockElement.id = "clock";
    clockElement.innerHTML = time;

    let clockContainer = document.getElementById("clockContainer");
    clockContainer.innerHTML = "";
    clockContainer.appendChild(clockElement);
    setTimeout(updateClock, 1000);
}

document.getElementById("Instructions").addEventListener("click", instructions);
updateClock();

document.addEventListener("click", function() {
    var audio = new Audio("music/BigCarTheft.mp3");
    audio.play();
});

