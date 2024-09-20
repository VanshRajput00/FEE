function myCallbackFunction() {
    console.log("This is the callback function being executed!");
}

function callFunction(callback) {
    console.log("Calling the callback function...");
    callback();
}
callFunction(myCallbackFunction);