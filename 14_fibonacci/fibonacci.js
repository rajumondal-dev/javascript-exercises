const fibonacci = function(n) {
    if(n<0){
        return "OOPS"
    }

    let rootFive = Math.sqrt(5);
    let phi = (1+rootFive)/2;
    let psi = (1-rootFive)/2;
    return n = Math.floor(((phi**n)-(psi**n))/rootFive);

};

// Do not edit below this line
module.exports = fibonacci;
