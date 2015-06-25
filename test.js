var version = require('./')
var test = require('tape')
var tokenize = require('glsl-tokenizer')

test('finds a #version field in a set of GLSL tokens', function (t) {
  var shader
  shader = tokenize([
    '#version 300 es',
    '#define FOO'
  ].join('\n'))
  t.equal(version(shader), '300 es')

  shader = tokenize([
    '#version  300   es',
    '#define FOO'
  ].join('\n'))
  t.equal(version(shader), '300 es')

  shader = tokenize([
    '// some comment',
    '/* block */ #version 100 // another'
  ].join('\n'))
  t.equal(version(shader), '100')

  shader = tokenize([
    'void main() {}'
  ].join('\n'))
  t.equal(version(shader), null)
  t.end()
})
