import Subscription from './Subscription';

const dummyCallBack = jest.fn();

describe('Testing subscription class', function () {
    
    it('should instantiate with a function callback', function () {
        
        const sub = new Subscription(dummyCallBack);
    
        expect(sub).toBeDefined();
        expect(sub).toBeInstanceOf(Subscription);
        expect(sub.cb).toEqual(dummyCallBack)
    });
});
