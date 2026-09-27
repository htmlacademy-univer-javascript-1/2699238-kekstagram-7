const getStringLength = function(string, maxLength) {
  if (string.length <= maxLength) {
    return true;
  }
  return false;
};

console.log(getStringLength('Sfwg', 4));
console.log(getStringLength('aaaaaaaaaaa', 5));
console.log(getStringLength('fdsfsdfd', 100));

const isPalindrome = function(string) {
  const normalized = string.toLowerCase();
  const reversed = normalized.split('').reverse().join('');
  return normalized === reversed;
};

console.log(isPalindrome('шалаш'));
console.log(isPalindrome('ТоПот'));
console.log(isPalindrome('тест'));
