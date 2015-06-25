# glsl-token-extract-version

[![stable](http://badges.github.io/stability-badges/dist/stable.svg)](http://github.com/badges/stability-badges)

Gets the value of a `#version` statement from a set of [GLSL tokens](https://github.com/stackgl/glsl-tokenizer), or returns null if no version is defined.

```js
var tokenize = require('glsl-tokenizer')
var getVersion = require('glsl-token-extract-version')

var source = `
  #version 300 es // WebGL 2
  out vec4 fragColor;

  void main() {
    fragColor = vec4(1.0);
  }
`

var version = getVersion(tokenize(source))
//=> "300 es"
```

## Usage

[![NPM](https://nodei.co/npm/glsl-token-extract-version.png)](https://www.npmjs.com/package/glsl-token-extract-version)

#### `version = getVersion(tokens)`

For the given list of GLSL tokens, finds a preprocessor statement that matches a `#version` regex. Normalizes multiple whitespace into a single space, and returns the string value, such as `"300 es"` or `"100"`.

If no `#version` statement exists, returns `null`.

## License

MIT, see [LICENSE.md](http://github.com/Jam3/glsl-token-extract-version/blob/master/LICENSE.md) for details.
