import { v4 as uuid } from 'uuid';

export default class Subscription {
  cb: Function = () => { }

  id: string = uuid();

  constructor(cb: Function) {
    if (typeof cb === 'function') this.cb = cb;
  }
}
