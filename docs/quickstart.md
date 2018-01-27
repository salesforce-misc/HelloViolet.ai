---
layout: docs
title: Get Started
---
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
