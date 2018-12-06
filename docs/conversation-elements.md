---
layout: docs
title: Conversational Flow - Elements
---
# Conversational Elements


{%comment%}Conversational elements enable controlling the flow of the conversation. Each element can be set as being `framed` or not (default is false). Custom elements (widgets) can also be created and used as needed. Each element can be given an `id` for accessing later to either extend the conversational model or to allow the flow to jump to the point.{%endcomment%}Most Voice Applications are designed around two concepts (and their respective elements):

When using a typical web or mobile app, end-users benefit from the content being organized into menus, screens, cards, tabs and accordions. Similarly end-users of voice app's benefit from the content being organized in such a way that the app presents a prompt to users, the user then makes a decision, and finally the user provides an input to the app to chooses which path to follow. We refer to these [decisions](/docs/conversation-decisions) to allow for describing this voice based menu like structure. Decisions can be nested as needed.

In addition to menus, a common activity that users do in typical web or mobile apps, is filling out multiple fields in a form. In voice apps, users are often able to provide inputs for such forms through multi-turn conversations and what is often referred to as a [dialogs](/docs/conversation-dialogs).
