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
      },
      prefix: {
        type: "string",
        demandOption: false,
        alias: "p"
      },
      dest: {
        type: "string",
        demandOption: false,
        alias: "d"
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
