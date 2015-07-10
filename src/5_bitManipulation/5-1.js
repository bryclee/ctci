module.exports = (function() {
  /*
    M should be binary string
    N should be binary string
    i should be integer referring to starting bit
    j should be integer referring to starting bit
  */
  return function insertMintoN(N, M, i, j) {
    //Insert M into N starting from bit i and ending at j
    typeof N === 'string' && (N = parseInt(N, 2));
    typeof M === 'string' && (M = parseInt(M, 2));

    var mask = ((Math.pow(2, j - i + 1) - 1) << i);

    N = (N & ~mask) | (M << i);

    return N.toString(2);
  };
})();
