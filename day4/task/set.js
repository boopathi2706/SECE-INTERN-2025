// Create a Set
const mySet = new Set(['apple', 'banana', 'cherry']);

// 1. Using for...of loop
console.log('Accessing elements using for...of:');
for (const item of mySet) {
  console.log(item);
}

// 2. Using forEach
console.log('\nAccessing elements using forEach:');
mySet.forEach(item => {
  console.log(item);
});

// 3. Converting Set to Array using Array.from
const arrayFromSet = Array.from(mySet);
console.log(arrayFromSet[0]); // Access by index
console.log(arrayFromSet[1]);

// 4. Converting Set to Array using Spread Operator
const spreadArray = [...mySet];
console.log(spreadArray[0]); // Access by index
console.log(spreadArray[1]);

// 5. Using Set.prototype.values() (Iterator)
const valuesIterator = mySet.values();
console.log(valuesIterator.next().value); // Access the first element
console.log(valuesIterator.next().value); // Access the second element

// 6. Using Set.prototype.entries()
for (const [key, value] of mySet.entries()) {
  console.log(value); // Key and value are the same in a Set
}
