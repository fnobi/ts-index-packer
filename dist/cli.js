"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const yargs = __importStar(require("yargs"));
const _1 = __importDefault(require("."));
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const argv = yield yargs
            .options({
            dest: {
                describe: "出力先のファイルパス",
                type: "string",
                demandOption: false,
                alias: "d"
            },
            module: {
                describe: "出力時のモジュール名（変数名）",
                type: "string",
                demandOption: false,
                alias: "m"
            },
            home: {
                describe: "参照ファイルパスのホーム指定（~で置き換えされます）",
                type: "string",
                demandOption: false,
                alias: "a"
            },
            prefix: {
                describe: "import文の変数名prefix",
                type: "string",
                demandOption: false,
                alias: "p"
            }
        })
            .help().argv;
        const files = argv._.map(String);
        const res = yield _1.default({
            files,
            dest: argv.dest,
            moduleName: argv.module,
            home: argv.home,
            prefix: argv.prefix
        });
        if (!argv.dest) {
            console.log(res);
        }
    });
}
main();
//# sourceMappingURL=cli.js.map