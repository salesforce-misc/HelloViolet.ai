---
layout: docs
title: Conversational Flow - Elements
redirect_from:
  - /docs/conversation-changing-flow
  - /docs/conversation-flow-basics
---
# Flow Design

Building Voice Applications can be challenging without defining a high-level flow of how conversations will happen. These flows describe a user's interaction with the app and shows how the app will guide the user to the right area. On larger teams Conversational Flows are typically defined by the UX team along with Sample Dialogs.

Conversational Flows provide the skeleton of what state-management will need to be done by a Voice Application. These can be built by developers on an application-by-application basis or can be
leveraged from Violet's Conversational Flow State-Management engine.

Conversational Flows can be modeled using an HTML-inspired language consisting of multiple language elements.
There are three main types of elements:
1. [Input & Output Elements](/docs/conversation-input-output) exist for receiving user input and sending output to users;
2. [Conversational Elements](/docs/conversation-elements) assist in managing the users state; and
3. [Application Logic Elements](/docs/conversation-app-logic) to integrate the conversation with business logic.
