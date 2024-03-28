"use strict";
// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab
// Derived from Sharp.Metadata in sharp.d.ts.
Object.defineProperty(exports, "__esModule", { value: true });
exports.SharpMetadata = exports.LevelMetadata = exports.Channels = exports.ColourspaceEnum = exports.FormatEnum = void 0;
const zod_1 = require("zod");
exports.FormatEnum = zod_1.z.enum([
    'avif',
    'dz',
    'fits',
    'gif',
    'heif',
    'input',
    'jpeg',
    'jpg',
    'jp2',
    'jxl',
    'magick',
    'openslide',
    'pdf',
    'png',
    'ppm',
    'raw',
    'svg',
    'tiff',
    'tif',
    'v',
    'webp',
])
    .describe('Name of decoder used to decompress image data e.g. jpeg, png, webp, gif, svg.');
exports.ColourspaceEnum = zod_1.z.enum([
    'multiband',
    'b-w',
    'bw',
    'cmyk',
    'srgb',
])
    .describe('Name of colour space interpretation.');
// 3 for sRGB, 4 for CMYK.
exports.Channels = zod_1.z.number().min(3).max(4)
    .describe('Number of bands e.g. 3 for sRGB, 4 for CMYK.');
exports.LevelMetadata = zod_1.z.object({
    width: zod_1.z.number(),
    height: zod_1.z.number(),
});
exports.SharpMetadata = zod_1.z.object({
    orientation: zod_1.z.number().optional()
        .describe('Number value of the EXIF Orientation header, if present.'),
    format: exports.FormatEnum.optional(),
    size: zod_1.z.number().optional()
        .describe('Total size of image in bytes.'),
    width: zod_1.z.number().optional()
        .describe('Number of pixels wide (EXIF orientation is not taken into consideration).'),
    height: zod_1.z.number().optional()
        .describe('Number of pixels high (EXIF orientation is not taken into consideration).'),
    space: exports.ColourspaceEnum.optional(),
    channels: exports.Channels.optional(),
    depth: zod_1.z.string().optional()
        .describe('Name of pixel depth format e.g. uchar, char, ushort, float ...'),
    density: zod_1.z.number().optional()
        .describe('Number of pixels per inch (DPI), if present.'),
    chromaSubsampling: zod_1.z.string().optional() // Upstream marks as required.
        .describe('String containing JPEG chroma subsampling, 4:2:0 or 4:4:4 for RGB, 4:2:0:4 or 4:4:4:4 for CMYK.'),
    isProgressive: zod_1.z.boolean().optional()
        .describe('Boolean indicating whether the image is interlaced using a progressive scan.'),
    pages: zod_1.z.number().optional()
        .describe('Number of pages/frames contained within the image, with support for TIFF, HEIF, PDF, animated GIF and animated WebP.'),
    pageHeight: zod_1.z.number().optional()
        .describe('Number of pixels high each page in a multi-page image will be.'),
    loop: zod_1.z.number().optional()
        .describe('Number of times to loop an animated image, zero refers to a continuous loop.'),
    delay: zod_1.z.array(zod_1.z.number()).optional()
        .describe('Delay in ms between each page in an animated image, provided as an array of integers.'),
    pagePrimary: zod_1.z.number().optional()
        .describe('Number of the primary page in a HEIF image.'),
    hasProfile: zod_1.z.boolean().optional()
        .describe('Boolean indicating the presence of an embedded ICC profile.'),
    hasAlpha: zod_1.z.boolean().optional()
        .describe('Boolean indicating the presence of an alpha transparency channel.'),
    // Explicitly leave out Buffer fields as provided separately in metadata container.
    //exif: z.string().optional(),
    //icc: z.string().optional(),
    //iptc: z.string().optional(),
    //xmp: z.string().optional(),
    //tifftagPhotoshop: z.buffer().optional(),
    compression: zod_1.z.enum(['av1', 'hevc']).optional()
        .describe('The encoder used to compress an HEIF file, `av1` (AVIF) or `hevc` (HEIC).'),
    background: zod_1.z.union([zod_1.z.object({
            r: zod_1.z.number(),
            g: zod_1.z.number(),
            b: zod_1.z.number(),
        }), zod_1.z.number()]).optional()
        .describe('Default background colour, if present, for PNG (bKGD) and GIF images, either an RGB Object or a single greyscale value.'),
    levels: zod_1.z.array(exports.LevelMetadata).optional()
        .describe('Details of each level in a multi-level image provided as an array of objects.'),
    subifds: zod_1.z.number().optional()
        .describe('Number of Sub Image File Directories in an OME-TIFF image.'),
    resolutionUnit: zod_1.z.enum(['inch', 'cm']).optional()
        .describe('The unit of resolution (density).'),
    formatMagick: zod_1.z.string().optional()
        .describe('String containing format for images loaded via *magick.'),
})
    .describe('Metadata from the sharp image processing library.');
//# sourceMappingURL=sharp-metadata.schema.js.map