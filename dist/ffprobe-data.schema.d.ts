import { z } from 'zod';
export declare const FfprobeStreamDisposition: z.ZodObject<{
    default: z.ZodOptional<z.ZodNumber>;
    dub: z.ZodOptional<z.ZodNumber>;
    original: z.ZodOptional<z.ZodNumber>;
    comment: z.ZodOptional<z.ZodNumber>;
    lyrics: z.ZodOptional<z.ZodNumber>;
    karaoke: z.ZodOptional<z.ZodNumber>;
    forced: z.ZodOptional<z.ZodNumber>;
    hearing_impaired: z.ZodOptional<z.ZodNumber>;
    visual_impaired: z.ZodOptional<z.ZodNumber>;
    clean_effects: z.ZodOptional<z.ZodNumber>;
    attached_pic: z.ZodOptional<z.ZodNumber>;
    timed_thumbnails: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    default?: number | undefined;
    dub?: number | undefined;
    original?: number | undefined;
    comment?: number | undefined;
    lyrics?: number | undefined;
    karaoke?: number | undefined;
    forced?: number | undefined;
    hearing_impaired?: number | undefined;
    visual_impaired?: number | undefined;
    clean_effects?: number | undefined;
    attached_pic?: number | undefined;
    timed_thumbnails?: number | undefined;
}, {
    default?: number | undefined;
    dub?: number | undefined;
    original?: number | undefined;
    comment?: number | undefined;
    lyrics?: number | undefined;
    karaoke?: number | undefined;
    forced?: number | undefined;
    hearing_impaired?: number | undefined;
    visual_impaired?: number | undefined;
    clean_effects?: number | undefined;
    attached_pic?: number | undefined;
    timed_thumbnails?: number | undefined;
}>;
export type FfprobeStreamDisposition = z.infer<typeof FfprobeStreamDisposition>;
export declare const FfprobeStream: z.ZodObject<{
    index: z.ZodNumber;
    codec_name: z.ZodOptional<z.ZodString>;
    codec_long_name: z.ZodOptional<z.ZodString>;
    profile: z.ZodOptional<z.ZodString>;
    codec_type: z.ZodOptional<z.ZodString>;
    codec_time_base: z.ZodOptional<z.ZodString>;
    codec_tag: z.ZodOptional<z.ZodString>;
    width: z.ZodOptional<z.ZodNumber>;
    height: z.ZodOptional<z.ZodNumber>;
    coded_width: z.ZodOptional<z.ZodNumber>;
    coded_height: z.ZodOptional<z.ZodNumber>;
    has_b_frames: z.ZodOptional<z.ZodNumber>;
    sample_aspect_ratio: z.ZodOptional<z.ZodString>;
    display_aspect_ratio: z.ZodOptional<z.ZodString>;
    pix_fmt: z.ZodOptional<z.ZodString>;
    level: z.ZodOptional<z.ZodString>;
    color_range: z.ZodOptional<z.ZodString>;
    color_space: z.ZodOptional<z.ZodString>;
    color_transfer: z.ZodOptional<z.ZodString>;
    color_primaries: z.ZodOptional<z.ZodString>;
    chroma_location: z.ZodOptional<z.ZodString>;
    field_order: z.ZodOptional<z.ZodString>;
    timecode: z.ZodOptional<z.ZodString>;
    refs: z.ZodOptional<z.ZodNumber>;
    id: z.ZodOptional<z.ZodString>;
    r_frame_rate: z.ZodOptional<z.ZodString>;
    avg_frame_rate: z.ZodOptional<z.ZodString>;
    time_base: z.ZodOptional<z.ZodString>;
    start_pts: z.ZodOptional<z.ZodNumber>;
    start_time: z.ZodOptional<z.ZodNumber>;
    duration_ts: z.ZodOptional<z.ZodNumber>;
    duration: z.ZodOptional<z.ZodNumber>;
    bit_rate: z.ZodOptional<z.ZodString>;
    max_bit_rate: z.ZodOptional<z.ZodString>;
    bits_per_raw_sample: z.ZodOptional<z.ZodNumber>;
    nb_frames: z.ZodOptional<z.ZodString>;
    nb_read_frames: z.ZodOptional<z.ZodString>;
    nb_read_packets: z.ZodOptional<z.ZodString>;
    sample_fmt: z.ZodOptional<z.ZodString>;
    sample_rate: z.ZodOptional<z.ZodNumber>;
    channels: z.ZodOptional<z.ZodNumber>;
    channel_layout: z.ZodOptional<z.ZodString>;
    bits_per_sample: z.ZodOptional<z.ZodNumber>;
    disposition: z.ZodOptional<z.ZodObject<{
        default: z.ZodOptional<z.ZodNumber>;
        dub: z.ZodOptional<z.ZodNumber>;
        original: z.ZodOptional<z.ZodNumber>;
        comment: z.ZodOptional<z.ZodNumber>;
        lyrics: z.ZodOptional<z.ZodNumber>;
        karaoke: z.ZodOptional<z.ZodNumber>;
        forced: z.ZodOptional<z.ZodNumber>;
        hearing_impaired: z.ZodOptional<z.ZodNumber>;
        visual_impaired: z.ZodOptional<z.ZodNumber>;
        clean_effects: z.ZodOptional<z.ZodNumber>;
        attached_pic: z.ZodOptional<z.ZodNumber>;
        timed_thumbnails: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        default?: number | undefined;
        dub?: number | undefined;
        original?: number | undefined;
        comment?: number | undefined;
        lyrics?: number | undefined;
        karaoke?: number | undefined;
        forced?: number | undefined;
        hearing_impaired?: number | undefined;
        visual_impaired?: number | undefined;
        clean_effects?: number | undefined;
        attached_pic?: number | undefined;
        timed_thumbnails?: number | undefined;
    }, {
        default?: number | undefined;
        dub?: number | undefined;
        original?: number | undefined;
        comment?: number | undefined;
        lyrics?: number | undefined;
        karaoke?: number | undefined;
        forced?: number | undefined;
        hearing_impaired?: number | undefined;
        visual_impaired?: number | undefined;
        clean_effects?: number | undefined;
        attached_pic?: number | undefined;
        timed_thumbnails?: number | undefined;
    }>>;
    rotation: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
}, "strip", z.ZodTypeAny, {
    index: number;
    codec_name?: string | undefined;
    codec_long_name?: string | undefined;
    profile?: string | undefined;
    codec_type?: string | undefined;
    codec_time_base?: string | undefined;
    codec_tag?: string | undefined;
    width?: number | undefined;
    height?: number | undefined;
    coded_width?: number | undefined;
    coded_height?: number | undefined;
    has_b_frames?: number | undefined;
    sample_aspect_ratio?: string | undefined;
    display_aspect_ratio?: string | undefined;
    pix_fmt?: string | undefined;
    level?: string | undefined;
    color_range?: string | undefined;
    color_space?: string | undefined;
    color_transfer?: string | undefined;
    color_primaries?: string | undefined;
    chroma_location?: string | undefined;
    field_order?: string | undefined;
    timecode?: string | undefined;
    refs?: number | undefined;
    id?: string | undefined;
    r_frame_rate?: string | undefined;
    avg_frame_rate?: string | undefined;
    time_base?: string | undefined;
    start_pts?: number | undefined;
    start_time?: number | undefined;
    duration_ts?: number | undefined;
    duration?: number | undefined;
    bit_rate?: string | undefined;
    max_bit_rate?: string | undefined;
    bits_per_raw_sample?: number | undefined;
    nb_frames?: string | undefined;
    nb_read_frames?: string | undefined;
    nb_read_packets?: string | undefined;
    sample_fmt?: string | undefined;
    sample_rate?: number | undefined;
    channels?: number | undefined;
    channel_layout?: string | undefined;
    bits_per_sample?: number | undefined;
    disposition?: {
        default?: number | undefined;
        dub?: number | undefined;
        original?: number | undefined;
        comment?: number | undefined;
        lyrics?: number | undefined;
        karaoke?: number | undefined;
        forced?: number | undefined;
        hearing_impaired?: number | undefined;
        visual_impaired?: number | undefined;
        clean_effects?: number | undefined;
        attached_pic?: number | undefined;
        timed_thumbnails?: number | undefined;
    } | undefined;
    rotation?: string | number | undefined;
}, {
    index: number;
    codec_name?: string | undefined;
    codec_long_name?: string | undefined;
    profile?: string | undefined;
    codec_type?: string | undefined;
    codec_time_base?: string | undefined;
    codec_tag?: string | undefined;
    width?: number | undefined;
    height?: number | undefined;
    coded_width?: number | undefined;
    coded_height?: number | undefined;
    has_b_frames?: number | undefined;
    sample_aspect_ratio?: string | undefined;
    display_aspect_ratio?: string | undefined;
    pix_fmt?: string | undefined;
    level?: string | undefined;
    color_range?: string | undefined;
    color_space?: string | undefined;
    color_transfer?: string | undefined;
    color_primaries?: string | undefined;
    chroma_location?: string | undefined;
    field_order?: string | undefined;
    timecode?: string | undefined;
    refs?: number | undefined;
    id?: string | undefined;
    r_frame_rate?: string | undefined;
    avg_frame_rate?: string | undefined;
    time_base?: string | undefined;
    start_pts?: number | undefined;
    start_time?: number | undefined;
    duration_ts?: number | undefined;
    duration?: number | undefined;
    bit_rate?: string | undefined;
    max_bit_rate?: string | undefined;
    bits_per_raw_sample?: number | undefined;
    nb_frames?: string | undefined;
    nb_read_frames?: string | undefined;
    nb_read_packets?: string | undefined;
    sample_fmt?: string | undefined;
    sample_rate?: number | undefined;
    channels?: number | undefined;
    channel_layout?: string | undefined;
    bits_per_sample?: number | undefined;
    disposition?: {
        default?: number | undefined;
        dub?: number | undefined;
        original?: number | undefined;
        comment?: number | undefined;
        lyrics?: number | undefined;
        karaoke?: number | undefined;
        forced?: number | undefined;
        hearing_impaired?: number | undefined;
        visual_impaired?: number | undefined;
        clean_effects?: number | undefined;
        attached_pic?: number | undefined;
        timed_thumbnails?: number | undefined;
    } | undefined;
    rotation?: string | number | undefined;
}>;
export type FfprobeStream = z.infer<typeof FfprobeStream>;
export declare const FfprobeFormat: z.ZodObject<{
    filename: z.ZodOptional<z.ZodString>;
    nb_streams: z.ZodOptional<z.ZodNumber>;
    nb_programs: z.ZodOptional<z.ZodNumber>;
    format_name: z.ZodOptional<z.ZodString>;
    format_long_name: z.ZodOptional<z.ZodString>;
    start_time: z.ZodOptional<z.ZodNumber>;
    duration: z.ZodOptional<z.ZodNumber>;
    size: z.ZodOptional<z.ZodNumber>;
    bit_rate: z.ZodOptional<z.ZodNumber>;
    probe_score: z.ZodOptional<z.ZodNumber>;
    tags: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnion<[z.ZodString, z.ZodNumber]>>>;
}, "strip", z.ZodTypeAny, {
    filename?: string | undefined;
    nb_streams?: number | undefined;
    nb_programs?: number | undefined;
    format_name?: string | undefined;
    format_long_name?: string | undefined;
    start_time?: number | undefined;
    duration?: number | undefined;
    size?: number | undefined;
    bit_rate?: number | undefined;
    probe_score?: number | undefined;
    tags?: Record<string, string | number> | undefined;
}, {
    filename?: string | undefined;
    nb_streams?: number | undefined;
    nb_programs?: number | undefined;
    format_name?: string | undefined;
    format_long_name?: string | undefined;
    start_time?: number | undefined;
    duration?: number | undefined;
    size?: number | undefined;
    bit_rate?: number | undefined;
    probe_score?: number | undefined;
    tags?: Record<string, string | number> | undefined;
}>;
export type FfprobeFormat = z.infer<typeof FfprobeFormat>;
export declare const FfprobeData: z.ZodObject<{
    streams: z.ZodArray<z.ZodObject<{
        index: z.ZodNumber;
        codec_name: z.ZodOptional<z.ZodString>;
        codec_long_name: z.ZodOptional<z.ZodString>;
        profile: z.ZodOptional<z.ZodString>;
        codec_type: z.ZodOptional<z.ZodString>;
        codec_time_base: z.ZodOptional<z.ZodString>;
        codec_tag: z.ZodOptional<z.ZodString>;
        width: z.ZodOptional<z.ZodNumber>;
        height: z.ZodOptional<z.ZodNumber>;
        coded_width: z.ZodOptional<z.ZodNumber>;
        coded_height: z.ZodOptional<z.ZodNumber>;
        has_b_frames: z.ZodOptional<z.ZodNumber>;
        sample_aspect_ratio: z.ZodOptional<z.ZodString>;
        display_aspect_ratio: z.ZodOptional<z.ZodString>;
        pix_fmt: z.ZodOptional<z.ZodString>;
        level: z.ZodOptional<z.ZodString>;
        color_range: z.ZodOptional<z.ZodString>;
        color_space: z.ZodOptional<z.ZodString>;
        color_transfer: z.ZodOptional<z.ZodString>;
        color_primaries: z.ZodOptional<z.ZodString>;
        chroma_location: z.ZodOptional<z.ZodString>;
        field_order: z.ZodOptional<z.ZodString>;
        timecode: z.ZodOptional<z.ZodString>;
        refs: z.ZodOptional<z.ZodNumber>;
        id: z.ZodOptional<z.ZodString>;
        r_frame_rate: z.ZodOptional<z.ZodString>;
        avg_frame_rate: z.ZodOptional<z.ZodString>;
        time_base: z.ZodOptional<z.ZodString>;
        start_pts: z.ZodOptional<z.ZodNumber>;
        start_time: z.ZodOptional<z.ZodNumber>;
        duration_ts: z.ZodOptional<z.ZodNumber>;
        duration: z.ZodOptional<z.ZodNumber>;
        bit_rate: z.ZodOptional<z.ZodString>;
        max_bit_rate: z.ZodOptional<z.ZodString>;
        bits_per_raw_sample: z.ZodOptional<z.ZodNumber>;
        nb_frames: z.ZodOptional<z.ZodString>;
        nb_read_frames: z.ZodOptional<z.ZodString>;
        nb_read_packets: z.ZodOptional<z.ZodString>;
        sample_fmt: z.ZodOptional<z.ZodString>;
        sample_rate: z.ZodOptional<z.ZodNumber>;
        channels: z.ZodOptional<z.ZodNumber>;
        channel_layout: z.ZodOptional<z.ZodString>;
        bits_per_sample: z.ZodOptional<z.ZodNumber>;
        disposition: z.ZodOptional<z.ZodObject<{
            default: z.ZodOptional<z.ZodNumber>;
            dub: z.ZodOptional<z.ZodNumber>;
            original: z.ZodOptional<z.ZodNumber>;
            comment: z.ZodOptional<z.ZodNumber>;
            lyrics: z.ZodOptional<z.ZodNumber>;
            karaoke: z.ZodOptional<z.ZodNumber>;
            forced: z.ZodOptional<z.ZodNumber>;
            hearing_impaired: z.ZodOptional<z.ZodNumber>;
            visual_impaired: z.ZodOptional<z.ZodNumber>;
            clean_effects: z.ZodOptional<z.ZodNumber>;
            attached_pic: z.ZodOptional<z.ZodNumber>;
            timed_thumbnails: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            default?: number | undefined;
            dub?: number | undefined;
            original?: number | undefined;
            comment?: number | undefined;
            lyrics?: number | undefined;
            karaoke?: number | undefined;
            forced?: number | undefined;
            hearing_impaired?: number | undefined;
            visual_impaired?: number | undefined;
            clean_effects?: number | undefined;
            attached_pic?: number | undefined;
            timed_thumbnails?: number | undefined;
        }, {
            default?: number | undefined;
            dub?: number | undefined;
            original?: number | undefined;
            comment?: number | undefined;
            lyrics?: number | undefined;
            karaoke?: number | undefined;
            forced?: number | undefined;
            hearing_impaired?: number | undefined;
            visual_impaired?: number | undefined;
            clean_effects?: number | undefined;
            attached_pic?: number | undefined;
            timed_thumbnails?: number | undefined;
        }>>;
        rotation: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
    }, "strip", z.ZodTypeAny, {
        index: number;
        codec_name?: string | undefined;
        codec_long_name?: string | undefined;
        profile?: string | undefined;
        codec_type?: string | undefined;
        codec_time_base?: string | undefined;
        codec_tag?: string | undefined;
        width?: number | undefined;
        height?: number | undefined;
        coded_width?: number | undefined;
        coded_height?: number | undefined;
        has_b_frames?: number | undefined;
        sample_aspect_ratio?: string | undefined;
        display_aspect_ratio?: string | undefined;
        pix_fmt?: string | undefined;
        level?: string | undefined;
        color_range?: string | undefined;
        color_space?: string | undefined;
        color_transfer?: string | undefined;
        color_primaries?: string | undefined;
        chroma_location?: string | undefined;
        field_order?: string | undefined;
        timecode?: string | undefined;
        refs?: number | undefined;
        id?: string | undefined;
        r_frame_rate?: string | undefined;
        avg_frame_rate?: string | undefined;
        time_base?: string | undefined;
        start_pts?: number | undefined;
        start_time?: number | undefined;
        duration_ts?: number | undefined;
        duration?: number | undefined;
        bit_rate?: string | undefined;
        max_bit_rate?: string | undefined;
        bits_per_raw_sample?: number | undefined;
        nb_frames?: string | undefined;
        nb_read_frames?: string | undefined;
        nb_read_packets?: string | undefined;
        sample_fmt?: string | undefined;
        sample_rate?: number | undefined;
        channels?: number | undefined;
        channel_layout?: string | undefined;
        bits_per_sample?: number | undefined;
        disposition?: {
            default?: number | undefined;
            dub?: number | undefined;
            original?: number | undefined;
            comment?: number | undefined;
            lyrics?: number | undefined;
            karaoke?: number | undefined;
            forced?: number | undefined;
            hearing_impaired?: number | undefined;
            visual_impaired?: number | undefined;
            clean_effects?: number | undefined;
            attached_pic?: number | undefined;
            timed_thumbnails?: number | undefined;
        } | undefined;
        rotation?: string | number | undefined;
    }, {
        index: number;
        codec_name?: string | undefined;
        codec_long_name?: string | undefined;
        profile?: string | undefined;
        codec_type?: string | undefined;
        codec_time_base?: string | undefined;
        codec_tag?: string | undefined;
        width?: number | undefined;
        height?: number | undefined;
        coded_width?: number | undefined;
        coded_height?: number | undefined;
        has_b_frames?: number | undefined;
        sample_aspect_ratio?: string | undefined;
        display_aspect_ratio?: string | undefined;
        pix_fmt?: string | undefined;
        level?: string | undefined;
        color_range?: string | undefined;
        color_space?: string | undefined;
        color_transfer?: string | undefined;
        color_primaries?: string | undefined;
        chroma_location?: string | undefined;
        field_order?: string | undefined;
        timecode?: string | undefined;
        refs?: number | undefined;
        id?: string | undefined;
        r_frame_rate?: string | undefined;
        avg_frame_rate?: string | undefined;
        time_base?: string | undefined;
        start_pts?: number | undefined;
        start_time?: number | undefined;
        duration_ts?: number | undefined;
        duration?: number | undefined;
        bit_rate?: string | undefined;
        max_bit_rate?: string | undefined;
        bits_per_raw_sample?: number | undefined;
        nb_frames?: string | undefined;
        nb_read_frames?: string | undefined;
        nb_read_packets?: string | undefined;
        sample_fmt?: string | undefined;
        sample_rate?: number | undefined;
        channels?: number | undefined;
        channel_layout?: string | undefined;
        bits_per_sample?: number | undefined;
        disposition?: {
            default?: number | undefined;
            dub?: number | undefined;
            original?: number | undefined;
            comment?: number | undefined;
            lyrics?: number | undefined;
            karaoke?: number | undefined;
            forced?: number | undefined;
            hearing_impaired?: number | undefined;
            visual_impaired?: number | undefined;
            clean_effects?: number | undefined;
            attached_pic?: number | undefined;
            timed_thumbnails?: number | undefined;
        } | undefined;
        rotation?: string | number | undefined;
    }>, "many">;
    format: z.ZodObject<{
        filename: z.ZodOptional<z.ZodString>;
        nb_streams: z.ZodOptional<z.ZodNumber>;
        nb_programs: z.ZodOptional<z.ZodNumber>;
        format_name: z.ZodOptional<z.ZodString>;
        format_long_name: z.ZodOptional<z.ZodString>;
        start_time: z.ZodOptional<z.ZodNumber>;
        duration: z.ZodOptional<z.ZodNumber>;
        size: z.ZodOptional<z.ZodNumber>;
        bit_rate: z.ZodOptional<z.ZodNumber>;
        probe_score: z.ZodOptional<z.ZodNumber>;
        tags: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnion<[z.ZodString, z.ZodNumber]>>>;
    }, "strip", z.ZodTypeAny, {
        filename?: string | undefined;
        nb_streams?: number | undefined;
        nb_programs?: number | undefined;
        format_name?: string | undefined;
        format_long_name?: string | undefined;
        start_time?: number | undefined;
        duration?: number | undefined;
        size?: number | undefined;
        bit_rate?: number | undefined;
        probe_score?: number | undefined;
        tags?: Record<string, string | number> | undefined;
    }, {
        filename?: string | undefined;
        nb_streams?: number | undefined;
        nb_programs?: number | undefined;
        format_name?: string | undefined;
        format_long_name?: string | undefined;
        start_time?: number | undefined;
        duration?: number | undefined;
        size?: number | undefined;
        bit_rate?: number | undefined;
        probe_score?: number | undefined;
        tags?: Record<string, string | number> | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    streams: {
        index: number;
        codec_name?: string | undefined;
        codec_long_name?: string | undefined;
        profile?: string | undefined;
        codec_type?: string | undefined;
        codec_time_base?: string | undefined;
        codec_tag?: string | undefined;
        width?: number | undefined;
        height?: number | undefined;
        coded_width?: number | undefined;
        coded_height?: number | undefined;
        has_b_frames?: number | undefined;
        sample_aspect_ratio?: string | undefined;
        display_aspect_ratio?: string | undefined;
        pix_fmt?: string | undefined;
        level?: string | undefined;
        color_range?: string | undefined;
        color_space?: string | undefined;
        color_transfer?: string | undefined;
        color_primaries?: string | undefined;
        chroma_location?: string | undefined;
        field_order?: string | undefined;
        timecode?: string | undefined;
        refs?: number | undefined;
        id?: string | undefined;
        r_frame_rate?: string | undefined;
        avg_frame_rate?: string | undefined;
        time_base?: string | undefined;
        start_pts?: number | undefined;
        start_time?: number | undefined;
        duration_ts?: number | undefined;
        duration?: number | undefined;
        bit_rate?: string | undefined;
        max_bit_rate?: string | undefined;
        bits_per_raw_sample?: number | undefined;
        nb_frames?: string | undefined;
        nb_read_frames?: string | undefined;
        nb_read_packets?: string | undefined;
        sample_fmt?: string | undefined;
        sample_rate?: number | undefined;
        channels?: number | undefined;
        channel_layout?: string | undefined;
        bits_per_sample?: number | undefined;
        disposition?: {
            default?: number | undefined;
            dub?: number | undefined;
            original?: number | undefined;
            comment?: number | undefined;
            lyrics?: number | undefined;
            karaoke?: number | undefined;
            forced?: number | undefined;
            hearing_impaired?: number | undefined;
            visual_impaired?: number | undefined;
            clean_effects?: number | undefined;
            attached_pic?: number | undefined;
            timed_thumbnails?: number | undefined;
        } | undefined;
        rotation?: string | number | undefined;
    }[];
    format: {
        filename?: string | undefined;
        nb_streams?: number | undefined;
        nb_programs?: number | undefined;
        format_name?: string | undefined;
        format_long_name?: string | undefined;
        start_time?: number | undefined;
        duration?: number | undefined;
        size?: number | undefined;
        bit_rate?: number | undefined;
        probe_score?: number | undefined;
        tags?: Record<string, string | number> | undefined;
    };
}, {
    streams: {
        index: number;
        codec_name?: string | undefined;
        codec_long_name?: string | undefined;
        profile?: string | undefined;
        codec_type?: string | undefined;
        codec_time_base?: string | undefined;
        codec_tag?: string | undefined;
        width?: number | undefined;
        height?: number | undefined;
        coded_width?: number | undefined;
        coded_height?: number | undefined;
        has_b_frames?: number | undefined;
        sample_aspect_ratio?: string | undefined;
        display_aspect_ratio?: string | undefined;
        pix_fmt?: string | undefined;
        level?: string | undefined;
        color_range?: string | undefined;
        color_space?: string | undefined;
        color_transfer?: string | undefined;
        color_primaries?: string | undefined;
        chroma_location?: string | undefined;
        field_order?: string | undefined;
        timecode?: string | undefined;
        refs?: number | undefined;
        id?: string | undefined;
        r_frame_rate?: string | undefined;
        avg_frame_rate?: string | undefined;
        time_base?: string | undefined;
        start_pts?: number | undefined;
        start_time?: number | undefined;
        duration_ts?: number | undefined;
        duration?: number | undefined;
        bit_rate?: string | undefined;
        max_bit_rate?: string | undefined;
        bits_per_raw_sample?: number | undefined;
        nb_frames?: string | undefined;
        nb_read_frames?: string | undefined;
        nb_read_packets?: string | undefined;
        sample_fmt?: string | undefined;
        sample_rate?: number | undefined;
        channels?: number | undefined;
        channel_layout?: string | undefined;
        bits_per_sample?: number | undefined;
        disposition?: {
            default?: number | undefined;
            dub?: number | undefined;
            original?: number | undefined;
            comment?: number | undefined;
            lyrics?: number | undefined;
            karaoke?: number | undefined;
            forced?: number | undefined;
            hearing_impaired?: number | undefined;
            visual_impaired?: number | undefined;
            clean_effects?: number | undefined;
            attached_pic?: number | undefined;
            timed_thumbnails?: number | undefined;
        } | undefined;
        rotation?: string | number | undefined;
    }[];
    format: {
        filename?: string | undefined;
        nb_streams?: number | undefined;
        nb_programs?: number | undefined;
        format_name?: string | undefined;
        format_long_name?: string | undefined;
        start_time?: number | undefined;
        duration?: number | undefined;
        size?: number | undefined;
        bit_rate?: number | undefined;
        probe_score?: number | undefined;
        tags?: Record<string, string | number> | undefined;
    };
}>;
export type FfprobeData = z.infer<typeof FfprobeData>;
//# sourceMappingURL=ffprobe-data.schema.d.ts.map