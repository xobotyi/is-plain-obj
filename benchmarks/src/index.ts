import { run } from './run';
import { isPlainObject as localIsPlainObject } from '../..';
import isPlainObject = require('is-plain-obj');

const showRef = false;

run(
  [
    {
      name: 'object',
      data: { foo: 'bar' },
      reference: true,
    },
  ],
  {
    'is-plain-obj': isPlainObject,
    '@xobotyi/is-plain-obj [local]': localIsPlainObject,
  },
  { showRef },
);

run(
  [
    {
      name: 'function',
      data: () => 123,
      reference: false,
    },
  ],
  {
    'is-plain-obj': isPlainObject,
    '@xobotyi/is-plain-obj [local]': localIsPlainObject,
  },
  { showRef },
);

run(
  [
    {
      name: 'null',
      data: null,
      reference: false,
    },
  ],
  {
    'is-plain-obj': isPlainObject,
    '@xobotyi/is-plain-obj [local]': localIsPlainObject,
  },
  { showRef },
);

run(
  [
    {
      name: 'string',
      data: 'someString',
      reference: false,
    },
  ],
  {
    'is-plain-obj': isPlainObject,
    '@xobotyi/is-plain-obj [local]': localIsPlainObject,
  },
  { showRef },
);
