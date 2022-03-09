import { TSIndexerOptions } from "./core";
declare function tsIndexer(opts: TSIndexerOptions & {
    dest?: string;
}): Promise<string>;
export default tsIndexer;
