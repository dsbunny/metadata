"use strict";
// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab
// Derived from iptc-reader/index.js.
Object.defineProperty(exports, "__esModule", { value: true });
exports.IptcProfile = void 0;
const zod_1 = require("zod");
exports.IptcProfile = zod_1.z.object({
    title: zod_1.z.string().optional()
        .describe('Title of the image'),
    caption: zod_1.z.string().optional()
        .describe('Caption of the image'),
    credit: zod_1.z.string().optional()
        .describe('Credit of the image'),
    keywords: zod_1.z.array(zod_1.z.string()).optional()
        .describe('Keywords of the image'),
    dateCreated: zod_1.z.string().optional()
        .describe('Date the image was created'),
    byline: zod_1.z.string().optional()
        .describe('Byline of the image'),
    bylineTitle: zod_1.z.string().optional()
        .describe('Byline title of the image'),
    captionWriter: zod_1.z.string().optional()
        .describe('Caption writer of the image'),
    headline: zod_1.z.string().optional()
        .describe('Headline of the image'),
    copyright: zod_1.z.string().optional()
        .describe('Copyright of the image'),
    category: zod_1.z.string().optional()
        .describe('Category of the image'),
})
    .describe('Metadata from the IPTC standard.');
//# sourceMappingURL=iptc-profile.schema.js.map