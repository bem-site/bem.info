#!/bin/bash

A=`echo $1 | grep git`

if [[ -z $1 || $A == $1 ]]; then
    echo "Usage:"
    echo "    $0 <github-username>"
    exit 1;
fi

cd output/bem.info

# init new repo
git init
git remote add origin git@github.com:$1/bem.info.git

git checkout -b gh-pages

git add .
git commit -m "deploy"
git push -f origin gh-pages

cd ..
