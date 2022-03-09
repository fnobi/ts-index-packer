import { writeFile } from "fs/promises";
import tsIndexerCore, { TSIndexerOptions } from "./core";

async function tsIndexer(opts: TSIndexerOptions & { dest?: string }) {
  const body = tsIndexerCore(opts);
  const { dest } = opts;
  if (dest) {
    await writeFile(dest, body, { encoding: "utf8" });
  }
  return body;
}

export default tsIndexer;
