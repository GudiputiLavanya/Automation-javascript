/*function primitive(data) {
    var arr = ['null', 'undefined', 'string', 'boolean', 'number']
    for (let x of arr) {
        if (typeof(data) == x) {
            console.log("primtive")
            break;
        } else {
            console.log(" Non primtive")
        }

    }

}
primitive([1, 2, 5, 7]);*/
function primitive(value) {
    var bool;
    if ((value !== null) && (typeof value == 'object' || typeof value == 'function')) {
        bool = false;
    } else {
        bool = true;
    }
    isprimitive();

    function isprimitive() {
        if (bool) {
            console.log("primtive")
        } else {
            console.log("Non primtive")
        }
    }

}
primitive(Infinity);