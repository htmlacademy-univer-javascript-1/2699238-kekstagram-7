const getStringLength = function(string, maxLength) {
  if (string.length <= maxLength) {
    return true;
  }
  return false;
};

const isPalindrome = function(string) {
  const normalized = string.toLowerCase();
  const reversed = normalized.split('').reverse().join('');
  return normalized === reversed;
};

export { getStringLength, isPalindrome };
