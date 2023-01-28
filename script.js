const box = document.querySelector(".container");
const btn = document.querySelector("button");
const palete = document.querySelector(".palete");


function random_color() {
    let h = Math.floor(Math.random() * 361);
    let s = Math.floor(Math.random() * 101);
    let l = Math.floor(Math.random() * 101);
    let color = "hsl(" + h + "," + s + "%," + l + "%)";
    console.log(color);
    box.style.background = color;
    palete.innerHTML = color;
}

btn.addEventListener("click", random_color);
