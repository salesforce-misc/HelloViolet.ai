---
layout: docs
title: Conversation - Input & Output Elements
---
# Input & Output

Voice scripts need to communicate to users, and they often do this by telling things to the user through the `say` element and by defining what they can listen through the `expecting` element.

A trivial voice script would be:
```xml
<app><choice id="launch">
  <expecting>Hello</expecting>
  <say>Hey</say>
  <say>Good to meet you</say>
</choice></app>
```

The above script gets triggered by saying 'Hello', and would respond by saying: 'Hey. Good to meet you'. When there are multiple `say` elements, such as in the above example, the output has them all being included serially.

## Input Types

Beyond just receiving pre-defined phrases as through the `expecting` element above, scripts can also receive typed parameters such as a number or a date from a user. In order to do this scripts need to first define the parameter type, for example:
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

## Output Elements

Beyond the `say` element, scripts can provide output by:
- Using the [`sayOne`](/docs/conversation-element-sayOne) element to describe multiple optional output phrases for the framework to pick one randomly and provide for a variety of responses.
- Using the `ask` element to ask a question to the user, which the framework will present to the user at the end of all the `say` elements.
- Using the `prompt` element to ask one of up to 3 questions to the user, which will be presented together to the user at the end.

Furthermore, for output, there is also a potential to also have elements to support displays and other device-specific directives.
