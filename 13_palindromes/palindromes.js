const palindromes = function (string) {
    let lowerString = string.toLowerCase()
                            .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()'"?\s]/g, "");
    let reverseString = lowerString.split('').reverse().join('');
    if(lowerString === reverseString){
        return true;
    }else{
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
