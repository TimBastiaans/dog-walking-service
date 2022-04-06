#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
<<<<<<< HEAD
# git push -f git@github.com:TimBastiaans/TimBastiaans.github.io.git main
=======
 git push -f git@github.com:TimBastiaans/TimBastiaans.github.io.git main
>>>>>>> origin/master

# if you are deploying to https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:TimBastiaans/dog-walking-service.git main:gh-pages

cd -