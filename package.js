Package.describe({
  name: 'jss:jstree',
  summary: 'jQuery tree plugin for MeteorJS with default theme.',
  version: '3.1.1',
  git: 'https://github.com/JSSolutions/meteor-jstree'
});

Package.onUse(function(api) {

  api.use('jss:jstree-core', 'client');

  api.addFiles('jstree/style.css', 'client');

  api.addFiles([
    'jstree/32px.png',
    'jstree/40px.png',
    'jstree/throbber.gif'
  ], 'client', {isAsset: true});

});