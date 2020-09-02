#!/bin/bash

set -e

yarn build
yarn build:receiver

./node_modules/gh-pages/bin/gh-pages.js -d dist