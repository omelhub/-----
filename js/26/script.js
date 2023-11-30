const number = Number(500);
console.dir(number);
console.dir(Number.prototype.__proto__);
console.dir(Number.prototype.__proto__.__proto__);

const string = String('500');
console.dir(string);
console.dir(String.prototype.__proto__);
console.dir(String.prototype.__proto__.__proto__);

const boolean = Boolean(true);
console.dir(boolean);
console.dir(Boolean.prototype.__proto__);
console.dir(Boolean.prototype.__proto__.__proto__);