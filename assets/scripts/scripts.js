// let name = prompt("Как вас зовут?")
// alert("Привет "+name);

function changeColor(){
let e = document.getElementById("el");
console.log(e);
// e.classList.add("ice");
// e.classList.remove("ice");
e.classList.toggle("ice");
e.textContent = e.textContent == "Давайте жить" ? "Всем пока" : "Давайте жить";
}

let btn2 = document.getElementById("btn1");
console.log(btn2);
btn2.addEventListener('click', changeColor )