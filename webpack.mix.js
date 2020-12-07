const mix = require('laravel-mix');
const LiveReloadPlugin = require('webpack-livereload-plugin');

require('laravel-mix-polyfill');
require('mix-html-builder');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for your application, as well as bundling up your JS files.
 |
 */

mix.setPublicPath(`dist`)
   .options({
        processCssUrls: false
   });

mix.copy('resources/images', 'dist/assets/images')
   .ts('resources/scripts/app.ts', 'assets/scripts/script.js')
   .sass('resources/styles/_vendor.scss', 'assets/styles')
   .sass('resources/styles/style.scss', 'assets/styles')
   .html({
          output: '.',
          minify: {
               removeComments: true
          }
     })
   .webpackConfig({
          plugins: [
               new LiveReloadPlugin()
          ]
   })
   .polyfill({
          enabled: true,
          useBuiltIns: "usage",
          targets: {"firefox": "50", "ie": 11}
   })
   .version();

