function stringtoNumber(data) {
    if (!data && data !== 0) {
        console.log('it is null or undefined , empty');
    } else if (isNaN(data)) {
        console.log("it is string");
    } else {
        console.log("it is number", Number(data));
    }
}
stringtoNumber('2345678');