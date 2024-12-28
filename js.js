let list = document.getElementsByClassName("list")[0];
let menu = document.getElementsByClassName("menu")[0];
let close = document.getElementsByClassName("cross")[0];

menu.addEventListener("click", () => {
    list.style.left = "255px";
});


close.addEventListener("click", () => {
    list.style.left = "-400px";
});


