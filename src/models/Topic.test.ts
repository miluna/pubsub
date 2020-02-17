import Subscription from "./Subscription";
import Topic from './Topic';

const dummyCallBack = jest.fn();

describe('Testing Topic class', () => {

    it('should instantiate with a string parameter', () => {
        const topicName: string = "pepe";
        const topic = new Topic(topicName);

        expect(topic).toBeDefined();
        expect(topic).toBeInstanceOf(Topic);
        expect(topic.name).toEqual(topicName);
        expect(topic.id).toBeDefined();
    });

    it('should subscribe and return the subscription', () => {
        const topic = new Topic("pepe");
        const sub = topic.subscribe(dummyCallBack);

        expect(topic).toBeDefined();
        expect(topic).toBeInstanceOf(Topic);
        expect(sub).toBeDefined();
        expect(sub).toBeInstanceOf(Subscription);
        expect(sub.cb).toEqual(dummyCallBack);
        expect(sub.id).toBeDefined();
    });

    it('should subscribe and unsubscribe', () => {
        expect(() => {
            const topic = new Topic("pepe");
            const sub = topic.subscribe(dummyCallBack);
            expect(topic).toBeInstanceOf(Topic);
            expect(sub).toBeInstanceOf(Subscription);
            topic.unsubscribe(sub);
        }).not.toThrow();
    });

    it('should publish data to the dummy function', () => {
        const topic = new Topic("pepe");
        const sub = topic.subscribe(dummyCallBack);

        expect(topic).toBeInstanceOf(Topic);
        expect(sub).toBeInstanceOf(Subscription);
        expect(sub.cb).toEqual(dummyCallBack);
        topic.publish("lol");
        expect(dummyCallBack).toHaveBeenCalled();
        expect(dummyCallBack).toHaveBeenCalledWith("lol");
    });
});
