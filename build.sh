#!/bin/bash

echo $1
mkdir out
cd out
mkdir maps
cp -r ../maps/** ./maps/
cd ..

tsc $1 -p ./