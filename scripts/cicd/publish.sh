#!/usr/bin/env bash

HOMEDIR=${HOMEDIR:=~}

# Set standard bash debug envs
set -x

echo "Creating ${HOMEDIR}/.npmrc"
echo //registry.npmjs.org/:_authToken=${SECRET_NPM_TOKEN} > ${HOMEDIR}/.npmrc

cd src/react-marketplace/
npm publish
