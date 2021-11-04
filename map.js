/*const obj = new Map();
obj.set('lavanya', 22);
obj.set('loukya', 2);
obj.set('fun', (a, b) => { console.log("this is function", a, b) });
console.log(obj.get('fun').call(this, 1, 2));*/
const obj = new Map();
obj.set('lavanya', 22);
obj.set('loukya', 2);
obj.set('fun', function(a, b) { console.log("this is function", a, b) });
console.log(obj.get('fun').call(this, 1, 2));