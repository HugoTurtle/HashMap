import { HashMap } from "./hash-map.js";

const test = new HashMap(); 

test.set('apple', 'red')
test.set('banana', 'yellow')
test.set('carrot', 'orange')
test.set('dog', 'brown')
test.set('elephant', 'gray')
test.set('frog', 'green')
test.set('grape', 'purple')
test.set('hat', 'black')
test.set('ice cream', 'white')
test.set('jacket', 'blue')
test.set('kite', 'pink')
test.set('lion', 'golden')

console.log("Before resize:", test.capacity, "size:", test.size, "entries:", test.entries());

//Overwrite
test.set('lion', 'golden')

//Triggering resize
test.set('leaf', 'orange')
test.set('crab', 'yellow')

//Overwrite after resize
test.set('crab', 'blue')
test.set('leaf', 'pink')

console.log("After resize:", test.capacity, "size:", test.size, "entries:", test.entries());

