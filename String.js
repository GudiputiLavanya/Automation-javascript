function isString(input) {
    if (!input) {
        console.log("enter valid value");
    } else if (!isNaN(input)) {
        console.log("string contain  a numbers");
    } else {
        console.log("string  doesn't contain  a numbers");
    }
}

isString(12345);