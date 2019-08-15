---
layout: docs
title: Conversation Flow - Application Logic
---
# &lt;resolve&gt;

Voice scripts access session variables or services provided by the app by providing expressions in the form `[[expr]]`. When needing to call a controller method before executing on other elements, the `resolve` element can be used, for example:

```xml
<resolve value="svc.methCall()">
  <say>Everything looks good</say>
</resolve>
```

Items within the resolve -- for example the `<say>` element above -- are called after the execution of the `value` attribute, i.e. in the above example `svc.methCall()`.

If the `value` attributes execution returns:
* a promise - then the framework will wait for the promise to finish executing.
* a `false`, or returns a promise that evaluates to `false` - then the framework will not execute the elements inside the resolve, i.e. the `<say>` element above.
