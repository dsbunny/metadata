"use strict";
// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab
// Derived from icc.IccProfile in icc/index.d.ts.
Object.defineProperty(exports, "__esModule", { value: true });
exports.IccProfile = void 0;
const zod_1 = require("zod");
const Version = zod_1.z.enum(['2.0', '2.1', '2.4', '4.0', '4.2', '4.3', '4.4'])
    .describe('The version of the ICC profile.');
const Intent = zod_1.z.enum(['Perceptual', 'Relative', 'Saturation', 'Absolute'])
    .describe('The rendering intent of the profile.');
const DeviceClass = zod_1.z.enum(['Scanner', 'Monitor', 'Printer', 'Link', 'Abstract', 'Space', 'Named color'])
    .describe('The device class of the profile.');
const Platform = zod_1.z.enum(['Apple', 'Adobe', 'Microsoft', 'Sun Microsystems', 'Silicon Graphics', 'Taligent'])
    .describe('The platform on which the profile was created.');
const Whitepoint = zod_1.z.tuple([zod_1.z.number(), zod_1.z.number(), zod_1.z.number()])
    .describe('The white point of the profile.');
exports.IccProfile = zod_1.z.object({
    version: Version,
    intent: Intent,
    cmm: zod_1.z.string().optional()
        .describe('The name of the CMM that created the profile. This is a 4-byte ASCII string.'),
    colorSpace: zod_1.z.string().optional()
        .describe('The color space of the profile. This is a 4-byte ASCII string.'),
    connectionSpace: zod_1.z.string().optional()
        .describe('The connection space of the profile. This is a 4-byte ASCII string.'),
    copyright: zod_1.z.string().optional()
        .describe('The copyright of the profile.'),
    creator: zod_1.z.string().optional()
        .describe('The name of the profile creator.'),
    description: zod_1.z.string().optional()
        .describe('A description of the profile.'),
    deviceClass: DeviceClass.optional(),
    deviceModelDescription: zod_1.z.string().optional()
        .describe('A description of the device model.'),
    manufacturer: zod_1.z.string().optional()
        .describe('The name of the device manufacturer.'),
    model: zod_1.z.string().optional()
        .describe('The name of the device model.'),
    platform: Platform.optional(),
    viewingConditionsDescription: zod_1.z.string().optional()
        .describe('A description of the viewing conditions.'),
    whitepoint: Whitepoint.optional(),
})
    .describe('Metadata from the ICC standard.');
//# sourceMappingURL=icc-profile.schema.js.map