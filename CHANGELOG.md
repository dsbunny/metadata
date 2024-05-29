# Changelog
## v2.0.3
- Extend preview metadata to include basic image dimensions.
- Rename image and video duration metadata to `file_` prefix to match `FileTimings`.

## v1.0.2
- Fix `date` types being presented instead of `string` with format `datetime`.

## v1.0.1
- UCS-2 sequences in EXIF are presented as an array of numbers, convert to UTF-8 string.

## v1.0.0
- Initial release.
