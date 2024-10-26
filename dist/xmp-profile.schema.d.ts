import { z } from 'zod';
export declare const XmpProfile: z.ZodObject<{
    keywords: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    title: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
    rating: z.ZodOptional<z.ZodNumber>;
    location: z.ZodOptional<z.ZodString>;
    creator: z.ZodOptional<z.ZodString>;
    attribution: z.ZodOptional<z.ZodString>;
    terms: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    creator?: string | undefined;
    description?: string | undefined;
    title?: string | undefined;
    keywords?: string[] | undefined;
    rating?: number | undefined;
    location?: string | undefined;
    attribution?: string | undefined;
    terms?: string | undefined;
}, {
    creator?: string | undefined;
    description?: string | undefined;
    title?: string | undefined;
    keywords?: string[] | undefined;
    rating?: number | undefined;
    location?: string | undefined;
    attribution?: string | undefined;
    terms?: string | undefined;
}>;
export type XmpProfile = z.infer<typeof XmpProfile>;
//# sourceMappingURL=xmp-profile.schema.d.ts.map