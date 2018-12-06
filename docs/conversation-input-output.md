---
layout: docs
title: Conversation - Input & Output Elements
---
# Input & Output Elements

Voice scripts often need communicate to users, and can do this primarily through the `say` element and can define what phrases could trigger an intent through the `expecting` element. When there are multiple `say` elements, they are concatenated.

A trivial voice script would be:
```xml
<app><choice id="launch">
  <expecting>Hello</expecting>
  <say>Hey</say>
  <say>Good to meet you</say>
</choice></app>
```

The above script, on being triggered (such as by saying 'Hello'), would respond and say: 'Hey. Good to meet you'.

For receiving user input such as parameters to an action, scripts need to first define the parameter type, for example:
```javascript
violet.addInputTypes({
  'name': 'firstName',
});
```

Once parameter types have been defined, then scripts can add them to the `expecting` element parameters, for example:
```xml
<app>
  <expecting>My name is [[name]]</expecting>
  <say>Hey [[name]]</say>
  <say>Good to meet you</say>
</app>
```

The above script lets the user give their name and greets them accordingly.

Scripts can use one of many supported parameter types including: `firstName`, `lastName`, `number`, `date`, `time`, `phoneNumber`, and `phrase`.


Beyond the `say` element, scripts can provide output by:
- Using the `sayOne` element to describe multiple optional output phrases for the framework to pick one randomly and provide for a variety of responses.
- Using the `ask` element to ask a question to the user, which the framework will present to the user at the end of all the `say` elements.
- Using the `prompt` element to ask one of up to 3 questions to the user, which will be presented together to the user at the end.

Furthermore, for output, there is also a potential to also have elements to support displays and other device-specific directives.
