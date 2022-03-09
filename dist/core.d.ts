export declare type TSIndexerOptions = {
    files: string[];
    moduleName?: string;
    home?: string;
    prefix?: string;
};
declare function tsIndexPackerCore(opts: TSIndexerOptions): string;
export default tsIndexPackerCore;
