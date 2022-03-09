function tsIndexer(files: string[]) {
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
  const exp = `export default {${Object.entries(fm)
    .map(([key, varName]) => `${key}:${varName}`)
    .join(",")}}`;
  return [imps, exp].join("\n");
}

export default tsIndexer;
