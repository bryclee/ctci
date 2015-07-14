module.exports = (function() {
  /*
    Accepts a number with a decimal (float) and returns its binary representation
  */
  return function convertDecimalToBinary(number) {
    var binary = Math.floor(number).toString(2).split('');
    number = number - Math.floor(number);

    binary.push('.');
    while (number !== 0 && binary.length < 32) {
      number *= 2;
      binary.push(Math.floor(number));
      number = number - Math.floor(number);
    }

    if (number === 0) {
      return binary.join('');
    } else {
      return 'ERROR';
    }
  };
})();
