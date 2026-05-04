// select all Elements
const incrementEl = document.querySelector("#increment")
const decrementEl = document.querySelector("#decrement")
const counterEl = document.querySelector("#counter")


let count = 0;

// counter incrementing
incrementEl.addEventListener('click', () => {
    count++;
    counterEl.innerText = count;
})

// counter decrementing
decrementEl.addEventListener('click', () => {
    // counter will not decrement if reached to zero
    if (count > 0) count--;
    counterEl.innerText = count;
})

