import { promises as fs } from "fs";
import tsIndexPackerCore, { TSIndexerOptions } from "./core";

async function tsIndexPacker(opts: TSIndexerOptions & { dest?: string }) {
  const body = tsIndexPackerCore(opts);
  const { dest } = opts;
  if (dest) {
    await fs.writeFile(dest, body, { encoding: "utf8" });
  }
  return body;
}

export default tsIndexPacker;
