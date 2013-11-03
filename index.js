var Vec2 = require('vec2')

function ease (t, b, c, d) {
    if ((t /= d / 2) < 1) {
      return c / 2 * t * t + b;
    } else {
      return -c / 2 * ((--t) * (t - 2) - 1) + b;
    }
  }

var easing = {
  inOutQuad: function(t, b, c, d) {
    if ((t /= d / 2) < 1) {
      return c / 2 * t * t + b;
    } else {
      return -c / 2 * ((--t) * (t - 2) - 1) + b;
    }
  },
}

module.exports = function (vec, duration, fr) {
  fr = (fr || 60) / 1000
  var _vec = new Vec2().set(vec.x, vec.y)
  var _t = Date.now(), t = _t

  var int
  _vec.change(function () {
    if(int) {
      clearInterval(int)
      int = null
    }
    var start = Date.now()
    var d = _vec.subtract(vec, true)
    var x = vec.x, y = vec.y
    //TODO: use requestAnimitaionFrame where available?
    int = setInterval(function () {
      var t = Date.now() - start
      if(t >= duration)
        return vec.set(_vec), clearInterval(int)

      vec.set(
        ease(t, x, d.x, duration),
        ease(t, y, d.y, duration)
      )
    }, fr)
  })
  return _vec
}


