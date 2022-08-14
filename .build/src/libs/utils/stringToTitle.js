"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (value) {
    if (!value || !((value === null || value === void 0 ? void 0 : value.length) !== 0)) {
        return "";
    }
    return value
        .split(" ")
        .map(function (item) {
        return item
            .split("")
            .map(function (sub, index) {
            return index === 0 || value[index - 1] === " "
                ? sub.toUpperCase()
                : sub.toLowerCase();
        })
            .join("");
    })
        .join(" ");
});
//# sourceMappingURL=stringToTitle.js.map