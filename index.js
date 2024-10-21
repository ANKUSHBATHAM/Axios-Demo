// https://official-joke-api.appspot.com/jokes/random
const axios = require("axios")

// async function data(){
//     const response = await fetch(" https://official-joke-api.appspot.com/jokes/random");
//     const data = response.json();
//     console.log(data);
// }
// data();

async function fetchJoke() {
    const response = await axios.get("https://official-joke-api.appspot.com/jokes/random")
    const data = response.data;
    // console.log(data);
    console.log(data.setup + data.punchline);
}

// fetchJoke()

const greet = require("greet-name-package");

console.log(greet("Gaurav Prajapat"));
