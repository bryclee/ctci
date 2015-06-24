module.exports = function towersOfHanoi(n) {
  var tower1 = [];
  var tower2 = [];
  var tower3 = [];

  for (var i = n; i > 0; i--) {
      tower1.push(i);
  }

  var moveToTower = function(fromTower, tempTower, toTower, n) {
    if (n === 1) {
        toTower.push(fromTower.pop());
    } else {
        moveToTower(fromTower, toTower, tempTower, n - 1);
        toTower.push(fromTower.pop());
        moveToTower(tempTower, fromTower, toTower, n - 1);
    }
  };

  moveToTower(tower1, tower2, tower3, n);
};
