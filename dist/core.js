"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const stringUtil_1 = require("./lib/stringUtil");
function tsIndexerCore(opts) {
    const { files, home, moduleName = "tsIndexer", prefix = "ASSETS_" } = opts;
    const fm = {};
    const imps = files
        .map((f, i) => {
        const fp = home ? `~/${path_1.relative(home, f)}` : f;
        const key = i + 1;
        const varName = `${prefix}${stringUtil_1.padLeft(key, String(files.length).length)}`;
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
exports.default = tsIndexerCore;
//# sourceMappingURL=core.js.map