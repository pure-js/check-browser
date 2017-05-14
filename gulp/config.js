const common = {
  pug: 'demo/index.pug',
}

const dev = {
  pug: common.pug,
  pugWatch: [
    'demo/index.pug'
  ],
  styl: [
    'stylesheets/old-browser.styl'
  ],
  stylWatch: [
    'src/blocks/**/*.styl'
  ],
  copy: ['bower_components/prism/prism.js', 'bower_components/prism/themes/prism.css', 'src/check-browser.js'],
  css: 'app.min.css',
  dest: '.tmp/'
};

// For the future
// dev.copy = dev.copyJs.concat(common.copy);

const build = {
  pug: 'common.pug',
  styl: [
    'stylesheets/old-browser.styl'
  ],
  copy: ['bower_components/prism/prism.js', 'bower_components/prism/themes/prism.css', 'src/check-browser.js'],
  css: 'app.min.css',
  dest: 'build/'
};

module.exports = { dev, build }
