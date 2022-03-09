import { TSIndexerOptions } from "./core";
declare function tsIndexPacker(opts: TSIndexerOptions & {
    dest?: string;
}): Promise<string>;
export default tsIndexPacker;
