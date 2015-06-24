module.exports = function reverseLinkedListAddition(list1, list2) {
  var result = new LinkedList();

  var num1 = list1.head;
  var num2 = list2.head;
  var carry = 0;

  while (num1 || num2 || carry) {
    var val1 = num1 && num1.value;
    var val2 = num2 && num2.value;
    result.add((val1 + val2 + carry) % 10);
    carry = Math.floor((val1 + val2 + carry)/10);

    if (num1) {
      num1 = num1.next;
    }
    if (num2) {
      num2 = num2.next;
    }
  }

  return result;
};
