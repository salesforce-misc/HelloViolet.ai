Violet website pulling in documentation from the different Violet projects.

This repository has two branches:
- master: source files and scripts to generate the website
- gh-pages: content used by github-pages to host the site

### Running Locally
You can run the website locally by typing:
```
   bundle exec jekyll serve
```

### Updating Generated (API) Documentation
API Documentation can be updated by making sure that the other violet projects are siblings to
this project with all repositories updated, and then typing:
```
   rm -rf api; jsdoc -c _jsdoc/conf.json
```

### Publishing
Updated documentation and any other source files need to be copied to the `gh-pages` branch. The following command should help (assuming that the repository is checked out in a sibling directory):
```
  ./_publish.sh
  cd ../HelloViolet.ai-gh
  git status
  git commit -am 'Website update'
```
