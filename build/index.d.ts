import Subscription from './Subscription';
/**
 * Subscriptions are callbacks that have an uuid so we can remove the subscription later
 * @param topic String that represents the thing that you are subscribing to
 * @param cb Callback to launch once the topic is thrown
 */
export declare const subscribe: (topic: string, cb: Function) => Subscription;
/**
 * Unsubscribe by deleting the subscription from the topic list
 * @param topic String that represents the thing that you are subscribing to
 * @param subscription the subscription object
 */
export declare const unsubscribe: (topic: string, subscription: Subscription) => void;
/**
 * Throw the payload to all subscribers by calling every callback
 * @param topic String that represents the thing that you are subscribing to
 * @param cb Callback to launch once the topic is thrown
 */
export declare const publish: (topic: string, payload: any) => void;
