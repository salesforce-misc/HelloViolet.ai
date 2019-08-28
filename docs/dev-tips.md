---
layout: docs
title: Tips
---
# Development Tips

As we have built Voice Apps we have learnt a few things that you might find helpful.


* **Iteration:** Voice Apps need more than expected time to refine the Conversational Flow, so that it feels right. This is done primarily by actually talking to your app. It is therefore extremely important to build a basic version of your service built quickly which allows for the conversational refinement to happen.

* **Code Structure:** Even though it is possible to build your conversational flow in your application logic, doing so results in not only your code becoming harder to understand but also harder to maintain as you iterate and improve on the App's User Experience. Consider calls to `response.say(...)` as carefully as you would call a browser's `document.write(...)` method.

* **Code Structure:** Conversation Flow Scripts (CFL) are easier to work with when put into a separate file by themselves. This is easy to do by using the `violet.loadFlowScript(...)` method.

* **Deployment:** Deploying Voice Apps does not have to be complex. A lot of tutorials online require you to sign up on different systems so as to demonstrate their feature set. You can deploy Violet Apps on any server. We are fans of the [12 Factor App](https://12factor.net/) and often deploy to services like [Heroku](https://www.heroku.com/). You can also deploy Violet on Function as a Service platforms - for an example of deploying to [AWS Lambda](https://aws.amazon.com/lambda/) using the [Serverless Framework](https://serverless.com/), see the [Meal Planner App](https://github.com/vineet-sinha/meal-planner) and specifically the configurations in [serverless.yml](https://github.com/vineet-sinha/meal-planner/blob/master/serverless.yml) and the handlers in [VioletSLS.js](https://github.com/vineet-sinha/meal-planner/blob/master/violetSLS.js).

* **Productivity:** Since CFL is based on HTML, it is helpful to setup HTML based syntax highlighting for it.
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
