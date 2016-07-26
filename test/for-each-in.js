var model = {
    func : function() {
        console.log('hell');
    },
    obj: {
        hell: 'helll'
    },
    arr: ['hello','helll']
}

var copy = JSON.parse(JSON.stringify(model));

console.log(JSON.stringify(model));
console.log(copy);