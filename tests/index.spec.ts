import { isPlainObject } from '../src';

function Foo(this: any, x?) {
  this.x = x;
}

// eslint-disable-next-line @typescript-eslint/no-empty-function
function FunctionConstructor() {}

FunctionConstructor.prototype.constructor = Object;

describe('isPlainObject', () => {
  it('should be defined', () => {
    expect(isPlainObject).toBeDefined();
  });

  it('should return true on plain objects', () => {
    expect(isPlainObject({})).toBe(true);
    expect(isPlainObject({ foo: true })).toBe(true);
    expect(isPlainObject({ constructor: Foo })).toBe(true);
    expect(isPlainObject({ valueOf: 0 })).toBe(true);
    expect(isPlainObject(Object.create(null))).toBe(true);
    // eslint-disable-next-line no-new-object
    expect(isPlainObject(new Object())).toBe(true);
  });

  it('should return false on non-plain objects and not-objects', function () {
    expect(isPlainObject(['foo', 'bar'])).toBe(false);
    expect(isPlainObject(new Foo(1))).toBe(false);
    expect(isPlainObject(Math)).toBe(false);
    expect(isPlainObject(Error)).toBe(false);
    expect(isPlainObject(() => 123)).toBe(false);
    expect(isPlainObject(/./)).toBe(false);
    expect(isPlainObject(null)).toBe(false);
    expect(isPlainObject(undefined)).toBe(false);
    expect(isPlainObject(NaN)).toBe(false);
    expect(isPlainObject('')).toBe(false);
    expect(isPlainObject(0)).toBe(false);
    expect(isPlainObject(false)).toBe(false);
    expect(isPlainObject(new FunctionConstructor())).toBe(false);
    expect(isPlainObject(new (class {})())).toBe(false);
    expect(isPlainObject(new Map())).toBe(false);
    expect(isPlainObject(new Set())).toBe(false);

    expect(isPlainObject('string'[Symbol.iterator]())).toBe(false);

    // eslint-disable-next-line prefer-rest-params
    expect(isPlainObject(arguments)).toBe(false);

    const foo = new Foo();
    foo.constructor = Object;
    expect(isPlainObject(foo)).toBe(false);
  });
});
