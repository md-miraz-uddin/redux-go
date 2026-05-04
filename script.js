// select all Elements
const incrementEl = document.querySelector("#increment")
const decrementEl = document.querySelector("#decrement")
const counterEl = document.querySelector("#counter")


let count = 0;

incrementEl.addEventListener('click', () => {
    count++;
    counterEl.innerText = count;
})

decrementEl.addEventListener('click', () => {
    if (count > 0) count--;
    counterEl.innerText = count;
})

