var rotateMatrix = function(matrix) {
    var rotateLayer = function(matrix, layer) {
        var length = matrix.length;
        for (var i = layer; i < length - layer - 1; i++) {
            var tmp = matrix[layer][i];
            matrix[layer][i] = matrix[i][length-layer-1];
            matrix[i][length-layer-1] = matrix[length-layer-1][length-1-i];
            matrix[length-layer-1][length-1-i] = matrix[length-i-1][layer];
            matrix[length-i-1][layer] = tmp;
        }
    }

    for (var i = 0; i < Math.floor(matrix.length / 2); i++) {
        rotateLayer(matrix, i);
    }

    return matrix;
};
