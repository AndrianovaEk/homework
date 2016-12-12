var View = (function () {
    'use strict';

    var _self;

    function View() {
        var _controller;

        this.setController = function (controller) {
            if (controller) {
                _controller = controller;
            } else {
                throw new Error('It`s must be a controller');
            }
        };

        this.getController = function () {
            return _controller;
        };

        _self = this;
    }

    View.prototype.initialize = function initialize() {
        // Add event listener for 'Add book button'
        document.querySelector('#add-item').addEventListener('submit', this.onItemAdd, false);
    };

    View.prototype.onItemAdd = function onItemAdd(event) {
        event.preventDefault();

        var controller = _self.getController();
        var $name = document.querySelector('#newToDo');

        controller.addTask(false, $name.value);
    };

    View.prototype.showItems = function showItems(items) {
        var $container = document.querySelector('#container');

        $container.innerHTML = '';

        if (Array.isArray(items)) {
            for (var i = 0; i < items.length; i++) {
                var task = document.createElement('div');

                task.className = 'viewItems';
                task.setAttribute('id', i);

                var input = document.createElement('input');
                input.className = 'check';
                input.setAttribute('type', 'checkbox')
                input.setAttribute('id', i);

                if (items[i].getChecked() == true) {
                    input.setAttribute('checked', 'checked');
                }

                task.innerHTML = items[i].getTitle();
                task.appendChild(input);

                $container.appendChild(task);
            }

            var itemsElement = document.querySelectorAll('.viewItems');

            itemsElement.forEach(function (element) {
                element.addEventListener('click', _self.onItemCheck, false);
            });

        } else {
            throw new Error('Must be an array of items');
        }
    };

    View.prototype.onItemCheck = function onItemCheck(event) {
        var item = event.target;
        var id = parseInt(item.getAttribute('id'));
        var controller = _self.getController();

        controller.checkedTask(id);
    };

    return View;

} ());