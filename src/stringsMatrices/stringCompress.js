module.exports = function stringCompress(string) {
    var result = [];
    string = string.split('');

    var prevLetter = string[0];
    var counter = 1;

    for (var i = 1; i < string.length; i++) {
        if (string[i] === prevLetter) {
            counter++;
        } else {
            result.push(prevLetter, counter);
            prevLetter = string[i];
            counter = 1;
        }
    }

    result.push(prevLetter, counter);

    if (result.length < string.length) {
        return result.join('');
    } else {
        return string.join('');
    }
};
