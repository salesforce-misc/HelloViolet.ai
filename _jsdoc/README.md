
Most of the Violet API is accessed via the [Violet](/api/module-violet) module. This returns the [ConversationEngine](/api/module-conversationEngine-ConversationEngine) object to users defining a script, and the when items within the script get triggered a [Response](/api/module-response-Response) object is returned to the user. Most other classes are internal and help in the implementation of the Conversation Engine.

Violet currently supports two types of plugins. The first is platform plugins and they help Violet support different underlying platforms (like Amazon Alexa and Google Home). The second set of plugins works by redefining the Violet interface to extend functionality as needed, and therefore need to be loaded after the code Violet module is loaded.

The [VioletSrvr](/api/module-violetSrvr) is used when needing to run multiple apps/scripts within one server (running at different endpoints). This code is automatically triggered by a Violet script if a server has not been detected.
