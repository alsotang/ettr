var Benchmark = require('benchmark');
var ettr = require('./');

var suite = new Benchmark.Suite();

var obj = {
  a: {
    b: {
      c: {
        d: 1
      }
    }
  }
};
// add tests
suite.add('#ettr', function() {
  var num = ettr.get(obj, 'a.b.c.d');
})
.add('#eval', function() {
  var num = eval('obj.'+ 'a.b.c.d');
})
// add listeners
.on('cycle', function(event) {
  console.log(String(event.target));
})
.on('complete', function() {
  console.log('Fastest is ' + this.filter('fastest').pluck('name'));
})
// run async
.run({ 'async': true });
