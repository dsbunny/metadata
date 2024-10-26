import { z } from 'zod';
export declare const FileTimings: z.ZodObject<{
    file_http_duration: z.ZodNumber;
    file_ck_duration: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    file_http_duration: number;
    file_ck_duration: number;
}, {
    file_http_duration: number;
    file_ck_duration: number;
}>;
export type FileTimings = z.infer<typeof FileTimings>;
export declare const ImageTimings: z.ZodObject<z.objectUtil.extendShape<{
    file_http_duration: z.ZodNumber;
    file_ck_duration: z.ZodNumber;
}, {
    image_sharp_duration: z.ZodNumber;
    image_ffprobe_duration: z.ZodNumber;
}>, "strip", z.ZodTypeAny, {
    file_http_duration: number;
    file_ck_duration: number;
    image_sharp_duration: number;
    image_ffprobe_duration: number;
}, {
    file_http_duration: number;
    file_ck_duration: number;
    image_sharp_duration: number;
    image_ffprobe_duration: number;
}>;
export type ImageTimings = z.infer<typeof ImageTimings>;
export declare const VideoTimings: z.ZodObject<z.objectUtil.extendShape<{
    file_http_duration: z.ZodNumber;
    file_ck_duration: z.ZodNumber;
}, {
    video_ffprobe_duration: z.ZodNumber;
}>, "strip", z.ZodTypeAny, {
    file_http_duration: number;
    file_ck_duration: number;
    video_ffprobe_duration: number;
}, {
    file_http_duration: number;
    file_ck_duration: number;
    video_ffprobe_duration: number;
}>;
export type VideoTimings = z.infer<typeof VideoTimings>;
export declare const MetadataTimings: z.ZodObject<{
    metadata_http_duration: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    metadata_http_duration: number;
}, {
    metadata_http_duration: number;
}>;
export type MetadataTimings = z.infer<typeof MetadataTimings>;
export declare const PosterTimings: z.ZodObject<{
    poster_canvas_duration: z.ZodOptional<z.ZodNumber>;
    poster_ffmpeg_duration: z.ZodOptional<z.ZodNumber>;
    poster_avifenc_duration: z.ZodOptional<z.ZodNumber>;
    poster_sharp_duration: z.ZodOptional<z.ZodNumber>;
    poster_ck_duration: z.ZodNumber;
    poster_http_duration: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    poster_ck_duration: number;
    poster_http_duration: number;
    poster_canvas_duration?: number | undefined;
    poster_ffmpeg_duration?: number | undefined;
    poster_avifenc_duration?: number | undefined;
    poster_sharp_duration?: number | undefined;
}, {
    poster_ck_duration: number;
    poster_http_duration: number;
    poster_canvas_duration?: number | undefined;
    poster_ffmpeg_duration?: number | undefined;
    poster_avifenc_duration?: number | undefined;
    poster_sharp_duration?: number | undefined;
}>;
export type PosterTimings = z.infer<typeof PosterTimings>;
export declare const AnimatedPosterTimings: z.ZodObject<{
    animated_poster_ffmpeg_duration: z.ZodNumber;
    animated_poster_ck_duration: z.ZodNumber;
    animated_poster_http_duration: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    animated_poster_ffmpeg_duration: number;
    animated_poster_ck_duration: number;
    animated_poster_http_duration: number;
}, {
    animated_poster_ffmpeg_duration: number;
    animated_poster_ck_duration: number;
    animated_poster_http_duration: number;
}>;
export type AnimatedPosterTimings = z.infer<typeof AnimatedPosterTimings>;
export declare const PosterSeriesTimings: z.ZodObject<{
    poster_series_ffmpeg_duration: z.ZodNumber;
    poster_series_avifenc_duration: z.ZodOptional<z.ZodNumber>;
    poster_series_sharp_duration: z.ZodOptional<z.ZodNumber>;
    poster_series_ck_duration: z.ZodNumber;
    poster_series_http_duration: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    poster_series_ffmpeg_duration: number;
    poster_series_ck_duration: number;
    poster_series_http_duration: number;
    poster_series_avifenc_duration?: number | undefined;
    poster_series_sharp_duration?: number | undefined;
}, {
    poster_series_ffmpeg_duration: number;
    poster_series_ck_duration: number;
    poster_series_http_duration: number;
    poster_series_avifenc_duration?: number | undefined;
    poster_series_sharp_duration?: number | undefined;
}>;
export type PosterSeriesTimings = z.infer<typeof PosterSeriesTimings>;
export declare const TileSeriesTimings: z.ZodObject<{
    tile_series_ffmpeg_duration: z.ZodNumber;
    tile_series_avifenc_duration: z.ZodOptional<z.ZodNumber>;
    tile_series_sharp_duration: z.ZodOptional<z.ZodNumber>;
    tile_series_ck_duration: z.ZodNumber;
    tile_series_http_duration: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    tile_series_ffmpeg_duration: number;
    tile_series_ck_duration: number;
    tile_series_http_duration: number;
    tile_series_avifenc_duration?: number | undefined;
    tile_series_sharp_duration?: number | undefined;
}, {
    tile_series_ffmpeg_duration: number;
    tile_series_ck_duration: number;
    tile_series_http_duration: number;
    tile_series_avifenc_duration?: number | undefined;
    tile_series_sharp_duration?: number | undefined;
}>;
export type TileSeriesTimings = z.infer<typeof TileSeriesTimings>;
export declare const PrevueTimings: z.ZodObject<{
    prevue_ffmpeg_duration: z.ZodNumber;
    prevue_ck_duration: z.ZodNumber;
    prevue_http_duration: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    prevue_ffmpeg_duration: number;
    prevue_ck_duration: number;
    prevue_http_duration: number;
}, {
    prevue_ffmpeg_duration: number;
    prevue_ck_duration: number;
    prevue_http_duration: number;
}>;
export type PrevueTimings = z.infer<typeof PrevueTimings>;
//# sourceMappingURL=timings.schema.d.ts.map