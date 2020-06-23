import { isPlainObject as npmIsPlainObject } from '@xobotyi/is-plain-obj';
import { run } from './run';
import { isPlainObject as localIsPlainObject } from '../..';
// eslint-disable-next-line import/order
import isPlainObject = require('is-plain-obj');

const showRef = false;

run<any>(
  [
    {
      name: 'object',
      data: { foo: 'bar' },
      reference: true,
    },
    {
      name: 'function',
      data: () => 123,
      reference: false,
    },
    {
      name: 'null',
      data: null,
      reference: false,
    },
    {
      name: 'string',
      data: 'someString',
      reference: false,
    },
  ],
  {
    'is-plain-obj': isPlainObject,
    '@xobotyi/is-plain-obj [local]': localIsPlainObject,
    '@xobotyi/is-plain-obj [npm]': npmIsPlainObject,
  },
  { showRef },
);
