---
layout: docs
title: Development Tips
---
# Development Tips

As we have built Voice Apps we have learnt a few things that you might find helpful.

* **Code Structure:** While Conversation Flow Language (CFL) Scripts can be put in the same file right next to application logic, they are easier to work with when put into a separate file by themselves. This is easy to do by using the `violet.loadFlowScript(...)` method.

* **Deployment:** Deploying Voice Apps does not have to be complex. A lot of tutorials online require you to sign up on different systems so as to demonstrate their feature set. In contrast, you can deploy Violet Apps on any server. We are fans of the [12 Factor App](https://12factor.net/) and often deploy to services like [Heroku](https://www.heroku.com/). You can also deploy Violet on Function as a Service platforms - for an example of deploying to [AWS Lambda](https://aws.amazon.com/lambda/) using the [Serverless Framework](https://serverless.com/) (to see an example look at the [Meal Planner App](https://github.com/vineet-sinha/meal-planner) and specifically the configurations in [serverless.yml](https://github.com/vineet-sinha/meal-planner/blob/master/serverless.yml) and the handlers in [VioletSLS.js](https://github.com/vineet-sinha/meal-planner/blob/master/violetSLS.js)).

* **Syntax Highlighting for CFL:** Since CFL is based on HTML, it is easy to setup syntax highlighting in the editor/viewer of your choice based on HTML.
  * For viewing the CFL files on GitHub - you can create a file called `.gitttributes` and add the line `*.cfl linguist-language=HTML`
  * With the Atom editor you can go to the Atom menu, select 'Config...' and add the following (make sure to not duplicate parent entries in the file - otherwise values will get overwritten):
    ```text
    "*":
      core:
        customFileTypes:
          "text.html.basic": [
            "cfl"
          ]
    ```
