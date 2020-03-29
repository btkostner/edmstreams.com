/**
 * modules/yaml.js
 * Allows yaml files during build
 */

export default function YamlModule () {
  this.extendBuild((config) => {
    config.resolve.extensions.push('.yaml')

    config.module.rules.push({
      test: /\.yaml$/,
      use: 'js-yaml-loader'
    })
  })
}
