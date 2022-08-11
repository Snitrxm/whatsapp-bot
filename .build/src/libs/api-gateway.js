"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatJSONResponse = void 0;
var formatJSONResponse = function (response) {
    return {
        statusCode: response.statusCode,
        body: JSON.stringify(response === null || response === void 0 ? void 0 : response.body)
    };
};
exports.formatJSONResponse = formatJSONResponse;
//# sourceMappingURL=api-gateway.js.map