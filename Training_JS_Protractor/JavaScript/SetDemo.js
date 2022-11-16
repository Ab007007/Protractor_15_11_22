const set = new Set()

set.add("A")
set.add("B")
console.log(set.size);

set.add("A")
set.add("B")
set.add("A")
set.add("B")
console.log(set.size);
console.log(set.values());
console.log(set.has("A"));


set.forEach(ele => {
    console.log(ele);
})