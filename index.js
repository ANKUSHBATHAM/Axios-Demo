// https://official-joke-api.appspot.com/jokes/random
const axios = require("axios")

async function fetchJoke() {
    const response = await axios.get("https://official-joke-api.appspot.com/jokes/random")
    const data = response.data;
    // console.log(data);
    console.log(data.setup + data.punchline);
}

const greet = require("greet-name-package");

console.log(greet("Gaurav Prajapat"));

console.log(greet("Navin Soni"));