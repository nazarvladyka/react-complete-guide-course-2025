import * as util from "./util.js";

// alert(apiKey + ' ' + dummy);

const userMessage = "Hello world!";

console.log(util.apiKey);
console.log(`hello`);


function greetUser(userName, message) {
    console.log(userName);
    console.log(message);
}

const greetUser2 = (userName, message) => {
    console.log(userName);
    console.log(message);
}

greetUser("Nazar", "hello");