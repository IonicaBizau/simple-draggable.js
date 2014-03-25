/**
 *  Simple Draggable
 *  simple-draggable.js
 *  -------------------
 *
 *  This is a very minimalistic JavaScript library for dragging elements on the page.
 *  It's not based on jQuery or anything like this. Just pure JavaScript.
 *
 *  Example
 *  -------
 *  SimpleDraggable(".cursor", {});
 *
 *  Licensed under MIT license
 *  --------------------------
 *
 *  The MIT License (MIT)
 *
 *  Copyright (c) 2014 Ionică Bizău
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the "Software"), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in all
 *  copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 *  SOFTWARE.
 *
 *
 */
(function (window) {

    // create the SimpleDraggable function
    var SimpleDraggable = function (selector, options) {

        // handlers
        options.onStart = options.onStart || function () {};
        options.onStop = options.onStop || function () {};
        options.onDrag = options.onDrag || function () {};

        // query the elements
        var allElms = document.querySelectorAll (selector);

        // each element
        for (var i = 0; i < allElms.length; ++i) {
            (function (cEl) {

                // TODO
                // document.body.appendChild(cEl);
                cEl.style.position = "absolute";

                // create _simpleDraggable object for this dom element
                cEl._simpleDraggable = {
                   drag: false
                }

                // listen for mousedown
                cEl.addEventListener("mousedown", function (e) {

                    // set true for drag field
                    cEl._simpleDraggable.drag = true;

                    // set the mouse position on the page
                    cEl._simpleDraggable.mousePos = {
                        x: e.clientX
                      , y: e.clientY
                    };

                    // set the element position
                    cEl._simpleDraggable.elPos = {
                        x: cEl.offsetLeft
                      , y: cEl.offsetTop
                    }

                    // call start handler
                    options.onStart.call(this, e, cEl);
                });

                // listen for mouse up
                cEl.addEventListener("mouseup", function (e) {

                    // drag: false
                    cEl._simpleDraggable.drag = false;

                    // call stop handler
                    options.onStop.call(this, e, cEl);
                });

                // listen for mouse out of body
                document.body.addEventListener("mouseout", function (e) {

                    // drag: false
                    cEl._simpleDraggable.drag = false;

                    // call stop hanlder
                    options.onStop.call(this, e, cEl);
                });

                // listen for mouse move
                document.body.addEventListener("mousemove", function (e) {

                    // if drag is NOT true, return
                    if (!cEl._simpleDraggable.drag) { return; }

                    // if drag handler returns false, don't do anything
                    if (options.onDrag.call(this, e, cEl) === false) {
                        return;
                    }

                    // move only on y axis
                    if (!options.onlyY) {
                        cEl.style.left = (cEl._simpleDraggable.elPos.x + e.clientX - cEl._simpleDraggable.mousePos.x) + "px";
                    }

                    // move only on x axis
                    if (!options.onlyX) {
                        cEl.style.top = (cEl._simpleDraggable.elPos.y + e.clientY - cEl._simpleDraggable.mousePos.y) + "px";
                    }
                })
            })(allElms[i])
        }
    };

    // export the function
    window.SimpleDraggable = SimpleDraggable;
});
