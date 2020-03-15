---
layout: conversation
title: Conversation Flow - Examples
---
# Examples

You can see examples of Voice Scripts in a few of the samples that we have built.

You will notice that each of them first loads the Violet engine and any dependencies, then defines variables to be used for input from the user (via `addInputTypes`), followed by defining business logic, and finally defines the conversation flow with a link to the business logic services.

Some of the most illustrative examples include:

1. The [basic calculator](https://github.com/salesforce/violet-samples/blob/master/scripts/basicCalculator.js) is the simplest example using nested menus via decisions to build a calculator. It allows users to add, subtract, multiply, and divide.

2. The [financial calculator](https://github.com/salesforce/violet-samples/blob/master/scripts/financeCalculator.js) takes things one step further, building a calculator for personal-finance use-cases and leverages both decisions and dialogs. Users can find it allows them to split bills, calculate tips as well as find out how many payments will need to be made on a mortgage.

3. The [leads and opportunities](https://github.com/salesforce/violet-samples/blob/master/scripts/sf-leadsAndOpportunities.js) example leverages the Salesforce plugin to show integration with it. It connects to a specific Salesforce instance and allows users to check opportunity status, calendar, leads, as well as to allows for the creation of new leads. For taking this script further, and using account linking to allow users to login to their Salesforce instance see this [trailhead module](https://trailhead.salesforce.com/en/projects/build-a-private-alexa-for-business-skill-for-salesforce/steps/create-a-connected-app-and-link-to-alexa).

You can find more samples in the [samples repository](https://github.com/salesforce/violet-samples). While reviewing the samples you will find it helpful to use the web-tooling that is made available after clicking the single-click deploy buttons located at the [Readme page](https://github.com/salesforce/violet-samples#violet-samples) of the samples project.
