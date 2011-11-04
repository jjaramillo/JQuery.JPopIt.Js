/********************************************************************************
Copyright (c) 2011 Jaime Alberto Jaramillo Zapata (@g4m30n, jjaramillo@about.me)

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*************************************************************************************/

/*
 * Jquery.JPopIt.js
 * A simple 'Pop it' facebook like plugin to display alert
 *
 */

$.fn.JPopIt = function (options) {
    /*
    * First of all merge the user functions with the JPopIt default options
    */
    var options = $.extend($.fn.JPopIt.defaultOptions, options);
    var template = $(options.Template.replace(options.TextTag, options.Content));

    if ($.fn.JPopIt.notificationArea == null) {
        $.fn.JPopIt.notificationArea = $('<div style="position:absolute; display:inline; zid"/>').attr('id', 'notification-area');
        $.fn.JPopIt.notificationArea.appendTo('body');
        switch (options.HorizotalPosition.toUpperCase()) {
            default:
            case 'BOTTOM':
                $.fn.JPopIt.notificationArea.css('bottom', 0);
                break;
            case 'TOP':
                $.fn.JPopIt.notificationArea.css('top', 0);
                break;
        }
        switch (options.VerticalPosition.toUpperCase()) {
            case 'LEFT':
                $.fn.JPopIt.notificationArea.css('left', 0);
                break;
            default:
            case 'RIGTH':
                $.fn.JPopIt.notificationArea.css('right', 0);
                break;
        }
    }

    $.fn.JPopIt.notificationArea.queue(function () {
        switch (options.HorizotalPosition.toUpperCase()) {
            default:
            case 'BOTTOM':
                template.appendTo($.fn.JPopIt.notificationArea);
                break;
            case 'TOP':
                template.prependTo($.fn.JPopIt.notificationArea);
                break;
        }
        template.css('maxWidth', options.Width)
        .css('minHeight', options.Height)
        .css('position', 'relative')
        .css('background-color', options.BackgroundColor)
        .css('color', options.FontColor)
        .hide()
        .fadeIn(options.AnimationSpeed,
            function () {
                $.fn.JPopIt.notificationArea.dequeue();
            })
        .delay(options.HideTimeOut).fadeOut(
                function () {
                    $(this).remove();
                }
            )
        .find('span')
        .click(
            function () {
                $(this).parent().stop().fadeOut(function () {
                    $(this).remove();
                });
            }
        );
    });


}
//JPopIt default options
$.fn.JPopIt.defaultOptions = {
    'HorizotalPosition': 'bottom',
    'VerticalPosition': 'Right',
    'Template': '<div style="width: 250px; background-color: Black; -moz-border-radius: 10px; -webkit-border-radius: 10px;' +
            'border-radius: 10px; -khtml-border-radius: 10px; margin-bottom:10px;">' +
            '<span style="background-image: url(img/Close.png); display: block; width: 24px;' +
                'height: 24px; position: relative; float: right; cursor:pointer;"></span>' +
            '<div style="padding: 0px; color: White; margin: 5px; float: left; width: 216px; text-align: justify; font-size:x-small; font-family:helvetica;">' +
                '[[Text]]</div>' +
            '<div style="clear: both;"></div>' +
        '</div> ',
    'HideTimeOut': 3500,
    'AnimationSpeed': 1000,
    'Content': 'Hello JPop it',
    'Width': 300,
    'Height': 50,
    'TextTag': '[[Text]]',
    'BackgroundColor': 'black',
    'FontColor': 'White'
};
$.fn.JPopIt.notificationArea = null;