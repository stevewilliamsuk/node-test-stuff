//this "internal" function, because it's not exposed directly by "module.exports" is internal
function internalFunction() {
    console.log("internal function was called");
    module.exports.myString = "test string changed by internal function";
}

//everything that we want to see outside of the "module" must be exposed under module.exports
module.exports = {
    myFunction: function() {
        console.log("function was called");
        internalFunction();
    },
    myString: "test string"
};