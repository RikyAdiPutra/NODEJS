// const sayHelloTimeOut = () => {
//   console.info(`Hello World!`);
// };

// setTimeout(sayHelloTimeOut, 2000);

// ( process )
// import process from "process";

// const exitFunction = () => {
//   console.info("Execution NodeJS was Succes");
// };

// process.addListener("exit", exitFunction);

// ( readline )
import process from "process";
import readline from "readline";

const input = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const yourName = (name) => {
  console.info(`Hello ${name}`);
  input.close();
};

input.question("Enter your name ", yourName);
