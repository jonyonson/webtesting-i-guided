// enhancer.repair should make durability 100
module.exports = {
  repair,
};

function repair(item) {
  item = { ...item, durability: 100 };
  return item;
}
