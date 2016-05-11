/**
 * Created by a487037 on 05/11/2016.
 */
//Global Variable
var hello = 'Hello ';
function displayMessage(shouldAppend?:boolean) {
    //The variable is available within the function
    var name = 'Prashanth';
    if (shouldAppend) {
        //The variable is available only within the if block
        let innerVariable = 'Private message';
        console.log(hello + name + ' ' + innerVariable);
    }
}

displayMessage(true);