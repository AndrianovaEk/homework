var controllerOfNote = (function () {
    'use strict';

    function noteOfAdd(book) {
        var dateOfAdd = new Date();
        var time = (dateOfAdd - dateOfLoad) / (1000 * 60);
        var notification = new Notification(time);

        return notification;
    }

    function noteOfSearch() {
        var dateOfSearch = new Date();
        var time = (dateOfSearch - dateOfLoad) / (1000 * 60);
        var notification = new Notification(time);

        return notification;
    }

    function noteOfPopular() {
        var dateOfPop = new Date();
        var time = (dateOfPop - dateOfLoad) / (1000 * 60);
        var notification = new Notification(time);

        return notification;
    }

    function noteOfRate() {
        var dateOfRate = new Date();
        var time = (dateOfRate - dateOfLoad) / (1000 * 60);
        var notification = new Notification(time);

        return notification;
    }

    return {
        noteOfAdd: noteOfAdd,
        noteOfSearch: noteOfSearch,
        noteOfPopular: noteOfPopular,
        noteOfRate: noteOfRate
    };
} ());