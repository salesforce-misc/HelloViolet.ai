---
layout: conversation
title: Conversation - Input & Output Elements
---
# &lt;prompt&gt;

> The `prompt` tag has been deprecated. While useful in a number of situations it was found to have a few edge-cases that made taking advantage of it a challenge.

When a voice scripts need multiple pieces of information from the user, it does so using a `prompt` element. The `prompt` element contains the text to be presented to the user. The underlying framework might present as many as three `prompt` elements before allowing the user to answer back.
