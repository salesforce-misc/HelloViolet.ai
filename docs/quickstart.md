---
layout: docs
title: Get Started
---
# Get Started

You can get started with Violet in a few ways.

If you want to just try out Violet or just look at how to build Voice Applications with Violet we have a [collection of samples](https://github.com/salesforce/violet-samples). You should be able to deploy them straight from GitHub by clicking on the Deploy to Heroku button.

Alternative you can start building voice scripts.

## Building your own Voice Application

When building your own voice scripts the best way is to work locally.

First make sure that you have [Node.js](https://nodejs.org) installed. For Violet you need Node v6.x or later.

You can then create a node project and install the `violet` dependency by typing:
```bash
$ npm install violet --save
```

Now you can start working on your script. Start by adding a reference to Violet:
```javascript
var violet = require('violet').script();
```

Once you have done that, you can create a simple service that will get triggered:

```javascript
const todoSvc = {
  getNextItem: function() {
    return "get the milk";
  }
};
```

Now, all you need to do is declare what your script will respond to (i.e. the conversational flow) and hook it up to the service above:
```javascript
violet.addFlow(`
    <app><choice>
      <expecting>Whats next on my todo</expecting>
      <say>Next item on your list is [[app.getNextItem()]]</say>
    </choice></app>
  `, {app: todoSvc});
```


With this you can start the code.

When you launch the web-interface, you can send requests and get responses from the service:

![Alt text](/assets/images/content/web-tooling-ss.png){:width="700px"}

This web-interface tooling is incredibly helpful in debugging code. Once you are
comfortable with this stage, you can work on deploying the code and having it
work on a voice-enabled device.

In order to deploy, make sure to first put the service where it is accessible
on the internet. Once that is done - click on the Register button to follow the instructions.

Now that you have built a simple app, try building something more sophisticated by thinking of [Conversational Flow](/docs/conversation-elements).
