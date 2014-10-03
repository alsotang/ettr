var should = require('should');
var ettr = require('..');

var buildObj = function () {
  return ({
    a: {
      b: {
        c: 1,
        d: 2,
      }
    }
  });
};

describe('test/ettr.test.js', function () {
  it('should get attr', function () {
    var obj = buildObj();
    ettr.get(obj, 'a.b.c')
      .should.equal(1);

    ettr.get(obj, 'a[b]["c"]')
      .should.equal(1);
  });

  it('should set attr', function () {
    var obj = buildObj();
    ettr.set(obj, 'a.b.c', 5);
    obj.a.b.c.should.equal(5);
  });

  it('should incr a exists attr', function () {
    var obj = buildObj();
    ettr.incr(obj, 'a.b.c', 1);
    obj.a.b.c.should.equal(2);
  });

  it('should incr a not exists attr', function () {
    var obj = buildObj();
    ettr.incr(obj, 'a.b.z', 1);
    ettr.incr(obj, 'a.b.z', 5);
    obj.a.b.z.should.equal(6);
  });

  it('should incr a not exists attr with default value', function () {
    var obj = buildObj();
    ettr.incr(obj, 'a.b.z', 1, 100);
    ettr.incr(obj, 'a.b.z', 1, 100);
    obj.a.b.z.should.equal(102);
  });

  describe('#parseAttr', function () {
    var expect = ['a', 'b', 'c'];
    it('should parse array', function () {
      var arr = ['a', 'b', 'c'];
      ettr.parseAttr(arr).should.eql(expect);
    });

    it('should parse dot-connected str', function () {
      var str = 'a.b.c';
      ettr.parseAttr(str).should.eql(expect);
    });

    it('should parse [] str', function () {
      var str = '[a][b][c]';
      ettr.parseAttr(str).should.eql(expect);
    });

    it('should parse [] and dot-connected str', function () {
      var str = 'a[b].c';
      ettr.parseAttr(str).should.eql(expect);

      var str = "a['b'].c";
      ettr.parseAttr(str).should.eql(expect);

      var str = 'a["b"].c';
      ettr.parseAttr(str).should.eql(expect);

      var str = 'a["b"][\'c\']';
      ettr.parseAttr(str).should.eql(expect);
    });
  });
});
