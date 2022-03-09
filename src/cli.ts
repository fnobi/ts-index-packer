import * as yargs from "yargs";
import { string } from "yargs";

async function main() {
  const argv = await yargs
    .option("files", {
      type: "string",
      description: "target files glob pattern.",
      demandOption: true
    })
    .help().argv;
  console.log("ts-indexer", argv, argv.files);
}

main();
