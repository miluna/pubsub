import * as pubsub from './index';
import Subscription from "./Subscription";


const dummyCallBack = jest.fn();

describe('Testing pub sub functions', function () {
    
    it('should subscribe to a topic with a callback', function () {
        const subscription = pubsub.subscribe("TEST_TOPIC", dummyCallBack)
    
        expect(subscription).toBeDefined();
        expect(subscription).toBeInstanceOf(Subscription);
    });
    
    it('should subscribe and unsubscribe from a topic', function () {
        const subscription = pubsub.subscribe("TEST_TOPIC", dummyCallBack);
    
        expect(subscription).toBeDefined();
        expect(subscription).toBeInstanceOf(Subscription);
        
        expect(() => {
            pubsub.unsubscribe("TEST_TOPIC", subscription);
        }).not.toThrow();
    });
    
    it('should publish something to a subscribed topic', function () {
        const topic = "TEST_TOPIC";
        const subscription = pubsub.subscribe("TEST_TOPIC", dummyCallBack);
    
        expect(subscription).toBeDefined();
        expect(subscription).toBeInstanceOf(Subscription);
    
        pubsub.publish(topic, "test");
        expect(dummyCallBack).toHaveBeenCalled();
        
        expect(() => {
            pubsub.unsubscribe("TEST_TOPIC", subscription);
        }).not.toThrow();
    });
    
});
