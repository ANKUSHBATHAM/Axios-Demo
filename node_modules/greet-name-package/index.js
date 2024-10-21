function greet(name = "") {
    return name === "" ? "Hello" : `Hello, ${name}!`;
}

module.exports = greet;
