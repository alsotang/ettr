[![Build Status](https://travis-ci.org/alsotang/ettr.svg)](https://travis-ci.org/alsotang/ettr) [![Coverage Status](https://img.shields.io/coveralls/alsotang/ettr.svg)](https://coveralls.io/r/alsotang/ettr)


install
==

`npm install ettr`

usage
==

Assume `obj` is

```js
{
  a: {
    b: {
      c: 1,
      d: 2,
    }
  }
}
```

### .get(obj, attr)

```js
ettr.get(obj, 'a.b.c')
  .should.equal(1);

ettr.get(obj, 'a[b]["c"]')
  .should.equal(1);
```

### .set(obj, attr, value)

```js
ettr.set(obj, 'a.b.c', 5);
obj.a.b.c.should.equal(5);
```

### .incr(obj, attr, value, defaultValue)

```js
ettr.incr(obj, 'a.b.z', 1, 100);
ettr.incr(obj, 'a.b.z', 1, 100);
obj.a.b.z.should.equal(102);
```

benchmark
==

see `benchmark.js`

```
#ettr x 800,747 ops/sec ±2.25% (93 runs sampled)
#eval x 2,918,739 ops/sec ±2.65% (87 runs sampled)
Fastest is #eval
```

license
==

MIT


