import { v4 as uuid } from 'uuid';

class Subscription {
  cb: Function = () => { };
  id: string;

  constructor(cb: Function) {
    this.id = uuid();
    if (typeof cb === 'function') this.cb = cb;
  }
}

export default Subscription;
