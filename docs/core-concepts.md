---
layout: docs
title: Core Concepts
---
# Core Concepts

You write Voice Applications with Violet by composing what users-can-say and
users-will-hear in voice *scripts*, writing reusable scripts as *widgets*,
externalizing integration logic into *plugins*, and adding application logic
in *services*.

## Conversations
Once a user initiates a Voice Application a conversation is said to have begun.
Conversations are by default ongoing with Violet, i.e. after a response from
the application an user is expected to respond back. Conversations can be
ended by the application by calling
[endConversation](/api/module-response-Response#endConversation) in your script
and by the user by just not responding back to the application.

## Goals (States &amp; Dialog Management)
Consider conversations as having a set of small milestones or *Goals*. Goals
allow for the grouping of application and user responses. Your voice script can
[add a goal](/api/module-response-Response#addGoal) or
[clear a goal](/api/module-response-Response#clearGoal), and later respond
differently depending on if a
[goal has been set](/api/module-response-Response#hasGoal).
Scripts can also
[define goals](/api/module-conversationEngine-ConversationEngine#defineGoal)
that allow for the conversation engine to prompt the user and to wait for one
of multiple responses back.

## User and Application Response
Your Voice Scripts are a list of items that the user might say followed by how
you want your application to respond to it. Intents are user responses that your
application can
[respond to](/api/module-conversationEngine-ConversationEngine.html#respondTo).

When an intents is triggered your application logic is called with a
[response](/api/module-response-Response) parameter to allow your application
to respond. You can
[say](/api/module-response-Response#say) something or
[ask](/api/module-response-Response#ask) for something from the user.

Under the covers all the calls to the *response* object are converted in an SSML
string and sent to the users voice-enabled device.
