# @miluna/pubsub
---
A simple publisher-subscriber for JavaScript written in TypeScript

## Download
---
@miluna/pubsub is available through <a href="https://www.npmjs.com/package/@miluna/pubsub">npm</a>. You can download this package using the following command

```sh
npm i @miluna/pubsub
```


## Use case
---
You create a subscription to a topic and asign a callback to that subscription. Once there's a publish call to that topic, all the subscribers will do its callback.


```js
import { subscribe, publish, unsubscribe } from "@miluna/pubsub";

// create subscription
const subscription = subscribe("test", (arg) => console.log(arg));

// send payload
publish("test", "payload");

// unsubscribe from topic
unsubscribe("test", subscription);
```

