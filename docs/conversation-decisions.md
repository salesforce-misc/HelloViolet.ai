---
layout: docs
title: Conversational Elements - Decisions
redirect_from: /docs/conversation-changing-flow
---
# Decisions
Most voice applications boil down to the system asking a question, the user making a `decision`, responding back, and the conversation flow going into one of many `choices` or branches.

An example of decisions can be seen below:

```xml
<decision id="addition">
  <ask>What two numbers would you like me to add</ask>
  <choice>
    <expecting>[[NumOne]] and [[NumTwo]]</expecting>
    <expecting>{Add|Sum} [[NumOne]] to [[NumTwo]]</expecting>
    <say>The sum of [[NumOne]] and [[NumTwo]] is [[app.add(NumOne, NumTwo)]]</say>
  </choice>
  <choice>
    <expecting>Cancel</expecting>
    <say>Canceling Addition</say>
  </choice>
  ...
</decision>
```
Decisions can be easily nested when additional input is needed from a user.

{% comment %}
These can be written as - in JavaScript:
```javascript
violet.addDecision({
  ask: "..."
  choices: [
    {
      expecting: "",
      resolve: (response)=>{
        response.say("...");
      }
    },
    //...
  ]
});
```
{% endcomment %}
