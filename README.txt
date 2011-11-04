
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



--What is JPopIt

JpopIt is a simple notification system built on top of jquery, much like the facebook notification bubbles.

-Usage

$.fn.JPopIt(options).
The following are the current supported javascript literal options and their default values
 'VerticalPosition': 'bottom'|'top' : - default: 'bottom'. The horizontal position for the PopIt. This will also dictate how the pop
 it bubbles are pasted to the DOM (appended or prepended)
 'HorizontalPosition': 'Right'|'Left' - default: 'right' 
 'Template': '<div style="width: 250px; background-color: Black; -moz-border-radius: 10px; -webkit-border-radius: 10px;' +
            'border-radius: 10px; -khtml-border-radius: 10px; margin-bottom:10px;">' +
            '<span style="background-image: url(img/Close.png); display: block; width: 24px;' +
                'height: 24px; position: relative; float: right; cursor:pointer;"></span>' +
            '<div style="padding: 0px; color: White; margin: 5px; float: left; width: 216px; text-align: justify; font-size:x-small; font-family:helvetica;">' +
                '[[Text]]</div>' +
            '<div style="clear: both;"></div>' +
        '</div> '  - A string containing the html template or the template jquery selector.
    'HideTimeOut': 3500 - Time required to pass (millis) in order to run the fadeOut animation
    'AnimationSpeed': 1000 - Animation speed for the fadeIn and fadeOut animations
    'Content': 'Hello JPop it' - The bubble contents. Supports html
    'TextTag': '[[Text]]' The tag which is gonna be replaced with the bubble content	
    'BackgroundColor': 'Black' - Background color for the bubble
    'FontColor': 'White' - Font color for the text inside the bubble
	'Width': 300 - Minimum width for the bubble
    'Height': 50 - Minimum height for the bubble

-Pending Work:
	>Content should supports url (and do the server call and render the server response)
	>Callbacks
	>There is some unwante behavior when you try to close the bubbles manually