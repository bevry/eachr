<!-- TITLE/ -->

# Eachr

<!-- /TITLE -->

<!-- BADGES/ -->

[![Build Status](http://img.shields.io/travis-ci/bevry/eachr.png?branch=master)](http://travis-ci.org/bevry/eachr "Check this project's build status on TravisCI")
[![NPM version](http://badge.fury.io/js/eachr.png)](https://npmjs.org/package/eachr "View this project on NPM")
[![Dependency Status](https://david-dm.org/bevry/eachr.png?theme=shields.io)](https://david-dm.org/bevry/eachr)
[![Development Dependency Status](https://david-dm.org/bevry/eachr/dev-status.png?theme=shields.io)](https://david-dm.org/bevry/eachr#info=devDependencies)<br/>
[![Gittip donate button](http://img.shields.io/gittip/bevry.png)](https://www.gittip.com/bevry/ "Donate weekly to this project using Gittip")
[![Flattr donate button](http://img.shields.io/flattr/donate.png?color=yellow)](http://flattr.com/thing/344188/balupton-on-Flattr "Donate monthly to this project using Flattr")
[![PayPayl donate button](http://img.shields.io/paypal/donate.png?color=yellow)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=QB8GQPZAH84N6 "Donate once-off to this project using Paypal")
[![BitCoin donate button](http://img.shields.io/bitcoin/donate.png?color=yellow)](https://coinbase.com/checkouts/9ef59f5479eec1d97d63382c9ebcb93a "Donate once-off to this project using BitCoin")
[![Wishlist browse button](http://img.shields.io/wishlist/browse.png?color=yellow)](http://amzn.com/w/2F8TXKSNAFG4V "Buy an item on our wishlist for us")

<!-- /BADGES -->


Give eachr an array or object, and the iterator, in return eachr will give the iterator the value and key of each item, and will stop if the iterator returned false.



## Install

### Backend

1. [Install Node.js](http://bevry.me/node/install)
2. `npm install --save eachr`

### Frontend

1. [See Browserify](http://browserify.org)



## Usage

``` javascript
// Prepare
var each = require("eachr");
var arr = ["first", "second", "third"];
var obj = {a:"first", b:"second", c:"third"};
var iterator = function(value,key){
	console.log({value:value, key:key});
	if ( value === "second" ) {
		console.log("break");
		return false;
	}
};

// Cycle Array
each(arr, iterator);
// {"value":"first",  "key":0}
// {"value":"second", "key":1}
// break

// Cycle Object
each(obj, iterator);
// {"value":"first",  "key":"a"}
// {"value":"second", "key":"b"}
// break
```

<!-- HISTORY/ -->

## History
[Discover the change history by heading on over to the `HISTORY.md` file.](https://github.com/bevry/eachr/blob/master/HISTORY.md#files)

<!-- /HISTORY -->


<!-- CONTRIBUTE/ -->

## Contribute

[Discover how you can contribute by heading on over to the `CONTRIBUTING.md` file.](https://github.com/bevry/eachr/blob/master/CONTRIBUTING.md#files)

<!-- /CONTRIBUTE -->


<!-- BACKERS/ -->

## Backers

### Maintainers

These amazing people are maintaining this project:

- Benjamin Lupton <b@lupton.cc> (https://github.com/balupton)

### Sponsors

No sponsors yet! Will you be the first?

[![Gittip donate button](http://img.shields.io/gittip/bevry.png)](https://www.gittip.com/bevry/ "Donate weekly to this project using Gittip")
[![Flattr donate button](http://img.shields.io/flattr/donate.png?color=yellow)](http://flattr.com/thing/344188/balupton-on-Flattr "Donate monthly to this project using Flattr")
[![PayPayl donate button](http://img.shields.io/paypal/donate.png?color=yellow)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=QB8GQPZAH84N6 "Donate once-off to this project using Paypal")
[![BitCoin donate button](http://img.shields.io/bitcoin/donate.png?color=yellow)](https://coinbase.com/checkouts/9ef59f5479eec1d97d63382c9ebcb93a "Donate once-off to this project using BitCoin")
[![Wishlist browse button](http://img.shields.io/wishlist/browse.png?color=yellow)](http://amzn.com/w/2F8TXKSNAFG4V "Buy an item on our wishlist for us")

### Contributors

These amazing people have contributed code to this project:

- [Benjamin Lupton](https://github.com/balupton) <b@lupton.cc> — [view contributions](https://github.com/bevry/eachr/commits?author=balupton)
- [sfrdmn](https://github.com/sfrdmn) — [view contributions](https://github.com/bevry/eachr/commits?author=sfrdmn)

[Become a contributor!](https://github.com/bevry/eachr/blob/master/CONTRIBUTING.md#files)

<!-- /BACKERS -->


<!-- LICENSE/ -->

## License

Licensed under the incredibly [permissive](http://en.wikipedia.org/wiki/Permissive_free_software_licence) [MIT license](http://creativecommons.org/licenses/MIT/)

Copyright &copy; Bevry Pty Ltd <us@bevry.me> (http://bevry.me)

<!-- /LICENSE -->


