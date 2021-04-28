import { autoInjectable } from 'tsyringe';

import { Bar } from './bar';

@autoInjectable()
export class Foo {
  // eslint-disable-next-line no-unused-vars
  constructor(private bar?: Bar) {
    console.log(this.bar);
  }
  sayHello(name: string) {
    return `Hello ${name}`;
  }
}
