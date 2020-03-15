---
layout: conversation
title: Conversation - Input & Output Elements
---
# &lt;expecting&gt;

Voice scripts can define what they can listen-to through the `expecting` element. When an `expecting` element is provided, it contains a phrase which when said by a user should trigger the voice script.

Multiple `expecting` elements provide for additional phrases that can trigger the same portion of the script.

The contents of the element are often referred to as the user utterances and expressions. These phrases become the training data provided to the underlying voice system.

An example of a part of script that can take the input 'Hello' or 'Hey' from a user and respond would be:
```xml
...
<choice>
  <expecting>Hello</expecting>
  <expecting>Hey</expecting>
  <say>...</say>
</choice>
...
```

The `expecting` element can only be included inside elements that are designed for user input (such as `choice` and `dialog`).

The `expecting` element can also include alternative words, for example to provide 'what is the status' and 'check the status', you can add:
```xml
<expecting>{what is|check} the status</expecting>
```

Additionally, the `expecting` element can also include optional words, for example to provide 'what is your color' and 'what is your color', you can add:
```xml
<expecting>what is your {favorite|} color</expecting>
```
