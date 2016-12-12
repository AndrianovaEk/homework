var Controller = (function () {
    'use strict';

    function Controller() {
        var _view;

        this.setView = function (view) {
            if (view) {
                _view = view;
            } else {
                throw new Error('It`s must be a view');
            }
        };

        this.getView = function () {
            return _view;
        };
    }

    Controller.prototype.addTask = function addTask(checked, title) {
        var view = this.getView();
        var newItem = new Item(checked, title);
        var items = ItemsStore.getItems();

        items.push(newItem);
        view.showItems(items);
    };

    Controller.prototype.checkedTask = function checkedTask(id) {
        var view = this.getView();
        var items = ItemsStore.getItems();
        var item = items[id];
        var isDone = items.splice(id, 1);

        item.setChecked(!item.getChecked());

        if (item.getChecked()) {
            items.push(item);
        } else {
            items.unshift(item);
        }

        view.showItems(items);
    }

    return Controller;
} ());