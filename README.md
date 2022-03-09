ts-indexer
----

## Usage

```
オプション:
      --version  バージョンを表示
  -d, --dest     出力先のファイルパス
  -m, --module   出力時のモジュール名（変数名）
  -a, --home     参照ファイルパスのホーム指定（~で置き換えされます）
  -p, --prefix   import文の変数名prefix
      --help
```

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