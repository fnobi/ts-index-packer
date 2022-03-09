import * as yargs from "yargs";
import tsIndexer from ".";

async function main() {
  const argv = await yargs
    .option("module", {
      type: "string",
      demandOption: false,
      alias: "m"
    })
    .help().argv;
  const files = argv._.map(String);
  const res = tsIndexer({
    files,
    moduleName: argv.module
  });
  // TODO: dest指定がある場合は標準出力しない
  console.log(res);
}

main();
