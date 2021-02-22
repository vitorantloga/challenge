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
console.log("--- ALL VALID FACTS ---");
console.log(facts.getCurrentFacts());
console.log("");


schema.forEach(function(item) {
	// only valid facts by item type
	console.log("--- " + item[0] + " ---");
	console.log(facts.getCurrentFacts(item[0]));
	console.log("");
});