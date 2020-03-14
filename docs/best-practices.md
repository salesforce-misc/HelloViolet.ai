---
layout: docs
title: Best Practices
---
# Best Practices

When building a Voice App it is worth keeping in mind:


* **Actually Talk to your App:** It is tempting to design a voice app by just reading and writing the conversational flow. The challenge, however, is that apps feel very different when spoken out aloud. Make sure to iterate while actually talking to your app.

* **Allow for Conversational Refinement:** Voice Apps are easy to underestimate in the amount of time needed to make the Conversation Flow feel right. It is therefore extremely important to build a basic version of your service quickly which allows for iteratively working on  conversational refinement.

* **Place Conversational Flow together:** Even though it is possible to build your conversational flow in your application logic, doing so results in not only your code becoming harder to understand but also harder to maintain as you iterate and improve on the App's User Experience. Try putting your Conversation Flow as close to each other so that not only iterating on the design is easier, but that it is also significantly easier to understand the code. With that in mind, consider calls to `response.say(...)` as carefully as you would call a browser's `document.write(...)` method.
