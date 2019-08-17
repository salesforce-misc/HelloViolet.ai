---
layout: docs
title: Tips
---
# Development Tips

As we have built Voice Apps we have learnt a few things that you might find helpful:

* Conversation Flow Scripts (CFL) are easier to work with when put into a separate file by themselves. This is easy to do by using the `violet.loadFlowScript(...)` method.

* Since CFL is based on HTML, it is helpful to setup HTML based syntax highlighting for it.
  * For GitHub you can create a file called `.gitttributes` and add the line `*.cfl linguist-language=HTML`
  * With the Atom editor you can go to the Atom menu, select 'Config...' and add the following (make sure to not duplicate parent entries in the file - otherwise values will get overwritten):
    ```text
    "*":
      core:
        customFileTypes:
          "text.html.basic": [
            "cfl"
          ]
    ```

* Voice Apps need more than expected time to refine the Conversational Flow, so that it feels right. This is done primarily by talking to your app. It is therefore extremely important to build a basic version of your service built quickly which allows for the conversational refinement to happen.
