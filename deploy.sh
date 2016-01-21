#!/usr/bin/env bash

./build.sh
aws s3 cp . s3://pitchto-website/ --recursive --profile frontend --include "*" --exclude ".git*" --exclude "*.scss" --exclude "*sass*"