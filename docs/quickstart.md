---
layout: docs
title: Get Started
---
# Prerequisite (Javascript)

Violet is built in Javascript and while it tries to make build Voice Apps easy, a basic understanding of JavaScript is necessary. If needed, feel free to look at this [tutorial](https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript). In particular we make liberal use of
[arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions),
[template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals), and
[classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes),
while the storage capabilities make significant use of
[promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) along with
[generator functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/function*) and corresponding
[yields](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/yield).


# Get Started

You can get started with Violet in a few ways.

We have a [collection of samples](https://github.com/salesforce/violet-samples) and you should be able to deploy them straight from GitHub by clicking on the Deploy to Heroku button. The alternative, is when building your own voice scripts.

## Building your own Voice Application

When building your own voice scripts the best way is to work locally.

First make sure that you have [Node.js](https://nodejs.org) installed. For Violet you Node v6.x or later.

You can then create a node project and then install the `violet` dependency by typing:
```bash
$ npm install violet --save
```

Now you can start working on your script. Start by adding a reference to Violet:
```javascript
var violet = require('violet/lib/violet').script();
```

Once you have done then, you can just declare what your script will respond to (i.e. an intent) and what it should do when triggered:
```javascript
violet.respondTo({
  expecting: "Whats next on my todo",
  resolve: function(response) {
    var nextItem = todoSvc.getNextItem();
    response.say(`Next item on your list is ${nextItem}`);
}});
```

With this you can start the service.

When you launch the web-interface, you can send requests and get responses from the service:

![Alt text](/assets/images/content/web-tooling-ss.png){:width="700px"}

Finally, as you get ready to deploy, make sure to put the service where it is accessible on the internet and when you need to - click on the registration button to follow the instructions.
