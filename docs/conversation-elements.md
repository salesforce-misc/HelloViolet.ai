---
layout: docs
title: Conversational Elements
---
# Conversational Elements

Conversational elements enable controlling the flow of the conversation. Each element can be set as being `framed` or not (default is false).

## Decisions
Most voice applications boil down to the system asking a question, the user making a `decision`, responding back, and the conversation flow going into one of many `choices` or branches.

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

And using the Conversation Language:
```xml
<decision>
  <ask>...</ask>
  <choice>
    <expecting>...</expecting>
    <say>...</say>
  </choice>
  <choice>
    ...
  </choice>
  ...
</decision>
```

## Dialogs
While most of a conversation can be defined by its branching nature, there are times when there are multiple inputs needed from a user for a particular task. In web apps, these are often done via forms.

We use `dialog` to enable obtaining data for such a situation. The biggest difference between a dialog and a form is that dialogs are constantly checking (via `resolveCheck`) if they have all the input parameters to `resolve`. Dialogs also define an `expecting` phrase, required parameters (via `redqParam`) which are the default for `resolveCheck` and optional parameters that can assist.

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

And using the Conversation Language:
```xml
<dialog>
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
  <if value="[[response.dialog.hasReqdParams()]]">
    <resolve value="[[flightArrivalTimeSvc.query(response, 'arrivalTime')]]">
      <say>Flight [[airline]] from [[city]] is expected to arrive [[flightDay]] at [[arrivalTime]]</say>
    </resolve>    
  </if>
</dialog>
```

Dialogs can be used anywhere a `choice` is expected.
