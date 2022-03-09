import { relative } from "path";
import { padLeft } from "./lib/stringUtil";

export type TSIndexerOptions = {
  files: string[];
  moduleName?: string;
  home?: string;
  prefix?: string;
};

function tsIndexerCore(opts: TSIndexerOptions) {
  const { files, home, moduleName = "tsIndexer", prefix = "ASSETS_" } = opts;
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
  return [imps, vm, exp].join("\n");
}

export default tsIndexerCore;
