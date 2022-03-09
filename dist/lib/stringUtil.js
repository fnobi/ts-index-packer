"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatDatetimeValue = exports.formatDateValue = exports.formatTime = exports.trim = exports.padLeft = void 0;
exports.padLeft = (num, count) => (new Array(count).join("0") + num.toString()).slice(-count);
exports.trim = (str) => 
// eslint-disable-next-line no-irregular-whitespace
str.replace(/^[ 　]+/g, "").replace(/[ 　]+$/g, "");
exports.formatTime = (time) => {
    const d = typeof time === "number" ? new Date(time) : time;
    return [exports.padLeft(d.getHours(), 2), exports.padLeft(d.getMinutes(), 2)].join(":");
};
exports.formatDateValue = (time) => {
    const d = typeof time === "number" ? new Date(time) : time;
    return [
        d.getFullYear(),
        exports.padLeft(d.getMonth() + 1, 2),
        exports.padLeft(d.getDate(), 2)
    ].join("-");
};
exports.formatDatetimeValue = (time) => [exports.formatDateValue(time), exports.formatTime(time)].join("T");
//# sourceMappingURL=stringUtil.js.map