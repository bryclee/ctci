var checkBalancedTree = function(tree) {

    var checkHeight = function(node) {
        var left = 0;
        var right = 0;
        if (node.left) {
            left = checkHeight(node.left);
        }
        if (node.right) {
            right = checkHeight(node.right);
        }

        if (left !== false && right !== false && Math.abs(left - right) <= 1) {
            return Math.max(left, right) + 1;
        } else {
            return false;
        }
    }

    if (checkHeight(tree) !== false) {
        return true;
    } else {
        return false;
    }
};
