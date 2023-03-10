"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NESTIA_CONFIG = void 0;
exports.NESTIA_CONFIG = {
    input: ['src/controllers', 'src/auth'],
    output: 'src/api',
    swagger: {
        output: 'dist/swagger.json',
        security: {
            bearer: {
                type: 'apiKey',
                in: 'header',
                name: 'Authorization',
            },
        },
    },
};
exports.default = exports.NESTIA_CONFIG;
//# sourceMappingURL=nestia.config.js.map