Package.describe({
  name: 'boomfly:react-meteor-hooks',
  version: '1.0.0',
  summary: 'React Hooks for Meteor.',
  git: 'https://github.com/boomfly/react-meteor-hooks.git',
  documentation: 'README.md',
})

Package.onUse(function(api) {
  api.versionsFrom('1.7')
  api.use('ecmascript')
  api.use('tracker')
  api.use('accounts-base')
  api.use('tmeasday:check-npm-versions')
  api.mainModule('index.js')
})

Package.onTest(function(api) {
  api.use('ecmascript')
  api.use('tinytest')
  api.addFiles('tests.js')
})
