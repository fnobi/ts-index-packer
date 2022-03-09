import * as yargs from "yargs";
import tsIndexer from ".";

async function main() {
  const argv = await yargs.help().argv;
  const files = argv._;
  const res = tsIndexer(files.map(String));
  // TODO: dest指定がある場合は標準出力しない
  console.log(res);
}

main();
