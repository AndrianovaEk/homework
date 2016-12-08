var Notification = (function () {
    'use strict';

    function Notification(time) {
        var _time;

        this.setTime = function (time) {
            if (typeof (time) == 'number') {
                _time = time;
            } else {
                throw new Error('It`s must be a date');
            }
        };

        this.getTime = function () {
            return _time;
        };

        this.setTime(time);
    }
    
    return Notification;
} ());