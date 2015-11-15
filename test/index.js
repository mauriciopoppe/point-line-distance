'use strict'

var test = require('tape')

var pld = require('../')

var EPS = 1e-6
test.Test.prototype.equalEps = function (a, b, msg, extra) {
  this._assert(Math.abs(a - b) < EPS, {
    message: msg || 'should be equal',
    operator: 'ok',
    actual: a,
    expected: b,
    extra: extra
  })
}

test('should compute the distance between a point and a line', function (t) {
  t.equalEps(pld([5, 5, 0], [0, 0, 0], [1, 0, 0]), 5)
  t.equalEps(pld([-1, 1, 0], [0, 0, 0], [1, 1, 0]), Math.sqrt(2))
  t.equalEps(pld([2, 0, 0], [0, 0, 0], [1, 0, 0]), 0)
  // http://math.stackexchange.com/questions/1300484/distance-between-line-and-a-point
  t.equalEps(pld([1, 0, 1], [1, 2, -1], [2, 0, 3]), Math.sqrt(8 / 7))
  t.end()
})

test('should throw when a == b', function (t) {
  t.throws(function () {
    pld([1, 1, 1], [0, 0, 0], [0, 0, 0])
  })
  t.end()
})

