---
layout: docs
title: Building Widgets
---
# Building Widgets

Conversations using Violet's [Conversation Flow Language](/docs/conversation-flow-design) consist of html-based elements. Applications can create a set of elements - called widgets - to add support for additional behavior.

## Basic Widgets

Creating a basic widget is straightforward. For example, if you want to create a widget - called `display` - which checks the current request to find out the involved device and appropriately displays the content of the widget.

Implementing this can be as simple as adding:
```javascript
FlowScriptCompiler.registerWidget({
  name: 'display',
  impl: (response, flowScriptDoc, elNode)=>{
    // check request by accessing `response`
    // access widget contents using: elNode.contents()
  }
});
```

Now a Voice designer can right a script as:
```html
<!-- within a choice element -->
<expecting>How many requests came in</expecting>
<say>There were [[app.getRequestCount()]] requests</say>
<display><!-- send display contents --></display>
```

Some widgets that have been used in projects include `pause` and `chart`.

## Leveraging attribute values

Widgets can customize their behavior based on attributes set of the element. As
an example, the `say` widget supports the attributes `quick` (for not adding a
pause automatically) and `keepConversationRunning` (to make sure that the system
listens to what the user is going to say next).

Support for attributes can be implemented in the implementation of the widget
by calling the `hasAttrib` method on the element's node.

As an example, the `say` widget is implemented as:

```javascript
FlowScriptCompiler.registerWidget({
  name: 'say',
  fNonNestable: true,
  impl: (response, flowScriptDoc, elNode)=>{
    response.say(elNode.contents(), elNode.hasAttrib('quick'));

    if (elNode.hasAttrib('endConversation')) response.endConversation();
    if (elNode.hasAttrib('keepConversationRunning')) response.keepConversationRunning();
});
```

## Supporting nested CFL

Widgets can benefit from having other elements within their content. This is
supported by having widget developers call the `resolveElementChildrenForOutlet`
method within their implementation.

For more sophisticated use cases, widget developers can hook the `init` method,
let the `FlowScriptCompiler` first `load` and then `compile` the contents.

## Building templates

Widgets can be taken a step further and be used to create templates. Templates
are widget factories, and using them allows developers to use the same same
customizations in multiple locations in a conversational flow.

An example of a template is `violetList` which on instantiation is customized
with the list type and how a user would want to interact with the list.
