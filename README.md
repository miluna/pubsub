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
You create a new Topic or a new PubSub which contains all application topics.
Once you have created the topic you can create a new subscription object by calling the method subscribe()

Once there's a publish call to that topic, all the subscribers will do its callback.


```js
import PubSub from "@miluna/pubsub";

// create new pubsub
const pubsub = new PubSub();
const topic = pubsub.createTopic("test");
const subscription = pubsub.subscribe(topic, (arg) => console.log(arg));

// send payload
pubsub.publish(topic, "payload");

// unsubscribe from topic
pubsub.unsubscribe(topic, subscription);
```

```js
import { Topic } from "@miluna/pubsub";

// create new topic
const topic = new Topic("test");
const subscription = topic.subscribe((arg) => console.log(arg));

// send payload
topic.publish("payload");

// unsubscribe from topic
topic.unsubscribe(subscription);
```

