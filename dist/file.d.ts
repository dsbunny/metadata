import { z } from "zod";
export declare const FileStatAndChecksums: z.ZodObject<{
    s3_filename: z.ZodString;
    content_type: z.ZodString;
    size: z.ZodNumber;
    mtime: z.ZodString;
    md5: z.ZodString;
    sha256: z.ZodString;
    s3_uri: z.ZodString;
    s3_version_id: z.ZodString;
    s3_etag: z.ZodString;
    s3_parts: z.ZodArray<z.ZodNumber, "many">;
}, "strip", z.ZodTypeAny, {
    size: number;
    s3_filename: string;
    content_type: string;
    mtime: string;
    md5: string;
    sha256: string;
    s3_uri: string;
    s3_version_id: string;
    s3_etag: string;
    s3_parts: number[];
}, {
    size: number;
    s3_filename: string;
    content_type: string;
    mtime: string;
    md5: string;
    sha256: string;
    s3_uri: string;
    s3_version_id: string;
    s3_etag: string;
    s3_parts: number[];
}>;
export type FileStatAndChecksums = z.infer<typeof FileStatAndChecksums>;
//# sourceMappingURL=file.d.ts.map