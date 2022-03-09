import * as yargs from "yargs";
import tsIndexer from ".";

async function main() {
  const argv = await yargs
    .options({
      module: {
        type: "string",
        demandOption: false,
        alias: "m"
      },
      home: {
        type: "string",
        demandOption: false,
        alias: "a"
      }
    })
    .help().argv;
  const files = argv._.map(String);
  const res = tsIndexer({
    files,
    moduleName: argv.module,
    home: argv.home
  });
  // TODO: dest指定がある場合は標準出力しない
  console.log(res);
}

main();
