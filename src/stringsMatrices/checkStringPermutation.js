var checkPermutation = function(str1, str2) {
    var letters = {};

    for (var i = 0; i < str1.length; i++) {
        if (letters[str1[i]] === undefined) {
            letters[str1[i]] = 0;
        }
        letters[str1[i]]++;
    }

    for (var i = 0; i < str2.length; i++) {
        if (!letters[str2[i]]) {
            return false;
        }
        letters[str2[i]]--;
    }

    for (var letter in letters) {
        if (letters[letter]) {
            return false;
        }
    }

    return true;
}
