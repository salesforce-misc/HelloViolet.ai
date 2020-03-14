---
layout: docs
title: Core Concepts
---
# Core Concepts

You write Voice Applications with Violet by composing what users-can-say and
users-will-hear in voice *scripts*. Sophisticated applications can add
application logic via *controllers*, write reusable scripts as *widgets*, and
externalize integration logic into *plugins*.

Voice interactions with the user build on a set of concepts. At the highest-level are *Conversations*, which are implemented - primarily beneath the covers - using *Goals* for state management, and at the lowest-level are *Responses* from both a user and the application.

## Conversations
Once a user initiates a Voice Application a conversation is said to have begun.
Conversations are modeled primarily using the
[Conversation Flow Language](/docs/conversation-flow-design) which manages the
conversational state for the application developer.
After being initiated, conversations are ongoing i.e. a response from the
application is expected to be followed by a user responding back. Conversations
reach an end once they reach a leaf in the flow script, but can be continued
using the [jump](/docs/conversation-element-jump) element or by calling the
[keepConversationRunning](/api/module-response-Response#keepConversationRunning)
method.

## Goals (States &amp; Dialog Management)
Active parts of a conversation are tracked as Conversational States. They can be managed using code.
Consider conversations as having a set of small milestones or *Goals*. Goals
allow for the grouping of application and user responses.

Applications can
[add a goal](/api/module-response-Response#addGoal) or
[clear a goal](/api/module-response-Response#clearGoal), and later respond
differently depending on if a
[goal has been set](/api/module-response-Response#hasGoal).
Applications will also likely want to
[define goals](/api/module-conversationEngine-ConversationEngine#defineGoal)
that tells the conversation engine to prompt the user and to wait for one
of multiple responses back.

When using *Goals*, an application will typically want to define a series of goals upfront. Once this is done, a user's *response* can add (and therefore queue/set) a goal. Once the goal has been set, any future responses from a user will be first checked in the context of the set goals. Multiple goals can be set at a time, and goals are checked in a first-in-first-out manner. Goals are also automatically cleared up if a method processing a goal returns true.

## User &amp; Application Response

At the lowest level, a Voice App is a list of items that the user might
say followed by how an application might respond to it.

Related user
responses are grouped into intents that an application can
[respond to](/api/module-conversationEngine-ConversationEngine.html#respondTo).
When an intent is triggered the application logic is called with a
[response](/api/module-response-Response) parameter to allow the application logic to provide a response back to the user. Applications can
[say](/api/module-response-Response#say) something or
[ask](/api/module-response-Response#ask) for something from the user.

Under the covers all the calls to the *response* object are converted in an SSML
string and sent to the users voice-enabled device.
