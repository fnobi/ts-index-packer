ts-indexer
----

## Github Actions

### workflows

- branch: `develop`
  - run test

- branch: `master`
  - run test
  - build
  - commit on `master-build` branch
  - version tagging (from package.json)
  - npm publish

### secrets

- `NPM_TOKEN`: npm registry access token