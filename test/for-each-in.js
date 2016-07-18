var a = function() {
    console.log('a');
}
function b() {
    console.log('b');
}
console.log(a.prototype.constructor);//[Function]
console.log(b.prototype.constructor);//[Function: b]
