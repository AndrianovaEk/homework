var Book = (function () {
    'use strict';

    function Book(image, title, author, rate) {
        var _image;
        var _title;
        var _author;
        var _rate;
        
        this.setImage = function (image) {
            if (image) {
                _image = image;
            } else {
                throw new Error('It`s must be an image');
            }
        };

        this.getImage = function () {
            return _image;
        };

        this.setTitle = function (title) {
            if (typeof (title) =='string') {
                _title = title;
            } else {
                throw new Error('It`s must be a string');
            }
        };

        this.getTitle = function () {
            return _title;
        };

        this.setAuthor = function (author) {
            if (typeof (author) == 'string') {
                _author = author;
            } else {
                throw new Error('It`s must be a string');
            }
        };

        this.getAuthor = function () {
            return _author;
        };

        this.setRate = function (rate) {
            if (typeof (rate) == 'number') {
                _rate = rate;
            } else {
                throw new Error('It`s must be a number');
            }
        };

        this.getRate = function () {
            return _rate;
        };

        this.setTitle(title);
        this.setAuthor(author);
        this.setImage(image);
        this.setRate(rate);
    }

    return Book;

} ());