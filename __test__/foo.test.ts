/* eslint-disable no-unused-vars */
import { Foo } from '../src/foo';

describe('Foo test', () => {
  it('Should print correct message ', () => {
    const instance = new Foo();
    const msg = instance.sayHello('Binh Bui');
    expect(msg).toEqual('Hello Binh Bui');
  });
});
