function marks() {
    var min_marks = 30;
    var marks1 = +prompt("enter the marks");
    var b = function() {
        if (marks1 >= min_marks) {
            console.log("pass")

        } else {
            console.log("fail")
        }
    }
    return b;

}
var xyz = marks();
xyz();