module.exports = {
  add,
};

// function add(...args) {
//   return args.reduce((acc, cv) => {
//     return acc + cv;
//   }, 0);
// }

function add(args) {
  const values = Array.isArray(args) ? args : Array.from(arguments);

  return values.reduce((acc, cv) => {
    return acc + cv;
  }, 0);
}
