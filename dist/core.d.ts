export declare type TSIndexerOptions = {
    files: string[];
    moduleName?: string;
    home?: string;
    prefix?: string;
};
declare function tsIndexerCore(opts: TSIndexerOptions): string;
export default tsIndexerCore;
