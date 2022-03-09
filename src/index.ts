function tsIndexer(files: string[]) {
  const fm: { [key: string]: string } = {};
  const imps = files
    .map((f, i) => {
      const fp = f;
      const varName = `ASSETS_${i}`;
      fm[i] = varName;
      return `import ${varName} from "${fp}";`;
    })
    .join("\n");
  return [imps, "export default " + JSON.stringify(fm)].join("\n");
}

export default tsIndexer;
