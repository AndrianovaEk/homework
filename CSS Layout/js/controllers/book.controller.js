var controller = (function () {
    'use strict';

    function addBook(image, title, author, rate) {
        var book = new Book(
            image,
            title,
            author,
            rate
        );

        books.push(book);
        view.showBooks(books);
        viewNote.showNotificationsAdd(book);
    }

    function mostPopular(array) {
        var result = [];

        // Filter books array
        for (var i = 0; i < books.length; i++) {
            if (books[i].getRate() == 5) {
                result.push(books[i]);
            }
        }

        view.showBooks(result);
        viewNote.showNotificationsPopular(event);
    }

    function search(searchText, books) {
        event.preventDefault();

        var result = [];
        var searchBook;

        // Filter books array 
        for (var i = 0; i < books.length; i++) {
            var isInSearch = false;
            var searchTitle = utilites.wordOfSearch(books[i].getTitle());
            var searchAuthor = utilites.wordOfSearch(books[i].getAuthor());

            for (var j = 0; j < searchAuthor.length; j++) {
                if (searchAuthor[j].toLowerCase() == searchText.toLowerCase()) {
                    searchBook = books[i];
                    isInSearch = true;
                    break;
                }
            }

            for (var j = 0; j < searchTitle.length; j++) {
                if (searchTitle[j].toLowerCase() == searchText.toLowerCase()) {
                    searchBook = books[i];
                    isInSearch = true;
                    break;
                }
            }

            if (isInSearch) {
                result.push(searchBook);
            }
        }

        view.showBooks(result);
        viewNote.showNotificationsSearch(event);
    }

    function newRate(event) {
        //Assigned rate for book
        var star = event.target;
        var rating = parseInt(star.getAttribute('rate'));
        var index = parseInt(star.getAttribute('book'));

        books[index].setRate(rating);
        viewNote.showNotificationsStar(event);
    }

    return {
        addBook: addBook,
        mostPopular: mostPopular,
        search: search,
        newRate: newRate
    };
} ());