const palindromes = function (isPalindrome) {

    var punctuation = /[\.,?! ]/g;
    var confirmed;
    isPalindrome = isPalindrome.replace(punctuation, "").toLowerCase();
    // isPalindrome = isPalindrome.replace(" ", "").toLowerCase();
    var reversed = isPalindrome.split('').reverse().join('');
    console.log(isPalindrome);

    isPalindrome === reversed ? confirmed = true : confirmed = false;

    return confirmed;
};

// Do not edit below this line
module.exports = palindromes;
