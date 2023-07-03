"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateSchema = void 0;
function validateSchema(schema) {
    return function (req, res, next) {
        var validation = schema.validate(req.body);
        if (validation.error) {
            return res.status(422).send({ error: validation.error.message });
        }
        next();
    };
}
exports.validateSchema = validateSchema;
