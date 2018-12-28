---
layout: docs
title: Conversation Flow - Application Logic
---
# &lt;resolve&gt;

Voice scripts access session variables or services provided by the app by providing expressions in the form `[[expr]]`. When needing to process a method call before executing on other elements, the `resolve` element can be used, for example:

```xml
<resolve value="[[svc.methCall()]]">
  <!-- elements that are run after the promise in methCall above returns -->
</resolve>
```
