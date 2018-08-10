---
layout: docs
title: Conversational Flow - Elements
redirect_from:
  - /docs/conversation-changing-flow
  - /docs/conversation-flow-basics
  - /docs/conversation-input-output
---
# Flow Design

Building Voice Applications can be challenging without defining a high-level flow of how conversations will happen. These flows describe a user's interaction with the app for the first time and shows how the app will guide the user to the right area. On larger teams Conversational Flows are typically defined by the UX team along with Sample Dialogs.

Conversational Flows provide the skeleton of what state-management will need to be done by the application. These can be built by developers on an application-by-application basis or can be
leveraged from Violet's Conversational Flow State-Management engine.


## Conversational Elements

Conversational Flows can be modeled using an HTML-inspired language consisting of multiple language elements.{%comment%}Conversational elements enable controlling the flow of the conversation. Each element can be set as being `framed` or not (default is false).{%endcomment%} Elements exist for receiving user input, sending output to users, as well as managing the users state. {%comment%}Custom elements (widgets) can also be created and used as needed. Each element can be given an `id` for accessing later to either extend the conversational model or to allow the flow to jump to the point.{%endcomment%} Most Voice Applications are designed around two concepts (and their respective elements):

When using a typical web or mobile app, end-users benefit from the content being organized into menus, screens, cards, tabs and accordions. Similarly end-users of voice app's benefit from the content being organized, such that the app prompts the users, she makes a decision, and chooses which path to follow by providing an input to the app. [Decisions](/docs/conversation-decisions) allow for describing parts of such conversations and can be nested as needed.

Additionally, a common activity that end-users do in typical web or mobile apps, is the need to fill out multiple fields in a form. Providing inputs for such forms is often done through a multi-turn conversation and is often referred to as a [dialogs](/docs/conversation-dialogs).

## Input & Output Elements

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

## Changing Flow

Voice scripts can have the conversational flow `jump` to any other element by adding the target location:
```xml
  <jump target="#id"/>
```

{%comment%}
Additionally, a `scriptlet` element does not do anything other than grouping other elements. This element is often used to group a bunch of items that can be jumped to from another location.
{%endcomment%}
