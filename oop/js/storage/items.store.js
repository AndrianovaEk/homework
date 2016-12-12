var ItemsStore = (function () {
    'use strict';

    function Store(items) {
        var _items;
        
        this.setItems = function (items) {
            if (Array.isArray(items)) {
                _items = items;
            } else {
                throw new Error('It`s must be an array');
            }
        };

        this.getItems = function () {
            return _items;
        };

        this.setItems(items);
    }

    return new Store([]);
} ());
