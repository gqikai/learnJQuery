/**
 * Created by gaoqikai on 7/21/16.
 */
    function Foo(){};
var foo = new Foo();
var o = {};
console.log(o.__proto__);
console.log(Foo.prototype);
console.log(foo.__proto__ === Foo.prototype);
