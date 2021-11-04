/*var Removeduplicate = function() {
    let name1 = prompt("enter the string")
    str1 = name1.split("").sort();
    var b = str1.filter((value, index) => {
        return str1.indexOf(value) == str1.lastIndexOf(value);
    }).join(',');
    return b;
}*/
var Removeduplicate = function(name1) {
    str1 = name1.toLowerCase().split("");
    var b = str1.filter((value, index) => {
        return str1.indexOf(value) == index;
    }).join(',');
    console.log(b);
}
Removeduplicate('Test');