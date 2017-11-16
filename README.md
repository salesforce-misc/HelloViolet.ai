Violet website pulling in documentation from the different Violet projects.

This repository has two branches:
- master: source files and scripts to generate the website
- gh-pages: content used by github-pages to host the site

### Updating Documentation
Documentation can be updated by making sure that the other violet projects are siblings to
this project with all repositories updated, and then typing:
```
   rm -rf docs; jsdoc -c _jsdoc/conf.json
```

### Publishing
Updated documentation and any other source files need to be copied to the `gh-pages` branch. The following commands should help (assuming that the repository is checked out in a sibling directory):
```
  cp -r docs     ../HelloViolet.ai-gh/docs
  cp -r _layouts ../HelloViolet.ai-gh/_layouts
  cp -r _sass    ../HelloViolet.ai-gh/_sass
  cp -r assets   ../HelloViolet.ai-gh/assets
  cp index.md    ../HelloViolet.ai-gh/index.md

```
