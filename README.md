# vec2-easing

quadratic easing for vec2.

# lead = ease(follow, delay)

when `lead` is updated, move follow towards it smoothly over `delay` miliseconds.

## example
```
var ease = require('vec2-easing')
var Vec2 = require('vec2')

var follow = new Vec2()
//track changes in follow.
follow.change(function () {
  conosle.log(follow.toJSON())
})
var lead = ease(follow, 1000)

//update lead - follow will track it with smoothing.
lead.set(1000, 1000)
```

## License

MIT
