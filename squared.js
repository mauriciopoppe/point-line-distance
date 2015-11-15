var vec3 = require('gl-vec3')
var ab = vec3.create()
var ap = vec3.create()
var cross = vec3.create()

module.exports = function (p, a, b) {
  // // == vector solution
  // // n = vector `ab` normalized
  // var n = vec3.create()
  // // projection = projection of `point` on `n`
  // var projection = vec3.create()
  // vec3.normalize(n, vec3.subtract(n, a, b))
  // vec3.scaleAndAdd(projection, a, n, vec3.dot(n, p))
  // return vec3.squaredDistance(projection, p)

  // == parallelogram solution
  //
  //            s
  //      __a________b__
  //       /   |    /
  //      /   h|   /
  //     /_____|__/
  //    p
  //
  //  s = b - a
  //  area = s * h
  //  |ap x s| = s * h
  //  h = |ap x s| / s
  //
  vec3.subtract(ab, b, a)
  vec3.subtract(ap, p, a)
  var area = vec3.squaredLength(vec3.cross(cross, ap, ab))
  var s = vec3.squaredLength(ab)
  if (s === 0) {
    throw Error('a and b are the same point')
  }
  return area / s
}
