#!/bin/bash

BASE_DIR=`dirname $0`
NPM_BIN_DIR="$BASE_DIR/../../node_modules/.bin"

echo ""
echo "Starting Testacular Server (http://vojtajina.github.com/testacular)"
echo "-------------------------------------------------------------------"

PHANTOMJS_BIN=$NPM_BIN_DIR/phantomjs $NPM_BIN_DIR/karma start $BASE_DIR/../config/testacular.conf.js $*
