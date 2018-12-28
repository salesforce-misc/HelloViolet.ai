---
layout: docs
title: Conversational Elements - Dialogs
redirect_from: /docs/conversation-changing-flow
---
# &lt;dialog&gt;
While most of a conversation can be defined by its branching nature, there are times when there are multiple inputs needed from a user for a particular task. In web apps, these are often done via forms.

We use `dialog` to enable obtaining data for such a situation. The biggest difference between a dialog and a form is that dialogs are constantly checking (via `elicit` attribute on dialog) if they have all the input parameters to `resolve`. Dialogs need to define an `expecting` phrase (which is used to trigger them from a parent decision), any input parameters (via `item`) along with how to prompt for them, as well as a function to determine the next input parameter to ask the user for.

The common case of all parameters being required is done by adding a `required` attribute and setting the `elicit` attribute on the dialog to `dialog.nextReqdParam()`. An example can be seen below:

```xml
<dialog id="flightLookup" elicit="dialog.nextReqdParam()">
  <expecting>What time does the [[airline]] flight arrive {from [[city]]|}</expecting>
  <item name="airline" required>
    <prompt>What airlines are you looking for the arrival time?</prompt>
    <expecting>{Coming on|} [[airline]]</expecting>
  </item>
  <item name="city" required>
    <prompt>What city do you want the flight to be arriving from?</prompt>
    <expecting>{From|} [[city]]</expecting>
  </item>
  <item name="flightDay" required>
    <prompt>Are you looking for flights today, tomorrow, or the day after?</prompt>
    <expecting>{Looking for|} [[flightDay]]</expecting>
  </item>
  <resolve value="[[flightArrivalTimeSvc.query(response, 'arrivalTime')]]">
    <say>Flight [[airline]] from [[city]] is expected to arrive [[flightDay]] at [[arrivalTime]]</say>
  </resolve>    
</dialog>
```

Dialogs can be used anywhere a `choice` is expected.

{% comment %}
An example of a dialog in JavaScript:

```javascript
violet.addDialog({
  expecting: "What time does the [[airline]] flight arrive {from [[city]]|}"
  resolveCheck: violet.reqdParams
  items: [{
    name: "airline",
    required: true,
    prompt: "What airlines are you looking for the arrival time?",
    expecting: "{Coming on|} [[airline]]"
  },
  {
    name: "city",
    required: true,
    prompt: "What city do you want the flight to be arriving from?",
    expecting: "{From|} [[city]]"
  },
  {
    name: "flightDay",
    required: true,
    prompt: "Are you looking for flights today, tomorrow, or the day after?",
    expecting: "{Looking for|} [[flightDay]]"
  }],
  resolve: (response)=>{
    if (!response.dialog.hasReqdParams()) return;
    flightArrivalTimeSvc.query(response.params, (arrivalTime)=>{
      response.say(`Flight [[airline]] from [[city]] is expected to arrive [[flightDay]] at ${arrivalTime}`);
    });
  }
});
```
{% endcomment %}
