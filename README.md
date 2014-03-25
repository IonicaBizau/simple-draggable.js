simple-draggable.js
===================

This is a very minimalistic JavaScript library for dragging elements on the page.
It's not based on jQuery or anything like this. Just pure JavaScript.

## How to use
Call it this way:

```js
SimpleDraggable(".myClass", {});
```

## Documentation

After importing it in the page `SimpleDraggable` variable will be created. This is a function that can be called using two arguments:

 - **first argument** is a string
 - **second argument** is an object containing the following fields
   - `onStart`: function that will be called when the drag stars (default: `function () {}`)
   - `onDrag`: function that will be called when the ellement is dragged (default: `function () {}`)
   - `onStop`: function that will called when the drag stops (default: `function () {}`)
   - `onlyX`: boolean value (true or false) that indicates if the element can be moved *only* on X axis (default: `undefined`)
   - onlyX: boolean value (true or false) that indicates if the element can be moved *only* on Y axis (default: `undefined`)

## License
See LICENSE file.
