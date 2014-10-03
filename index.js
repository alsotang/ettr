var splitChar = /\.|'|"|\[|\]/;
function parseAttr(attr) {
  if (Array.isArray(attr)) {
    return attr;
  }
  if (typeof attr === 'string') {
    return attr.split(splitChar).filter(String);
  }
}
exports.parseAttr = parseAttr;

function get(obj, attr) {
  attr = parseAttr(attr);

  var a;
  attr.forEach(function (key, idx) {
    if (idx === 0) {
      a = obj[key];
    } else {
      a = a[key];
    }
  });
  return a;
}
exports.get = get;

function set(obj, attr, value) {
  attr = parseAttr(attr);

  var a;
  var len = attr.length;
  attr.forEach(function (key, idx) {
    if (idx === 0) {
      a = obj[key];
    } else if (idx === len - 1) {
      a[key] = value;
    } else {
      a = a[key];
    }
  });
  return obj;
}

exports.set = set;


function incr(obj, attr, value, defaultValue) {
  attr = parseAttr(attr);
  defaultValue = defaultValue != null ? defaultValue : 0;

  var a;
  var len = attr.length;
  attr.forEach(function (key, idx) {
    if (idx === 0) {
      a = obj[key];
    } else if (idx === len - 1) {
      if (a[key] == null) {
        a[key] = defaultValue;
      }
      a[key] += value;
    } else {
      a = a[key];
    }
  });
  return obj;
}

exports.incr = incr;
