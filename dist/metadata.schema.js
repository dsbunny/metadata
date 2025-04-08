// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab
import { z } from 'zod';
import { SharpMetadata } from './sharp-metadata.schema.js';
import { ExifMetadata } from './exif-metadata.schema.js';
import { IccProfile } from './icc-profile.schema.js';
import { IptcProfile } from './iptc-profile.schema.js';
import { XmpProfile } from './xmp-profile.schema.js';
import { FfprobeData } from './ffprobe-data.schema.js';
import { AnimatedPosterTimings, FileTimings, ImageTimings, MetadataTimings, PosterSeriesTimings, PosterTimings, PrevueTimings, TileSeriesTimings, TileSeriesImageTimings, VideoTimings, } from './timings.schema.js';
import { FileStatAndChecksums } from './file.js';
// #region Metadata
// Base metadata for all files.
export const BaseMetadata = z.object({
    type: z.literal('base'),
    file: FileStatAndChecksums,
    timings: FileTimings,
    tags: z.array(z.string().max(64)).max(100).optional(),
});
export const HintData = z.object({
    type: z.literal('hint'),
    poster: z.array(z.object({
        quality: z.enum(['medium', 'high']),
        width: z.number().int().positive(),
        height: z.number().int().positive(),
    })),
})
    .describe('Hint data for assets.');
export const FileMetadata = BaseMetadata.merge(z.object({
    type: z.literal('file'),
    hint: HintData.optional(),
}));
export const ImageMetadata = BaseMetadata.merge(z.object({
    type: z.literal('image'),
    sharp: SharpMetadata,
    exif: ExifMetadata.optional(),
    icc: IccProfile.optional(),
    iptc: IptcProfile.optional(),
    xmp: XmpProfile.optional(),
    ffprobe: FfprobeData,
    hint: HintData.optional(),
    timings: ImageTimings,
}))
    .describe('Metadata for an image file.');
export const VideoMetadata = BaseMetadata.merge(z.object({
    type: z.literal('video'),
    ffprobe: FfprobeData
        .describe('Metadata from the ffprobe tool.'),
    codecs: z.array(z.string().max(255)).optional()
        .describe('The codecs used in the video file, per RFC 6381.'),
    hint: HintData.optional(),
    timings: VideoTimings,
}))
    .describe('Metadata for a video file.');
// Media types that are not supported, primarily due to technical limitations.
// Media can be rejected due to check rules.
export const RejectedMetadata = BaseMetadata.merge(z.object({
    type: z.literal('rejected'),
    error_text: z.string(),
}))
    .describe('Metadata for an rejected file.');
// Union of all metadata types.
export const Metadata = z.discriminatedUnion('type', [
    FileMetadata,
    ImageMetadata,
    VideoMetadata,
    RejectedMetadata,
])
    .describe('Union of all metadata types.');
// Encapsulation of metadata in a S3 object.
export const MetadataMetadata = BaseMetadata.merge(z.object({
    type: z.literal('metadata'),
    timings: MetadataTimings,
}))
    .describe('Metadata for a metadata object.');
// #endregion
// #region Preview
export const PosterMetadata = z.object({
    type: z.literal('poster'),
    poster: z.array(BaseMetadata.merge(z.object({
        type: z.literal('poster-image'),
        quality: z.enum(['medium', 'high']),
        width: z.number().int().positive(),
        height: z.number().int().positive(),
        blurhash: z.string().optional(),
        timings: PosterTimings,
    }))),
})
    .describe('Metadata for an image poster.');
export const AnimatedPosterMetadata = z.object({
    type: z.literal('animated-poster'),
    poster: BaseMetadata.merge(z.object({
        type: z.literal('animated-poster-image'),
        width: z.number().int().positive(),
        height: z.number().int().positive(),
        timings: AnimatedPosterTimings,
    })),
})
    .describe('Metadata for an animated poster.');
export const PosterSeriesMetadata = z.object({
    type: z.literal('poster-series'),
    series: z.array(BaseMetadata.merge(z.object({
        type: z.literal('poster-series-image'),
        index: z.number().int().min(1).max(3),
        quality: z.enum(['medium', 'high']),
        width: z.number().int().positive(),
        height: z.number().int().positive(),
        blurhash: z.string().optional(),
        timings: PosterSeriesTimings,
    }))),
})
    .describe('Metadata for an image poster series.');
export const TileSeriesMetadata = z.object({
    type: z.literal('tile-series'),
    series: z.array(BaseMetadata.merge(z.object({
        type: z.literal('tile-series-image'),
        index: z.number().int().min(1).max(9999),
        count: z.number().int().min(1).max(9),
        quality: z.enum(['low']),
        start_time: z.number().int().min(0),
        end_time: z.number().int().min(1),
        width: z.number().int().positive(),
        height: z.number().int().positive(),
        timings: TileSeriesImageTimings,
    }))),
    timings: TileSeriesTimings,
})
    .describe('Metadata for an image tile series.');
export const TileSeriesMetadataMetadata = BaseMetadata.merge(z.object({
    type: z.literal('tile-series-metadata'),
    timings: MetadataTimings,
}))
    .describe('Metadata for an image tile series metadata.');
export const PrevueMetadata = z.object({
    type: z.literal('prevue'),
    prevue: BaseMetadata.merge(z.object({
        type: z.literal('prevue-video'),
        width: z.number().int().positive(),
        height: z.number().int().positive(),
        timings: PrevueTimings,
    })),
})
    .describe('Metadata for a video prevue.');
// Union of all preview metadata types.
export const PreviewMetadata = z.discriminatedUnion('type', [
    PosterMetadata,
    AnimatedPosterMetadata,
    PosterSeriesMetadata,
    TileSeriesMetadataMetadata,
    PrevueMetadata,
])
    .describe('Union of all preview metadata types.');
export const AllMetadata = z.discriminatedUnion('type', [
    MetadataMetadata,
    ...PreviewMetadata.options,
])
    .describe('Union of all metadata types.');
// #endregion
//# sourceMappingURL=metadata.schema.js.map