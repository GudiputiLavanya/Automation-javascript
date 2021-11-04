function isBigint(number) {
    //let number1 = prompt("enter the value");
    //console.log(typeof (num));
    //let number = BigInt(number1)
    // let num2= BigInt(num1)
    if (typeof number == 'bigint') {
        //console.log(num2);
        console.log("bigint")
    } else {
        console.log(" Not bigint")
    }

}
isBigint(92233720368547758089999999999999);
//Bigint can not be converted as bigint.
//string can not be converted as bigint.
//Number converted as bigint.
/*number=BigInt(number1)
  if (number < -9223372036854775808 && number > 9223372036854775807) {
      console.log("bigint")
  }
  else {
      console.log(" not bigint")
  }*/