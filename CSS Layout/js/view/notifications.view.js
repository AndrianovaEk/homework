var viewNote = (function () {
    'use strict';

    function showNotificationsAdd(book) {
        var $notification = document.querySelector('.notification');
        var liNotification = document.createElement('li');
        var note = document.createElement('span');
        var notification = controllerOfNote.noteOfAdd(book);

        liNotification.setAttribute('class', 'note');

        if (notification.time < 1) {
            note.innerHTML = 'You added ' +
                book.getTitle() +
                ' by ' + book.getAuthor() +
                " to your 'Must Read Titles' less minutes ago";
        } else {
            note.innerHTML = 'You added ' +
                book.getTitle() +
                ' by ' + book.getTitle() +
                " to your 'Must Read Titles' " +
                notification.getTime().toFixed(2) +
                ' minutes ago';
        }

        liNotification.appendChild(note);
        $notification.appendChild(liNotification);

        return $notification;
    }

    function showNotificationsSearch(event) {
        var $notification = document.querySelector('.notification');
        var liNotification = document.createElement('li');
        var note = document.createElement('span');
        var notification = controllerOfNote.noteOfSearch();

        liNotification.setAttribute('class', 'note');

        
        if (notification.time < 1) {
            note.innerHTML = 'You searched book less minutes ago';
        } else {
            note.innerHTML = 'You searched book ' +
                notification.getTime().toFixed(2) +
                ' minutes ago';
        }

        liNotification.appendChild(note);
        $notification.appendChild(liNotification);

        return $notification;
    }

    function showNotificationsPopular(event) {
        var $notification = document.querySelector('.notification');
        var liNotification = document.createElement('li');
        var note = document.createElement('span');
        var notification = controllerOfNote.noteOfPopular();

        liNotification.setAttribute('class', 'note');

        if (notification.time < 1) {
            note.innerHTML = 'You choose the most popular books less minutes ago';
        } else {
            note.innerHTML = 'You choose the most popular books ' +
                notification.getTime().toFixed(2) +
                ' minutes ago';
        }

        liNotification.appendChild(note);
        $notification.appendChild(liNotification);

        return $notification;
    }

    function showNotificationsStar(event) {
        var $notification = document.querySelector('.notification');
        var liNotification = document.createElement('li');
        var note = document.createElement('span');
        var notification = controllerOfNote.noteOfRate();

        liNotification.setAttribute('class', 'note');

        if (notification.time < 1) {
            note.innerHTML = 'You put rating for books less minutes ago';
        } else {
            note.innerHTML = 'You put rating for books ' +
                notification.getTime().toFixed(2) +
                ' minutes ago';
        }

        liNotification.appendChild(note);
        $notification.appendChild(liNotification);
        
        return $notification;
    }

    return {
        showNotificationsAdd: showNotificationsAdd,
        showNotificationsSearch: showNotificationsSearch,
        showNotificationsPopular: showNotificationsPopular,
        showNotificationsStar: showNotificationsStar
    };
} ());