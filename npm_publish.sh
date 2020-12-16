# abort on errors
set -e

# build
npm run build

# publish
npm publish
