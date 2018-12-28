---
layout: docs
title: Conversation - Input & Output Elements
---
# &lt;say&gt;

Voice scripts can tell things to the user through the `say` element. The element often consists of a short response to the user and can also include [SSML](https://en.wikipedia.org/wiki/Speech_Synthesis_Markup_Language) ([spec](https://www.w3.org/TR/speech-synthesis/)).

Having multiple `say` elements one after another, will have their text included serially with a short pause (0.5s by default).

An example that would say: 'Hey <pause> Good to meet you' would be:
```xml
...
<say>Hey</say>
<say>Good to meet you</say>
...
```

The pause between sequential `say` elements can be disabled by using the `quick` attribute, for example:
```xml
...
<say>Hey</say>
<say quick="true">Good to meet you</say>
...
```
