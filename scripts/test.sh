#!/bin/bash

BASE_DIR=`dirname $0`

echo ""
echo "Starting Karma Server (http://vojtajina.github.com/testacular)"
echo "-------------------------------------------------------------------"

testacular start $BASE_DIR/../config/karma.conf.js $*
