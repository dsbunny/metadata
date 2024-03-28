"use strict";
// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab
Object.defineProperty(exports, "__esModule", { value: true });
exports.Metadata = exports.VideoMetadata = exports.ImageMetadata = exports.FileMetadata = exports.BaseMetadata = exports.FileStatAndChecksums = exports.VideoTimings = exports.ImageTimings = exports.FileTimings = void 0;
const zod_1 = require("zod");
const sharp_metadata_schema_js_1 = require("./sharp-metadata.schema.js");
const exif_metadata_schema_js_1 = require("./exif-metadata.schema.js");
const icc_profile_schema_js_1 = require("./icc-profile.schema.js");
const iptc_profile_schema_js_1 = require("./iptc-profile.schema.js");
const xmp_profile_schema_js_1 = require("./xmp-profile.schema.js");
const ffprobe_data_schema_js_1 = require("./ffprobe-data.schema.js");
// Internal performance timings
exports.FileTimings = zod_1.z.object({
    file_http_duration: zod_1.z.number()
        .describe('Time taken to download the file from the HTTP server.'),
    file_ck_duration: zod_1.z.number()
        .describe('Time taken to calculate the checksum of the file.'),
})
    .describe('Performance timings for the file.');
exports.ImageTimings = zod_1.z.object({
    image_http_duration: zod_1.z.number()
        .describe('Time taken to download the image from the HTTP server.'),
    image_ck_duration: zod_1.z.number()
        .describe('Time taken to calculate the checksum of the image.'),
    thumbnail_sharp_duration: zod_1.z.number()
        .describe('Time taken to generate the thumbnail using sharp.'),
    thumbnail_ck_duration: zod_1.z.number()
        .describe('Time taken to calculate the checksum of the thumbnail.'),
    thumbnail_http_duration: zod_1.z.number()
        .describe('Time taken to upload the thumbnail to the HTTP server.'),
})
    .describe('Performance timings for the image.');
exports.VideoTimings = zod_1.z.object({
    video_http_duration: zod_1.z.number()
        .describe('Time taken to download the video from the HTTP server.'),
    video_ck_duration: zod_1.z.number()
        .describe('Time taken to calculate the checksum of the video.'),
    preview_ffmpeg_duration: zod_1.z.number()
        .describe('Time taken to generate the preview using ffmpeg.'),
    preview_ck_duration: zod_1.z.number()
        .describe('Time taken to calculate the checksum of the preview.'),
    preview_http_duration: zod_1.z.number()
        .describe('Time taken to upload the preview to the HTTP server.'),
    thumbnail_ffmpeg_duration: zod_1.z.number()
        .describe('Time taken to generate the thumbnail using ffmpeg.'),
    thumbnail_sharp_duration: zod_1.z.array(zod_1.z.number())
        .describe('Time taken to generate the thumbnail using sharp.'),
    thumbnail_ck_duration: zod_1.z.array(zod_1.z.number())
        .describe('Time taken to calculate the checksum of the thumbnail.'),
    thumbnail_http_duration: zod_1.z.array(zod_1.z.number())
        .describe('Time taken to upload the thumbnail to the HTTP server.'),
})
    .describe('Performance timings for the video.');
// File metadata
exports.FileStatAndChecksums = zod_1.z.object({
    name: zod_1.z.string().min(1).max(255) // Matching Google Drive.
        .describe('The name of the file.'),
    content_type: zod_1.z.string().min(5).max(255)
        .describe('The MIME type of the file.'),
    size: zod_1.z.number().min(20).max(5497558138880) // 5TB
        .describe('The size of the file in bytes.'),
    mtime: zod_1.z.string().datetime()
        .describe('The last modified time of the file.'),
    md5: zod_1.z.string().length(24) // Base64 encoded 16 bytes.
        .describe('The MD5 checksum of the file.'),
    sha256: zod_1.z.string().length(44)
        .describe('The SHA-256 checksum of the file.'),
    s3_version_id: zod_1.z.string().min(2).max(255)
        .describe('The version ID of the file in S3.'),
    s3_etag: zod_1.z.string().min(2).max(2048)
        .describe('The ETag of the file in S3.'),
})
    .describe('The file metadata.');
// Base metadata for all files.
exports.BaseMetadata = zod_1.z.object({
    file: exports.FileStatAndChecksums,
});
// Metadata for a generic file.
exports.FileMetadata = exports.BaseMetadata.merge(zod_1.z.object({
    timings: exports.FileTimings,
}))
    .describe('Metadata for a generic file.');
// Metadata for an image file.
exports.ImageMetadata = exports.BaseMetadata.merge(zod_1.z.object({
    sharp: sharp_metadata_schema_js_1.SharpMetadata,
    exif: exif_metadata_schema_js_1.ExifMetadata.optional(),
    icc: icc_profile_schema_js_1.IccProfile.optional(),
    iptc: iptc_profile_schema_js_1.IptcProfile.optional(),
    xmp: xmp_profile_schema_js_1.XmpProfile.optional(),
    ffprobe: ffprobe_data_schema_js_1.FfprobeData,
    preview: exports.FileStatAndChecksums,
    timings: exports.ImageTimings,
}))
    .describe('Metadata for an image file.');
// Metadata for a video file.
exports.VideoMetadata = exports.BaseMetadata.merge(zod_1.z.object({
    ffprobe: ffprobe_data_schema_js_1.FfprobeData
        .describe('Metadata from the ffprobe tool.'),
    previews: zod_1.z.array(exports.FileStatAndChecksums)
        .describe('The preview images.'),
    timings: exports.VideoTimings,
}))
    .describe('Metadata for a video file.');
// Union of all metadata types.
exports.Metadata = zod_1.z.union([
    exports.ImageMetadata,
    exports.VideoMetadata,
    exports.FileMetadata,
])
    .describe('Union of all metadata types.');
//# sourceMappingURL=metadata.schema.js.map