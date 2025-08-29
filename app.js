let btn = document.querySelector("button");
let boxes = document.querySelectorAll(".colors");

boxes.forEach(box => {
  let lockBtn = box.querySelector(".lock-btn");
  lockBtn.addEventListener("click", () => {
    box.classList.toggle("locked");
    lockBtn.textContent = box.classList.contains("locked") ? "🔓" : "🔒";
  });
});

btn.addEventListener("click", () =>{
    boxes.forEach(box => {
        if (box.classList.contains("locked")) return;
        let randomColor = getRandomColor();
        let head = box.querySelector("h3");
        let colorDiv = box.querySelector("div");
        head.innerText = randomColor;
        colorDiv.style.backgroundColor = randomColor;
    });
});

function getRandomColor(){
    let red = Math.floor(Math.random()*225);
    let green = Math.floor(Math.random()*225);
    let blue = Math.floor(Math.random()*225);
    return `rgb(${red}, ${green}, ${blue})`;
}