
# greet-name-package

`greet-name-package` is a simple npm package that provides a greeting function. It returns a friendly "Hello" message and can greet a user by name.

## Installation

To install the package, use npm:

```bash
npm install greet-name-package
```

## Usage

Here's how you can use the `greet` function in your project:

```javascript
// Import the greet function
const greet = require('greet-name-package');

// Usage examples
console.log(greet()); // Output: "Hello"
console.log(greet('Himanshu')); // Output: "Hello, Himanshu!"
```

### Function Signature

```javascript
greet(name = "")
```

- `name` (string): The name of the person to greet. If the `name` is not provided or is an empty string, the function will return a generic greeting: `"Hello"`.

## Features

- Returns a generic greeting if no name is provided.
- Returns a personalized greeting if a name is given.

## Contributing

Contributions are welcome! If you find any issues or have ideas for improvements, please open an issue or submit a pull request on the [GitHub repository](https://github.com/himanshu-paliwal-277/greet-name-package).

## License

This project is licensed under the MIT License.
