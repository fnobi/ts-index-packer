import tsIndexer from "../core";

describe("tsIndexerCore", () => {
  it("generate ts", async () => {
    const result = await tsIndexer({
      files: ["a.txt", "b.txt", "c.txt"]
    });
    expect(result).toEqual(
      [
        'import ASSETS_1 from "a.txt";',
        'import ASSETS_2 from "b.txt";',
        'import ASSETS_3 from "c.txt";',
        "const tsIndexer = {1:ASSETS_1,2:ASSETS_2,3:ASSETS_3}",
        "export default tsIndexer;"
      ].join("\n")
    );
  });
  it("generate ts with module name", async () => {
    const result = await tsIndexer({
      files: ["a.txt", "b.txt", "c.txt"],
      moduleName: "hoge"
    });
    expect(result).toEqual(
      [
        'import ASSETS_1 from "a.txt";',
        'import ASSETS_2 from "b.txt";',
        'import ASSETS_3 from "c.txt";',
        "const hoge = {1:ASSETS_1,2:ASSETS_2,3:ASSETS_3}",
        "export default hoge;"
      ].join("\n")
    );
  });
  it("generate ts with home path", async () => {
    const result = await tsIndexer({
      files: ["./hoge/moge/a.txt", "./hoge/moge/b.txt", "./hoge/moge/c.txt"],
      home: "./hoge/moge"
    });
    expect(result).toEqual(
      [
        'import ASSETS_1 from "~/a.txt";',
        'import ASSETS_2 from "~/b.txt";',
        'import ASSETS_3 from "~/c.txt";',
        "const tsIndexer = {1:ASSETS_1,2:ASSETS_2,3:ASSETS_3}",
        "export default tsIndexer;"
      ].join("\n")
    );
  });
  it("generate ts with prefix", async () => {
    const result = await tsIndexer({
      files: ["a.txt", "b.txt", "c.txt"],
      prefix: "TXT_"
    });
    expect(result).toEqual(
      [
        'import TXT_1 from "a.txt";',
        'import TXT_2 from "b.txt";',
        'import TXT_3 from "c.txt";',
        "const tsIndexer = {1:TXT_1,2:TXT_2,3:TXT_3}",
        "export default tsIndexer;"
      ].join("\n")
    );
  });
});
