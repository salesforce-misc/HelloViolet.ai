---
layout: docs
title: Conversation Flow - Application Logic
---
# &lt;check&gt;, &lt;case&gt; and &lt;default&gt;

Finally, scripts can check for multiple values using a `check`-`case`-`default` set of elements:
```xml
<check value="[[svc.exists()]]">
  <case value="...">
    <!-- ... -->
  </case>
  <default>
    <!-- ... -->
  </default>
</check>
```
