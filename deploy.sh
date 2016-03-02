#!/bin/bash

# create new folder
mkdir ../temp

# copy our project
cp -r output-ru/ ../temp/output-ru
cp -r output-en/ ../temp/output-en

cd ../temp

# init new repo
git init
git remote add origin $1

git checkout -b gh-pages

git add .
git commit -m"create deploy"
git push -f origin gh-pages

cd ..
rm -rf temp
