"use strict";
// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab
// Derived from xmp-reader/index.js.
Object.defineProperty(exports, "__esModule", { value: true });
exports.XmpProfile = void 0;
const zod_1 = require("zod");
exports.XmpProfile = zod_1.z.object({
    keywords: zod_1.z.array(zod_1.z.string()).optional()
        .describe('Keywords associated with the image.'),
    title: zod_1.z.string().optional()
        .describe('The title of the image.'),
    description: zod_1.z.string().optional()
        .describe('A description of the image.'),
    rating: zod_1.z.number().optional()
        .describe('The rating of the image.'),
    location: zod_1.z.string().optional()
        .describe('The location of the image.'),
    creator: zod_1.z.string().optional()
        .describe('The creator of the image.'),
    attribution: zod_1.z.string().optional()
        .describe('The attribution of the image.'),
    terms: zod_1.z.string().optional()
        .describe('The terms of the image.'),
})
    .describe('Metadata from the XMP standard.');
//# sourceMappingURL=xmp-profile.schema.js.map