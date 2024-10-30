# Changelog
## v5.1.13
- Add `codecs` field to `VideoMetadata` for RFC 6381 support.

## v5.0.12
- Add `hint` data field for including target poster resolution to reduce UI layout shifting.
- Promote `PreviewMetadata` to discriminated union and thus embedded array data to enable.

## v4.2.11
- Add `blurhash` field to posters.

## v4.1.10
- Add `ok` and optional `errorText` fields to enable rejected asset definitions.

## v4.0.9
- Rename filename field `name` to `s3_filename`, to refer to the filename in S3, to reduce confusion with asset name.
- Add `s3_uri` to `FileStatAndChecksums` to explicitly store the full URI in metadata, avoid assumptions on implicit definition.
- Update `Metadata` union into a _discriminated union_ with field `type` indicating which flavour.
- Split apart _preview_ metadata from `Metadata` to enable clean independent modification, new ZOD objects `PosterMetadata`, `AnimatedPosterMetadata`, `PosterSeriesMetadaat`, `TileSeriesMetadata`, and `PrevueMetadata`.
- Create new `MetadataMetadata` ZOD object to capture metadata about the metadata resource stored in S3 for an asset.

## v3.1.8
- Add `is_selected` field to _posters_ to explicitly identify the user selected poster presented as `poster`.

## v3.0.7
- Rename fields from `thumbnail*` to `preview*` or `poster*` as appropriate.
- Update EXIF metadata to comply with datetime fields.

## v2.2.6
- Move _timings_ to separate module to cleanup _metadata_.
- Update _video metadata_ to have a single `preview` field for selected thumbnail.

## v2.2.5
- Extend _file_ metadata to include preview thumbnail and related timings.

## v2.1.4
- Extend preview metadata to include s3 part sizes, enabling re-processing.

## v2.0.3
- Extend preview metadata to include basic image dimensions.
- Rename image and video duration metadata to `file_` prefix to match `FileTimings`.

## v1.0.2
- Fix `date` types being presented instead of `string` with format `datetime`.

## v1.0.1
- UCS-2 sequences in EXIF are presented as an array of numbers, convert to UTF-8 string.

## v1.0.0
- Initial release.
