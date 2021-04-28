import 'reflect-metadata';
import { Foo } from './foo';

const instance = new Foo();
const msg = instance.sayHello('Binh Bui');
console.log(msg);
