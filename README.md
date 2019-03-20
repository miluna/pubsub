# miluna-pubsub
---
A simple publisher-subscriber for JavaScript written in TypeScript

## Use case
---
You create a subscription to a topic and asign a callback to that subscription. Once there's a publish call to that topic, all the subscribers will do its callback.


```js
import { subscribe, publish, unsubscribe } from "miluna-pubsub";

// create subscription
const subscription = subscribe("test", (arg) => console.log(arg));

// send payload
publish("test", "payload");

// unsubscribe from topic
unsubscribe("test", subscription);
```

