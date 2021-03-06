'use strict'

const keyFuncs = {
  w: def => { def.y -= 10 / def.pixelsPerUnit },
  a: def => { def.x -= 10 / def.pixelsPerUnit },
  s: def => { def.y += 10 / def.pixelsPerUnit },
  d: def => { def.x += 10 / def.pixelsPerUnit },
  r: def => { def.pixelsPerUnit *= 2 },
  f: def => { def.pixelsPerUnit /= 2 },
  t: def => { def.iterations += 10 },
  g: def => { def.iterations -= 10 }
}

module.exports = (def, key) => (keyFuncs[key] && keyFuncs[key](def), def)
