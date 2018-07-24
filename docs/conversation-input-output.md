---
layout: docs
title: Conversation - Input & Output Elements
---
# Input & Output Elements

Voice scripts can communicate to users primarily through the `say` element and can define what phrases could trigger an intent through the `expecting` element. When there are multiple `say` elements, they are concatenated.

A trivial voice script would be:
```xml
<app><choice id="launch">
  <expecting>Hello</expecting>
  <say>Hey</say>
  <say>Good to meet you</say>
</choice></app>
```

The above script, on being triggered, would say: 'Hey. Good to meet you'.

For input, scripts can add to the `expecting` element parameters that would be expected. To do this, they should ideally define the parameter types first. For example, the below lets the user give their name and greets them accordingly:
```javascript
violet.addInputTypes({
  'name': 'firstName',
});

violet.addScript(`<app>
  <expecting>My name is [[name]]</expecting>
  <say>Hey [[name]]</say>
  <say>Good to meet you</say>
</app>`);
```

Supported parameter types include: `firstName`, `lastName`, `number`, `date`, `time`, `phoneNumber`, and `phrase`


For output, beyond the `say` element, scripts can:
- Use the `sayOne` element to describe multiple optional output phrases for the framework to pick one randomly and provide for a variety of responses.
- Use the `ask` element to ask a question to the user, which the framework will present to the user at the end of all the `say` elements.
- Use the `prompt` element to ask one of up to 3 questions to the user, which will be presented together to the user at the end.

Furthermore, for output, there is also a potential to also have elements to support displays and other device-specific directives.
