import { v4 as uuid } from 'uuid';
import Topic from "./Topic";
import Subscription from "./Subscription";

class PubSub {
    id: string;
    private topics: Topic[];

    constructor(tops: Topic[] = []) {
        this.id = uuid();
        this.topics = tops;
    }

    subscribe(topic: string | Topic, cb: Function): Subscription {
        let subs: Subscription;
        const tp = this.getTopic(topic);
        if (tp) {
            subs = tp.subscribe(cb);
        } else {
            let newTopic: Topic;
            if (typeof topic === "string") newTopic = new Topic(topic);
            else if (topic instanceof Topic) newTopic = topic;
            subs = newTopic.subscribe(cb);
            this.topics.push(newTopic);
        }
        return subs;
    };

    unsubscribe(topic: string | Topic, subscription: Subscription) {
        const tp = this.getTopic(topic);
        if (tp) {
            tp.unsubscribe(subscription);
        }
    };

    publish(topic: string | Topic, payload: any) {
        const tp = this.getTopic(topic);
        if (tp) {
            tp.publish(payload);
        }
    };

    createTopic(topic: string): Topic {
        const newTopic: Topic = new Topic(topic);
        this.topics.push(newTopic);
        return newTopic;
    }

    getTopic(topic: string | Topic): Topic | undefined {
        if (topic instanceof Topic) {
            return this.topics.find(e => e.id === topic.id);
        }
        return this.topics.find(e => e.name === topic);
    };

    addTopic(topic: string | Topic): Topic {
        if (topic instanceof Topic) {
            const alreadyThere = this.getTopic(topic);
            if (alreadyThere) throw new Error("Topic is already in the list");
            this.topics.push(topic);
            return topic;
        }
        return this.createTopic(topic);
    }

    deleteTopic(topic: string | Topic) {
        const tp = this.getTopic(topic);
        if (tp) {
            const index = this.topics.findIndex((e) => e.id === tp.id);
            this.topics = this.topics.splice(index, 1)
        }
    };
}

export default PubSub;
