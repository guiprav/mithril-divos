#!/bin/sh
set -e

browserify index.js -o bundle.js
stylus <styles.styl >styles.css
