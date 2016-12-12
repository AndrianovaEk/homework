var Item = (function () {
    'use strict';

    function Item(checked, title) {
        var _checked;
        var _title;

        this.setChecked = function (checked) {
            if (typeof(checked)=='boolean') {
                _checked = checked;
            } else {
                throw new Error('It`s must be a button');
            }
        };

        this.getChecked = function () {
            return _checked;
        };

        this.setTitle = function (title) {
            if (typeof (title) == "string") {
                _title = title;
            } else {
                throw new Error('It`s must be a string');
            }
        };

        this.getTitle = function () {
            return _title;
        };

        this.setChecked(checked);
        this.setTitle(title);
    }

    return Item;

} ());