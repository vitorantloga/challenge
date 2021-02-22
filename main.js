// main.js
var Facts = require('./Facts');

const f = [
  ['gabriel', 'address', 'baker street, 109', true],
  ['john', 'address', 'apple street, 10', true],
  ['john', 'address', 'pine street, 88', true],
  ['john', 'phone', '234-5678', true],
  ['john', 'phone', '91234-5555', true],
  ['john', 'phone', '234-5678', false],
  ['gabriel', 'phone', '98888-1111', true],
  ['gabriel', 'phone', '56789-1010', true],
];

const schema = [
    ['address', 'cardinality', 'one'],
    ['phone', 'cardinality', 'many']
];

var facts = new Facts(f,schema);

// all the valid facts
console.log("--- FACTS ---");
console.log(facts.getCurrentFacts());
console.log("");

// only valid adress facts
console.log("--- ADDRESS ---");
console.log(facts.getCurrentFacts("address"));
console.log("");

// only valid phone facts
console.log("--- PHONES ---");
console.log(facts.getCurrentFacts("phone"));
console.log("");
