---
layout: docs
title: Debugging
---
# Debugging Conversations

When developing conversational scripts - it helps to debug and test it in three phrases:

1. Make sure the code compiles/runs. You can do this by starting the code - i.e. typing `npm start`, fixing any errors, and keeping on re-starting it until misplaced punctuations and declaration have been fixed.

2. Test the script in the included tester view. You can do this by running the script and opening it in a browser, for example: http://localhost:8080/ You will likely want to submit IntentRequest's based on the available utterance's. When you do, you would submit a request and then you should ideally verify that the response output SSML is per your needs. Additionally, it is helpful to walk through the script a few times to ensure that the application supports the different user scenarios.

3. Once the script works locally, you will likely want to deploy it to the cloud and configuring Alexa and/or Google Dialogflow to talk to the underlying skill. At this stage you will benefit from testing by iterating rapidly with: invoking the voice-client, examining the conversational-app's logs, and tweaking the utterances in the respective web-consoles.
