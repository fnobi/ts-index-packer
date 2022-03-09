type Options = {
  files: string[];
  moduleName?: string;
};

function tsIndexer(opts: Options) {
  const { files, moduleName = "tsIndexer" } = opts;
  const fm: { [key: string]: string } = {};
  const imps = files
    .map((f, i) => {
      const fp = f;
      const key = i;
      const varName = `ASSETS_${key}`;
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

export default tsIndexer;
