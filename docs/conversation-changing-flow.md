---
layout: docs
title: Changing Flow
---
# Changing Flow

Voice scripts can have the conversational flow `jump` to any other element by adding the target location:
```xml
  <jump target="#id"/>
```

Additionally, a `scriptlet` element does not do anything other than grouping other elements. This element is often used to group a bunch of items that can be jumped to from another location.
