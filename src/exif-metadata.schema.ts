// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab
// Derived from Exif.Metadata in exif.d.ts.

import { z } from 'zod/v4';

const ImageTags = z.object({
	ProcessingSoftware: z.string()
		.describe('The name and version of the software used to post-process the picture.'),
	NewSubfileType: z.number()
		.describe('A general indication of the kind of data contained in this subfile.'),
	SubfileType: z.number()
		.describe('A general indication of the kind of data contained in this subfile. This field is deprecated. The NewSubfileType field should be used instead.'),
	ImageWidth: z.number()
		.describe('The number of columns of image data, equal to the number of pixels per row. In JPEG compressed data a JPEG marker is used instead of this tag.'),
	ImageLength: z.number()
		.describe('The number of rows of image data. In JPEG compressed data a JPEG marker is used instead of this tag.'),
	BitsPerSample: z.array(z.number())
		.describe('The number of bits per image component. In this standard each component of the image is 8 bits, so the value for this tag is 8. See also SamplesPerPixel. In JPEG compressed data a JPEG marker is used instead of this tag.'),
	Compression: z.number()
		.describe('The compression scheme used for the image data. When a primary image is JPEG compressed, this designation is not necessary and is omitted.'),
	PhotometricInterpretation: z.number()
		.describe('The pixel composition. In JPEG compressed data a JPEG marker is used instead of this tag.'),
	Thresholding: z.number()
		.describe('For black and white TIFF files that represent shades of gray, the technique used to convert from gray to black and white pixels.'),
	CellWidth: z.number()
		.describe('The width of the dithering or halftoning matrix used to create a dithered or halftoned bilevel file.'),
	CellLength: z.number()
		.describe('The length of the dithering or halftoning matrix used to create a dithered or halftoned bilevel file.'),
	FillOrder: z.number()
		.describe('The logical order of bits within a byte.'),
	DocumentName: z.string()
		.describe('The name of the document from which this image was scanned.'),
	ImageDescription: z.string()
		.describe('A character string giving the title of the image. It may be a comment such as "1988 company picnic" or the like. Two-bytes character codes cannot be used. When a 2-bytes code is necessary, the Exif Private tag UserComment is to be used.'),
	Make: z.string()
		.describe('The manufacturer of the recording equipment. This is the manufacturer of the DSC, scanner, video digitizer or other equipment that generated the image.'),
	Model: z.string()
		.describe('The model name or model number of the equipment. This is the model name or number of the DSC, scanner, video digitizer or other equipment that generated the image.'),
	StripOffsets: z.array(z.number())
		.describe('For each strip, the byte offset of that strip. It is recommended that this be selected so the number of strip bytes does not exceed 64 Kbytes. With JPEG compressed data this designation is not needed and is omitted. See also RowsPerStrip and StripByteCounts.'),
	Orientation: z.number()
		.describe('The image orientation viewed in terms of rows and columns.'),
	SamplesPerPixel: z.number()
		.describe('The number of components per pixel. Since this standard applies to RGB and YCbCr images, the value set for this tag is 3. In JPEG compressed data a JPEG marker is used instead of this tag.'),
	RowsPerStrip: z.number()
		.describe('The number of rows per strip. This is the number of rows in the image of one strip when an image is divided into strips. With JPEG compressed data this designation is not needed and is omitted. See also StripOffsets and StripByteCounts.'),
	StripByteCounts: z.array(z.number())
		.describe('The total number of bytes in each strip. With JPEG compressed data this designation is not needed and is omitted.'),
	XResolution: z.number()
		.describe('The number of pixels per ResolutionUnit in the ImageWidth direction. When the image resolution is unknown, 72 [dpi] is designated.'),
	YResolution: z.number()
		.describe('The number of pixels per ResolutionUnit in the ImageLength direction. The same value as XResolution is designated.'),
	PlanarConfiguration: z.number()
		.describe('Indicates whether pixel components are recorded in a chunky or planar format. In JPEG compressed files a JPEG marker is used instead of this tag. If this field does not exist, the TIFF default of 1 (chunky) is assumed.'),
	PageName: z.string()
		.describe('The page number of the page from which this image was scanned.'),
	XPosition: z.number()
		.describe('X position of the image.'),
	YPosition: z.number()
		.describe('Y position of the image.'),
	GrayResponseUnit: z.number()
		.describe('The precision of the information contained in the GrayResponseCurve.'),
	GrayResponseCurve: z.number()
		.describe('For grayscale data, the optical density of each possible pixel value.'),
	T4Options: z.number()
		.describe('T.4-encoding options.'),
	T6Options: z.number()
		.describe('T.6-encoding options.'),
	ResolutionUnit: z.number()
		.describe('The unit for measuring XResolution and YResolution. The same unit is used for both XResolution and YResolution. If the image resolution is unknown, 2 (inches) is designated.'),
	PageNumber: z.number()
		.describe('The page number of the page from which this image was scanned.'),
	TransferFunction: z.array(z.number())
		.describe('A transfer function for the image, described in tabular style. Normally this tag is not necessary, since color space is specified in the color space information tag (ColorSpace).'),
	Software: z.string()
		.describe('This tag records the name and version of the software or firmware of the camera or image input device used to generate the image. The detailed format is not specified, but it is recommended that the example shown below be followed.'),
	DateTime: z.string().datetime()
		.describe('The date and time of image creation. In Exif standard, it is the date and time the file was changed.'),
	Artist: z.string()
		.describe('This tag records the name of the camera owner, photographer or image creator. The detailed format is not specified, but it is recommended that the information be written as in the example below for ease of Interoperability. When the field is left blank, it is treated as unknown. Ex.) "Camera owner, John Smith; Photographer, Michael Brown; Image creator, Ken James".'),
	HostComputer: z.string()
		.describe('This tag records information about the host computer used to generate the image.'),
	Predictor: z.number()
		.describe('A predictor is a mathematical operator that is applied to the image data before an encoding scheme is applied.'),
	WhitePoint: z.array(z.number())
		.describe('The chromaticity of the white point of the image. Normally this tag is not necessary, since color space is specified in the colorspace information tag (ColorSpace).'),
	PrimaryChromaticities: z.array(z.number())
		.describe('The chromaticity of the three primary colors of the image. Normally this tag is not necessary, since colorspace is specified in the colorspace information tag (ColorSpace).'),
	ColorMap: z.number()
		.describe('A color map for palette color images. This field defines a Red-Green-Blue color map (often called a lookup table) for palette-color images. In a palette-color image, a pixel value is used to index into an RGB lookup table.'),
	HalftoneHints: z.number()
		.describe('The purpose of the HalftoneHints field is to convey to the halftone function the range of gray levels within a colorimetrically-specified image that should retain tonal detail.'),
	TileWidth: z.number()
		.describe('The tile width in pixels. This is the number of columns in each tile.'),
	TileLength: z.number()
		.describe('The tile length (height) in pixels. This is the number of rows in each tile.'),
	TileOffsets: z.number()
		.describe('For each tile, the byte offset of that tile, as compressed and stored on disk. The offset is specified with respect to the beginning of the TIFF file. Note that this implies that each tile has a location independent of the locations of other tiles.'),
	TileByteCounts: z.number()
		.describe('For each tile, the number of (compressed) bytes in that tile. See TileOffsets for a description of how the byte counts are ordered.'),
	SubIFDs: z.number()
		.describe('Defined by Adobe Corporation to enable TIFF Trees within a TIFF file.'),
	InkSet: z.number()
		.describe('The set of inks used in a separated (PhotometricInterpretation=5) image.'),
	InkNames: z.string()
		.describe('The name of each ink used in a separated (PhotometricInterpretation=5) image.'),
	NumberOfInks: z.number()
		.describe('The number of inks. Usually equal to SamplesPerPixel, unless there are extra samples.'),
	DotRange: z.number()
		.describe("The component values that correspond to a 0% dot and 100% dot."),
	TargetPrinter: z.string()
		.describe('A description of the printing environment for which this separation is intended.'),
	ExtraSamples: z.number()
		.describe('Specifies that each pixel has m extra components whose interpretation is defined by one of the values listed below.'),
	SampleFormat: z.number()
		.describe('This field specifies how to interpret each data sample in a pixel.'),
	SMinSampleValue: z.number()
		.describe('This field specifies the minimum sample value.'),
	SMaxSampleValue: z.number()
		.describe('This field specifies the maximum sample value.'),
	TransferRange: z.number()
		.describe('Expands the range of the TransferFunction.'),
	ClipPath: z.number()
		.describe('A TIFF ClipPath is intended to mirror the essentials of PostScript\'s path creation functionality.'),
	XClipPathUnits: z.number()
		.describe('The number of units that span the width of the image, in terms of integer ClipPath coordinates.'),
	YClipPathUnits: z.number()
		.describe('The number of units that span the height of the image, in terms of integer ClipPath coordinates.'),
	Indexed: z.number()
		.describe('Indexed images are images where the \'pixels\' do not represent color values, but rather an index (usually 8-bit) into a separate color table, the ColorMap.'),
	//JPEGTables: z.buffer()
	//	.describe('This optional tag may be used to encode the JPEG quantization and Huffman tables for subsequent use by the JPEG decompression process.'),
	OPIProxy: z.number()
		.describe('OPIProxy gives information concerning whether this image is a low-resolution proxy of a high-resolution image (Adobe OPI).'),
	JPEGProc: z.number()
		.describe('This field indicates the process used to produce the compressed data.'),
	JPEGInterchangeFormat: z.number()
		.describe('The offset to the start byte (SOI) of JPEG compressed thumbnail data. This is not used for primary image JPEG data.'),
	JPEGInterchangeFormatLength: z.number()
		.describe('The number of bytes of JPEG compressed thumbnail data. This is not used for primary image JPEG data. JPEG thumbnails are not divided but are recorded as a continuous JPEG bitstream from SOI to EOI. Appn and COM markers should not be recorded. Compressed thumbnails must be recorded in no more than 64 Kbytes, including all other data to be recorded in APP1.'),
	JPEGRestartInterval: z.number()
		.describe('This Field indicates the length of the restart interval used in the compressed image data.'),
	JPEGLosslessPredictors: z.number()
		.describe('This Field points to a list of lossless predictor-selection values, one per component.'),
	JPEGPointTransforms: z.number()
		.describe('This Field points to a list of point transform values, one per component.'),
	JPEGQTables: z.number()
		.describe('This Field points to a list of offsets to the quantization tables, one per component.'),
	JPEGDCTables: z.number()
		.describe('This Field points to a list of offsets to the DC Huffman tables or the lossless Huffman tables, one per component.'),
	JPEGACTables: z.number()
		.describe('This Field points to a list of offsets to the Huffman AC tables, one per component.'),
	YCbCrCoefficients: z.array(z.number())
		.describe('The matrix coefficients for transformation from RGB to YCbCr image data. No default is given in TIFF; but here the value given in Appendix E, "Color Space Guidelines", is used as the default. The color space is declared in a color space information tag, with the default being the value that gives the optimal image characteristics Interoperability this condition.'),
	YCbCrSubSampling: z.array(z.number())
		.describe('The sampling ratio of chrominance components in relation to the luminance component. In JPEG compressed data a JPEG marker is used instead of this tag.'),
	YCbCrPositioning: z.number()
		.describe('The position of chrominance components in relation to the luminance component. This field is designated only for JPEG compressed data or uncompressed YCbCr data. The TIFF default is 1 (centered); but when Y:Cb:Cr = 4:2:2 it is recommended in this standard that 2 (co-sited) be used to record data, in order to improve the image quality when viewed on TV systems.'),
	ReferenceBlackWhite: z.array(z.number())
		.describe('The reference black point value and reference white point value. No defaults are given in TIFF, but the values below are given as defaults here. The color space is declared in a color space information tag, with the default being the value that gives the optimal image characteristics Interoperability these conditions.'),
	XMLPacket: z.number()
		.describe('XMP Metadata (Adobe technote 9-14-02).'),
	Rating: z.number()
		.describe('Rating tag used by Windows.'),
	RatingPercent: z.number()
		.describe('Rating tag used by Windows, value in percent.'),
	VignettingCorrParams: z.number(),
	ChromaticAberrationCorrParams: z.number(),
	DistortionCorrParams: z.number(),
	ImageID: z.string()
		.describe('ImageID is the full pathname of the original, high-resolution image, or any other identifying string that uniquely identifies the original image (Adobe OPI).'),
	CFARepeatPatternDim: z.number()
		.describe('Contains two values representing the minimum rows and columns to define the repeating patterns of the color filter array.'),
	CFAPattern: z.number()
		.describe('Indicates the color filter array (CFA) geometric pattern of the image sensor when a one-chip color area sensor is used. It does not apply to all sensing methods.'),
	BatteryLevel: z.number()
		.describe('Contains a value of the battery level as a fraction or string.'),
	Copyright: z.string()
		.describe('Copyright information. In this standard the tag is used to indicate both the photographer and editor copyrights. It is the copyright notice of the person or organization claiming rights to the image.'),
	ExposureTime: z.number()
		.describe('Exposure time, given in seconds.'),
	FNumber: z.number()
		.describe('The F number.'),
	IPTCNAA: z.number()
		.describe('Contains an IPTC/NAA record.'),
	ImageResources: z.number()
		.describe('Contains information embedded by the Adobe Photoshop application.'),
	ExifTag: z.number()
		.describe('A pointer to the Exif IFD. Interoperability, Exif IFD has the same structure as that of the IFD specified in TIFF. ordinarily, however, it does not contain image data as in the case of TIFF.'),
	//InterColorProfile: z.buffer()
	//	.describe('Contains an InterColor Consortium (ICC) format color space characterization/profile.'),
	ExposureProgram: z.number()
		.describe('The class of the program used by the camera to set exposure when the picture is taken.'),
	SpectralSensitivity: z.string()
		.describe('Indicates the spectral sensitivity of each channel of the camera used.'),
	GPSTag: z.number()
		.describe('A pointer to the GPS Info IFD. The Interoperability structure of the GPS Info IFD, like that of Exif IFD, has no image data.'),
	ISOSpeedRatings: z.number()
		.describe('Indicates the ISO Speed and ISO Latitude of the camera or input device as specified in ISO 12232.'),
	//OECF: z.buffer()
	//	.describe(' Indicates the Opto-Electric Conversion Function (OECF) specified in ISO 14524.'),
	Interlace: z.number()
		.describe('Indicates the field number of multifield images.'),
	TimeZoneOffset: z.number()
		.describe('This optional tag encodes the time zone of the camera clock (relative to Greenwich Mean Time) used to create the DataTimeOriginal tag-value when the picture was taken. It may also contain the time zone offset of the clock used to create the DateTime tag-value when the image was modified.'),
	SelfTimerMode: z.number()
		.describe('Number of seconds image capture was delayed from button press.'),
	DateTimeOriginal: z.iso.datetime()
		.describe('The date and time when the original image data was generated.'),
	CompressedBitsPerPixel: z.number()
		.describe('Specific to compressed data; states the compressed bits per pixel.'),
	ShutterSpeedValue: z.number()
		.describe('Shutter speed.'),
	ApertureValue: z.number()
		.describe('The lens aperture.'),
	BrightnessValue: z.number()
		.describe('The value of brightness.'),
	ExposureBiasValue: z.number()
		.describe('The exposure bias.'),
	MaxApertureValue: z.number()
		.describe('The smallest F number of the lens.'),
	SubjectDistance: z.number()
		.describe('The distance to the subject, given in meters.'),
	MeteringMode: z.number()
		.describe('The metering mode.'),
	LightSource: z.number()
		.describe('The kind of light source.'),
	Flash: z.number()
		.describe('Indicates the status of flash when the image was shot.'),
	FocalLength: z.number()
		.describe('The actual focal length of the lens, in mm.'),
	FlashEnergy: z.number()
		.describe('Amount of flash energy (BCPS).'),
	//SpatialFrequencyResponse: z.buffer()
	//	.describe('SFR of the camera.'),
	//Noise: z.buffer()
	//	.describe('Noise measurement values.'),
	FocalPlaneXResolution: z.number()
		.describe('Number of pixels per FocalPlaneResolutionUnit in ImageWidth direction for main image.'),
	FocalPlaneYResolution: z.number()
		.describe('Number of pixels per FocalPlaneResolutionUnit in ImageLength direction for main image.'),
	FocalPlaneResolutionUnit: z.number()
		.describe('Unit of measurement for FocalPlaneXResolution and FocalPlaneYResolution.'),
	ImageNumber: z.number()
		.describe('Number assigned to an image, e.g., in a chained image burst.'),
	SecurityClassification: z.string()
		.describe('Security classification assigned to the image.'),
	ImageHistory: z.string()
		.describe('Record of what has been done to the image.'),
	SubjectLocation: z.number()
		.describe('Indicates the location and area of the main subject in the overall scene.'),
	ExposureIndex: z.number()
		.describe('Encodes the camera exposure index setting when image was captured.'),
	TIFFEPStandardID: z.number()
		.describe('Contains four ASCII characters representing the TIFF/EP standard version of a TIFF/EP file, eg \'1\', \'0\', \'0\', \'0\'.'),
	SensingMethod: z.number()
		.describe('Type of image sensor.'),
	XPTitle: z.string()
		.describe('Title tag used by Windows, encoded in UCS2.'),
	XPComment: z.string()
		.describe('Comment tag used by Windows, encoded in UCS2.'),
	XPAuthor: z.string()
		.describe('Author tag used by Windows, encoded in UCS2.'),
	XPKeywords: z.string()
		.describe('Keywords tag used by Windows, encoded in UCS2.'),
	XPSubject: z.string()
		.describe('Subject tag used by Windows, encoded in UCS2.'),
	//PrintImageMatching: z.buffer()
	//	.describe('Print Image Matching, description needed.'),
	DNGVersion: z.number()
		.describe('This tag encodes the DNG four-tier version number. For files compliant with version 1.1.0.0 of the DNG specification, this tag should contain the bytes: 1, 1, 0, 0.'),
	DNGBackwardVersion: z.number()
		.describe('This tag specifies the oldest version of the Digital Negative specification for which a file is compatible.'),
	UniqueCameraModel: z.string()
		.describe('Defines a unique, non-localized name for the camera model that created the image in the raw file. This name should include the manufacturer\'s name to avoid conflicts, and should not be localized, even if the camera name itself is localized for different markets (see LocalizedCameraModel). This string may be used by reader software to index into per-model preferences and replacement profiles.'),
	LocalizedCameraModel: z.number()
		.describe('Similar to the UniqueCameraModel field, except the name can be localized for different markets to match the localization of the camera name.'),
	CFAPlaneColor: z.number()
		.describe('rovides a mapping between the values in the CFAPattern tag and the plane numbers in LinearRaw space. This is a required tag for non-RGB CFA images.'),
	CFALayout: z.number()
		.describe('Describes the spatial layout of the CFA.'),
	LinearizationTable: z.number()
		.describe('Describes a lookup table that maps stored values into linear values. This tag is typically used to increase compression ratios by storing the raw data in a non-linear, more visually uniform space with fewer total encoding levels. If SamplesPerPixel is not equal to one, this single table applies to all the samples for each pixel.'),
	BlackLevelRepeatDim: z.number()
		.describe('Specifies repeat pattern size for the BlackLevel tag.'),
	BlackLevel: z.number()
		.describe('Specifies the zero light (a.k.a. thermal black or black current) encoding level, as a repeating pattern. The origin of this pattern is the top-left corner of the ActiveArea rectangle. The values are stored in row-column-sample scan order.'),
	BlackLevelDeltaH: z.number()
		.describe('If the zero light encoding level is a function of the image column, BlackLevelDeltaH specifies the difference between the zero light encoding level for each column and the baseline zero light encoding level. If SamplesPerPixel is not equal to one, this single table applies to all the samples for each pixel.'),
	BlackLevelDeltaV: z.number()
		.describe('If the zero light encoding level is a function of the image row, this tag specifies the difference between the zero light encoding level for each row and the baseline zero light encoding level. If SamplesPerPixel is not equal to one, this single table applies to all the samples for each pixel.'),
	WhiteLevel: z.number()
		.describe('This tag specifies the fully saturated encoding level for the raw sample values. Saturation is caused either by the sensor itself becoming highly non-linear in response, or by the camera\'s analog to digital converter clipping.'),
	DefaultScale: z.number()
		.describe('DefaultScale is required for cameras with non-square pixels. It specifies the default scale factors for each direction to convert the image to square pixels. Typically these factors are selected to approximately preserve total pixel count. For CFA images that use CFALayout equal to 2, 3, 4, or 5, such as the Fujifilm SuperCCD, these two values should usually differ by a factor of 2.0.'),
	DefaultCropOrigin: z.number()
		.describe(' Raw images often store extra pixels around the edges of the final image. These extra pixels help prevent interpolation artifacts near the edges of the final image. DefaultCropOrigin specifies the origin of the final image area, in raw image coordinates (i.e., before the DefaultScale has been applied), relative to the top-left corner of the ActiveArea rectangle.'),
	DefaultCropSize: z.number()
		.describe('Raw images often store extra pixels around the edges of the final image. These extra pixels help prevent interpolation artifacts near the edges of the final image. DefaultCropSize specifies the size of the final image area, in raw image coordinates (i.e., before the DefaultScale has been applied).'),
	ColorMatrix1: z.number()
		.describe('ColorMatrix1 defines a transformation matrix that converts XYZ values to reference camera native color space values, under the first calibration illuminant. The matrix values are stored in row scan order. The ColorMatrix1 tag is required for all non-monochrome DNG files.'),
	ColorMatrix2: z.number()
		.describe('ColorMatrix2 defines a transformation matrix that converts XYZ values to reference camera native color space values, under the second calibration illuminant. The matrix values are stored in row scan order.'),
	CameraCalibration1: z.number()
		.describe('CameraCalibration1 defines a calibration matrix that transforms reference camera native space values to individual camera native space values under the first calibration illuminant. The matrix is stored in row scan order. This matrix is stored separately from the matrix specified by the ColorMatrix1 tag to allow raw converters to swap in replacement color matrices based on UniqueCameraModel tag, while still taking advantage of any per-individual camera calibration performed by the camera manufacturer.'),
	CameraCalibration2: z.number()
		.describe('CameraCalibration2 defines a calibration matrix that transforms reference camera native space values to individual camera native space values under the second calibration illuminant. The matrix is stored in row scan order. This matrix is stored separately from the matrix specified by the ColorMatrix2 tag to allow raw converters to swap in replacement color matrices based on UniqueCameraModel tag, while still taking advantage of any per-individual camera calibration performed by the camera manufacturer.'),
	ReductionMatrix1: z.number()
		.describe('ReductionMatrix1 defines a dimensionality reduction matrix for use as the first stage in converting color camera native space values to XYZ values, under the first calibration illuminant. This tag may only be used if ColorPlanes is greater than 3. The matrix is stored in row scan order.'),
	ReductionMatrix2: z.number()
		.describe('ReductionMatrix2 defines a dimensionality reduction matrix for use as the first stage in converting color camera native space values to XYZ values, under the second calibration illuminant. This tag may only be used if ColorPlanes is greater than 3. The matrix is stored in row scan order.'),
	AnalogBalance: z.number()
		.describe('Normally the stored raw values are not white balanced, since any digital white balancing will reduce the dynamic range of the final image if the user decides to later adjust the white balance; however, if camera hardware is capable of white balancing the color channels before the signal is digitized, it can improve the dynamic range of the final image. AnalogBalance defines the gain, either analog (recommended) or digital (not recommended) that has been applied the stored raw values.'),
	AsShotNeutral: z.number()
		.describe('Specifies the selected white balance at time of capture, encoded as the coordinates of a perfectly neutral color in linear reference space values. The inclusion of this tag precludes the inclusion of the AsShotWhiteXY tag.'),
	AsShotWhiteXY: z.number()
		.describe('Specifies the selected white balance at time of capture, encoded as x-y chromaticity coordinates. The inclusion of this tag precludes the inclusion of the AsShotNeutral tag.'),
	BaselineExposure: z.number()
		.describe('Camera models vary in the trade-off they make between highlight headroom and shadow noise. Some leave a significant amount of highlight headroom during a normal exposure. This allows significant negative exposure compensation to be applied during raw conversion, but also means normal exposures will contain more shadow noise. Other models leave less headroom during normal exposures. This allows for less negative exposure compensation, but results in lower shadow noise for normal exposures. Because of these differences, a raw converter needs to vary the zero point of its exposure compensation control from model to model. BaselineExposure specifies by how much (in EV units) to move the zero point. Positive values result in brighter default results, while negative values result in darker default results.'),
	BaselineNoise: z.number()
		.describe('Specifies the relative noise level of the camera model at a baseline ISO value of 100, compared to a reference camera model. Since noise levels tend to vary approximately with the square root of the ISO value, a raw converter can use this value, combined with the current ISO, to estimate the relative noise level of the current image.'),
	BaselineSharpness: z.number()
		.describe('Specifies the relative amount of sharpening required for this camera model, compared to a reference camera model. Camera models vary in the strengths of their anti-aliasing filters. Cameras with weak or no filters require less sharpening than cameras with strong anti-aliasing filters.'),
	BayerGreenSplit: z.number()
		.describe('Only applies to CFA images using a Bayer pattern filter array. This tag specifies, in arbitrary units, how closely the values of the green pixels in the blue/green rows track the values of the green pixels in the red/green rows. A value of zero means the two kinds of green pixels track closely, while a non-zero value means they sometimes diverge. The useful range for this tag is from 0 (no divergence) to about 5000 (quite large divergence).'),
	LinearResponseLimit: z.number()
		.describe('Some sensors have an unpredictable non-linearity in their response as they near the upper limit of their encoding range. This non-linearity results in color shifts in the highlight areas of the resulting image unless the raw converter compensates for this effect. LinearResponseLimit specifies the fraction of the encoding range above which the response may become significantly non-linear.'),
	CameraSerialNumber: z.string()
		.describe('CameraSerialNumber contains the serial number of the camera or camera body that captured the image.'),
	LensInfo: z.number()
		.describe('Contains information about the lens that captured the image. If the minimum f-stops are unknown, they should be encoded as 0/0.'),
	ChromaBlurRadius: z.number()
		.describe('ChromaBlurRadius provides a hint to the DNG reader about how much chroma blur should be applied to the image. If this tag is omitted, the reader will use its default amount of chroma blurring. Normally this tag is only included for non-CFA images, since the amount of chroma blur required for mosaic images is highly dependent on the de-mosaic algorithm, in which case the DNG reader\'s default value is likely optimized for its particular de-mosaic algorithm.'),
	AntiAliasStrength: z.number()
		.describe('Provides a hint to the DNG reader about how strong the camera\'s anti-alias filter is. A value of 0.0 means no anti-alias filter (i.e., the camera is prone to aliasing artifacts with some subjects), while a value of 1.0 means a strong anti-alias filter (i.e., the camera almost never has aliasing artifacts).'),
	ShadowScale: z.number()
		.describe('This tag is used by Adobe Camera Raw to control the sensitivity of its \'Shadows\' slider.'),
	DNGPrivateData: z.number()
		.describe('Provides a way for camera manufacturers to store private data in the DNG file for use by their own raw converters, and to have that data preserved by programs that edit DNG files.'),
	MakerNoteSafety: z.number()
		.describe('MakerNoteSafety lets the DNG reader know whether the EXIF MakerNote tag is safe to preserve along with the rest of the EXIF data. File browsers and other image management software processing an image with a preserved MakerNote should be aware that any thumbnail image embedded in the MakerNote may be stale, and may not reflect the current state of the full size image.'),
	CalibrationIlluminant1: z.number()
		.describe('The illuminant used for the first set of color calibration tags (ColorMatrix1, CameraCalibration1, ReductionMatrix1). The legal values for this tag are the same as the legal values for the LightSource EXIF tag.'),
	CalibrationIlluminant2: z.number()
		.describe('The illuminant used for an optional second set of color calibration tags (ColorMatrix2, CameraCalibration2, ReductionMatrix2). The legal values for this tag are the same as the legal values for the CalibrationIlluminant1 tag; however, if both are included, neither is allowed to have a value of 0.'),
	BestQualityScale: z.number()
		.describe('For some cameras, the best possible image quality is not achieved by preserving the total pixel count during conversion. For example, Fujifilm SuperCCD images have maximum detail when their total pixel count is doubled. This tag specifies the amount by which the values of the DefaultScale tag need to be multiplied to achieve the best quality image size.'),
	RawDataUniqueID: z.number()
		.describe('This tag contains a 16-byte unique identifier for the raw image data in the DNG file. DNG readers can use this tag to recognize a particular raw image, even if the file\'s name or the metadata contained in the file has been changed. If a DNG writer creates such an identifier, it should do so using an algorithm that will ensure that it is very unlikely two different images will end up having the same identifier.'),
	OriginalRawFileName: z.number()
		.describe('If the DNG file was converted from a non-DNG raw file, then this tag contains the file name of that original raw file.'),
	//OriginalRawFileData: z.buffer().
	//	.describe('If the DNG file was converted from a non-DNG raw file, then this tag contains the compressed contents of that original raw file. The contents of this tag always use the big-endian byte order. The tag contains a sequence of data blocks. Future versions of the DNG specification may define additional data blocks, so DNG readers should ignore extra bytes when parsing this tag. DNG readers should also detect the case where data blocks are missing from the end of the sequence, and should assume a default value for all the missing blocks. There are no padding or alignment bytes between data blocks.'),
	ActiveArea: z.number()
		.describe('This rectangle defines the active (non-masked) pixels of the sensor. The order of the rectangle coordinates is: top, left, bottom, right.'),
	MaskedAreas: z.number()
		.describe('This tag contains a list of non-overlapping rectangle coordinates of fully masked pixels, which can be optionally used by DNG readers to measure the black encoding level. The order of each rectangle\'s coordinates is: top, left, bottom, right. If the raw image data has already had its black encoding level subtracted, then this tag should not be used, since the masked pixels are no longer useful.'),
	//AsShotICCProfile: z.buffer().
	//	.describe('This tag contains an ICC profile that, in conjunction with the AsShotPreProfileMatrix tag, provides the camera manufacturer with a way to specify a default color rendering from camera color space coordinates (linear reference values) into the ICC profile connection space. The ICC profile connection space is an output referred colorimetric space, whereas the other color calibration tags in DNG specify a conversion into a scene referred colorimetric space. This means that the rendering in this profile should include any desired tone and gamut mapping needed to convert between scene referred values and output referred values.'),
	AsShotPreProfileMatrix: z.number()
		.describe('This tag is used in conjunction with the AsShotICCProfile tag. It specifies a matrix that should be applied to the camera color space coordinates before processing the values through the ICC profile specified in the AsShotICCProfile tag. The matrix is stored in the row scan order. If ColorPlanes is greater than three, then this matrix can (but is not required to) reduce the dimensionality of the color data down to three components, in which case the AsShotICCProfile should have three rather than ColorPlanes input components.'),
	//CurrentICCProfile: z.buffer()
	//	.describe('This tag is used in conjunction with the CurrentPreProfileMatrix tag. The CurrentICCProfile and CurrentPreProfileMatrix tags have the same purpose and usage as the AsShotICCProfile and AsShotPreProfileMatrix tag pair, except they are for use by raw file editors rather than camera manufacturers.'),
	CurrentPreProfileMatrix: z.number()
		.describe('This tag is used in conjunction with the CurrentICCProfile tag. The CurrentICCProfile and CurrentPreProfileMatrix tags have the same purpose and usage as the AsShotICCProfile and AsShotPreProfileMatrix tag pair, except they are for use by raw file editors rather than camera manufacturers.'),
	ColorimetricReference: z.number()
		.describe('The DNG color model documents a transform between camera colors and CIE XYZ values. This tag describes the colorimetric reference for the CIE XYZ values. 0 = The XYZ values are scene-referred. 1 = The XYZ values are output-referred, using the ICC profile perceptual dynamic range. This tag allows output-referred data to be stored in DNG files and still processed correctly by DNG readers.'),
	CameraCalibrationSignature: z.number()
		.describe('A UTF-8 encoded string associated with the CameraCalibration1 and CameraCalibration2 tags. The CameraCalibration1 and CameraCalibration2 tags should only be used in the DNG color transform if the string stored in the CameraCalibrationSignature tag exactly matches the string stored in the ProfileCalibrationSignature tag for the selected camera profile.'),
	ProfileCalibrationSignature: z.number()
		.describe('A UTF-8 encoded string associated with the camera profile tags. The CameraCalibration1 and CameraCalibration2 tags should only be used in the DNG color transfer if the string stored in the CameraCalibrationSignature tag exactly matches the string stored in the ProfileCalibrationSignature tag for the selected camera profile.'),
	ExtraCameraProfiles: z.number(),
	AsShotProfileName: z.number()
		.describe('A UTF-8 encoded string containing the name of the "as shot" camera profile, if any.'),
	NoiseReductionApplied: z.number()
		.describe('This tag indicates how much noise reduction has been applied to the raw data on a scale of 0.0 to 1.0. A 0.0 value indicates that no noise reduction has been applied. A 1.0 value indicates that the "ideal" amount of noise reduction has been applied, i.e. that the DNG reader should not apply additional noise reduction by default. A value of 0/0 indicates that this parameter is unknown.'),
	ProfileName: z.number()
		.describe('A UTF-8 encoded string containing the name of the camera profile. This tag is optional if there is only a single camera profile stored in the file but is required for all camera profiles if there is more than one camera profile stored in the file.'),
	ProfileHueSatMapDims: z.number()
		.describe('This tag specifies the number of input samples in each dimension of the hue/saturation/value mapping tables. The data for these tables are stored in ProfileHueSatMapData1 and ProfileHueSatMapData2 tags. The most common case has ValueDivisions equal to 1, so only hue and saturation are used as inputs to the mapping table.'),
	//ProfileHueSatMapData1: z.buffer()
	//	.describe('This tag contains the data for the first hue/saturation/value mapping table. Each entry of the table contains three 32-bit IEEE floating-point values. The first entry is hue shift in degrees; the second entry is saturation scale factor; and the third entry is a value scale factor. The table entries are stored in the tag in nested loop order, with the value divisions in the outer loop, the hue divisions in the middle loop, and the saturation divisions in the inner loop. All zero input saturation entries are required to have a value scale factor of 1.0.'),
	//ProfileHueSatMapData2: z.buffer()
	//	.describe('This tag contains the data for the second hue/saturation/value mapping table. Each entry of the table contains three 32-bit IEEE floating-point values. The first entry is hue shift in degrees; the second entry is a saturation scale factor; and the third entry is a value scale factor. The table entries are stored in the tag in nested loop order, with the value divisions in the outer loop, the hue divisions in the middle loop, and the saturation divisions in the inner loop. All zero input saturation entries are required to have a value scale factor of 1.0.'),
	//ProfileToneCurve: z.buffer()
	//	.describe('This tag contains a default tone curve that can be applied while processing the image as a starting point for user adjustments. The curve is specified as a list of 32-bit IEEE floating-point value pairs in linear gamma. Each sample has an input value in the range of 0.0 to 1.0, and an output value in the range of 0.0 to 1.0. The first sample is required to be (0.0, 0.0), and the last sample is required to be (1.0, 1.0). Interpolated the curve using a cubic spline.'),
	ProfileEmbedPolicy: z.number()
		.describe('This tag contains information about the usage rules for the associated camera profile.'),
	ProfileCopyright: z.number()
		.describe('A UTF-8 encoded string containing the copyright information for the camera profile. This string always should be preserved along with the other camera profile tags.'),
	ForwardMatrix1: z.number()
		.describe('This tag defines a matrix that maps white balanced camera colors to XYZ D50 colors.'),
	ForwardMatrix2: z.number()
		.describe('This tag defines a matrix that maps white balanced camera colors to XYZ D50 colors.'),
	PreviewApplicationName: z.number()
		.describe('A UTF-8 encoded string containing the name of the application that created the preview stored in the IFD.'),
	PreviewApplicationVersion: z.number()
		.describe('A UTF-8 encoded string containing the version number of the application that created the preview stored in the IFD.'),
	PreviewSettingsName: z.number()
		.describe('A UTF-8 encoded string containing the name of the conversion settings (for example, snapshot name) used for the preview stored in the IFD.'),
	PreviewSettingsDigest: z.number()
		.describe('A unique ID of the conversion settings (for example, MD5 digest) used to render the preview stored in the IFD.'),
	PreviewColorSpace: z.number()
		.describe('This tag specifies the color space in which the rendered preview in this IFD is stored. The default value for this tag is sRGB for color previews and Gray Gamma 2.2 for monochrome previews.'),
	PreviewDateTime: z.iso.datetime()
		.describe('This tag is an ASCII string containing the name of the date/time at which the preview stored in the IFD was rendered. The date/time is encoded using ISO 8601 format.'),
	//RawImageDigest: z.buffer()
	//	.describe('This tag is an MD5 digest of the raw image data. All pixels in the image are processed in row-scan order. Each pixel is zero padded to 16 or 32 bits deep (16-bit for data less than or equal to 16 bits deep, 32-bit otherwise). The data for each pixel is processed in little-endian byte order.'),
	//OriginalRawFileDigest: z.buffer()
	//	.describe('This tag is an MD5 digest of the data stored in the OriginalRawFileData tag.'),
	SubTileBlockSize: z.number()
		.describe('Normally, the pixels within a tile are stored in simple row-scan order. This tag specifies that the pixels within a tile should be grouped first into rectangular blocks of the specified size. These blocks are stored in row-scan order. Within each block, the pixels are stored in row-scan order. The use of a non-default value for this tag requires setting the DNGBackwardVersion tag to at least 1.2.0.0.'),
	RowInterleaveFactor: z.number()
		.describe('This tag specifies that rows of the image are stored in interleaved order. The value of the tag specifies the number of interleaved fields. The use of a non-default value for this tag requires setting the DNGBackwardVersion tag to at least 1.2.0.0.'),
	ProfileLookTableDims: z.number()
		.describe('This tag specifies the number of input samples in each dimension of a default "look" table. The data for this table is stored in the ProfileLookTableData tag.'),
	//ProfileLookTableData: z.buffer()
	//	.describe('This tag contains a default "look" table that can be applied while processing the image as a starting point for user adjustment.'),
	//OpcodeList1: z.buffer()
	//	.describe('Specifies the list of opcodes that should be applied to the raw image, as read directly from the file.'),
	//OpcodeList2: z.buffer()
	//	.describe('Specifies the list of opcodes that should be applied to the raw image, just after it has been mapped to linear reference values.'),
	//OpcodeList3: z.buffer()
	//	.describe('Specifies the list of opcodes that should be applied to the raw image, just after it has been demosaiced.'),
	//NoiseProfile: z.buffer()
	//	.describe('NoiseProfile describes the amount of noise in a raw image. Specifically, this tag models the amount of signal-dependent photon (shot) noise and signal-independent sensor readout noise, two common sources of noise in raw images. The model assumes that the noise is white and spatially independent, ignoring fixed pattern effects and other sources of noise (e.g., pixel response non-uniformity, spatially-dependent thermal effects, etc.).'),
	TimeCodes: z.number()
		.describe('The optional TimeCodes tag shall contain an ordered array of time codes. All time codes shall be 8 bytes long and in binary format. The tag may contain from 1 to 10 time codes. When the tag contains more than one time code, the first one shall be the default time code. This specification does not prescribe how to use multiple time codes. Each time code shall be as defined for the 8-byte time code structure in SMPTE 331M-2004, Section 8.3. See also SMPTE 12-1-2008 and SMPTE 309-1999.'),
	FrameRate: z.number()
		.describe('The optional FrameRate tag shall specify the video frame rate in number of image frames per second, expressed as a signed rational number. The numerator shall be non-negative and the denominator shall be positive. This field value is identical to the sample rate field in SMPTE 377-1-2009.'),
	TStop: z.number()
		.describe('The optional TStop tag shall specify the T-stop of the actual lens, expressed as an unsigned rational number. T-stop is also known as T-number or the photometric aperture of the lens. (F-number is the geometric aperture of the lens.) When the exact value is known, the T-stop shall be specified using a single number. Alternately, two numbers shall be used to indicate a T-stop range, in which case the first number shall be the minimum T-stop and the second number shall be the maximum T-stop.'),
	ReelName: z.string()
		.describe('The optional ReelName tag shall specify a name for a sequence of images, where each image in the sequence has a unique image identifier (including but not limited to file name, frame number, date time, time code).'),
	CameraLabel: z.string()
		.describe('The optional CameraLabel tag shall specify a text label for how the camera is used or assigned in this clip. This tag is similar to CameraLabel in XMP.'),
	OriginalDefaultFinalSize: z.number(),
	OriginalBestQualityFinalSize: z.number(),
	OriginalDefaultCropSize: z.number(),
	ProfileHueSatMapEncoding: z.number(),
	ProfileLookTableEncoding: z.number(),
	BaselineExposureOffset: z.number(),
	DefaultBlackRender: z.number(),
	NewRawImageDigest: z.number(),
	//RawToPreviewGain: z.buffer(),
	DefaultUserCrop: z.number(),
	DepthFormat: z.number(),
	DepthNear: z.number(),
	DepthFar: z.number(),
	DepthUnits: z.number(),
	DepthMeasureType: z.number(),
	EnhanceParams: z.string(),
	//ProfileGainTableMap: z.buffer(),
	SemanticName: z.string(),
	SemanticInstanceID: z.string(),
	CalibrationIlluminant3: z.number(),
	CameraCalibration3: z.number(),
	ColorMatrix3: z.number(),
	ForwardMatrix3: z.number(),
	//IlluminantData1: z.buffer(),
	//IlluminantData2: z.buffer(),
	//IlluminantData3: z.buffer(),
	MaskSubArea: z.number(),
	//ProfileHueSatMapData3: z.buffer(),
	ReductionMatrix3: z.number(),
	//RGBTables: z.buffer(),
})
	.describe('Contains EXIF tags for Image group (IFD).');

const PhotoTags = z.object({
	ExposureTime: z.number()
		.describe('Exposure time, given in seconds (sec).'),
	FNumber: z.number()
		.describe('The F number.'),
	ExposureProgram: z.number()
		.describe('The class of the program used by the camera to set exposure when the picture is taken.'),
	SpectralSensitivity: z.string()
		.describe('Indicates the spectral sensitivity of each channel of the camera used. The tag value is an ASCII string compatible with the standard developed by the ASTM Technical Committee.'),
	ISOSpeedRatings: z.number()
		.describe('Indicates the ISO Speed and ISO Latitude of the camera or input device as specified in ISO 12232.'),
	//OECF: z.buffer()
	//	.describe('Indicates the Opto-Electoric Conversion Function (OECF) specified in ISO 14524. OECF is the relationship between the camera optical input and the image values.'),
	SensitivityType: z.number()
		.describe('The SensitivityType tag indicates which one of the parameters of ISO12232 is the PhotographicSensitivity tag. Although it is an optional tag, it should be recorded when a PhotographicSensitivity tag is recorded. Value = 4, 5, 6, or 7 may be used in case that the values of plural parameters are the same.'),
	StandardOutputSensitivity: z.number()
		.describe('This tag indicates the standard output sensitivity value of a camera or input device defined in ISO 12232. When recording this tag, the PhotographicSensitivity and SensitivityType tags shall also be recorded.'),
	RecommendedExposureIndex: z.number()
		.describe('This tag indicates the recommended exposure index value of a camera or input device defined in ISO 12232. When recording this tag, the PhotographicSensitivity and SensitivityType tags shall also be recorded.'),
	ISOSpeed: z.number()
		.describe('This tag indicates the ISO speed value of a camera or input device that is defined in ISO 12232. When recording this tag, the PhotographicSensitivity and SensitivityType tags shall also be recorded.'),
	ISOSpeedLatitudeyyy: z.number()
		.describe('This tag indicates the ISO speed latitude yyy value of a camera or input device that is defined in ISO 12232. However, this tag shall not be recorded without ISOSpeed and ISOSpeedLatitudezzz.'),
	ISOSpeedLatitudezzz: z.number()
		.describe('This tag indicates the ISO speed latitude zzz value of a camera or input device that is defined in ISO 12232. However, this tag shall not be recorded without ISOSpeed and ISOSpeedLatitudeyyy.'),
	//ExifVersion: z.buffer()  // Four byte ASCII buffer.
	//	.describe('The version of this standard supported. Nonexistence of this field is taken to mean nonconformance to the standard.'),
	DateTimeOriginal: z.iso.datetime()
		.describe('The date and time when the original image data was generated. For a digital still camera the date and time the picture was taken are recorded.'),
	DateTimeDigitized: z.iso.datetime()
		.describe('The date and time when the image was stored as digital data.'),
	OffsetTime: z.string(),
	OffsetTimeOriginal: z.string(),
	OffsetTimeDigitized: z.string(),
	//ComponentsConfiguration: z.buffer()
	//	.describe('Information specific to compressed data. The channels of each component are arranged in order from the 1st component to the 4th. For uncompressed data the data arrangement is given in the PhotometricInterpretation tag. However, since PhotometricInterpretation can only express the order of Y, Cb and Cr, this tag is provided for cases when compressed data uses components other than Y, Cb, and Cr and to enable support of other sequences.'),
	CompressedBitsPerPixel: z.number()
		.describe('Information specific to compressed data. The compression mode used for a compressed image is indicated in unit bits per pixel.'),
	ShutterSpeedValue: z.number()
		.describe('Shutter speed. The unit is the APEX (Additive System of Photographic Exposure) setting.'),
	ApertureValue: z.number()
		.describe('The lens aperture. The unit is the APEX value.'),
	BrightnessValue: z.number()
		.describe('The value of brightness. The unit is the APEX value. Ordinarily it is given in the range of -99.99 to 99.99.'),
	ExposureBiasValue: z.number()
		.describe('The exposure bias. The units is the APEX value. Ordinarily it is given in the range of -99.99 to 99.99.'),
	MaxApertureValue: z.number()
		.describe('The smallest F number of the lens. The unit is the APEX value. Ordinarily it is given in the range of 00.00 to 99.99, but it is not limited to this range.'),
	SubjectDistance: z.number()
		.describe('The distance to the subject, given in meters.'),
	MeteringMode: z.number()
		.describe('The metering mode.'),
	LightSource: z.number()
		.describe('The kind of light source.'),
	Flash: z.number()
		.describe('This tag is recorded when an image is taken using a strobe light (flash).'),
	FocalLength: z.number()
		.describe('The actual focal length of the lens, in mm. Conversion is not made to the focal length of a 35 mm film camera.'),
	SubjectArea: z.array(z.number())
		.describe('This tag indicates the location and area of the main subject in the overall scene.'),
	//MakerNote: z.buffer()
	//	.describe('A tag for manufacturers of Exif writers to record any desired information. The contents are up to the manufacturer.'),
	//UserComment: z.buffer()
	//	.describe('A tag for Exif users to write keywords or comments on the image besides those in ImageDescription, and without the character code limitations of the ImageDescription tag.'),
	SubSecTime: z.string()
		.describe("A tag used to record fractions of seconds for the DateTime tag."),
	SubSecTimeOriginal: z.string()
		.describe("A tag used to record fractions of seconds for the DateTimeOriginal tag."),
	SubSecTimeDigitized: z.string()
		.describe('A tag used to record fractions of seconds for the DateTimeDigitized tag.'),
	Temperature: z.number(),
	Humidity: z.number(),
	Pressure: z.number(),
	WaterDepth: z.number(),
	Acceleration: z.number(),
	CameraElevationAngle: z.number(),
	//FlashpixVersion: z.buffer()  // Four byte ASCII buffer.
	//	.describe('The FlashPix format version supported by a FPXR file.'),
	ColorSpace: z.number()
		.describe('The color space information tag is always recorded as the color space specifier. Normally sRGB is used to define the color space based on the PC monitor conditions and environment. If a color space other than sRGB is used, Uncalibrated is set. Image data recorded as Uncalibrated can be treated as sRGB when it is converted to FlashPix.'),
	PixelXDimension: z.number()
		.describe('Information specific to compressed data. When a compressed file is recorded, the valid width of the meaningful image must be recorded in this tag, whether or not there is padding data or a restart marker. This tag should not exist in an uncompressed file.'),
	PixelYDimension: z.number()
		.describe('Information specific to compressed data. When a compressed file is recorded, the valid height of the meaningful image must be recorded in this tag, whether or not there is padding data or a restart marker. This tag should not exist in an uncompressed file. Since data padding is unnecessary in the vertical direction, the number of lines recorded in this valid image height tag will in fact be the same as that recorded in the SOF.'),
	RelatedSoundFile: z.string()
		.describe('This tag is used to record the name of an audio file related to the image data. The only relational information recorded here is the Exif audio file name and extension (an ASCII string consisting of 8 characters + \'.\' + 3 characters). The path is not recorded.'),
	InteroperabilityTag: z.number()
		.describe('Interoperability IFD is composed of tags which stores the information to ensure the Interoperability and pointed by the following tag located in Exif IFD. The Interoperability structure of Interoperability IFD is the same as TIFF defined IFD structure but does not contain the image data characteristically compared with normal TIFF IFD.'),
	FlashEnergy: z.number()
		.describe('Indicates the strobe energy at the time the image is captured, as measured in Beam Candle Power Seconds (BCPS).'),
	//SpatialFrequencyResponse: z.buffer()
	//	.describe('This tag records the camera or input device spatial frequency table and SFR values in the direction of image width, image height, and diagonal direction, as specified in ISO 12233.'),
	FocalPlaneXResolution: z.number()
		.describe('Indicates the number of pixels in the image width (X) direction per FocalPlaneResolutionUnit on the camera focal plane.'),
	FocalPlaneYResolution: z.number()
		.describe('Indicates the number of pixels in the image height (V) direction per FocalPlaneResolutionUnit on the camera focal plane.'),
	FocalPlaneResolutionUnit: z.number()
		.describe('Indicates the unit for measuring FocalPlaneXResolution and FocalPlaneYResolution. This value is the same as the ResolutionUnit.'),
	SubjectLocation: z.array(z.number())
		.describe('Indicates the location of the main subject in the scene. The value of this tag represents the pixel at the center of the main subject relative to the left edge, prior to rotation processing as per the Rotation tag. The first value indicates the X column number and second indicates the Y row number.'),
	ExposureIndex: z.number()
		.describe('Indicates the exposure index selected on the camera or input device at the time the image is captured.'),
	SensingMethod: z.number()
		.describe('Indicates the image sensor type on the camera or input device.'),
	//FileSource: z.buffer()
	//	.describe('Indicates the image source. If a DSC recorded the image, this tag value of this tag always be set to 3, indicating that the image was recorded on a DSC.'),
	//SceneType: z.buffer()
	//	.describe('Indicates the type of scene. If a DSC recorded the image, this tag value must always be set to 1, indicating that the image was directly photographed.'),
	//CFAPattern: z.buffer()
	//	.describe('Indicates the color filter array (CFA) geometric pattern of the image sensor when a one-chip color area sensor is used. It does not apply to all sensing methods.'),
	CustomRendered: z.number()
		.describe('This tag indicates the use of special processing on image data, such as rendering geared to output. When special processing is performed, the reader is expected to disable or minimize any further processing.'),
	ExposureMode: z.number()
		.describe('This tag indicates the exposure mode set when the image was shot. In auto-bracketing mode, the camera shoots a series of frames of the same scene at different exposure settings.'),
	WhiteBalance: z.number()
		.describe('This tag indicates the white balance mode set when the image was shot.'),
	DigitalZoomRatio: z.number()
		.describe('This tag indicates the digital zoom ratio when the image was shot. If the numerator of the recorded value is 0, this indicates that digital zoom was not used.'),
	FocalLengthIn35mmFilm: z.number()
		.describe('This tag indicates the equivalent focal length assuming a 35mm film camera, in mm. A value of 0 means the focal length is unknown. Note that this tag differs from the FocalLength tag.'),
	SceneCaptureType: z.number()
		.describe('This tag indicates the type of scene that was shot. It can also be used to record the mode in which the image was shot. Note that this differs from the SceneType tag.'),
	GainControl: z.number()
		.describe('This tag indicates the degree of overall image gain adjustment.'),
	Contrast: z.number()
		.describe('This tag indicates the direction of contrast processing applied by the camera when the image was shot.'),
	Saturation: z.number()
		.describe('This tag indicates the direction of saturation processing applied by the camera when the image was shot.'),
	Sharpness: z.number()
		.describe('This tag indicates the direction of sharpness processing applied by the camera when the image was shot.'),
	//DeviceSettingDescription: z.buffer()
	//	.describe('This tag indicates information on the picture-taking conditions of a particular camera model. The tag is used only to indicate the picture-taking conditions in the reader.'),
	SubjectDistanceRange: z.number()
		.describe('This tag indicates the distance to the subject.'),
	ImageUniqueID: z.string()
		.describe('This tag indicates an identifier assigned uniquely to each image. It is recorded as an ASCII string equivalent to hexadecimal notation and 128-bit fixed length.'),
	CameraOwnerName: z.string()
		.describe('This tag records the owner of a camera used in photography as an ASCII string.'),
	BodySerialNumber: z.string()
		.describe('This tag records the serial number of the body of the camera that was used in photography as an ASCII string.'),
	LensSpecification: z.array(z.number())
		.describe('This tag notes minimum focal length, maximum focal length, minimum F number in the minimum focal length, and minimum F number in the maximum focal length, which are specification information for the lens that was used in photography. When the minimum F number is unknown, the notation is 0/0.'),
	LensMake: z.string()
		.describe('This tag records the lens manufactor as an ASCII string.'),
	LensModel: z.string()
		.describe('This tag records the lens\'s model name and model number as an ASCII string.'),
	LensSerialNumber: z.string()
		.describe('This tag records the serial number of the interchangeable lens that was used in photography as an ASCII string.'),
	CompositeImage: z.number(),
	SourceImageNumberOfCompositeImage: z.number(),
	//SourceExposureTimesOfCompositeImage: z.buffer(),
	Gamma: z.number(),
})
	.describe('Contains EXIF tags for Photo group (IFD).');

const IopTags = z.object({
	InteroperabilityIndex: z.string()
		.describe('ndicates the identification of the Interoperability rule. Use "R98" for stating ExifR98 Rules. Four bytes used including the termination code (NULL). see the separate volume of Recommended Exif Interoperability Rules (ExifR98) for other tags used for ExifR98.'),
	//InteroperabilityVersion: z.buffer()  // Code String (CS)
	//	.describe('Interoperability version'),
	RelatedImageFileFormat: z.string()
		.describe('File format of image file.'),
	RelatedImageWidth: z.number()
		.describe('Image width.'),
	RelatedImageLength: z.number()
		.describe('Image height.'),
})
	.describe('Contains EXIF tags for Iop group (IFD).');

const GPSInfoTags = z.object({
	GPSVersionID: z.array(z.number())
		.describe('Indicates the version of GPSInfoIFD. The version is given as 2.0.0.0. This tag is mandatory when GPSInfo tag is present. (Note: The GPSVersionID tag is given in bytes, unlike the ExifVersion tag. When the version is 2.0.0.0, the tag value is 02000000.H).'),
	GPSLatitudeRef: z.string()
		.describe('Indicates whether the latitude is north or south latitude. The ASCII value \'N\' indicates north latitude, and \'S\' is south latitude.'),
	GPSLatitude: z.array(z.number())
		.describe(' Indicates the latitude. The latitude is expressed as three RATIONAL values giving the degrees, minutes, and seconds, respectively. When degrees, minutes and seconds are expressed, the format is dd/1,mm/1,ss/1. When degrees and minutes are used and, for example, fractions of minutes are given up to two decimal places, the format is dd/1,mmmm/100,0/1.'),
	GPSLongitudeRef: z.string()
		.describe('Indicates whether the longitude is east or west longitude. ASCII \'E\' indicates east longitude, and \'W\' is west longitude.'),
	GPSLongitude: z.array(z.number())
		.describe('Indicates the longitude. The longitude is expressed as three RATIONAL values giving the degrees, minutes, and seconds, respectively. When degrees, minutes and seconds are expressed, the format is ddd/1,mm/1,ss/1. When degrees and minutes are used and, for example, fractions of minutes are given up to two decimal places, the format is ddd/1,mmmm/100,0/1.'),
	GPSAltitudeRef: z.number()
		.describe('Indicates the altitude used as the reference altitude. If the reference is sea level and the altitude is above sea level, 0 is given. If the altitude is below sea level, a value of 1 is given and the altitude is indicated as an absolute value in the GSPAltitude tag. The reference unit is meters. Note that this tag is BYTE type, unlike other reference tags.'),
	GPSAltitude: z.number()
		.describe('Indicates the altitude based on the reference in GPSAltitudeRef. Altitude is expressed as one RATIONAL value. The reference unit is meters.'),
	GPSTimeStamp: z.array(z.number())
		.describe('Indicates the time as UTC (Coordinated Universal Time). TimeStamp is expressed as three RATIONAL values giving the hour, minute, and second (atomic clock).'),
	GPSSatellites: z.string()
		.describe('Indicates the GPS satellites used for measurements. This tag can be used to describe the number of satellites, their ID number, angle of elevation, azimuth, SNR and other information in ASCII notation. The format is not specified.'),
	GPSStatus: z.string()
		.describe('Indicates the status of the GPS receiver when the image is recorded. "A" means measurement is in progress, and "V" means the measurement is Interoperability.'),
	GPSMeasureMode: z.string()
		.describe('Indicates the GPS measurement mode. "2" means two-dimensional measurement and "3" means three-dimensional measurement is in progress.'),
	GPSDOP: z.number()
		.describe('Indicates the GPS DOP (data degree of precision). An HDOP value is written during two-dimensional measurement, and PDOP during three-dimensional measurement.'),
	GPSSpeedRef: z.string()
		.describe('Indicates the unit used to express the GPS receiver speed of movement. "K" "M" and "N" represents kilometers per hour, miles per hour, and knots.'),
	GPSSpeed: z.number()
		.describe('Indicates the speed of GPS receiver movement.'),
	GPSTrackRef: z.string()
		.describe('Indicates the reference for giving the direction of GPS receiver movement. "T" denotes true direction and "M" is magnetic direction.'),
	GPSTrack: z.number()
		.describe('Indicates the direction of GPS receiver movement. The range of values is from 0.00 to 359.99.'),
	GPSImgDirectionRef: z.string()
		.describe('Indicates the reference for giving the direction of the image when it is captured. "T" denotes true direction and "M" is magnetic direction.'),
	GPSImgDirection: z.number()
		.describe('Indicates the direction of the image when it was captured. The range of values is from 0.00 to 359.99.'),
	GPSMapDatum: z.string()
		.describe('Indicates the geodetic survey data used by the GPS receiver. If the survey data is restricted to Japan, the value of this tag is "TOKYO" or "WGS-84".'),
	GPSDestLatitudeRef: z.string()
		.describe('Indicates whether the latitude of the destination point is north or south latitude. The ASCII value "N" indicates north latitude, and "S" is south latitude.'),
	GPSDestLatitude: z.array(z.number())
		.describe('Indicates the latitude of the destination point. The latitude is expressed as three RATIONAL values giving the degrees, minutes, and seconds, respectively. If latitude is expressed as degrees, minutes and seconds, a typical format would be dd/1,mm/1,ss/1. When degrees and minutes are used and, for example, fractions of minutes are given up to two decimal places, the format would be dd/1,mmmm/100,0/1.'),
	GPSDestLongitudeRef: z.string()
		.describe('Indicates whether the latitude of the destination point is north or south latitude. The ASCII value "N" indicates north latitude, and "S" is south latitude.'),
	GPSDestLongitude: z.array(z.number())
		.describe('Indicates the longitude of the destination point. The longitude is expressed as three RATIONAL values giving the degrees, minutes, and seconds, respectively. If longitude is expressed as degrees, minutes and seconds, a typical format would be ddd/1,mm/1,ss/1. When degrees and minutes are used and, for example, fractions of minutes are given up to two decimal places, the format would be ddd/1,mmmm/100,0/1.'),
	GPSDestBearingRef: z.string()
		.describe('Indicates the reference used for giving the bearing to the destination point. "T" denotes true direction and "M" is magnetic direction.'),
	GPSDestBearing: z.number()
		.describe('Indicates the bearing to the destination point. The range of values is from 0.00 to 359.99.'),
	GPSDestDistanceRef: z.string()
		.describe('Indicates the unit used to express the distance to the destination point. "K", "M" and "N" represent kilometers, miles and knots.'),
	GPSDestDistance: z.number()
		.describe('Indicates the distance to the destination point.'),
	//GPSProcessingMethod: z.buffer()  // Not ASCII string.
	//	.describe('A character string recording the name of the method used for location finding. The string encoding is defined using the same scheme as UserComment.'),
	//GPSAreaInformation: z.buffer()  // Not ASCII string.
	//	.describe('A character string recording the name of the GPS area.The string encoding is defined using the same scheme as UserComment.'),
	GPSDateStamp: z.string()
		.describe('A character string recording date and time information relative to UTC (Coordinated Universal Time). The format is "YYYY:MM:DD.".'),
	GPSDifferential: z.number()
		.describe('Indicates whether differential correction is applied to the GPS receiver.'),
	GPSHPositioningError: z.number(),
})
	.describe('Contains EXIF tags for GPSInfo group (IFD).');

export const ExifMetadata = z.object({
	Image: ImageTags.partial().optional(),
	Photo: PhotoTags.partial().optional(),
	Iop: IopTags.partial().optional(),
	GPSInfo: GPSInfoTags.partial().optional(),
	//ThumbnailTags: ThumbnailTags.partial().optional(),
})
	.describe('Metadata from the EXIF standard.');
export type ExifMetadata = z.infer<typeof ExifMetadata>;
