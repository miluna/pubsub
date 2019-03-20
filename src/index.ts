import Subscription from './Subscription';


const topics: any = {};

/**
 * Subscriptions are callbacks that have an uuid so we can remove the subscription later
 * @param topic String that represents the thing that you are subscribing to
 * @param cb Callback to launch once the topic is thrown
 */
export const subscribe = (topic: string, cb: Function) => {
  const subscription = new Subscription(cb);

  // if the topic string already exists, 
  // append a new Subscription callback and return the subscription
  topics[topic] = topics[topic]
    ? [...topics[topic], subscription]
    : [subscription];

  return subscription;
};


/**
 * Unsubscribe by deleting the subscription from the topic list
 * @param topic String that represents the thing that you are subscribing to
 * @param subscription the subscription object
 */
export const unsubscribe = (topic: string, subscription: Subscription) => {
  if (topic && topics[topic] && subscription && subscription instanceof Subscription) {
    const index = topics[topic].findIndex((sub:Subscription) => sub.id === subscription.id);

    // if found, delete the subscription
    if (index > -1) {
      topics[topic].splice(index, 1);
    }
  }
};


/**
 * Throw the payload to all subscribers by calling every callback
 * @param topic String that represents the thing that you are subscribing to
 * @param cb Callback to launch once the topic is thrown
 */
export const publish = (topic: string, payload: any) => {
  if (topics[topic] && topics[topic].length > 0) {
    topics[topic].forEach((sub:Subscription) => {
      sub.cb(payload);
    });
  }
};
