// Consider a information model where each record is represented by an immutable tuple. This tuple in this context is called a fact.

// Example of a fact:

// ('john', 'age', 18, true)
// In this representation, the subject (or entity) 'john' has a value of '18' associated with the attribute 'age'.

// To represent a deletion (or retraction) of information, the fourth element of the tuple can be 'false' to indicate that the corresponding entity's attribute no longer has that value.

// As it is common in many domains, attributes can have cardinality of either a single value (one) or multiplicity (> 1, many) is allowed.

// The following is an example of a list of facts in the format (E, A, V, added?) explained above; i.e. [entity, attribute, value, true if added else if it was retracted).

const facts = [
  ['gabriel', 'address', 'baker street, 109', true],
  ['john', 'address', 'apple street, 10', true],
  ['john', 'address', 'pine street, 88', true],
  ['john', 'phone', '234-5678', true],
  ['john', 'phone', '91234-5555', true],
  ['john', 'phone', '234-5678', false],
  ['gabriel', 'phone', '98888-1111', true],
  ['gabriel', 'phone', '56789-1010', true],
];
// You can assume the list is ordered from oldest to newest.

// The schema for this domain which defines the cardinality for each attribute is:

const schema = [
    ['address', 'cardinality', 'one'],
    ['phone', 'cardinality', 'many']
];
// i.e. an entity can have multiple (one-to-many) phones, while 'address' is a one-to-one relationship.

// In this example, the following records represent the history of addresses that john already had:

[['john', 'address', 'rua alice, 10', true],
 ['john', 'address', 'rua bob, 88', true]]
// Where the current value is the latest one.

// The goal of this programming task is to write a function that returns the "current facts" about these entities. i.e. only the latest information at current time.

// The function should receive facts (the historical facts) and schema as arguments.

// The expected result for this example is the set (order is not important):

[
  ['gabriel', 'address', 'baker street, 109', true],
  ['john', 'address', 'pine street, 88', true],
  ['john', 'phone', '91234-5555', true],
  ['gabriel', 'phone', '98888-1111', true],
  ['gabriel', 'phone', '56789-1010', true]
]
// Feel free to write the solution in whichever programming language you feel more comfortable.