import { z } from 'zod';
export declare const FormatEnum: z.ZodEnum<["avif", "dz", "fits", "gif", "heif", "input", "jpeg", "jpg", "jp2", "jxl", "magick", "openslide", "pdf", "png", "ppm", "raw", "svg", "tiff", "tif", "v", "webp"]>;
export type FormatEnum = z.infer<typeof FormatEnum>;
export declare const ColourspaceEnum: z.ZodEnum<["multiband", "b-w", "bw", "cmyk", "srgb"]>;
export type ColourspaceEnum = z.infer<typeof ColourspaceEnum>;
export declare const Channels: z.ZodNumber;
export type Channels = z.infer<typeof Channels>;
export declare const LevelMetadata: z.ZodObject<{
    width: z.ZodNumber;
    height: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    width: number;
    height: number;
}, {
    width: number;
    height: number;
}>;
export type LevelMetadata = z.infer<typeof LevelMetadata>;
export declare const SharpMetadata: z.ZodObject<{
    orientation: z.ZodOptional<z.ZodNumber>;
    format: z.ZodOptional<z.ZodEnum<["avif", "dz", "fits", "gif", "heif", "input", "jpeg", "jpg", "jp2", "jxl", "magick", "openslide", "pdf", "png", "ppm", "raw", "svg", "tiff", "tif", "v", "webp"]>>;
    size: z.ZodOptional<z.ZodNumber>;
    width: z.ZodOptional<z.ZodNumber>;
    height: z.ZodOptional<z.ZodNumber>;
    space: z.ZodOptional<z.ZodEnum<["multiband", "b-w", "bw", "cmyk", "srgb"]>>;
    channels: z.ZodOptional<z.ZodNumber>;
    depth: z.ZodOptional<z.ZodString>;
    density: z.ZodOptional<z.ZodNumber>;
    chromaSubsampling: z.ZodOptional<z.ZodString>;
    isProgressive: z.ZodOptional<z.ZodBoolean>;
    pages: z.ZodOptional<z.ZodNumber>;
    pageHeight: z.ZodOptional<z.ZodNumber>;
    loop: z.ZodOptional<z.ZodNumber>;
    delay: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
    pagePrimary: z.ZodOptional<z.ZodNumber>;
    hasProfile: z.ZodOptional<z.ZodBoolean>;
    hasAlpha: z.ZodOptional<z.ZodBoolean>;
    compression: z.ZodOptional<z.ZodEnum<["av1", "hevc"]>>;
    background: z.ZodOptional<z.ZodUnion<[z.ZodObject<{
        r: z.ZodNumber;
        g: z.ZodNumber;
        b: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        r: number;
        g: number;
        b: number;
    }, {
        r: number;
        g: number;
        b: number;
    }>, z.ZodNumber]>>;
    levels: z.ZodOptional<z.ZodArray<z.ZodObject<{
        width: z.ZodNumber;
        height: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        width: number;
        height: number;
    }, {
        width: number;
        height: number;
    }>, "many">>;
    subifds: z.ZodOptional<z.ZodNumber>;
    resolutionUnit: z.ZodOptional<z.ZodEnum<["inch", "cm"]>>;
    formatMagick: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    width?: number | undefined;
    height?: number | undefined;
    channels?: number | undefined;
    size?: number | undefined;
    format?: "avif" | "dz" | "fits" | "gif" | "heif" | "input" | "jpeg" | "jpg" | "jp2" | "jxl" | "magick" | "openslide" | "pdf" | "png" | "ppm" | "raw" | "svg" | "tiff" | "tif" | "v" | "webp" | undefined;
    orientation?: number | undefined;
    space?: "multiband" | "b-w" | "bw" | "cmyk" | "srgb" | undefined;
    depth?: string | undefined;
    density?: number | undefined;
    chromaSubsampling?: string | undefined;
    isProgressive?: boolean | undefined;
    pages?: number | undefined;
    pageHeight?: number | undefined;
    loop?: number | undefined;
    delay?: number[] | undefined;
    pagePrimary?: number | undefined;
    hasProfile?: boolean | undefined;
    hasAlpha?: boolean | undefined;
    compression?: "av1" | "hevc" | undefined;
    background?: number | {
        r: number;
        g: number;
        b: number;
    } | undefined;
    levels?: {
        width: number;
        height: number;
    }[] | undefined;
    subifds?: number | undefined;
    resolutionUnit?: "inch" | "cm" | undefined;
    formatMagick?: string | undefined;
}, {
    width?: number | undefined;
    height?: number | undefined;
    channels?: number | undefined;
    size?: number | undefined;
    format?: "avif" | "dz" | "fits" | "gif" | "heif" | "input" | "jpeg" | "jpg" | "jp2" | "jxl" | "magick" | "openslide" | "pdf" | "png" | "ppm" | "raw" | "svg" | "tiff" | "tif" | "v" | "webp" | undefined;
    orientation?: number | undefined;
    space?: "multiband" | "b-w" | "bw" | "cmyk" | "srgb" | undefined;
    depth?: string | undefined;
    density?: number | undefined;
    chromaSubsampling?: string | undefined;
    isProgressive?: boolean | undefined;
    pages?: number | undefined;
    pageHeight?: number | undefined;
    loop?: number | undefined;
    delay?: number[] | undefined;
    pagePrimary?: number | undefined;
    hasProfile?: boolean | undefined;
    hasAlpha?: boolean | undefined;
    compression?: "av1" | "hevc" | undefined;
    background?: number | {
        r: number;
        g: number;
        b: number;
    } | undefined;
    levels?: {
        width: number;
        height: number;
    }[] | undefined;
    subifds?: number | undefined;
    resolutionUnit?: "inch" | "cm" | undefined;
    formatMagick?: string | undefined;
}>;
export type SharpMetadata = z.infer<typeof SharpMetadata>;
//# sourceMappingURL=sharp-metadata.schema.d.ts.map