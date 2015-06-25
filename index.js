var regex = require('glsl-version-regex')

module.exports = function glslExtractVersion (tokens) {
  for (var i = 0; i < tokens.length; i++) {
    var token = tokens[i]
    if (token.type === 'preprocessor') {
      var match = regex.exec(token.data)
      if (match) {
        return match[1].replace(/\s\s+/g, ' ')
      }
    }
  }
  return null
}
