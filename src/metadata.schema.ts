// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab

import { z } from 'zod';
import { SharpMetadata } from './sharp-metadata.schema.js';
import { ExifMetadata } from './exif-metadata.schema.js';
import { IccProfile } from './icc-profile.schema.js';
import { IptcProfile } from './iptc-profile.schema.js';
import { XmpProfile } from './xmp-profile.schema.js';
import { FfprobeData } from './ffprobe-data.schema.js';

// Internal performance timings
export const FileTimings = z.object({
	file_http_duration: z.number()
		.describe('Time taken to download the file from the HTTP server.'),
	file_ck_duration: z.number()
		.describe('Time taken to calculate the checksum of the file.'),
})
	.describe('Performance timings for the file.');
export type FileTimings = z.infer<typeof FileTimings>;

export const ImageTimings = z.object({
	file_http_duration: z.number()
		.describe('Time taken to download the image from the HTTP server.'),
	file_ck_duration: z.number()
		.describe('Time taken to calculate the checksum of the image.'),
	thumbnail_sharp_duration: z.number()
		.describe('Time taken to generate the thumbnail using sharp.'),
	thumbnail_ck_duration: z.number()
		.describe('Time taken to calculate the checksum of the thumbnail.'),
	thumbnail_http_duration: z.number()
		.describe('Time taken to upload the thumbnail to the HTTP server.'),
})
	.describe('Performance timings for the image.');
export type ImageTimings = z.infer<typeof ImageTimings>;

export const VideoTimings = z.object({
	file_http_duration: z.number()
		.describe('Time taken to download the video from the HTTP server.'),
	file_ck_duration: z.number()
		.describe('Time taken to calculate the checksum of the video.'),
	preview_ffmpeg_duration: z.number()
		.describe('Time taken to generate the preview using ffmpeg.'),
	preview_ck_duration: z.number()
		.describe('Time taken to calculate the checksum of the preview.'),
	preview_http_duration: z.number()
		.describe('Time taken to upload the preview to the HTTP server.'),
	thumbnail_ffmpeg_duration: z.number()
		.describe('Time taken to generate the thumbnail using ffmpeg.'),
	thumbnail_sharp_duration: z.array(z.number())
		.describe('Time taken to generate the thumbnail using sharp.'),
	thumbnail_ck_duration: z.array(z.number())
		.describe('Time taken to calculate the checksum of the thumbnail.'),
	thumbnail_http_duration: z.array(z.number())
		.describe('Time taken to upload the thumbnail to the HTTP server.'),
})
	.describe('Performance timings for the video.');
export type VideoTimings = z.infer<typeof VideoTimings>;

// File metadata
export const FileStatAndChecksums = z.object({
	name: z.string().min(1).max(255)  // Matching Google Drive.
		.describe('The name of the file.'),
	content_type: z.string().min(5).max(255)
		.describe('The MIME type of the file.'),
	size: z.number().min(20).max(5497558138880)  // 5TB
		.describe('The size of the file in bytes.'),
	mtime: z.string().datetime()
		.describe('The last modified time of the file.'),
	md5: z.string().length(24)  // Base64 encoded 16 bytes.
		.describe('The MD5 checksum of the file.'),
	sha256: z.string().length(44)
		.describe('The SHA-256 checksum of the file.'),
	s3_version_id: z.string().min(2).max(255)
		.describe('The version ID of the file in S3.'),
	s3_etag: z.string().min(2).max(2048)
		.describe('The ETag of the file in S3.'),
})
	.describe('The file metadata.');
export type FileStatAndChecksums = z.infer<typeof FileStatAndChecksums>;

// Base metadata for all files.
export const BaseMetadata = z.object({
	file: FileStatAndChecksums,
});
export type BaseMetadata = z.infer<typeof BaseMetadata>;

// Metadata for a generic file.
export const FileMetadata = BaseMetadata.merge(z.object({
	timings: FileTimings,
}))
	.describe('Metadata for a generic file.');
export type FileMetadata = z.infer<typeof FileMetadata>;

// Metadata for an image file.
export const ImagePreviewMetadata = BaseMetadata.merge(z.object({
	width: z.number().int().positive(),
	height: z.number().int().positive(),
}))
	.describe('Metadata for an image preview.');
export type ImagePreviewMetadata = z.infer<typeof ImagePreviewMetadata>;

export const ImageMetadata = BaseMetadata.merge(z.object({
	sharp: SharpMetadata,
	exif: ExifMetadata.optional(),
	icc: IccProfile.optional(),
	iptc: IptcProfile.optional(),
	xmp: XmpProfile.optional(),
	ffprobe: FfprobeData,
	preview: ImagePreviewMetadata,
	timings: ImageTimings,
}))
	.describe('Metadata for an image file.');
export type ImageMetadata = z.infer<typeof ImageMetadata>;

// Metadata for a video file.
export const VideoPreviewMetadata = BaseMetadata.merge(z.object({
	width: z.number().int().positive(),
	height: z.number().int().positive(),
}))
	.describe('Metadata for a video preview.');
export type VideoPreviewMetadata = z.infer<typeof VideoPreviewMetadata>;

export const VideoMetadata = BaseMetadata.merge(z.object({
	ffprobe: FfprobeData
		.describe('Metadata from the ffprobe tool.'),
	previews: z.array(VideoPreviewMetadata)
		.describe('Video preview images.'),
	timings: VideoTimings,
}))
	.describe('Metadata for a video file.');
export type VideoMetadata = z.infer<typeof VideoMetadata>;

// Union of all metadata types.
export const Metadata = z.union([
	ImageMetadata,
	VideoMetadata,
	FileMetadata,
])
	.describe('Union of all metadata types.');
export type Metadata = z.infer<typeof Metadata>;
