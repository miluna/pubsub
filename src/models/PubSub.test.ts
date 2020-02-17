import PubSub from './PubSub';
import Subscription from "./Subscription";
import Topic from "./Topic";


const dummyCallBack = jest.fn();

describe('Testing PubSub class', () => {
    const pubsub: PubSub = new PubSub();

    it('should subscribe to a topic with a callback', () => {
        const subscription = pubsub.subscribe("TEST_TOPIC", dummyCallBack);

        expect(subscription).toBeDefined();
        expect(subscription).toBeInstanceOf(Subscription);
    });

    it('should create a topic and subscribe to it with a callback', () => {
        const topic = pubsub.createTopic("TEST_TOPIC");
        const subscription = pubsub.subscribe(topic, dummyCallBack);

        expect(topic).toBeDefined();
        expect(topic).toBeInstanceOf(Topic);
        expect(subscription).toBeDefined();
        expect(subscription).toBeInstanceOf(Subscription);
    });

    it('should subscribe and unsubscribe from a topic', () => {
        const subscription = pubsub.subscribe("TEST_TOPIC", dummyCallBack);

        expect(subscription).toBeDefined();
        expect(subscription).toBeInstanceOf(Subscription);

        expect(() => {
            pubsub.unsubscribe("TEST_TOPIC", subscription);
        }).not.toThrow();
    });

    it('should publish something to a subscribed topic', () => {
        const topic = pubsub.createTopic("TEST_TOPIC");
        const subscription = pubsub.subscribe(topic, dummyCallBack);

        expect(topic).toBeDefined();
        expect(topic).toBeInstanceOf(Topic);
        expect(subscription).toBeDefined();
        expect(subscription).toBeInstanceOf(Subscription);

        pubsub.publish(topic, "test");
        expect(dummyCallBack).toHaveBeenCalled();
        expect(dummyCallBack).toHaveBeenCalledWith("test");

        expect(() => {
            pubsub.unsubscribe(topic, subscription);
        }).not.toThrow();
    });

});
