import Subscription from "./Subscription";
import { v4 as uuid } from 'uuid';

class Topic {
    id: string;
    name: string;
    private subscribers: Subscription[];

    constructor(name: string, subs: Subscription[] = []) {
        this.id = uuid();
        this.name = name;
        this.subscribers = subs;
    }

    publish(payload: any) {
        this.subscribers.forEach(e => {
            e.cb(payload);
        })
    };

    subscribe(cb: Function): Subscription {
        const newSubscription: Subscription = new Subscription(cb);
        this.subscribers.push(newSubscription);
        return newSubscription;
    };

    unsubscribe(subscriber: Subscription) {
        const subIndex = this.subscribers.findIndex(e => e.id === subscriber.id);
        this.subscribers = this.subscribers.splice(subIndex, 1);
    };
}

export default Topic;
