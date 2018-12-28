---
layout: docs
title: Conversation - Input & Output Elements
---
# &lt;sayOne&gt;

When telling the user something, voice scripts can add variety to the output by using the `sayOne` element. Using this element allows users to have lesser monotony in the responses they receive.

For example the below script gets triggered when the user says 'Hello' and responds back by saying either 'Welcome' or 'How can I help?':
```xml
...
<choice>
  <expecting>Hello</expecting>
  <sayOne>
    <say>Welcome<say>
    <say>How can I help?<<say>
  </sayOne>
</choice>
...
```
