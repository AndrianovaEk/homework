var main = (function (View, Controller) {
    'use strict';

    var controller = new Controller();
    var view = new View();

    ItemsStore.setItems([
        new Item(false, 'ToDo item 1'),
        new Item(false, 'ToDo item 2'),
        new Item(false, 'ToDo item 3'),
        new Item(false, 'ToDo item 4'),
        new Item(false, 'ToDo item 5')
    ]);

    controller.setView(view);
    view.setController(controller);

    view.initialize();
    view.showItems(ItemsStore.getItems());  
} (View, Controller));