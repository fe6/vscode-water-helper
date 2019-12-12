#!/bin/bash

echo $1
mkdir out
cd out
mkdir maps
cp -r ../src/maps/** ./maps/
cd ..

tsc $1 -p ./