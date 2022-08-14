"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.finish_step = void 0;
var api_gateway_1 = require("../../libs/api-gateway");
var httpRequestAdapter_1 = require("../../libs/utils/adapters/httpRequestAdapter");
var finish_step = function (event) { return __awaiter(void 0, void 0, void 0, function () {
    var phone, httpRequestAdapter;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                phone = event.queryStringParameters.phone;
                httpRequestAdapter = new httpRequestAdapter_1.HttpRequestAdapter();
                return [4 /*yield*/, httpRequestAdapter.post("".concat(process.env.ZAPI_BASE_URL, "/send-text"), undefined, {
                        phone: phone,
                        message: "Ah, aqui v\u00E3o algumas orienta\u00E7\u00F5es para voc\u00EA ter a melhor experi\u00EAncia na nossa plataforma:\nVi aqui que voc\u00EA j\u00E1 chegou na sua Evolu\u00E7\u00E3o Patrimonial!\uD83C\uDFAF\nAqui \u00E9 onde voc\u00EA conseguir\u00E1 cadastrar todos seus patrim\u00F4nios, objetivos e muito mais!\nAlgumas outras funcionalidades da plataforma MundoInvest:\n\u2705 Fundos Imobili\u00E1rios: quanto sua carteira de FIIs paga em dividendos;\n\u2705 Fundos de investimentos: descubra os pontos de aten\u00E7\u00E3o dos seus fundos;\n\u2705 Renda Vari\u00E1vel: An\u00E1lise dos seus ativos de a\u00E7\u00F5es, BDRs e ETFs\n\u2705 Renda Fixa: An\u00E1lise de diversifica\u00E7\u00E3o, taxas e seguran\u00E7a FGC;\n    ",
                        delayMessage: 5,
                    })];
            case 1:
                _a.sent();
                return [4 /*yield*/, httpRequestAdapter.post("".concat(process.env.ZAPI_BASE_URL, "/send-text"), undefined, {
                        phone: phone,
                        message: "E claro, se precisar falar com um especialista, voc\u00EA consegue fazer atrav\u00E9s de um simples bot\u00E3o! Olha como \u00E9 f\u00E1cil!\uD83D\uDC47",
                        delayMessage: 3,
                    })];
            case 2:
                _a.sent();
                return [4 /*yield*/, httpRequestAdapter.post("".concat(process.env.ZAPI_BASE_URL, "/send-image"), undefined, {
                        phone: phone,
                        image: "https://mundo-invest.s3.sa-east-1.amazonaws.com/images_wtp/whatsImage.png",
                        delayMessage: 3,
                    })];
            case 3:
                _a.sent();
                return [4 /*yield*/, httpRequestAdapter.post("".concat(process.env.ZAPI_BASE_URL, "/send-text"), undefined, {
                        phone: phone,
                        message: "\uD83C\uDF89 Seja Bem Vindo ao MundoInvest! \uD83C\uDF89\nUm forte abra\u00E7o e bons investimentos!! \uD83D\uDE80\uD83D\uDE80\uD83D\uDE80",
                        delayMessage: 3,
                    })];
            case 4:
                _a.sent();
                return [2 /*return*/, (0, api_gateway_1.formatJSONResponse)({
                        statusCode: 204
                    })];
        }
    });
}); };
exports.finish_step = finish_step;
//# sourceMappingURL=handler.js.map