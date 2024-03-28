# @dsbunny/metadata
REF: https://zod.dev/

ZOD metadata for media stored in the DSBunny DAM.  Metadata is aggregated from multiple libraries for both images and videos, in addition to basic file metadata for all assets.

* [exif-reader](https://github.com/devongovett/exif-reader) for Exchangeable image file format (EXIF) metadata,
* [fluent-ffmpeg](https://github.com/fluent-ffmpeg/node-fluent-ffmpeg) for ffprobe (FFMPEG) video metadata,
* [icc](https://github.com/lovell/icc) for International Color Consortium (ICC) profile data,
* [iptc-reader](https://github.com/oaleynik/iptc-reader) for International Press Telecommunications Council (IPTC) photo metadata,
* [sharp](https://sharp.pixelplumbing.com/) for `libvps` derived image metadata,
* [xmp-reader](https://github.com/shkuznetsov/xmp-reader) for XMP/RDF metadata tags from JPEG files.
