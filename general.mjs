// const sayHelloTimeOut = () => {
//   console.info(`Hello World!`);
// };

// setTimeout(sayHelloTimeOut, 2000);

// ( process )
import process from "process";

const exitFunction = () => {
  console.info("Execution NodeJS was Succes");
};

process.addListener("exit", exitFunction);
