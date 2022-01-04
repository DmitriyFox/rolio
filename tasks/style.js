const {
    src,
    dest
} = require('gulp');
const sass = require('gulp-sass');
const requireDir = require('require-dir');
const bulk = require('gulp-sass-bulk-importer');
const prefix = require('gulp-autoprefixer');
const clean  = require('gulp-clean-css');
const concat = require('gulp-concat');
const map = require('gulp-sourcemaps');
const bs = require('browser-sync');

module.exports = function style () {
    
}