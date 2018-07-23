---
layout: docs
title: Prerequisites
---
# Prerequisites

Violet is built in Javascript. While it tries to make build Voice Apps easy, it does require a basic understanding of it. It runs as a Web App on [Node.js](https://nodejs.org/) runtime. You will need the latest stable version installed (v6.x or later of the LTS version) where you are developing, testing, and deploying Violet scripts.

To get comfortable with Javascript details feel free to look at this [tutorial](https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript). In particular we make liberal use of a few newer concepts including
[arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions),
[template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) and
[classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes).
The storage plugins make significant use of
[promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) along with
[generator functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/function*) and corresponding
[yields](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/yield).


Violet takes advantage of a number of additional frameworks that are installed automatically by the Node package manager (npm). These frameworks primarily include [Express](https://expressjs.com/) and the [alexa-app](https://github.com/alexa-js/alexa-app) frameworks, as well as as [Mocha](https://mochajs.org/) and [Istanbul](https://github.com/gotwarlost/istanbul) for testing and code coverage respectively.
