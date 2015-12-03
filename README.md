# simple-draggable [![Support this project][donate-now]][paypal-donations]

A tiny library to make elements draggable.

## Installation

```sh
$ npm i --save simple-draggable
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

[MIT][license] © [Ionică Bizău][website]

[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2014#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md