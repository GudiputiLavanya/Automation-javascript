var j = 2;

function isPrime() {
    var start = +prompt("enter staring number");
    var End = +prompt("enter ending  number");
    var flag;
    while (start >= End) {
        var j = 2;
        prime();
        if (flag == true && start > 1) {
            console.log(start);
        }
        start--;
    }

    function prime() {
        while (j < start) {
            if (start % j == 0) {
                flag = false;
                break;
            } else {
                flag = true;
            }
            j++;
        }
    }

}
isPrime();