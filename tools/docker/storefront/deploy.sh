#!/bin/bash
set -e
echo $PWD
rm -rf ./dist/apps/tmp
mkdir ./dist/apps/tmp
cp ./dist/apps/storefront/* ./dist/apps/tmp
rm -rf ./dist/apps/storefront/*
cp tools/docker/storefront/nginx.conf.template dist/apps/storefront/nginx.conf.template
cp tools/docker/storefront/Dockerfile dist/apps/storefront/Dockerfile

mkdir ./dist/apps/storefront/build
cp ./dist/apps/tmp/* ./dist/apps/storefront/build/
rm -rf ./dist/apps/tmp
