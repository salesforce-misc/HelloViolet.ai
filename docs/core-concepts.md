---
layout: docs
title: Core Concepts
---
# Core Concepts

You write Voice Applications with Violet by composing what users-can-say and
users-will-hear in voice *scripts*. More sophisticated applications can write
reusable scripts as *widgets*, externalize integration logic into *plugins*, and
add application logic in *services*.

Voice interactions with the user depend on a set of concepts, they are described
below from the highest-level to the lowest-level:

## Conversations
Once a user initiates a Voice Application a conversation is said to have begun.
Conversations are modeled primarily using the
[Conversation Flow Language](/docs/conversation-elements) which manages the
conversational state for the application developer.
After being initiated conversations are ongoing i.e. a response from the
application is expected to be followed by a user responding back. Conversations
reach an end once they reach a leaf in the flow script, but can be continued
using the [jump](/docs/conversation-element-jump) element or by calling the
[keepConversationRunning](/api/module-response-Response#keepConversationRunning)
method.

## Goals (States &amp; Dialog Management)
Conversational State can also be managed using code.
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

## User &amp; Application Response
At the lowest level, your Voice Scripts are a list of items that the user might
say followed by how you want your application to respond to it. Intents are user
responses that your application can
[respond to](/api/module-conversationEngine-ConversationEngine.html#respondTo).

When an intent is triggered your application logic is called with a
[response](/api/module-response-Response) parameter to allow your application
to respond. You can
[say](/api/module-response-Response#say) something or
[ask](/api/module-response-Response#ask) for something from the user.

Under the covers all the calls to the *response* object are converted in an SSML
string and sent to the users voice-enabled device.
