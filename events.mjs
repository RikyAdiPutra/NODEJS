import { EventEmitter } from "events";

const emitter = new EventEmitter();

const helloUser = (name) => {
  console.info(`Hello ${name}!!!`);
};

emitter.addListener("Halo", helloUser);

emitter.emit("Halo", "Bobi");
