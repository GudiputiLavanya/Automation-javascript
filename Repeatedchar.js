function isRepeatedchar(input1) {
    var input = input1.toLowerCase();
    for (let i = 0; i < input.length; i++) {
        for (let j = i + 1; j < input.length; j++) {
            if (input[i] == input[j]) {
                console.log("the repeated charcaters are", input[i]);
            }
        }
    }

}
isRepeatedchar('LALBBBBBC');
/*function isRepeatedchar(input1) {
    var input = input1.toLowerCase();
    for (let i = 0; i < input.length; i++) {
        if (input.indexOf(input[i]) !== input.lastIndexOf(input[i])) {
            console.log("Repeated charcters are", input[i]);
        }
    }

}
isRepeatedchar('LALBBBBBC');*/
//Another way
/*var bool;
function isRepeatedchar(input1) {
    var bool;
    var input = input1.toLowerCase();
    for (let i = 0; i < input.length; i++) {
        if (input.indexOf(input[i]) !== input.lastIndexOf(input[i])) {
            bool = true;
        }
    }
    Repeated();
}
isRepeatedchar('Lasdfg');

function Repeated() {
    if (bool) {
        console.log("characters are repeated");
    } else {
        console.log("characters  are  not repeated")
    }
}*/