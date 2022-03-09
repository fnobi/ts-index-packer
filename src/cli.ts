import * as yargs from "yargs";
import tsIndexer from ".";

async function main() {
  const argv = await yargs
    .options({
      dest: {
        describe: "出力先のファイルパス",
        type: "string",
        demandOption: false,
        alias: "d"
      },
      module: {
        describe: "出力時のモジュール名（変数名）",
        type: "string",
        demandOption: false,
        alias: "m"
      },
      home: {
        describe: "参照ファイルパスのホーム指定（~で置き換えされます）",
        type: "string",
        demandOption: false,
        alias: "a"
      },
      prefix: {
        describe: "import文の変数名prefix",
        type: "string",
        demandOption: false,
        alias: "p"
      }
    })
    .help().argv;
  const files = argv._.map(String);
  const res = await tsIndexer({
    files,
    dest: argv.dest,
    moduleName: argv.module,
    home: argv.home,
    prefix: argv.prefix
  });
  if (!argv.dest) {
    console.log(res);
  }
}

main();
