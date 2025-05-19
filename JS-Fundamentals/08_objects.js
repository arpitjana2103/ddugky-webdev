const hello = function () {
    if (arguments[0]) {
        console.log("Argument mat daal bhaiiiii...");
        return;
    }

    console.log("Hello World");
};

console.log(hello.length);
