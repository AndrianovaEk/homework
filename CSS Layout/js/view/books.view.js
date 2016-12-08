var view = (function () {
    'use strict'

    function initialize() {
        // Add event listener for 'Add book button'
        document
            .querySelector('#add-form')
            .addEventListener('submit', onBookAdd);
        // Add event listener for 'Search button'
        document
            .querySelector('#search-form')
            .addEventListener('submit', onSearch);
        // Add event listener for 'Most Popular' button
        document
            .querySelector('#menu3')
            .addEventListener("click", onMostPopularFilter); 
        // Add event listener for 'All books' button
        document
            .querySelector('#menu1')
            .addEventListener("click", onAllBooks); 
    }

    function onAllBooks(event) {
        event.preventDefault();

        showBooks(books);
    }

    function onBookAdd(event) {
        event.preventDefault();

        var $title = document.querySelector('#title');
        var $author = document.querySelector('#author');

        controller.addBook("<img id='newBook' src='img/undefinedBook.png'/>", $title.value, $author.value, 1);
    }

    function onSearch() {
        event.preventDefault();

        var $input = document.querySelector('#enter');
        var searchText = $input.value.toLowerCase();

        controller.search(searchText, books);
    }

    function onMostPopularFilter() {
        controller.mostPopular(books);
    }

    function createStars(bookId, books) {
        var ratingBlock = [];
        var inputRating = [];
        var labelRating = [];

        ratingBlock = document.createElement('div');
        ratingBlock.setAttribute('class', 'rating');

        for (var starId = 5; starId > 0; starId--) {
            var resultId = bookId.toString() + starId.toString();

            inputRating = document.createElement('input');
            inputRating.setAttribute('type', 'radio');
            inputRating.setAttribute('class', 'rating-input');
            inputRating.setAttribute('book', bookId);
            inputRating.setAttribute('rate', starId);
            inputRating.setAttribute('id', resultId);

            labelRating = document.createElement('label');
            labelRating.className = 'rating-star';
            labelRating.setAttribute('for', resultId);

            if (starId == books[bookId].getRate()) {
                inputRating.setAttribute('checked', 'checked');
            }

            ratingBlock.appendChild(inputRating);
            ratingBlock.appendChild(labelRating);
        }

        return ratingBlock;
    }

    function showBooks(books) {
        var $container = document.querySelector('#container');

        $container.innerHTML = "";

        if (Array.isArray(books)) {
            for (var i = 0; i < books.length; i++) {
                var book = document.createElement('div');
                book.className = 'viewBooks';
                book.innerHTML = books[i].getImage() + '<br>' + books[i].getTitle() + '<br>' + 'by ' + books[i].getAuthor() + '<br>';
                book.appendChild(createStars(i, books));
                $container.appendChild(book);
            }

            // Add event listener for each star
            var starElements = document.querySelectorAll('.rating-input');

            starElements.forEach(function (element) {
                element.addEventListener("change", function (event) {
                    controller.newRate(event);
                }, false);
            });
        } else {
            throw new Error('Must be an array of books');
        }
    }

    return {
        initialize: initialize,
        showBooks: showBooks,
        onBookAdd: onBookAdd,
        onSearch: onSearch,
        onMostPopularFilter: onMostPopularFilter,
        onAllBooks: onAllBooks,
        createStars: createStars
    };
} ());
