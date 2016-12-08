var utilites = (function () {
    'use strict';

    function wordOfSearch(word) {
        var index = 0;
        var arr = [];

        for (var i = 0; i < word.length; i++) {
            var letter = word[i];
            arr[index] = letter;
            index = index + 1;

            for (var j = i + 1; j < word.length; j++) {
                letter = letter + word[j];
                arr[index] = letter;
                index = index + 1;
            }
        }

        return arr;
    }

    return {
        wordOfSearch: wordOfSearch
    };
} ());
