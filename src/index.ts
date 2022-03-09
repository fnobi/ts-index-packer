import { writeFile } from "fs/promises";
import { relative } from "path";
import { padLeft } from "./lib/stringUtil";

type Options = {
  files: string[];
  dest?: string;
  moduleName?: string;
  home?: string;
  prefix?: string;
};

async function tsIndexer(opts: Options) {
  const {
    files,
    dest,
    home,
    moduleName = "tsIndexer",
    prefix = "ASSETS_"
  } = opts;
  const fm: { [key: string]: string } = {};
  const imps = files
    .map((f, i) => {
      const fp = home ? `~/${relative(home, f)}` : f;
      const key = i + 1;
      const varName = `${prefix}${padLeft(key, String(files.length).length)}`;
      fm[key] = varName;
      return `import ${varName} from "${fp}";`;
    })
    .join("\n");
  const vm = `const ${moduleName} = {${Object.entries(fm)
    .map(([key, varName]) => `${key}:${varName}`)
    .join(",")}}`;
  const exp = `export default ${moduleName};`;
  const body = [imps, vm, exp].join("\n");
  if (dest) {
    await writeFile(dest, body, { encoding: "utf8" });
  }
  return body;
}

export default tsIndexer;
