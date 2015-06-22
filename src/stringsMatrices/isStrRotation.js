var isStrRotation = function(str1, str2) {
    // Check if str2 is a rotation of str1
    if (str1.length !== str2.length) {
        return false;
    }

    str1 += str1;
    return checkSubstring(str1, str2);
};

var checkSubstring= function(str1, str2) {
    // Check if str2 is a substring of str1
    for (var i = 0; i < str1.length - str2.length + 1; i++) {
        if (str1.slice(i, i + str2.length) === str2) {
            return true;
        }
    }

    return false;
};
