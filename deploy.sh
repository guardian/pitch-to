#!/usr/bin/env bash

./build.sh
git checkout gh-pages
git merge master
git push