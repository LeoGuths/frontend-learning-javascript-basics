// ES Modules - Named Export

// import {soma, sub} from "./math.js";
import * as math from "./math.js";

console.log(math.soma(1, 2));
console.log(math.sub(2, 1));

// Arrays

const array = [1, 2, 3, 4, 5];

const newObjectArray = array.map(item => {
    return {
         item,
        novo: item * 2,
    }
})
document.body.innerText = JSON.stringify(newObjectArray);

const newArray = array.filter((item) => item % 2 === 0);
document.body.innerText = JSON.stringify(newArray);

const allItemsAreNumber = array.every(item => typeof item === "number");
document.body.innerText = JSON.stringify(allItemsAreNumber);

const anyItemIsNumber = array.some(item => typeof item !== "number");
document.body.innerText = JSON.stringify(anyItemIsNumber);

const findTheFirstOne = array.find(item => item % 2 === 0);
document.body.innerText = JSON.stringify(findTheFirstOne);

const findTheFirstOneIndex = array.findIndex(item => item % 2 === 0);
document.body.innerText = JSON.stringify(findTheFirstOneIndex);

const sum = array.reduce((acc, item) => {
    return acc + item;
}, 0);

document.body.innerText = JSON.stringify(sum);

// Promises

fetch("https://api.github.com/users/leoguths")
.then(res => res.json())
.then(body => console.log(body))
.catch(err => console.log(err))
.finally(() => console.log("Finished successfully."));

async function fetchGitHubData() {
    try {
        const response = await fetch("https://api.github.com/users/leoguths");
        const body = await response.json();
        console.log(body)
    } catch (err) {
        console.log(err)
    } finally {
        console.log("Finished successfully.")
    }
}
await fetchGitHubData();