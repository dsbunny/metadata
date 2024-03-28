"use strict";
// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab
// Derived from fluent-ffmpeg/ffprobe.js.
Object.defineProperty(exports, "__esModule", { value: true });
exports.FfprobeData = exports.FfprobeFormat = exports.FfprobeStream = exports.FfprobeStreamDisposition = void 0;
const zod_1 = require("zod");
exports.FfprobeStreamDisposition = zod_1.z.object({
    default: zod_1.z.number().optional()
        .describe('Whether the stream is the default.'),
    dub: zod_1.z.number().optional()
        .describe('Whether the stream is a dub.'),
    original: zod_1.z.number().optional()
        .describe('Whether the stream is the original.'),
    comment: zod_1.z.number().optional()
        .describe('Whether the stream is a comment.'),
    lyrics: zod_1.z.number().optional()
        .describe('Whether the stream is lyrics.'),
    karaoke: zod_1.z.number().optional()
        .describe('Whether the stream is karaoke.'),
    forced: zod_1.z.number().optional()
        .describe('Whether the stream is forced.'),
    hearing_impaired: zod_1.z.number().optional()
        .describe('Whether the stream is hearing impaired.'),
    visual_impaired: zod_1.z.number().optional()
        .describe('Whether the stream is visual impaired.'),
    clean_effects: zod_1.z.number().optional()
        .describe('Whether the stream has clean effects.'),
    attached_pic: zod_1.z.number().optional()
        .describe('Whether the stream is an attached picture.'),
    timed_thumbnails: zod_1.z.number().optional()
        .describe('Whether the stream is timed thumbnails.'),
})
    .describe('Disposition of the stream.');
exports.FfprobeStream = zod_1.z.object({
    index: zod_1.z.number()
        .describe('The index of the stream.'),
    codec_name: zod_1.z.string().optional()
        .describe('The name of the codec.'),
    codec_long_name: zod_1.z.string().optional()
        .describe('The long name of the codec.'),
    profile: zod_1.z.string().optional() // Upstream reports number.
        .describe('The profile of the codec.'),
    codec_type: zod_1.z.string().optional()
        .describe('The type of the codec.'),
    codec_time_base: zod_1.z.string().optional()
        .describe('The time base of the codec.'),
    //codec_tag_string: z.string().optional().  // "[0][0][0][0]", use "codec_tag" instead.
    //	.describe('The tag string of the codec.'),
    codec_tag: zod_1.z.string().optional()
        .describe('The tag of the codec.'),
    width: zod_1.z.number().optional()
        .describe('The width of the video stream.'),
    height: zod_1.z.number().optional()
        .describe('The height of the video stream.'),
    coded_width: zod_1.z.number().optional()
        .describe('The coded width of the video stream.'),
    coded_height: zod_1.z.number().optional()
        .describe('The coded height of the video stream.'),
    has_b_frames: zod_1.z.number().optional()
        .describe('Whether the video stream has B-frames.'),
    sample_aspect_ratio: zod_1.z.string().optional()
        .describe('The sample aspect ratio (SAR) of the video stream.'),
    display_aspect_ratio: zod_1.z.string().optional()
        .describe('The display aspect ratio (DAR) of the video stream.'),
    pix_fmt: zod_1.z.string().optional()
        .describe('The pixel format of the video stream.'),
    level: zod_1.z.string().optional()
        .describe('The level of the video stream.'),
    color_range: zod_1.z.string().optional()
        .describe('The color range of the video stream.'),
    color_space: zod_1.z.string().optional()
        .describe('The color space of the video stream.'),
    color_transfer: zod_1.z.string().optional()
        .describe('The color transfer of the video stream.'),
    color_primaries: zod_1.z.string().optional()
        .describe('The color primaries of the video stream.'),
    chroma_location: zod_1.z.string().optional()
        .describe('The chroma location of the video stream.'),
    field_order: zod_1.z.string().optional()
        .describe('The field order of the video stream.'),
    timecode: zod_1.z.string().optional()
        .describe('The timecode of the video stream.'),
    refs: zod_1.z.number().optional()
        .describe('The number of reference frames.'),
    id: zod_1.z.string().optional()
        .describe('The ID of the stream.'),
    r_frame_rate: zod_1.z.string().optional()
        .describe('The frame rate of the video stream.'),
    avg_frame_rate: zod_1.z.string().optional()
        .describe('The average frame rate of the video stream.'),
    time_base: zod_1.z.string().optional()
        .describe('The time base of the video stream.'),
    start_pts: zod_1.z.number().optional()
        .describe('The start PTS of the video stream.'),
    start_time: zod_1.z.number().optional()
        .describe('The start time of the video stream.'),
    duration_ts: zod_1.z.number().optional() // Upstream reports string.
        .describe('The duration in time base units.'),
    duration: zod_1.z.number().optional() // Upstream reports string.
        .describe('The duration in seconds.'),
    bit_rate: zod_1.z.string().optional()
        .describe('The bit rate of the video stream.'),
    max_bit_rate: zod_1.z.string().optional()
        .describe('The maximum bit rate of the video stream.'),
    bits_per_raw_sample: zod_1.z.number().optional() // Upstream reports string.
        .describe('The bits per raw sample of the video stream.'),
    nb_frames: zod_1.z.string().optional()
        .describe('The number of frames.'),
    nb_read_frames: zod_1.z.string().optional()
        .describe('The number of read frames.'),
    nb_read_packets: zod_1.z.string().optional()
        .describe('The number of read packets.'),
    sample_fmt: zod_1.z.string().optional()
        .describe('The sample format of the audio stream.'),
    sample_rate: zod_1.z.number().optional()
        .describe('The sample rate of the audio stream.'),
    channels: zod_1.z.number().optional()
        .describe('The number of channels of the audio stream.'),
    channel_layout: zod_1.z.string().optional()
        .describe('The channel layout of the audio stream.'),
    bits_per_sample: zod_1.z.number().optional()
        .describe('The bits per sample of the audio stream.'),
    disposition: exports.FfprobeStreamDisposition.optional()
        .describe('The disposition of the stream.'),
    rotation: zod_1.z.union([zod_1.z.string(), zod_1.z.number()]).optional()
        .describe('The rotation of the video stream.'),
})
    .describe('Stream metadata from the ffprobe tool.');
exports.FfprobeFormat = zod_1.z.object({
    filename: zod_1.z.string().optional()
        .describe('The filename of the file.'),
    nb_streams: zod_1.z.number().optional()
        .describe('The number of streams.'),
    nb_programs: zod_1.z.number().optional()
        .describe('The number of programs.'),
    format_name: zod_1.z.string().optional()
        .describe('The name of the format.'),
    format_long_name: zod_1.z.string().optional()
        .describe('The long name of the format.'),
    start_time: zod_1.z.number().optional()
        .describe('The start time of the file.'),
    duration: zod_1.z.number().optional()
        .describe('The duration of the file.'),
    size: zod_1.z.number().optional()
        .describe('The size of the file.'),
    bit_rate: zod_1.z.number().optional()
        .describe('The bit rate of the file.'),
    probe_score: zod_1.z.number().optional()
        .describe('The probe score of the file.'),
    tags: zod_1.z.record(zod_1.z.union([zod_1.z.string(), zod_1.z.number()])).optional()
        .describe('The tags of the file.'),
})
    .describe('Format metadata from the ffprobe tool.');
exports.FfprobeData = zod_1.z.object({
    streams: zod_1.z.array(exports.FfprobeStream)
        .describe('The streams of the file.'),
    format: exports.FfprobeFormat,
    //chapters: z.array(z.unknown()),
})
    .describe('Metadata from the ffprobe tool.');
//# sourceMappingURL=ffprobe-data.schema.js.map