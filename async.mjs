// ( in nodejs work because by default code in nodejs all is async function)
function samplePromise() {
  return Promise.resolve("Riky");
}

const name = await samplePromise();
console.log(name);

// ( in javascript not work becauseawait work in body async function )
// function samplePromise() {
//     return Promise.resolve("Riky");
//   }

//   const name = await samplePromise();
//   console.log(name);
