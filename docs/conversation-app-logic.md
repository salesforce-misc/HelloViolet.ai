---
layout: conversation
title: Conversation Flow - Application Logic
---
# Application Object

Voice scripts start with a top level `app` element that is used to wait for inputs and provide responses when a script is launched. This element consists of a set of `choice` elements representing a top-level menu. Using an id at the top-level as `launch` is used to respond to the user when the script is launched, and a top-level id of `close` is used to tell the app what phrases should be used to end a conversation session.

For example, a conversational script looks like the below:
```xml
<app>
  <choice id="launch">
    <sayOne>
      <say>Greetings<say>
      <say>How can I help?<<say>
    </sayOne>
  </choice>
  <choice id="close">
    <expecting>Thanks</expecting>
  </choice>
  <choice>
    <expecting>Whats next on my list</expecting>
    <say>You need to call Jack</say>
  </choice>
  ...
</app>
```

By default, apps respond on being launched with one of the following:
* Yes. How can I help?
* Hey. Need me?
* Yup. I am here.

Additionally, the following are used to close conversation sessions by default:
* I am good
* No I am good
* Thanks
* Thank you

Voice scripts access session variables or services provided by the app by providing expressions in the form `[[expr]]`.

{%comment%}
Additionally, a `scriptlet` element does not do anything other than grouping other elements. This element is often used to group a bunch of items that can be jumped to from another location.
{%endcomment%}
