# simple-draggable [![Support this project][donate-now]][paypal-donations]

A tiny library to make elements draggable.

## Installation

```sh
$ npm i simple-draggable
```

## Example

```js
SimpleDraggable(".cursor", {
    onlyX: false
  , onlyY: false
  , onStart: function (event, element) {
        // Do something on drag start
    }
  , onStop: function (event, element) {
        // Do something on drag stop
    }
  , onDrag: function (event, element) {
        // Do something on drag drag
    }
});
```

## Documentation

### `SimpleDraggable(selector, options)`
Initializes the draggable state.

#### Params
- **String** `selector`: The element query selector.
- **Object** `options`: An object containing:
 - `onStart` (Function): A function to run on drag start.
 - `onStop` (Function): A function to run on drag stop.
 - `onDrag` (Function): A function to run on drag move.
 - `onlyX` (Boolean): Drag the element only on the X axis.
 - `onlyY` (Boolean): Drag the element only on the Y axis.

## How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:

## License

[KINDLY][license] © [Ionică Bizău][website]

[license]: http://ionicabizau.github.io/kindly-license/?author=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica@gmail.com%3E&year=2014

[website]: http://ionicabizau.net
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md