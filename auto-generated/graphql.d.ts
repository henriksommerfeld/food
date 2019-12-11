export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  /** 
 * A date string, such as 2007-12-03, compliant with the ISO 8601 standard for
   * representation of dates and times using the Gregorian calendar.
 */
  Date: any,
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any,
  /** Serialized elasticlunr search index */
  SiteSearchIndex_Index: any,
};











export type BooleanQueryOperatorInput = {
  eq?: Maybe<Scalars['Boolean']>,
  ne?: Maybe<Scalars['Boolean']>,
  in?: Maybe<Array<Maybe<Scalars['Boolean']>>>,
  nin?: Maybe<Array<Maybe<Scalars['Boolean']>>>,
};


export type DateQueryOperatorInput = {
  eq?: Maybe<Scalars['Date']>,
  ne?: Maybe<Scalars['Date']>,
  gt?: Maybe<Scalars['Date']>,
  gte?: Maybe<Scalars['Date']>,
  lt?: Maybe<Scalars['Date']>,
  lte?: Maybe<Scalars['Date']>,
  in?: Maybe<Array<Maybe<Scalars['Date']>>>,
  nin?: Maybe<Array<Maybe<Scalars['Date']>>>,
};

export type Directory = Node & {
   __typename?: 'Directory',
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  sourceInstanceName?: Maybe<Scalars['String']>,
  absolutePath?: Maybe<Scalars['String']>,
  relativePath?: Maybe<Scalars['String']>,
  extension?: Maybe<Scalars['String']>,
  size?: Maybe<Scalars['Int']>,
  prettySize?: Maybe<Scalars['String']>,
  modifiedTime?: Maybe<Scalars['Date']>,
  accessTime?: Maybe<Scalars['Date']>,
  changeTime?: Maybe<Scalars['Date']>,
  birthTime?: Maybe<Scalars['Date']>,
  root?: Maybe<Scalars['String']>,
  dir?: Maybe<Scalars['String']>,
  base?: Maybe<Scalars['String']>,
  ext?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  relativeDirectory?: Maybe<Scalars['String']>,
  dev?: Maybe<Scalars['Int']>,
  mode?: Maybe<Scalars['Int']>,
  nlink?: Maybe<Scalars['Int']>,
  uid?: Maybe<Scalars['Int']>,
  gid?: Maybe<Scalars['Int']>,
  rdev?: Maybe<Scalars['Int']>,
  blksize?: Maybe<Scalars['Int']>,
  ino?: Maybe<Scalars['Int']>,
  blocks?: Maybe<Scalars['Int']>,
  atimeMs?: Maybe<Scalars['Float']>,
  mtimeMs?: Maybe<Scalars['Float']>,
  ctimeMs?: Maybe<Scalars['Float']>,
  birthtimeMs?: Maybe<Scalars['Float']>,
  atime?: Maybe<Scalars['Date']>,
  mtime?: Maybe<Scalars['Date']>,
  ctime?: Maybe<Scalars['Date']>,
  birthtime?: Maybe<Scalars['Date']>,
};


export type DirectoryModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type DirectoryAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type DirectoryChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type DirectoryBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type DirectoryAtimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type DirectoryMtimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type DirectoryCtimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type DirectoryBirthtimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};

export type DirectoryConnection = {
   __typename?: 'DirectoryConnection',
  totalCount: Scalars['Int'],
  edges: Array<DirectoryEdge>,
  nodes: Array<Directory>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<DirectoryGroupConnection>,
};


export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldsEnum
};


export type DirectoryConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: DirectoryFieldsEnum
};

export type DirectoryEdge = {
   __typename?: 'DirectoryEdge',
  next?: Maybe<Directory>,
  node: Directory,
  previous?: Maybe<Directory>,
};

export enum DirectoryFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  SourceInstanceName = 'sourceInstanceName',
  AbsolutePath = 'absolutePath',
  RelativePath = 'relativePath',
  Extension = 'extension',
  Size = 'size',
  PrettySize = 'prettySize',
  ModifiedTime = 'modifiedTime',
  AccessTime = 'accessTime',
  ChangeTime = 'changeTime',
  BirthTime = 'birthTime',
  Root = 'root',
  Dir = 'dir',
  Base = 'base',
  Ext = 'ext',
  Name = 'name',
  RelativeDirectory = 'relativeDirectory',
  Dev = 'dev',
  Mode = 'mode',
  Nlink = 'nlink',
  Uid = 'uid',
  Gid = 'gid',
  Rdev = 'rdev',
  Blksize = 'blksize',
  Ino = 'ino',
  Blocks = 'blocks',
  AtimeMs = 'atimeMs',
  MtimeMs = 'mtimeMs',
  CtimeMs = 'ctimeMs',
  BirthtimeMs = 'birthtimeMs',
  Atime = 'atime',
  Mtime = 'mtime',
  Ctime = 'ctime',
  Birthtime = 'birthtime'
}

export type DirectoryFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  sourceInstanceName?: Maybe<StringQueryOperatorInput>,
  absolutePath?: Maybe<StringQueryOperatorInput>,
  relativePath?: Maybe<StringQueryOperatorInput>,
  extension?: Maybe<StringQueryOperatorInput>,
  size?: Maybe<IntQueryOperatorInput>,
  prettySize?: Maybe<StringQueryOperatorInput>,
  modifiedTime?: Maybe<DateQueryOperatorInput>,
  accessTime?: Maybe<DateQueryOperatorInput>,
  changeTime?: Maybe<DateQueryOperatorInput>,
  birthTime?: Maybe<DateQueryOperatorInput>,
  root?: Maybe<StringQueryOperatorInput>,
  dir?: Maybe<StringQueryOperatorInput>,
  base?: Maybe<StringQueryOperatorInput>,
  ext?: Maybe<StringQueryOperatorInput>,
  name?: Maybe<StringQueryOperatorInput>,
  relativeDirectory?: Maybe<StringQueryOperatorInput>,
  dev?: Maybe<IntQueryOperatorInput>,
  mode?: Maybe<IntQueryOperatorInput>,
  nlink?: Maybe<IntQueryOperatorInput>,
  uid?: Maybe<IntQueryOperatorInput>,
  gid?: Maybe<IntQueryOperatorInput>,
  rdev?: Maybe<IntQueryOperatorInput>,
  blksize?: Maybe<IntQueryOperatorInput>,
  ino?: Maybe<IntQueryOperatorInput>,
  blocks?: Maybe<IntQueryOperatorInput>,
  atimeMs?: Maybe<FloatQueryOperatorInput>,
  mtimeMs?: Maybe<FloatQueryOperatorInput>,
  ctimeMs?: Maybe<FloatQueryOperatorInput>,
  birthtimeMs?: Maybe<FloatQueryOperatorInput>,
  atime?: Maybe<DateQueryOperatorInput>,
  mtime?: Maybe<DateQueryOperatorInput>,
  ctime?: Maybe<DateQueryOperatorInput>,
  birthtime?: Maybe<DateQueryOperatorInput>,
};

export type DirectoryGroupConnection = {
   __typename?: 'DirectoryGroupConnection',
  totalCount: Scalars['Int'],
  edges: Array<DirectoryEdge>,
  nodes: Array<Directory>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type DirectorySortInput = {
  fields?: Maybe<Array<Maybe<DirectoryFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type DuotoneGradient = {
  highlight: Scalars['String'],
  shadow: Scalars['String'],
  opacity?: Maybe<Scalars['Int']>,
};

export type File = Node & {
   __typename?: 'File',
  birthtime?: Maybe<Scalars['Date']>,
  birthtimeMs?: Maybe<Scalars['Float']>,
  sourceInstanceName?: Maybe<Scalars['String']>,
  absolutePath?: Maybe<Scalars['String']>,
  relativePath?: Maybe<Scalars['String']>,
  extension?: Maybe<Scalars['String']>,
  size?: Maybe<Scalars['Int']>,
  prettySize?: Maybe<Scalars['String']>,
  modifiedTime?: Maybe<Scalars['Date']>,
  accessTime?: Maybe<Scalars['Date']>,
  changeTime?: Maybe<Scalars['Date']>,
  birthTime?: Maybe<Scalars['Date']>,
  root?: Maybe<Scalars['String']>,
  dir?: Maybe<Scalars['String']>,
  base?: Maybe<Scalars['String']>,
  ext?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  relativeDirectory?: Maybe<Scalars['String']>,
  dev?: Maybe<Scalars['Int']>,
  mode?: Maybe<Scalars['Int']>,
  nlink?: Maybe<Scalars['Int']>,
  uid?: Maybe<Scalars['Int']>,
  gid?: Maybe<Scalars['Int']>,
  rdev?: Maybe<Scalars['Int']>,
  blksize?: Maybe<Scalars['Int']>,
  ino?: Maybe<Scalars['Int']>,
  blocks?: Maybe<Scalars['Int']>,
  atimeMs?: Maybe<Scalars['Float']>,
  mtimeMs?: Maybe<Scalars['Float']>,
  ctimeMs?: Maybe<Scalars['Float']>,
  atime?: Maybe<Scalars['Date']>,
  mtime?: Maybe<Scalars['Date']>,
  ctime?: Maybe<Scalars['Date']>,
  /** Copy file to static directory and return public url to it */
  publicURL?: Maybe<Scalars['String']>,
  childImageSharp?: Maybe<ImageSharp>,
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  childMarkdownRemark?: Maybe<MarkdownRemark>,
};


export type FileModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type FileAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type FileChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type FileBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type FileAtimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type FileMtimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type FileCtimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};

export type FileConnection = {
   __typename?: 'FileConnection',
  totalCount: Scalars['Int'],
  edges: Array<FileEdge>,
  nodes: Array<File>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<FileGroupConnection>,
};


export type FileConnectionDistinctArgs = {
  field: FileFieldsEnum
};


export type FileConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: FileFieldsEnum
};

export type FileEdge = {
   __typename?: 'FileEdge',
  next?: Maybe<File>,
  node: File,
  previous?: Maybe<File>,
};

export enum FileFieldsEnum {
  Birthtime = 'birthtime',
  BirthtimeMs = 'birthtimeMs',
  SourceInstanceName = 'sourceInstanceName',
  AbsolutePath = 'absolutePath',
  RelativePath = 'relativePath',
  Extension = 'extension',
  Size = 'size',
  PrettySize = 'prettySize',
  ModifiedTime = 'modifiedTime',
  AccessTime = 'accessTime',
  ChangeTime = 'changeTime',
  BirthTime = 'birthTime',
  Root = 'root',
  Dir = 'dir',
  Base = 'base',
  Ext = 'ext',
  Name = 'name',
  RelativeDirectory = 'relativeDirectory',
  Dev = 'dev',
  Mode = 'mode',
  Nlink = 'nlink',
  Uid = 'uid',
  Gid = 'gid',
  Rdev = 'rdev',
  Blksize = 'blksize',
  Ino = 'ino',
  Blocks = 'blocks',
  AtimeMs = 'atimeMs',
  MtimeMs = 'mtimeMs',
  CtimeMs = 'ctimeMs',
  Atime = 'atime',
  Mtime = 'mtime',
  Ctime = 'ctime',
  PublicUrl = 'publicURL',
  ChildImageSharpFixedBase64 = 'childImageSharp___fixed___base64',
  ChildImageSharpFixedTracedSvg = 'childImageSharp___fixed___tracedSVG',
  ChildImageSharpFixedAspectRatio = 'childImageSharp___fixed___aspectRatio',
  ChildImageSharpFixedWidth = 'childImageSharp___fixed___width',
  ChildImageSharpFixedHeight = 'childImageSharp___fixed___height',
  ChildImageSharpFixedSrc = 'childImageSharp___fixed___src',
  ChildImageSharpFixedSrcSet = 'childImageSharp___fixed___srcSet',
  ChildImageSharpFixedSrcWebp = 'childImageSharp___fixed___srcWebp',
  ChildImageSharpFixedSrcSetWebp = 'childImageSharp___fixed___srcSetWebp',
  ChildImageSharpFixedOriginalName = 'childImageSharp___fixed___originalName',
  ChildImageSharpResolutionsBase64 = 'childImageSharp___resolutions___base64',
  ChildImageSharpResolutionsTracedSvg = 'childImageSharp___resolutions___tracedSVG',
  ChildImageSharpResolutionsAspectRatio = 'childImageSharp___resolutions___aspectRatio',
  ChildImageSharpResolutionsWidth = 'childImageSharp___resolutions___width',
  ChildImageSharpResolutionsHeight = 'childImageSharp___resolutions___height',
  ChildImageSharpResolutionsSrc = 'childImageSharp___resolutions___src',
  ChildImageSharpResolutionsSrcSet = 'childImageSharp___resolutions___srcSet',
  ChildImageSharpResolutionsSrcWebp = 'childImageSharp___resolutions___srcWebp',
  ChildImageSharpResolutionsSrcSetWebp = 'childImageSharp___resolutions___srcSetWebp',
  ChildImageSharpResolutionsOriginalName = 'childImageSharp___resolutions___originalName',
  ChildImageSharpFluidBase64 = 'childImageSharp___fluid___base64',
  ChildImageSharpFluidTracedSvg = 'childImageSharp___fluid___tracedSVG',
  ChildImageSharpFluidAspectRatio = 'childImageSharp___fluid___aspectRatio',
  ChildImageSharpFluidSrc = 'childImageSharp___fluid___src',
  ChildImageSharpFluidSrcSet = 'childImageSharp___fluid___srcSet',
  ChildImageSharpFluidSrcWebp = 'childImageSharp___fluid___srcWebp',
  ChildImageSharpFluidSrcSetWebp = 'childImageSharp___fluid___srcSetWebp',
  ChildImageSharpFluidSizes = 'childImageSharp___fluid___sizes',
  ChildImageSharpFluidOriginalImg = 'childImageSharp___fluid___originalImg',
  ChildImageSharpFluidOriginalName = 'childImageSharp___fluid___originalName',
  ChildImageSharpFluidPresentationWidth = 'childImageSharp___fluid___presentationWidth',
  ChildImageSharpFluidPresentationHeight = 'childImageSharp___fluid___presentationHeight',
  ChildImageSharpSizesBase64 = 'childImageSharp___sizes___base64',
  ChildImageSharpSizesTracedSvg = 'childImageSharp___sizes___tracedSVG',
  ChildImageSharpSizesAspectRatio = 'childImageSharp___sizes___aspectRatio',
  ChildImageSharpSizesSrc = 'childImageSharp___sizes___src',
  ChildImageSharpSizesSrcSet = 'childImageSharp___sizes___srcSet',
  ChildImageSharpSizesSrcWebp = 'childImageSharp___sizes___srcWebp',
  ChildImageSharpSizesSrcSetWebp = 'childImageSharp___sizes___srcSetWebp',
  ChildImageSharpSizesSizes = 'childImageSharp___sizes___sizes',
  ChildImageSharpSizesOriginalImg = 'childImageSharp___sizes___originalImg',
  ChildImageSharpSizesOriginalName = 'childImageSharp___sizes___originalName',
  ChildImageSharpSizesPresentationWidth = 'childImageSharp___sizes___presentationWidth',
  ChildImageSharpSizesPresentationHeight = 'childImageSharp___sizes___presentationHeight',
  ChildImageSharpOriginalWidth = 'childImageSharp___original___width',
  ChildImageSharpOriginalHeight = 'childImageSharp___original___height',
  ChildImageSharpOriginalSrc = 'childImageSharp___original___src',
  ChildImageSharpResizeSrc = 'childImageSharp___resize___src',
  ChildImageSharpResizeTracedSvg = 'childImageSharp___resize___tracedSVG',
  ChildImageSharpResizeWidth = 'childImageSharp___resize___width',
  ChildImageSharpResizeHeight = 'childImageSharp___resize___height',
  ChildImageSharpResizeAspectRatio = 'childImageSharp___resize___aspectRatio',
  ChildImageSharpResizeOriginalName = 'childImageSharp___resize___originalName',
  ChildImageSharpId = 'childImageSharp___id',
  ChildImageSharpParentId = 'childImageSharp___parent___id',
  ChildImageSharpParentParentId = 'childImageSharp___parent___parent___id',
  ChildImageSharpParentParentChildren = 'childImageSharp___parent___parent___children',
  ChildImageSharpParentChildren = 'childImageSharp___parent___children',
  ChildImageSharpParentChildrenId = 'childImageSharp___parent___children___id',
  ChildImageSharpParentChildrenChildren = 'childImageSharp___parent___children___children',
  ChildImageSharpParentInternalContent = 'childImageSharp___parent___internal___content',
  ChildImageSharpParentInternalContentDigest = 'childImageSharp___parent___internal___contentDigest',
  ChildImageSharpParentInternalDescription = 'childImageSharp___parent___internal___description',
  ChildImageSharpParentInternalFieldOwners = 'childImageSharp___parent___internal___fieldOwners',
  ChildImageSharpParentInternalIgnoreType = 'childImageSharp___parent___internal___ignoreType',
  ChildImageSharpParentInternalMediaType = 'childImageSharp___parent___internal___mediaType',
  ChildImageSharpParentInternalOwner = 'childImageSharp___parent___internal___owner',
  ChildImageSharpParentInternalType = 'childImageSharp___parent___internal___type',
  ChildImageSharpChildren = 'childImageSharp___children',
  ChildImageSharpChildrenId = 'childImageSharp___children___id',
  ChildImageSharpChildrenParentId = 'childImageSharp___children___parent___id',
  ChildImageSharpChildrenParentChildren = 'childImageSharp___children___parent___children',
  ChildImageSharpChildrenChildren = 'childImageSharp___children___children',
  ChildImageSharpChildrenChildrenId = 'childImageSharp___children___children___id',
  ChildImageSharpChildrenChildrenChildren = 'childImageSharp___children___children___children',
  ChildImageSharpChildrenInternalContent = 'childImageSharp___children___internal___content',
  ChildImageSharpChildrenInternalContentDigest = 'childImageSharp___children___internal___contentDigest',
  ChildImageSharpChildrenInternalDescription = 'childImageSharp___children___internal___description',
  ChildImageSharpChildrenInternalFieldOwners = 'childImageSharp___children___internal___fieldOwners',
  ChildImageSharpChildrenInternalIgnoreType = 'childImageSharp___children___internal___ignoreType',
  ChildImageSharpChildrenInternalMediaType = 'childImageSharp___children___internal___mediaType',
  ChildImageSharpChildrenInternalOwner = 'childImageSharp___children___internal___owner',
  ChildImageSharpChildrenInternalType = 'childImageSharp___children___internal___type',
  ChildImageSharpInternalContent = 'childImageSharp___internal___content',
  ChildImageSharpInternalContentDigest = 'childImageSharp___internal___contentDigest',
  ChildImageSharpInternalDescription = 'childImageSharp___internal___description',
  ChildImageSharpInternalFieldOwners = 'childImageSharp___internal___fieldOwners',
  ChildImageSharpInternalIgnoreType = 'childImageSharp___internal___ignoreType',
  ChildImageSharpInternalMediaType = 'childImageSharp___internal___mediaType',
  ChildImageSharpInternalOwner = 'childImageSharp___internal___owner',
  ChildImageSharpInternalType = 'childImageSharp___internal___type',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  ChildMarkdownRemarkId = 'childMarkdownRemark___id',
  ChildMarkdownRemarkFrontmatterTitle = 'childMarkdownRemark___frontmatter___title',
  ChildMarkdownRemarkFrontmatterTemplateKey = 'childMarkdownRemark___frontmatter___templateKey',
  ChildMarkdownRemarkFrontmatterImageBirthtime = 'childMarkdownRemark___frontmatter___image___birthtime',
  ChildMarkdownRemarkFrontmatterImageBirthtimeMs = 'childMarkdownRemark___frontmatter___image___birthtimeMs',
  ChildMarkdownRemarkFrontmatterImageSourceInstanceName = 'childMarkdownRemark___frontmatter___image___sourceInstanceName',
  ChildMarkdownRemarkFrontmatterImageAbsolutePath = 'childMarkdownRemark___frontmatter___image___absolutePath',
  ChildMarkdownRemarkFrontmatterImageRelativePath = 'childMarkdownRemark___frontmatter___image___relativePath',
  ChildMarkdownRemarkFrontmatterImageExtension = 'childMarkdownRemark___frontmatter___image___extension',
  ChildMarkdownRemarkFrontmatterImageSize = 'childMarkdownRemark___frontmatter___image___size',
  ChildMarkdownRemarkFrontmatterImagePrettySize = 'childMarkdownRemark___frontmatter___image___prettySize',
  ChildMarkdownRemarkFrontmatterImageModifiedTime = 'childMarkdownRemark___frontmatter___image___modifiedTime',
  ChildMarkdownRemarkFrontmatterImageAccessTime = 'childMarkdownRemark___frontmatter___image___accessTime',
  ChildMarkdownRemarkFrontmatterImageChangeTime = 'childMarkdownRemark___frontmatter___image___changeTime',
  ChildMarkdownRemarkFrontmatterImageBirthTime = 'childMarkdownRemark___frontmatter___image___birthTime',
  ChildMarkdownRemarkFrontmatterImageRoot = 'childMarkdownRemark___frontmatter___image___root',
  ChildMarkdownRemarkFrontmatterImageDir = 'childMarkdownRemark___frontmatter___image___dir',
  ChildMarkdownRemarkFrontmatterImageBase = 'childMarkdownRemark___frontmatter___image___base',
  ChildMarkdownRemarkFrontmatterImageExt = 'childMarkdownRemark___frontmatter___image___ext',
  ChildMarkdownRemarkFrontmatterImageName = 'childMarkdownRemark___frontmatter___image___name',
  ChildMarkdownRemarkFrontmatterImageRelativeDirectory = 'childMarkdownRemark___frontmatter___image___relativeDirectory',
  ChildMarkdownRemarkFrontmatterImageDev = 'childMarkdownRemark___frontmatter___image___dev',
  ChildMarkdownRemarkFrontmatterImageMode = 'childMarkdownRemark___frontmatter___image___mode',
  ChildMarkdownRemarkFrontmatterImageNlink = 'childMarkdownRemark___frontmatter___image___nlink',
  ChildMarkdownRemarkFrontmatterImageUid = 'childMarkdownRemark___frontmatter___image___uid',
  ChildMarkdownRemarkFrontmatterImageGid = 'childMarkdownRemark___frontmatter___image___gid',
  ChildMarkdownRemarkFrontmatterImageRdev = 'childMarkdownRemark___frontmatter___image___rdev',
  ChildMarkdownRemarkFrontmatterImageBlksize = 'childMarkdownRemark___frontmatter___image___blksize',
  ChildMarkdownRemarkFrontmatterImageIno = 'childMarkdownRemark___frontmatter___image___ino',
  ChildMarkdownRemarkFrontmatterImageBlocks = 'childMarkdownRemark___frontmatter___image___blocks',
  ChildMarkdownRemarkFrontmatterImageAtimeMs = 'childMarkdownRemark___frontmatter___image___atimeMs',
  ChildMarkdownRemarkFrontmatterImageMtimeMs = 'childMarkdownRemark___frontmatter___image___mtimeMs',
  ChildMarkdownRemarkFrontmatterImageCtimeMs = 'childMarkdownRemark___frontmatter___image___ctimeMs',
  ChildMarkdownRemarkFrontmatterImageAtime = 'childMarkdownRemark___frontmatter___image___atime',
  ChildMarkdownRemarkFrontmatterImageMtime = 'childMarkdownRemark___frontmatter___image___mtime',
  ChildMarkdownRemarkFrontmatterImageCtime = 'childMarkdownRemark___frontmatter___image___ctime',
  ChildMarkdownRemarkFrontmatterImagePublicUrl = 'childMarkdownRemark___frontmatter___image___publicURL',
  ChildMarkdownRemarkFrontmatterImageId = 'childMarkdownRemark___frontmatter___image___id',
  ChildMarkdownRemarkFrontmatterImageChildren = 'childMarkdownRemark___frontmatter___image___children',
  ChildMarkdownRemarkFrontmatterHeading = 'childMarkdownRemark___frontmatter___heading',
  ChildMarkdownRemarkFrontmatterSubheading = 'childMarkdownRemark___frontmatter___subheading',
  ChildMarkdownRemarkFrontmatterDescription = 'childMarkdownRemark___frontmatter___description',
  ChildMarkdownRemarkFrontmatterDownloadableimages = 'childMarkdownRemark___frontmatter___downloadableimages',
  ChildMarkdownRemarkFrontmatterDownloadableimagesBirthtime = 'childMarkdownRemark___frontmatter___downloadableimages___birthtime',
  ChildMarkdownRemarkFrontmatterDownloadableimagesBirthtimeMs = 'childMarkdownRemark___frontmatter___downloadableimages___birthtimeMs',
  ChildMarkdownRemarkFrontmatterDownloadableimagesSourceInstanceName = 'childMarkdownRemark___frontmatter___downloadableimages___sourceInstanceName',
  ChildMarkdownRemarkFrontmatterDownloadableimagesAbsolutePath = 'childMarkdownRemark___frontmatter___downloadableimages___absolutePath',
  ChildMarkdownRemarkFrontmatterDownloadableimagesRelativePath = 'childMarkdownRemark___frontmatter___downloadableimages___relativePath',
  ChildMarkdownRemarkFrontmatterDownloadableimagesExtension = 'childMarkdownRemark___frontmatter___downloadableimages___extension',
  ChildMarkdownRemarkFrontmatterDownloadableimagesSize = 'childMarkdownRemark___frontmatter___downloadableimages___size',
  ChildMarkdownRemarkFrontmatterDownloadableimagesPrettySize = 'childMarkdownRemark___frontmatter___downloadableimages___prettySize',
  ChildMarkdownRemarkFrontmatterDownloadableimagesModifiedTime = 'childMarkdownRemark___frontmatter___downloadableimages___modifiedTime',
  ChildMarkdownRemarkFrontmatterDownloadableimagesAccessTime = 'childMarkdownRemark___frontmatter___downloadableimages___accessTime',
  ChildMarkdownRemarkFrontmatterDownloadableimagesChangeTime = 'childMarkdownRemark___frontmatter___downloadableimages___changeTime',
  ChildMarkdownRemarkFrontmatterDownloadableimagesBirthTime = 'childMarkdownRemark___frontmatter___downloadableimages___birthTime',
  ChildMarkdownRemarkFrontmatterDownloadableimagesRoot = 'childMarkdownRemark___frontmatter___downloadableimages___root',
  ChildMarkdownRemarkFrontmatterDownloadableimagesDir = 'childMarkdownRemark___frontmatter___downloadableimages___dir',
  ChildMarkdownRemarkFrontmatterDownloadableimagesBase = 'childMarkdownRemark___frontmatter___downloadableimages___base',
  ChildMarkdownRemarkFrontmatterDownloadableimagesExt = 'childMarkdownRemark___frontmatter___downloadableimages___ext',
  ChildMarkdownRemarkFrontmatterDownloadableimagesName = 'childMarkdownRemark___frontmatter___downloadableimages___name',
  ChildMarkdownRemarkFrontmatterDownloadableimagesRelativeDirectory = 'childMarkdownRemark___frontmatter___downloadableimages___relativeDirectory',
  ChildMarkdownRemarkFrontmatterDownloadableimagesDev = 'childMarkdownRemark___frontmatter___downloadableimages___dev',
  ChildMarkdownRemarkFrontmatterDownloadableimagesMode = 'childMarkdownRemark___frontmatter___downloadableimages___mode',
  ChildMarkdownRemarkFrontmatterDownloadableimagesNlink = 'childMarkdownRemark___frontmatter___downloadableimages___nlink',
  ChildMarkdownRemarkFrontmatterDownloadableimagesUid = 'childMarkdownRemark___frontmatter___downloadableimages___uid',
  ChildMarkdownRemarkFrontmatterDownloadableimagesGid = 'childMarkdownRemark___frontmatter___downloadableimages___gid',
  ChildMarkdownRemarkFrontmatterDownloadableimagesRdev = 'childMarkdownRemark___frontmatter___downloadableimages___rdev',
  ChildMarkdownRemarkFrontmatterDownloadableimagesBlksize = 'childMarkdownRemark___frontmatter___downloadableimages___blksize',
  ChildMarkdownRemarkFrontmatterDownloadableimagesIno = 'childMarkdownRemark___frontmatter___downloadableimages___ino',
  ChildMarkdownRemarkFrontmatterDownloadableimagesBlocks = 'childMarkdownRemark___frontmatter___downloadableimages___blocks',
  ChildMarkdownRemarkFrontmatterDownloadableimagesAtimeMs = 'childMarkdownRemark___frontmatter___downloadableimages___atimeMs',
  ChildMarkdownRemarkFrontmatterDownloadableimagesMtimeMs = 'childMarkdownRemark___frontmatter___downloadableimages___mtimeMs',
  ChildMarkdownRemarkFrontmatterDownloadableimagesCtimeMs = 'childMarkdownRemark___frontmatter___downloadableimages___ctimeMs',
  ChildMarkdownRemarkFrontmatterDownloadableimagesAtime = 'childMarkdownRemark___frontmatter___downloadableimages___atime',
  ChildMarkdownRemarkFrontmatterDownloadableimagesMtime = 'childMarkdownRemark___frontmatter___downloadableimages___mtime',
  ChildMarkdownRemarkFrontmatterDownloadableimagesCtime = 'childMarkdownRemark___frontmatter___downloadableimages___ctime',
  ChildMarkdownRemarkFrontmatterDownloadableimagesPublicUrl = 'childMarkdownRemark___frontmatter___downloadableimages___publicURL',
  ChildMarkdownRemarkFrontmatterDownloadableimagesId = 'childMarkdownRemark___frontmatter___downloadableimages___id',
  ChildMarkdownRemarkFrontmatterDownloadableimagesChildren = 'childMarkdownRemark___frontmatter___downloadableimages___children',
  ChildMarkdownRemarkFrontmatterUrl = 'childMarkdownRemark___frontmatter___url',
  ChildMarkdownRemarkFrontmatterHidden = 'childMarkdownRemark___frontmatter___hidden',
  ChildMarkdownRemarkFrontmatterLanguage = 'childMarkdownRemark___frontmatter___language',
  ChildMarkdownRemarkFrontmatterDate = 'childMarkdownRemark___frontmatter___date',
  ChildMarkdownRemarkFrontmatterTags = 'childMarkdownRemark___frontmatter___tags',
  ChildMarkdownRemarkFrontmatterFeaturedimageBirthtime = 'childMarkdownRemark___frontmatter___featuredimage___birthtime',
  ChildMarkdownRemarkFrontmatterFeaturedimageBirthtimeMs = 'childMarkdownRemark___frontmatter___featuredimage___birthtimeMs',
  ChildMarkdownRemarkFrontmatterFeaturedimageSourceInstanceName = 'childMarkdownRemark___frontmatter___featuredimage___sourceInstanceName',
  ChildMarkdownRemarkFrontmatterFeaturedimageAbsolutePath = 'childMarkdownRemark___frontmatter___featuredimage___absolutePath',
  ChildMarkdownRemarkFrontmatterFeaturedimageRelativePath = 'childMarkdownRemark___frontmatter___featuredimage___relativePath',
  ChildMarkdownRemarkFrontmatterFeaturedimageExtension = 'childMarkdownRemark___frontmatter___featuredimage___extension',
  ChildMarkdownRemarkFrontmatterFeaturedimageSize = 'childMarkdownRemark___frontmatter___featuredimage___size',
  ChildMarkdownRemarkFrontmatterFeaturedimagePrettySize = 'childMarkdownRemark___frontmatter___featuredimage___prettySize',
  ChildMarkdownRemarkFrontmatterFeaturedimageModifiedTime = 'childMarkdownRemark___frontmatter___featuredimage___modifiedTime',
  ChildMarkdownRemarkFrontmatterFeaturedimageAccessTime = 'childMarkdownRemark___frontmatter___featuredimage___accessTime',
  ChildMarkdownRemarkFrontmatterFeaturedimageChangeTime = 'childMarkdownRemark___frontmatter___featuredimage___changeTime',
  ChildMarkdownRemarkFrontmatterFeaturedimageBirthTime = 'childMarkdownRemark___frontmatter___featuredimage___birthTime',
  ChildMarkdownRemarkFrontmatterFeaturedimageRoot = 'childMarkdownRemark___frontmatter___featuredimage___root',
  ChildMarkdownRemarkFrontmatterFeaturedimageDir = 'childMarkdownRemark___frontmatter___featuredimage___dir',
  ChildMarkdownRemarkFrontmatterFeaturedimageBase = 'childMarkdownRemark___frontmatter___featuredimage___base',
  ChildMarkdownRemarkFrontmatterFeaturedimageExt = 'childMarkdownRemark___frontmatter___featuredimage___ext',
  ChildMarkdownRemarkFrontmatterFeaturedimageName = 'childMarkdownRemark___frontmatter___featuredimage___name',
  ChildMarkdownRemarkFrontmatterFeaturedimageRelativeDirectory = 'childMarkdownRemark___frontmatter___featuredimage___relativeDirectory',
  ChildMarkdownRemarkFrontmatterFeaturedimageDev = 'childMarkdownRemark___frontmatter___featuredimage___dev',
  ChildMarkdownRemarkFrontmatterFeaturedimageMode = 'childMarkdownRemark___frontmatter___featuredimage___mode',
  ChildMarkdownRemarkFrontmatterFeaturedimageNlink = 'childMarkdownRemark___frontmatter___featuredimage___nlink',
  ChildMarkdownRemarkFrontmatterFeaturedimageUid = 'childMarkdownRemark___frontmatter___featuredimage___uid',
  ChildMarkdownRemarkFrontmatterFeaturedimageGid = 'childMarkdownRemark___frontmatter___featuredimage___gid',
  ChildMarkdownRemarkFrontmatterFeaturedimageRdev = 'childMarkdownRemark___frontmatter___featuredimage___rdev',
  ChildMarkdownRemarkFrontmatterFeaturedimageBlksize = 'childMarkdownRemark___frontmatter___featuredimage___blksize',
  ChildMarkdownRemarkFrontmatterFeaturedimageIno = 'childMarkdownRemark___frontmatter___featuredimage___ino',
  ChildMarkdownRemarkFrontmatterFeaturedimageBlocks = 'childMarkdownRemark___frontmatter___featuredimage___blocks',
  ChildMarkdownRemarkFrontmatterFeaturedimageAtimeMs = 'childMarkdownRemark___frontmatter___featuredimage___atimeMs',
  ChildMarkdownRemarkFrontmatterFeaturedimageMtimeMs = 'childMarkdownRemark___frontmatter___featuredimage___mtimeMs',
  ChildMarkdownRemarkFrontmatterFeaturedimageCtimeMs = 'childMarkdownRemark___frontmatter___featuredimage___ctimeMs',
  ChildMarkdownRemarkFrontmatterFeaturedimageAtime = 'childMarkdownRemark___frontmatter___featuredimage___atime',
  ChildMarkdownRemarkFrontmatterFeaturedimageMtime = 'childMarkdownRemark___frontmatter___featuredimage___mtime',
  ChildMarkdownRemarkFrontmatterFeaturedimageCtime = 'childMarkdownRemark___frontmatter___featuredimage___ctime',
  ChildMarkdownRemarkFrontmatterFeaturedimagePublicUrl = 'childMarkdownRemark___frontmatter___featuredimage___publicURL',
  ChildMarkdownRemarkFrontmatterFeaturedimageId = 'childMarkdownRemark___frontmatter___featuredimage___id',
  ChildMarkdownRemarkFrontmatterFeaturedimageChildren = 'childMarkdownRemark___frontmatter___featuredimage___children',
  ChildMarkdownRemarkExcerpt = 'childMarkdownRemark___excerpt',
  ChildMarkdownRemarkRawMarkdownBody = 'childMarkdownRemark___rawMarkdownBody',
  ChildMarkdownRemarkFileAbsolutePath = 'childMarkdownRemark___fileAbsolutePath',
  ChildMarkdownRemarkFieldsSlug = 'childMarkdownRemark___fields___slug',
  ChildMarkdownRemarkFieldsLanguage = 'childMarkdownRemark___fields___language',
  ChildMarkdownRemarkHtml = 'childMarkdownRemark___html',
  ChildMarkdownRemarkHtmlAst = 'childMarkdownRemark___htmlAst',
  ChildMarkdownRemarkExcerptAst = 'childMarkdownRemark___excerptAst',
  ChildMarkdownRemarkHeadings = 'childMarkdownRemark___headings',
  ChildMarkdownRemarkHeadingsValue = 'childMarkdownRemark___headings___value',
  ChildMarkdownRemarkHeadingsDepth = 'childMarkdownRemark___headings___depth',
  ChildMarkdownRemarkTimeToRead = 'childMarkdownRemark___timeToRead',
  ChildMarkdownRemarkTableOfContents = 'childMarkdownRemark___tableOfContents',
  ChildMarkdownRemarkWordCountParagraphs = 'childMarkdownRemark___wordCount___paragraphs',
  ChildMarkdownRemarkWordCountSentences = 'childMarkdownRemark___wordCount___sentences',
  ChildMarkdownRemarkWordCountWords = 'childMarkdownRemark___wordCount___words',
  ChildMarkdownRemarkParentId = 'childMarkdownRemark___parent___id',
  ChildMarkdownRemarkParentParentId = 'childMarkdownRemark___parent___parent___id',
  ChildMarkdownRemarkParentParentChildren = 'childMarkdownRemark___parent___parent___children',
  ChildMarkdownRemarkParentChildren = 'childMarkdownRemark___parent___children',
  ChildMarkdownRemarkParentChildrenId = 'childMarkdownRemark___parent___children___id',
  ChildMarkdownRemarkParentChildrenChildren = 'childMarkdownRemark___parent___children___children',
  ChildMarkdownRemarkParentInternalContent = 'childMarkdownRemark___parent___internal___content',
  ChildMarkdownRemarkParentInternalContentDigest = 'childMarkdownRemark___parent___internal___contentDigest',
  ChildMarkdownRemarkParentInternalDescription = 'childMarkdownRemark___parent___internal___description',
  ChildMarkdownRemarkParentInternalFieldOwners = 'childMarkdownRemark___parent___internal___fieldOwners',
  ChildMarkdownRemarkParentInternalIgnoreType = 'childMarkdownRemark___parent___internal___ignoreType',
  ChildMarkdownRemarkParentInternalMediaType = 'childMarkdownRemark___parent___internal___mediaType',
  ChildMarkdownRemarkParentInternalOwner = 'childMarkdownRemark___parent___internal___owner',
  ChildMarkdownRemarkParentInternalType = 'childMarkdownRemark___parent___internal___type',
  ChildMarkdownRemarkChildren = 'childMarkdownRemark___children',
  ChildMarkdownRemarkChildrenId = 'childMarkdownRemark___children___id',
  ChildMarkdownRemarkChildrenParentId = 'childMarkdownRemark___children___parent___id',
  ChildMarkdownRemarkChildrenParentChildren = 'childMarkdownRemark___children___parent___children',
  ChildMarkdownRemarkChildrenChildren = 'childMarkdownRemark___children___children',
  ChildMarkdownRemarkChildrenChildrenId = 'childMarkdownRemark___children___children___id',
  ChildMarkdownRemarkChildrenChildrenChildren = 'childMarkdownRemark___children___children___children',
  ChildMarkdownRemarkChildrenInternalContent = 'childMarkdownRemark___children___internal___content',
  ChildMarkdownRemarkChildrenInternalContentDigest = 'childMarkdownRemark___children___internal___contentDigest',
  ChildMarkdownRemarkChildrenInternalDescription = 'childMarkdownRemark___children___internal___description',
  ChildMarkdownRemarkChildrenInternalFieldOwners = 'childMarkdownRemark___children___internal___fieldOwners',
  ChildMarkdownRemarkChildrenInternalIgnoreType = 'childMarkdownRemark___children___internal___ignoreType',
  ChildMarkdownRemarkChildrenInternalMediaType = 'childMarkdownRemark___children___internal___mediaType',
  ChildMarkdownRemarkChildrenInternalOwner = 'childMarkdownRemark___children___internal___owner',
  ChildMarkdownRemarkChildrenInternalType = 'childMarkdownRemark___children___internal___type',
  ChildMarkdownRemarkInternalContent = 'childMarkdownRemark___internal___content',
  ChildMarkdownRemarkInternalContentDigest = 'childMarkdownRemark___internal___contentDigest',
  ChildMarkdownRemarkInternalDescription = 'childMarkdownRemark___internal___description',
  ChildMarkdownRemarkInternalFieldOwners = 'childMarkdownRemark___internal___fieldOwners',
  ChildMarkdownRemarkInternalIgnoreType = 'childMarkdownRemark___internal___ignoreType',
  ChildMarkdownRemarkInternalMediaType = 'childMarkdownRemark___internal___mediaType',
  ChildMarkdownRemarkInternalOwner = 'childMarkdownRemark___internal___owner',
  ChildMarkdownRemarkInternalType = 'childMarkdownRemark___internal___type'
}

export type FileFilterInput = {
  birthtime?: Maybe<DateQueryOperatorInput>,
  birthtimeMs?: Maybe<FloatQueryOperatorInput>,
  sourceInstanceName?: Maybe<StringQueryOperatorInput>,
  absolutePath?: Maybe<StringQueryOperatorInput>,
  relativePath?: Maybe<StringQueryOperatorInput>,
  extension?: Maybe<StringQueryOperatorInput>,
  size?: Maybe<IntQueryOperatorInput>,
  prettySize?: Maybe<StringQueryOperatorInput>,
  modifiedTime?: Maybe<DateQueryOperatorInput>,
  accessTime?: Maybe<DateQueryOperatorInput>,
  changeTime?: Maybe<DateQueryOperatorInput>,
  birthTime?: Maybe<DateQueryOperatorInput>,
  root?: Maybe<StringQueryOperatorInput>,
  dir?: Maybe<StringQueryOperatorInput>,
  base?: Maybe<StringQueryOperatorInput>,
  ext?: Maybe<StringQueryOperatorInput>,
  name?: Maybe<StringQueryOperatorInput>,
  relativeDirectory?: Maybe<StringQueryOperatorInput>,
  dev?: Maybe<IntQueryOperatorInput>,
  mode?: Maybe<IntQueryOperatorInput>,
  nlink?: Maybe<IntQueryOperatorInput>,
  uid?: Maybe<IntQueryOperatorInput>,
  gid?: Maybe<IntQueryOperatorInput>,
  rdev?: Maybe<IntQueryOperatorInput>,
  blksize?: Maybe<IntQueryOperatorInput>,
  ino?: Maybe<IntQueryOperatorInput>,
  blocks?: Maybe<IntQueryOperatorInput>,
  atimeMs?: Maybe<FloatQueryOperatorInput>,
  mtimeMs?: Maybe<FloatQueryOperatorInput>,
  ctimeMs?: Maybe<FloatQueryOperatorInput>,
  atime?: Maybe<DateQueryOperatorInput>,
  mtime?: Maybe<DateQueryOperatorInput>,
  ctime?: Maybe<DateQueryOperatorInput>,
  publicURL?: Maybe<StringQueryOperatorInput>,
  childImageSharp?: Maybe<ImageSharpFilterInput>,
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  childMarkdownRemark?: Maybe<MarkdownRemarkFilterInput>,
};

export type FileFilterListInput = {
  elemMatch?: Maybe<FileFilterInput>,
};

export type FileGroupConnection = {
   __typename?: 'FileGroupConnection',
  totalCount: Scalars['Int'],
  edges: Array<FileEdge>,
  nodes: Array<File>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type FileSortInput = {
  fields?: Maybe<Array<Maybe<FileFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type FloatQueryOperatorInput = {
  eq?: Maybe<Scalars['Float']>,
  ne?: Maybe<Scalars['Float']>,
  gt?: Maybe<Scalars['Float']>,
  gte?: Maybe<Scalars['Float']>,
  lt?: Maybe<Scalars['Float']>,
  lte?: Maybe<Scalars['Float']>,
  in?: Maybe<Array<Maybe<Scalars['Float']>>>,
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>,
};

export enum ImageCropFocus {
  Center = 'CENTER',
  North = 'NORTH',
  Northeast = 'NORTHEAST',
  East = 'EAST',
  Southeast = 'SOUTHEAST',
  South = 'SOUTH',
  Southwest = 'SOUTHWEST',
  West = 'WEST',
  Northwest = 'NORTHWEST',
  Entropy = 'ENTROPY',
  Attention = 'ATTENTION'
}

export enum ImageFit {
  Cover = 'COVER',
  Contain = 'CONTAIN',
  Fill = 'FILL'
}

export enum ImageFormat {
  NoChange = 'NO_CHANGE',
  Jpg = 'JPG',
  Png = 'PNG',
  Webp = 'WEBP'
}

export type ImageSharp = Node & {
   __typename?: 'ImageSharp',
  fixed?: Maybe<ImageSharpFixed>,
  resolutions?: Maybe<ImageSharpResolutions>,
  fluid?: Maybe<ImageSharpFluid>,
  sizes?: Maybe<ImageSharpSizes>,
  original?: Maybe<ImageSharpOriginal>,
  resize?: Maybe<ImageSharpResize>,
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
};


export type ImageSharpFixedArgs = {
  width?: Maybe<Scalars['Int']>,
  height?: Maybe<Scalars['Int']>,
  base64Width?: Maybe<Scalars['Int']>,
  jpegProgressive?: Maybe<Scalars['Boolean']>,
  pngCompressionSpeed?: Maybe<Scalars['Int']>,
  grayscale?: Maybe<Scalars['Boolean']>,
  duotone?: Maybe<DuotoneGradient>,
  traceSVG?: Maybe<Potrace>,
  quality?: Maybe<Scalars['Int']>,
  jpegQuality?: Maybe<Scalars['Int']>,
  pngQuality?: Maybe<Scalars['Int']>,
  webpQuality?: Maybe<Scalars['Int']>,
  toFormat?: Maybe<ImageFormat>,
  toFormatBase64?: Maybe<ImageFormat>,
  cropFocus?: Maybe<ImageCropFocus>,
  fit?: Maybe<ImageFit>,
  background?: Maybe<Scalars['String']>,
  rotate?: Maybe<Scalars['Int']>,
  trim?: Maybe<Scalars['Float']>
};


export type ImageSharpResolutionsArgs = {
  width?: Maybe<Scalars['Int']>,
  height?: Maybe<Scalars['Int']>,
  base64Width?: Maybe<Scalars['Int']>,
  jpegProgressive?: Maybe<Scalars['Boolean']>,
  pngCompressionSpeed?: Maybe<Scalars['Int']>,
  grayscale?: Maybe<Scalars['Boolean']>,
  duotone?: Maybe<DuotoneGradient>,
  traceSVG?: Maybe<Potrace>,
  quality?: Maybe<Scalars['Int']>,
  jpegQuality?: Maybe<Scalars['Int']>,
  pngQuality?: Maybe<Scalars['Int']>,
  webpQuality?: Maybe<Scalars['Int']>,
  toFormat?: Maybe<ImageFormat>,
  toFormatBase64?: Maybe<ImageFormat>,
  cropFocus?: Maybe<ImageCropFocus>,
  fit?: Maybe<ImageFit>,
  background?: Maybe<Scalars['String']>,
  rotate?: Maybe<Scalars['Int']>,
  trim?: Maybe<Scalars['Float']>
};


export type ImageSharpFluidArgs = {
  maxWidth?: Maybe<Scalars['Int']>,
  maxHeight?: Maybe<Scalars['Int']>,
  base64Width?: Maybe<Scalars['Int']>,
  grayscale?: Maybe<Scalars['Boolean']>,
  jpegProgressive?: Maybe<Scalars['Boolean']>,
  pngCompressionSpeed?: Maybe<Scalars['Int']>,
  duotone?: Maybe<DuotoneGradient>,
  traceSVG?: Maybe<Potrace>,
  quality?: Maybe<Scalars['Int']>,
  jpegQuality?: Maybe<Scalars['Int']>,
  pngQuality?: Maybe<Scalars['Int']>,
  webpQuality?: Maybe<Scalars['Int']>,
  toFormat?: Maybe<ImageFormat>,
  toFormatBase64?: Maybe<ImageFormat>,
  cropFocus?: Maybe<ImageCropFocus>,
  fit?: Maybe<ImageFit>,
  background?: Maybe<Scalars['String']>,
  rotate?: Maybe<Scalars['Int']>,
  trim?: Maybe<Scalars['Float']>,
  sizes?: Maybe<Scalars['String']>,
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>
};


export type ImageSharpSizesArgs = {
  maxWidth?: Maybe<Scalars['Int']>,
  maxHeight?: Maybe<Scalars['Int']>,
  base64Width?: Maybe<Scalars['Int']>,
  grayscale?: Maybe<Scalars['Boolean']>,
  jpegProgressive?: Maybe<Scalars['Boolean']>,
  pngCompressionSpeed?: Maybe<Scalars['Int']>,
  duotone?: Maybe<DuotoneGradient>,
  traceSVG?: Maybe<Potrace>,
  quality?: Maybe<Scalars['Int']>,
  jpegQuality?: Maybe<Scalars['Int']>,
  pngQuality?: Maybe<Scalars['Int']>,
  webpQuality?: Maybe<Scalars['Int']>,
  toFormat?: Maybe<ImageFormat>,
  toFormatBase64?: Maybe<ImageFormat>,
  cropFocus?: Maybe<ImageCropFocus>,
  fit?: Maybe<ImageFit>,
  background?: Maybe<Scalars['String']>,
  rotate?: Maybe<Scalars['Int']>,
  trim?: Maybe<Scalars['Float']>,
  sizes?: Maybe<Scalars['String']>,
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>
};


export type ImageSharpResizeArgs = {
  width?: Maybe<Scalars['Int']>,
  height?: Maybe<Scalars['Int']>,
  quality?: Maybe<Scalars['Int']>,
  jpegQuality?: Maybe<Scalars['Int']>,
  pngQuality?: Maybe<Scalars['Int']>,
  webpQuality?: Maybe<Scalars['Int']>,
  jpegProgressive?: Maybe<Scalars['Boolean']>,
  pngCompressionLevel?: Maybe<Scalars['Int']>,
  pngCompressionSpeed?: Maybe<Scalars['Int']>,
  grayscale?: Maybe<Scalars['Boolean']>,
  duotone?: Maybe<DuotoneGradient>,
  base64?: Maybe<Scalars['Boolean']>,
  traceSVG?: Maybe<Potrace>,
  toFormat?: Maybe<ImageFormat>,
  cropFocus?: Maybe<ImageCropFocus>,
  fit?: Maybe<ImageFit>,
  background?: Maybe<Scalars['String']>,
  rotate?: Maybe<Scalars['Int']>,
  trim?: Maybe<Scalars['Float']>
};

export type ImageSharpConnection = {
   __typename?: 'ImageSharpConnection',
  totalCount: Scalars['Int'],
  edges: Array<ImageSharpEdge>,
  nodes: Array<ImageSharp>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<ImageSharpGroupConnection>,
};


export type ImageSharpConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum
};


export type ImageSharpConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: ImageSharpFieldsEnum
};

export type ImageSharpEdge = {
   __typename?: 'ImageSharpEdge',
  next?: Maybe<ImageSharp>,
  node: ImageSharp,
  previous?: Maybe<ImageSharp>,
};

export enum ImageSharpFieldsEnum {
  FixedBase64 = 'fixed___base64',
  FixedTracedSvg = 'fixed___tracedSVG',
  FixedAspectRatio = 'fixed___aspectRatio',
  FixedWidth = 'fixed___width',
  FixedHeight = 'fixed___height',
  FixedSrc = 'fixed___src',
  FixedSrcSet = 'fixed___srcSet',
  FixedSrcWebp = 'fixed___srcWebp',
  FixedSrcSetWebp = 'fixed___srcSetWebp',
  FixedOriginalName = 'fixed___originalName',
  ResolutionsBase64 = 'resolutions___base64',
  ResolutionsTracedSvg = 'resolutions___tracedSVG',
  ResolutionsAspectRatio = 'resolutions___aspectRatio',
  ResolutionsWidth = 'resolutions___width',
  ResolutionsHeight = 'resolutions___height',
  ResolutionsSrc = 'resolutions___src',
  ResolutionsSrcSet = 'resolutions___srcSet',
  ResolutionsSrcWebp = 'resolutions___srcWebp',
  ResolutionsSrcSetWebp = 'resolutions___srcSetWebp',
  ResolutionsOriginalName = 'resolutions___originalName',
  FluidBase64 = 'fluid___base64',
  FluidTracedSvg = 'fluid___tracedSVG',
  FluidAspectRatio = 'fluid___aspectRatio',
  FluidSrc = 'fluid___src',
  FluidSrcSet = 'fluid___srcSet',
  FluidSrcWebp = 'fluid___srcWebp',
  FluidSrcSetWebp = 'fluid___srcSetWebp',
  FluidSizes = 'fluid___sizes',
  FluidOriginalImg = 'fluid___originalImg',
  FluidOriginalName = 'fluid___originalName',
  FluidPresentationWidth = 'fluid___presentationWidth',
  FluidPresentationHeight = 'fluid___presentationHeight',
  SizesBase64 = 'sizes___base64',
  SizesTracedSvg = 'sizes___tracedSVG',
  SizesAspectRatio = 'sizes___aspectRatio',
  SizesSrc = 'sizes___src',
  SizesSrcSet = 'sizes___srcSet',
  SizesSrcWebp = 'sizes___srcWebp',
  SizesSrcSetWebp = 'sizes___srcSetWebp',
  SizesSizes = 'sizes___sizes',
  SizesOriginalImg = 'sizes___originalImg',
  SizesOriginalName = 'sizes___originalName',
  SizesPresentationWidth = 'sizes___presentationWidth',
  SizesPresentationHeight = 'sizes___presentationHeight',
  OriginalWidth = 'original___width',
  OriginalHeight = 'original___height',
  OriginalSrc = 'original___src',
  ResizeSrc = 'resize___src',
  ResizeTracedSvg = 'resize___tracedSVG',
  ResizeWidth = 'resize___width',
  ResizeHeight = 'resize___height',
  ResizeAspectRatio = 'resize___aspectRatio',
  ResizeOriginalName = 'resize___originalName',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type ImageSharpFilterInput = {
  fixed?: Maybe<ImageSharpFixedFilterInput>,
  resolutions?: Maybe<ImageSharpResolutionsFilterInput>,
  fluid?: Maybe<ImageSharpFluidFilterInput>,
  sizes?: Maybe<ImageSharpSizesFilterInput>,
  original?: Maybe<ImageSharpOriginalFilterInput>,
  resize?: Maybe<ImageSharpResizeFilterInput>,
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
};

export type ImageSharpFixed = {
   __typename?: 'ImageSharpFixed',
  base64?: Maybe<Scalars['String']>,
  tracedSVG?: Maybe<Scalars['String']>,
  aspectRatio?: Maybe<Scalars['Float']>,
  width?: Maybe<Scalars['Float']>,
  height?: Maybe<Scalars['Float']>,
  src?: Maybe<Scalars['String']>,
  srcSet?: Maybe<Scalars['String']>,
  srcWebp?: Maybe<Scalars['String']>,
  srcSetWebp?: Maybe<Scalars['String']>,
  originalName?: Maybe<Scalars['String']>,
};

export type ImageSharpFixedFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>,
  tracedSVG?: Maybe<StringQueryOperatorInput>,
  aspectRatio?: Maybe<FloatQueryOperatorInput>,
  width?: Maybe<FloatQueryOperatorInput>,
  height?: Maybe<FloatQueryOperatorInput>,
  src?: Maybe<StringQueryOperatorInput>,
  srcSet?: Maybe<StringQueryOperatorInput>,
  srcWebp?: Maybe<StringQueryOperatorInput>,
  srcSetWebp?: Maybe<StringQueryOperatorInput>,
  originalName?: Maybe<StringQueryOperatorInput>,
};

export type ImageSharpFluid = {
   __typename?: 'ImageSharpFluid',
  base64?: Maybe<Scalars['String']>,
  tracedSVG?: Maybe<Scalars['String']>,
  aspectRatio?: Maybe<Scalars['Float']>,
  src?: Maybe<Scalars['String']>,
  srcSet?: Maybe<Scalars['String']>,
  srcWebp?: Maybe<Scalars['String']>,
  srcSetWebp?: Maybe<Scalars['String']>,
  sizes?: Maybe<Scalars['String']>,
  originalImg?: Maybe<Scalars['String']>,
  originalName?: Maybe<Scalars['String']>,
  presentationWidth?: Maybe<Scalars['Int']>,
  presentationHeight?: Maybe<Scalars['Int']>,
};

export type ImageSharpFluidFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>,
  tracedSVG?: Maybe<StringQueryOperatorInput>,
  aspectRatio?: Maybe<FloatQueryOperatorInput>,
  src?: Maybe<StringQueryOperatorInput>,
  srcSet?: Maybe<StringQueryOperatorInput>,
  srcWebp?: Maybe<StringQueryOperatorInput>,
  srcSetWebp?: Maybe<StringQueryOperatorInput>,
  sizes?: Maybe<StringQueryOperatorInput>,
  originalImg?: Maybe<StringQueryOperatorInput>,
  originalName?: Maybe<StringQueryOperatorInput>,
  presentationWidth?: Maybe<IntQueryOperatorInput>,
  presentationHeight?: Maybe<IntQueryOperatorInput>,
};

export type ImageSharpGroupConnection = {
   __typename?: 'ImageSharpGroupConnection',
  totalCount: Scalars['Int'],
  edges: Array<ImageSharpEdge>,
  nodes: Array<ImageSharp>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type ImageSharpOriginal = {
   __typename?: 'ImageSharpOriginal',
  width?: Maybe<Scalars['Float']>,
  height?: Maybe<Scalars['Float']>,
  src?: Maybe<Scalars['String']>,
};

export type ImageSharpOriginalFilterInput = {
  width?: Maybe<FloatQueryOperatorInput>,
  height?: Maybe<FloatQueryOperatorInput>,
  src?: Maybe<StringQueryOperatorInput>,
};

export type ImageSharpResize = {
   __typename?: 'ImageSharpResize',
  src?: Maybe<Scalars['String']>,
  tracedSVG?: Maybe<Scalars['String']>,
  width?: Maybe<Scalars['Int']>,
  height?: Maybe<Scalars['Int']>,
  aspectRatio?: Maybe<Scalars['Float']>,
  originalName?: Maybe<Scalars['String']>,
};

export type ImageSharpResizeFilterInput = {
  src?: Maybe<StringQueryOperatorInput>,
  tracedSVG?: Maybe<StringQueryOperatorInput>,
  width?: Maybe<IntQueryOperatorInput>,
  height?: Maybe<IntQueryOperatorInput>,
  aspectRatio?: Maybe<FloatQueryOperatorInput>,
  originalName?: Maybe<StringQueryOperatorInput>,
};

export type ImageSharpResolutions = {
   __typename?: 'ImageSharpResolutions',
  base64?: Maybe<Scalars['String']>,
  tracedSVG?: Maybe<Scalars['String']>,
  aspectRatio?: Maybe<Scalars['Float']>,
  width?: Maybe<Scalars['Float']>,
  height?: Maybe<Scalars['Float']>,
  src?: Maybe<Scalars['String']>,
  srcSet?: Maybe<Scalars['String']>,
  srcWebp?: Maybe<Scalars['String']>,
  srcSetWebp?: Maybe<Scalars['String']>,
  originalName?: Maybe<Scalars['String']>,
};

export type ImageSharpResolutionsFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>,
  tracedSVG?: Maybe<StringQueryOperatorInput>,
  aspectRatio?: Maybe<FloatQueryOperatorInput>,
  width?: Maybe<FloatQueryOperatorInput>,
  height?: Maybe<FloatQueryOperatorInput>,
  src?: Maybe<StringQueryOperatorInput>,
  srcSet?: Maybe<StringQueryOperatorInput>,
  srcWebp?: Maybe<StringQueryOperatorInput>,
  srcSetWebp?: Maybe<StringQueryOperatorInput>,
  originalName?: Maybe<StringQueryOperatorInput>,
};

export type ImageSharpSizes = {
   __typename?: 'ImageSharpSizes',
  base64?: Maybe<Scalars['String']>,
  tracedSVG?: Maybe<Scalars['String']>,
  aspectRatio?: Maybe<Scalars['Float']>,
  src?: Maybe<Scalars['String']>,
  srcSet?: Maybe<Scalars['String']>,
  srcWebp?: Maybe<Scalars['String']>,
  srcSetWebp?: Maybe<Scalars['String']>,
  sizes?: Maybe<Scalars['String']>,
  originalImg?: Maybe<Scalars['String']>,
  originalName?: Maybe<Scalars['String']>,
  presentationWidth?: Maybe<Scalars['Int']>,
  presentationHeight?: Maybe<Scalars['Int']>,
};

export type ImageSharpSizesFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>,
  tracedSVG?: Maybe<StringQueryOperatorInput>,
  aspectRatio?: Maybe<FloatQueryOperatorInput>,
  src?: Maybe<StringQueryOperatorInput>,
  srcSet?: Maybe<StringQueryOperatorInput>,
  srcWebp?: Maybe<StringQueryOperatorInput>,
  srcSetWebp?: Maybe<StringQueryOperatorInput>,
  sizes?: Maybe<StringQueryOperatorInput>,
  originalImg?: Maybe<StringQueryOperatorInput>,
  originalName?: Maybe<StringQueryOperatorInput>,
  presentationWidth?: Maybe<IntQueryOperatorInput>,
  presentationHeight?: Maybe<IntQueryOperatorInput>,
};

export type ImageSharpSortInput = {
  fields?: Maybe<Array<Maybe<ImageSharpFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type Internal = {
   __typename?: 'Internal',
  content?: Maybe<Scalars['String']>,
  contentDigest: Scalars['String'],
  description?: Maybe<Scalars['String']>,
  fieldOwners?: Maybe<Array<Maybe<Scalars['String']>>>,
  ignoreType?: Maybe<Scalars['Boolean']>,
  mediaType?: Maybe<Scalars['String']>,
  owner: Scalars['String'],
  type: Scalars['String'],
};

export type InternalFilterInput = {
  content?: Maybe<StringQueryOperatorInput>,
  contentDigest?: Maybe<StringQueryOperatorInput>,
  description?: Maybe<StringQueryOperatorInput>,
  fieldOwners?: Maybe<StringQueryOperatorInput>,
  ignoreType?: Maybe<BooleanQueryOperatorInput>,
  mediaType?: Maybe<StringQueryOperatorInput>,
  owner?: Maybe<StringQueryOperatorInput>,
  type?: Maybe<StringQueryOperatorInput>,
};

export type IntQueryOperatorInput = {
  eq?: Maybe<Scalars['Int']>,
  ne?: Maybe<Scalars['Int']>,
  gt?: Maybe<Scalars['Int']>,
  gte?: Maybe<Scalars['Int']>,
  lt?: Maybe<Scalars['Int']>,
  lte?: Maybe<Scalars['Int']>,
  in?: Maybe<Array<Maybe<Scalars['Int']>>>,
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>,
};


export type JsonQueryOperatorInput = {
  eq?: Maybe<Scalars['JSON']>,
  ne?: Maybe<Scalars['JSON']>,
  in?: Maybe<Array<Maybe<Scalars['JSON']>>>,
  nin?: Maybe<Array<Maybe<Scalars['JSON']>>>,
  regex?: Maybe<Scalars['JSON']>,
  glob?: Maybe<Scalars['JSON']>,
};

export enum MarkdownExcerptFormats {
  Plain = 'PLAIN',
  Html = 'HTML',
  Markdown = 'MARKDOWN'
}

export type MarkdownHeading = {
   __typename?: 'MarkdownHeading',
  value?: Maybe<Scalars['String']>,
  depth?: Maybe<Scalars['Int']>,
};

export type MarkdownHeadingFilterInput = {
  value?: Maybe<StringQueryOperatorInput>,
  depth?: Maybe<IntQueryOperatorInput>,
};

export type MarkdownHeadingFilterListInput = {
  elemMatch?: Maybe<MarkdownHeadingFilterInput>,
};

export enum MarkdownHeadingLevels {
  H1 = 'h1',
  H2 = 'h2',
  H3 = 'h3',
  H4 = 'h4',
  H5 = 'h5',
  H6 = 'h6'
}

export type MarkdownRemark = Node & {
   __typename?: 'MarkdownRemark',
  id: Scalars['ID'],
  frontmatter?: Maybe<MarkdownRemarkFrontmatter>,
  excerpt?: Maybe<Scalars['String']>,
  rawMarkdownBody?: Maybe<Scalars['String']>,
  fileAbsolutePath?: Maybe<Scalars['String']>,
  fields?: Maybe<MarkdownRemarkFields>,
  html?: Maybe<Scalars['String']>,
  htmlAst?: Maybe<Scalars['JSON']>,
  excerptAst?: Maybe<Scalars['JSON']>,
  headings?: Maybe<Array<Maybe<MarkdownHeading>>>,
  timeToRead?: Maybe<Scalars['Int']>,
  tableOfContents?: Maybe<Scalars['String']>,
  wordCount?: Maybe<MarkdownWordCount>,
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
};


export type MarkdownRemarkExcerptArgs = {
  pruneLength?: Maybe<Scalars['Int']>,
  truncate?: Maybe<Scalars['Boolean']>,
  format?: Maybe<MarkdownExcerptFormats>
};


export type MarkdownRemarkExcerptAstArgs = {
  pruneLength?: Maybe<Scalars['Int']>,
  truncate?: Maybe<Scalars['Boolean']>
};


export type MarkdownRemarkHeadingsArgs = {
  depth?: Maybe<MarkdownHeadingLevels>
};


export type MarkdownRemarkTableOfContentsArgs = {
  pathToSlugField?: Maybe<Scalars['String']>,
  maxDepth?: Maybe<Scalars['Int']>,
  heading?: Maybe<Scalars['String']>
};

export type MarkdownRemarkConnection = {
   __typename?: 'MarkdownRemarkConnection',
  totalCount: Scalars['Int'],
  edges: Array<MarkdownRemarkEdge>,
  nodes: Array<MarkdownRemark>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<MarkdownRemarkGroupConnection>,
};


export type MarkdownRemarkConnectionDistinctArgs = {
  field: MarkdownRemarkFieldsEnum
};


export type MarkdownRemarkConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: MarkdownRemarkFieldsEnum
};

export type MarkdownRemarkEdge = {
   __typename?: 'MarkdownRemarkEdge',
  next?: Maybe<MarkdownRemark>,
  node: MarkdownRemark,
  previous?: Maybe<MarkdownRemark>,
};

export type MarkdownRemarkFields = {
   __typename?: 'MarkdownRemarkFields',
  slug?: Maybe<Scalars['String']>,
  language?: Maybe<Scalars['String']>,
};

export enum MarkdownRemarkFieldsEnum {
  Id = 'id',
  FrontmatterTitle = 'frontmatter___title',
  FrontmatterTemplateKey = 'frontmatter___templateKey',
  FrontmatterImageBirthtime = 'frontmatter___image___birthtime',
  FrontmatterImageBirthtimeMs = 'frontmatter___image___birthtimeMs',
  FrontmatterImageSourceInstanceName = 'frontmatter___image___sourceInstanceName',
  FrontmatterImageAbsolutePath = 'frontmatter___image___absolutePath',
  FrontmatterImageRelativePath = 'frontmatter___image___relativePath',
  FrontmatterImageExtension = 'frontmatter___image___extension',
  FrontmatterImageSize = 'frontmatter___image___size',
  FrontmatterImagePrettySize = 'frontmatter___image___prettySize',
  FrontmatterImageModifiedTime = 'frontmatter___image___modifiedTime',
  FrontmatterImageAccessTime = 'frontmatter___image___accessTime',
  FrontmatterImageChangeTime = 'frontmatter___image___changeTime',
  FrontmatterImageBirthTime = 'frontmatter___image___birthTime',
  FrontmatterImageRoot = 'frontmatter___image___root',
  FrontmatterImageDir = 'frontmatter___image___dir',
  FrontmatterImageBase = 'frontmatter___image___base',
  FrontmatterImageExt = 'frontmatter___image___ext',
  FrontmatterImageName = 'frontmatter___image___name',
  FrontmatterImageRelativeDirectory = 'frontmatter___image___relativeDirectory',
  FrontmatterImageDev = 'frontmatter___image___dev',
  FrontmatterImageMode = 'frontmatter___image___mode',
  FrontmatterImageNlink = 'frontmatter___image___nlink',
  FrontmatterImageUid = 'frontmatter___image___uid',
  FrontmatterImageGid = 'frontmatter___image___gid',
  FrontmatterImageRdev = 'frontmatter___image___rdev',
  FrontmatterImageBlksize = 'frontmatter___image___blksize',
  FrontmatterImageIno = 'frontmatter___image___ino',
  FrontmatterImageBlocks = 'frontmatter___image___blocks',
  FrontmatterImageAtimeMs = 'frontmatter___image___atimeMs',
  FrontmatterImageMtimeMs = 'frontmatter___image___mtimeMs',
  FrontmatterImageCtimeMs = 'frontmatter___image___ctimeMs',
  FrontmatterImageAtime = 'frontmatter___image___atime',
  FrontmatterImageMtime = 'frontmatter___image___mtime',
  FrontmatterImageCtime = 'frontmatter___image___ctime',
  FrontmatterImagePublicUrl = 'frontmatter___image___publicURL',
  FrontmatterImageChildImageSharpId = 'frontmatter___image___childImageSharp___id',
  FrontmatterImageChildImageSharpChildren = 'frontmatter___image___childImageSharp___children',
  FrontmatterImageId = 'frontmatter___image___id',
  FrontmatterImageParentId = 'frontmatter___image___parent___id',
  FrontmatterImageParentChildren = 'frontmatter___image___parent___children',
  FrontmatterImageChildren = 'frontmatter___image___children',
  FrontmatterImageChildrenId = 'frontmatter___image___children___id',
  FrontmatterImageChildrenChildren = 'frontmatter___image___children___children',
  FrontmatterImageInternalContent = 'frontmatter___image___internal___content',
  FrontmatterImageInternalContentDigest = 'frontmatter___image___internal___contentDigest',
  FrontmatterImageInternalDescription = 'frontmatter___image___internal___description',
  FrontmatterImageInternalFieldOwners = 'frontmatter___image___internal___fieldOwners',
  FrontmatterImageInternalIgnoreType = 'frontmatter___image___internal___ignoreType',
  FrontmatterImageInternalMediaType = 'frontmatter___image___internal___mediaType',
  FrontmatterImageInternalOwner = 'frontmatter___image___internal___owner',
  FrontmatterImageInternalType = 'frontmatter___image___internal___type',
  FrontmatterImageChildMarkdownRemarkId = 'frontmatter___image___childMarkdownRemark___id',
  FrontmatterImageChildMarkdownRemarkExcerpt = 'frontmatter___image___childMarkdownRemark___excerpt',
  FrontmatterImageChildMarkdownRemarkRawMarkdownBody = 'frontmatter___image___childMarkdownRemark___rawMarkdownBody',
  FrontmatterImageChildMarkdownRemarkFileAbsolutePath = 'frontmatter___image___childMarkdownRemark___fileAbsolutePath',
  FrontmatterImageChildMarkdownRemarkHtml = 'frontmatter___image___childMarkdownRemark___html',
  FrontmatterImageChildMarkdownRemarkHtmlAst = 'frontmatter___image___childMarkdownRemark___htmlAst',
  FrontmatterImageChildMarkdownRemarkExcerptAst = 'frontmatter___image___childMarkdownRemark___excerptAst',
  FrontmatterImageChildMarkdownRemarkHeadings = 'frontmatter___image___childMarkdownRemark___headings',
  FrontmatterImageChildMarkdownRemarkTimeToRead = 'frontmatter___image___childMarkdownRemark___timeToRead',
  FrontmatterImageChildMarkdownRemarkTableOfContents = 'frontmatter___image___childMarkdownRemark___tableOfContents',
  FrontmatterImageChildMarkdownRemarkChildren = 'frontmatter___image___childMarkdownRemark___children',
  FrontmatterHeading = 'frontmatter___heading',
  FrontmatterSubheading = 'frontmatter___subheading',
  FrontmatterDescription = 'frontmatter___description',
  FrontmatterDownloadableimages = 'frontmatter___downloadableimages',
  FrontmatterDownloadableimagesBirthtime = 'frontmatter___downloadableimages___birthtime',
  FrontmatterDownloadableimagesBirthtimeMs = 'frontmatter___downloadableimages___birthtimeMs',
  FrontmatterDownloadableimagesSourceInstanceName = 'frontmatter___downloadableimages___sourceInstanceName',
  FrontmatterDownloadableimagesAbsolutePath = 'frontmatter___downloadableimages___absolutePath',
  FrontmatterDownloadableimagesRelativePath = 'frontmatter___downloadableimages___relativePath',
  FrontmatterDownloadableimagesExtension = 'frontmatter___downloadableimages___extension',
  FrontmatterDownloadableimagesSize = 'frontmatter___downloadableimages___size',
  FrontmatterDownloadableimagesPrettySize = 'frontmatter___downloadableimages___prettySize',
  FrontmatterDownloadableimagesModifiedTime = 'frontmatter___downloadableimages___modifiedTime',
  FrontmatterDownloadableimagesAccessTime = 'frontmatter___downloadableimages___accessTime',
  FrontmatterDownloadableimagesChangeTime = 'frontmatter___downloadableimages___changeTime',
  FrontmatterDownloadableimagesBirthTime = 'frontmatter___downloadableimages___birthTime',
  FrontmatterDownloadableimagesRoot = 'frontmatter___downloadableimages___root',
  FrontmatterDownloadableimagesDir = 'frontmatter___downloadableimages___dir',
  FrontmatterDownloadableimagesBase = 'frontmatter___downloadableimages___base',
  FrontmatterDownloadableimagesExt = 'frontmatter___downloadableimages___ext',
  FrontmatterDownloadableimagesName = 'frontmatter___downloadableimages___name',
  FrontmatterDownloadableimagesRelativeDirectory = 'frontmatter___downloadableimages___relativeDirectory',
  FrontmatterDownloadableimagesDev = 'frontmatter___downloadableimages___dev',
  FrontmatterDownloadableimagesMode = 'frontmatter___downloadableimages___mode',
  FrontmatterDownloadableimagesNlink = 'frontmatter___downloadableimages___nlink',
  FrontmatterDownloadableimagesUid = 'frontmatter___downloadableimages___uid',
  FrontmatterDownloadableimagesGid = 'frontmatter___downloadableimages___gid',
  FrontmatterDownloadableimagesRdev = 'frontmatter___downloadableimages___rdev',
  FrontmatterDownloadableimagesBlksize = 'frontmatter___downloadableimages___blksize',
  FrontmatterDownloadableimagesIno = 'frontmatter___downloadableimages___ino',
  FrontmatterDownloadableimagesBlocks = 'frontmatter___downloadableimages___blocks',
  FrontmatterDownloadableimagesAtimeMs = 'frontmatter___downloadableimages___atimeMs',
  FrontmatterDownloadableimagesMtimeMs = 'frontmatter___downloadableimages___mtimeMs',
  FrontmatterDownloadableimagesCtimeMs = 'frontmatter___downloadableimages___ctimeMs',
  FrontmatterDownloadableimagesAtime = 'frontmatter___downloadableimages___atime',
  FrontmatterDownloadableimagesMtime = 'frontmatter___downloadableimages___mtime',
  FrontmatterDownloadableimagesCtime = 'frontmatter___downloadableimages___ctime',
  FrontmatterDownloadableimagesPublicUrl = 'frontmatter___downloadableimages___publicURL',
  FrontmatterDownloadableimagesChildImageSharpId = 'frontmatter___downloadableimages___childImageSharp___id',
  FrontmatterDownloadableimagesChildImageSharpChildren = 'frontmatter___downloadableimages___childImageSharp___children',
  FrontmatterDownloadableimagesId = 'frontmatter___downloadableimages___id',
  FrontmatterDownloadableimagesParentId = 'frontmatter___downloadableimages___parent___id',
  FrontmatterDownloadableimagesParentChildren = 'frontmatter___downloadableimages___parent___children',
  FrontmatterDownloadableimagesChildren = 'frontmatter___downloadableimages___children',
  FrontmatterDownloadableimagesChildrenId = 'frontmatter___downloadableimages___children___id',
  FrontmatterDownloadableimagesChildrenChildren = 'frontmatter___downloadableimages___children___children',
  FrontmatterDownloadableimagesInternalContent = 'frontmatter___downloadableimages___internal___content',
  FrontmatterDownloadableimagesInternalContentDigest = 'frontmatter___downloadableimages___internal___contentDigest',
  FrontmatterDownloadableimagesInternalDescription = 'frontmatter___downloadableimages___internal___description',
  FrontmatterDownloadableimagesInternalFieldOwners = 'frontmatter___downloadableimages___internal___fieldOwners',
  FrontmatterDownloadableimagesInternalIgnoreType = 'frontmatter___downloadableimages___internal___ignoreType',
  FrontmatterDownloadableimagesInternalMediaType = 'frontmatter___downloadableimages___internal___mediaType',
  FrontmatterDownloadableimagesInternalOwner = 'frontmatter___downloadableimages___internal___owner',
  FrontmatterDownloadableimagesInternalType = 'frontmatter___downloadableimages___internal___type',
  FrontmatterDownloadableimagesChildMarkdownRemarkId = 'frontmatter___downloadableimages___childMarkdownRemark___id',
  FrontmatterDownloadableimagesChildMarkdownRemarkExcerpt = 'frontmatter___downloadableimages___childMarkdownRemark___excerpt',
  FrontmatterDownloadableimagesChildMarkdownRemarkRawMarkdownBody = 'frontmatter___downloadableimages___childMarkdownRemark___rawMarkdownBody',
  FrontmatterDownloadableimagesChildMarkdownRemarkFileAbsolutePath = 'frontmatter___downloadableimages___childMarkdownRemark___fileAbsolutePath',
  FrontmatterDownloadableimagesChildMarkdownRemarkHtml = 'frontmatter___downloadableimages___childMarkdownRemark___html',
  FrontmatterDownloadableimagesChildMarkdownRemarkHtmlAst = 'frontmatter___downloadableimages___childMarkdownRemark___htmlAst',
  FrontmatterDownloadableimagesChildMarkdownRemarkExcerptAst = 'frontmatter___downloadableimages___childMarkdownRemark___excerptAst',
  FrontmatterDownloadableimagesChildMarkdownRemarkHeadings = 'frontmatter___downloadableimages___childMarkdownRemark___headings',
  FrontmatterDownloadableimagesChildMarkdownRemarkTimeToRead = 'frontmatter___downloadableimages___childMarkdownRemark___timeToRead',
  FrontmatterDownloadableimagesChildMarkdownRemarkTableOfContents = 'frontmatter___downloadableimages___childMarkdownRemark___tableOfContents',
  FrontmatterDownloadableimagesChildMarkdownRemarkChildren = 'frontmatter___downloadableimages___childMarkdownRemark___children',
  FrontmatterUrl = 'frontmatter___url',
  FrontmatterHidden = 'frontmatter___hidden',
  FrontmatterLanguage = 'frontmatter___language',
  FrontmatterDate = 'frontmatter___date',
  FrontmatterTags = 'frontmatter___tags',
  FrontmatterFeaturedimageBirthtime = 'frontmatter___featuredimage___birthtime',
  FrontmatterFeaturedimageBirthtimeMs = 'frontmatter___featuredimage___birthtimeMs',
  FrontmatterFeaturedimageSourceInstanceName = 'frontmatter___featuredimage___sourceInstanceName',
  FrontmatterFeaturedimageAbsolutePath = 'frontmatter___featuredimage___absolutePath',
  FrontmatterFeaturedimageRelativePath = 'frontmatter___featuredimage___relativePath',
  FrontmatterFeaturedimageExtension = 'frontmatter___featuredimage___extension',
  FrontmatterFeaturedimageSize = 'frontmatter___featuredimage___size',
  FrontmatterFeaturedimagePrettySize = 'frontmatter___featuredimage___prettySize',
  FrontmatterFeaturedimageModifiedTime = 'frontmatter___featuredimage___modifiedTime',
  FrontmatterFeaturedimageAccessTime = 'frontmatter___featuredimage___accessTime',
  FrontmatterFeaturedimageChangeTime = 'frontmatter___featuredimage___changeTime',
  FrontmatterFeaturedimageBirthTime = 'frontmatter___featuredimage___birthTime',
  FrontmatterFeaturedimageRoot = 'frontmatter___featuredimage___root',
  FrontmatterFeaturedimageDir = 'frontmatter___featuredimage___dir',
  FrontmatterFeaturedimageBase = 'frontmatter___featuredimage___base',
  FrontmatterFeaturedimageExt = 'frontmatter___featuredimage___ext',
  FrontmatterFeaturedimageName = 'frontmatter___featuredimage___name',
  FrontmatterFeaturedimageRelativeDirectory = 'frontmatter___featuredimage___relativeDirectory',
  FrontmatterFeaturedimageDev = 'frontmatter___featuredimage___dev',
  FrontmatterFeaturedimageMode = 'frontmatter___featuredimage___mode',
  FrontmatterFeaturedimageNlink = 'frontmatter___featuredimage___nlink',
  FrontmatterFeaturedimageUid = 'frontmatter___featuredimage___uid',
  FrontmatterFeaturedimageGid = 'frontmatter___featuredimage___gid',
  FrontmatterFeaturedimageRdev = 'frontmatter___featuredimage___rdev',
  FrontmatterFeaturedimageBlksize = 'frontmatter___featuredimage___blksize',
  FrontmatterFeaturedimageIno = 'frontmatter___featuredimage___ino',
  FrontmatterFeaturedimageBlocks = 'frontmatter___featuredimage___blocks',
  FrontmatterFeaturedimageAtimeMs = 'frontmatter___featuredimage___atimeMs',
  FrontmatterFeaturedimageMtimeMs = 'frontmatter___featuredimage___mtimeMs',
  FrontmatterFeaturedimageCtimeMs = 'frontmatter___featuredimage___ctimeMs',
  FrontmatterFeaturedimageAtime = 'frontmatter___featuredimage___atime',
  FrontmatterFeaturedimageMtime = 'frontmatter___featuredimage___mtime',
  FrontmatterFeaturedimageCtime = 'frontmatter___featuredimage___ctime',
  FrontmatterFeaturedimagePublicUrl = 'frontmatter___featuredimage___publicURL',
  FrontmatterFeaturedimageChildImageSharpId = 'frontmatter___featuredimage___childImageSharp___id',
  FrontmatterFeaturedimageChildImageSharpChildren = 'frontmatter___featuredimage___childImageSharp___children',
  FrontmatterFeaturedimageId = 'frontmatter___featuredimage___id',
  FrontmatterFeaturedimageParentId = 'frontmatter___featuredimage___parent___id',
  FrontmatterFeaturedimageParentChildren = 'frontmatter___featuredimage___parent___children',
  FrontmatterFeaturedimageChildren = 'frontmatter___featuredimage___children',
  FrontmatterFeaturedimageChildrenId = 'frontmatter___featuredimage___children___id',
  FrontmatterFeaturedimageChildrenChildren = 'frontmatter___featuredimage___children___children',
  FrontmatterFeaturedimageInternalContent = 'frontmatter___featuredimage___internal___content',
  FrontmatterFeaturedimageInternalContentDigest = 'frontmatter___featuredimage___internal___contentDigest',
  FrontmatterFeaturedimageInternalDescription = 'frontmatter___featuredimage___internal___description',
  FrontmatterFeaturedimageInternalFieldOwners = 'frontmatter___featuredimage___internal___fieldOwners',
  FrontmatterFeaturedimageInternalIgnoreType = 'frontmatter___featuredimage___internal___ignoreType',
  FrontmatterFeaturedimageInternalMediaType = 'frontmatter___featuredimage___internal___mediaType',
  FrontmatterFeaturedimageInternalOwner = 'frontmatter___featuredimage___internal___owner',
  FrontmatterFeaturedimageInternalType = 'frontmatter___featuredimage___internal___type',
  FrontmatterFeaturedimageChildMarkdownRemarkId = 'frontmatter___featuredimage___childMarkdownRemark___id',
  FrontmatterFeaturedimageChildMarkdownRemarkExcerpt = 'frontmatter___featuredimage___childMarkdownRemark___excerpt',
  FrontmatterFeaturedimageChildMarkdownRemarkRawMarkdownBody = 'frontmatter___featuredimage___childMarkdownRemark___rawMarkdownBody',
  FrontmatterFeaturedimageChildMarkdownRemarkFileAbsolutePath = 'frontmatter___featuredimage___childMarkdownRemark___fileAbsolutePath',
  FrontmatterFeaturedimageChildMarkdownRemarkHtml = 'frontmatter___featuredimage___childMarkdownRemark___html',
  FrontmatterFeaturedimageChildMarkdownRemarkHtmlAst = 'frontmatter___featuredimage___childMarkdownRemark___htmlAst',
  FrontmatterFeaturedimageChildMarkdownRemarkExcerptAst = 'frontmatter___featuredimage___childMarkdownRemark___excerptAst',
  FrontmatterFeaturedimageChildMarkdownRemarkHeadings = 'frontmatter___featuredimage___childMarkdownRemark___headings',
  FrontmatterFeaturedimageChildMarkdownRemarkTimeToRead = 'frontmatter___featuredimage___childMarkdownRemark___timeToRead',
  FrontmatterFeaturedimageChildMarkdownRemarkTableOfContents = 'frontmatter___featuredimage___childMarkdownRemark___tableOfContents',
  FrontmatterFeaturedimageChildMarkdownRemarkChildren = 'frontmatter___featuredimage___childMarkdownRemark___children',
  Excerpt = 'excerpt',
  RawMarkdownBody = 'rawMarkdownBody',
  FileAbsolutePath = 'fileAbsolutePath',
  FieldsSlug = 'fields___slug',
  FieldsLanguage = 'fields___language',
  Html = 'html',
  HtmlAst = 'htmlAst',
  ExcerptAst = 'excerptAst',
  Headings = 'headings',
  HeadingsValue = 'headings___value',
  HeadingsDepth = 'headings___depth',
  TimeToRead = 'timeToRead',
  TableOfContents = 'tableOfContents',
  WordCountParagraphs = 'wordCount___paragraphs',
  WordCountSentences = 'wordCount___sentences',
  WordCountWords = 'wordCount___words',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type MarkdownRemarkFieldsFilterInput = {
  slug?: Maybe<StringQueryOperatorInput>,
  language?: Maybe<StringQueryOperatorInput>,
};

export type MarkdownRemarkFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  frontmatter?: Maybe<MarkdownRemarkFrontmatterFilterInput>,
  excerpt?: Maybe<StringQueryOperatorInput>,
  rawMarkdownBody?: Maybe<StringQueryOperatorInput>,
  fileAbsolutePath?: Maybe<StringQueryOperatorInput>,
  fields?: Maybe<MarkdownRemarkFieldsFilterInput>,
  html?: Maybe<StringQueryOperatorInput>,
  htmlAst?: Maybe<JsonQueryOperatorInput>,
  excerptAst?: Maybe<JsonQueryOperatorInput>,
  headings?: Maybe<MarkdownHeadingFilterListInput>,
  timeToRead?: Maybe<IntQueryOperatorInput>,
  tableOfContents?: Maybe<StringQueryOperatorInput>,
  wordCount?: Maybe<MarkdownWordCountFilterInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
};

export type MarkdownRemarkFrontmatter = {
   __typename?: 'MarkdownRemarkFrontmatter',
  title?: Maybe<Scalars['String']>,
  templateKey?: Maybe<Scalars['String']>,
  image?: Maybe<File>,
  heading?: Maybe<Scalars['String']>,
  subheading?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  downloadableimages?: Maybe<Array<Maybe<File>>>,
  url?: Maybe<Scalars['String']>,
  hidden?: Maybe<Scalars['Boolean']>,
  language?: Maybe<Scalars['String']>,
  date?: Maybe<Scalars['Date']>,
  tags?: Maybe<Array<Maybe<Scalars['String']>>>,
  featuredimage?: Maybe<File>,
};


export type MarkdownRemarkFrontmatterDateArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};

export type MarkdownRemarkFrontmatterFilterInput = {
  title?: Maybe<StringQueryOperatorInput>,
  templateKey?: Maybe<StringQueryOperatorInput>,
  image?: Maybe<FileFilterInput>,
  heading?: Maybe<StringQueryOperatorInput>,
  subheading?: Maybe<StringQueryOperatorInput>,
  description?: Maybe<StringQueryOperatorInput>,
  downloadableimages?: Maybe<FileFilterListInput>,
  url?: Maybe<StringQueryOperatorInput>,
  hidden?: Maybe<BooleanQueryOperatorInput>,
  language?: Maybe<StringQueryOperatorInput>,
  date?: Maybe<DateQueryOperatorInput>,
  tags?: Maybe<StringQueryOperatorInput>,
  featuredimage?: Maybe<FileFilterInput>,
};

export type MarkdownRemarkGroupConnection = {
   __typename?: 'MarkdownRemarkGroupConnection',
  totalCount: Scalars['Int'],
  edges: Array<MarkdownRemarkEdge>,
  nodes: Array<MarkdownRemark>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type MarkdownRemarkSortInput = {
  fields?: Maybe<Array<Maybe<MarkdownRemarkFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type MarkdownWordCount = {
   __typename?: 'MarkdownWordCount',
  paragraphs?: Maybe<Scalars['Int']>,
  sentences?: Maybe<Scalars['Int']>,
  words?: Maybe<Scalars['Int']>,
};

export type MarkdownWordCountFilterInput = {
  paragraphs?: Maybe<IntQueryOperatorInput>,
  sentences?: Maybe<IntQueryOperatorInput>,
  words?: Maybe<IntQueryOperatorInput>,
};

/** Node Interface */
export type Node = {
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
};

export type NodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
};

export type NodeFilterListInput = {
  elemMatch?: Maybe<NodeFilterInput>,
};

export type PageInfo = {
   __typename?: 'PageInfo',
  currentPage: Scalars['Int'],
  hasPreviousPage: Scalars['Boolean'],
  hasNextPage: Scalars['Boolean'],
  itemCount: Scalars['Int'],
  pageCount: Scalars['Int'],
  perPage?: Maybe<Scalars['Int']>,
};

export type Potrace = {
  turnPolicy?: Maybe<PotraceTurnPolicy>,
  turdSize?: Maybe<Scalars['Float']>,
  alphaMax?: Maybe<Scalars['Float']>,
  optCurve?: Maybe<Scalars['Boolean']>,
  optTolerance?: Maybe<Scalars['Float']>,
  threshold?: Maybe<Scalars['Int']>,
  blackOnWhite?: Maybe<Scalars['Boolean']>,
  color?: Maybe<Scalars['String']>,
  background?: Maybe<Scalars['String']>,
};

export enum PotraceTurnPolicy {
  TurnpolicyBlack = 'TURNPOLICY_BLACK',
  TurnpolicyWhite = 'TURNPOLICY_WHITE',
  TurnpolicyLeft = 'TURNPOLICY_LEFT',
  TurnpolicyRight = 'TURNPOLICY_RIGHT',
  TurnpolicyMinority = 'TURNPOLICY_MINORITY',
  TurnpolicyMajority = 'TURNPOLICY_MAJORITY'
}

export type Query = {
   __typename?: 'Query',
  imageSharp?: Maybe<ImageSharp>,
  allImageSharp: ImageSharpConnection,
  markdownRemark?: Maybe<MarkdownRemark>,
  allMarkdownRemark: MarkdownRemarkConnection,
  file?: Maybe<File>,
  allFile: FileConnection,
  twitterStatusesUserTimeline?: Maybe<TwitterStatusesUserTimeline>,
  allTwitterStatusesUserTimeline: TwitterStatusesUserTimelineConnection,
  siteSearchIndex?: Maybe<SiteSearchIndex>,
  allSiteSearchIndex: SiteSearchIndexConnection,
  directory?: Maybe<Directory>,
  allDirectory: DirectoryConnection,
  site?: Maybe<Site>,
  allSite: SiteConnection,
  sitePlugin?: Maybe<SitePlugin>,
  allSitePlugin: SitePluginConnection,
  sitePage?: Maybe<SitePage>,
  allSitePage: SitePageConnection,
};


export type QueryImageSharpArgs = {
  fixed?: Maybe<ImageSharpFixedFilterInput>,
  resolutions?: Maybe<ImageSharpResolutionsFilterInput>,
  fluid?: Maybe<ImageSharpFluidFilterInput>,
  sizes?: Maybe<ImageSharpSizesFilterInput>,
  original?: Maybe<ImageSharpOriginalFilterInput>,
  resize?: Maybe<ImageSharpResizeFilterInput>,
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>
};


export type QueryAllImageSharpArgs = {
  filter?: Maybe<ImageSharpFilterInput>,
  sort?: Maybe<ImageSharpSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QueryMarkdownRemarkArgs = {
  id?: Maybe<StringQueryOperatorInput>,
  frontmatter?: Maybe<MarkdownRemarkFrontmatterFilterInput>,
  excerpt?: Maybe<StringQueryOperatorInput>,
  rawMarkdownBody?: Maybe<StringQueryOperatorInput>,
  fileAbsolutePath?: Maybe<StringQueryOperatorInput>,
  fields?: Maybe<MarkdownRemarkFieldsFilterInput>,
  html?: Maybe<StringQueryOperatorInput>,
  htmlAst?: Maybe<JsonQueryOperatorInput>,
  excerptAst?: Maybe<JsonQueryOperatorInput>,
  headings?: Maybe<MarkdownHeadingFilterListInput>,
  timeToRead?: Maybe<IntQueryOperatorInput>,
  tableOfContents?: Maybe<StringQueryOperatorInput>,
  wordCount?: Maybe<MarkdownWordCountFilterInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>
};


export type QueryAllMarkdownRemarkArgs = {
  filter?: Maybe<MarkdownRemarkFilterInput>,
  sort?: Maybe<MarkdownRemarkSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QueryFileArgs = {
  birthtime?: Maybe<DateQueryOperatorInput>,
  birthtimeMs?: Maybe<FloatQueryOperatorInput>,
  sourceInstanceName?: Maybe<StringQueryOperatorInput>,
  absolutePath?: Maybe<StringQueryOperatorInput>,
  relativePath?: Maybe<StringQueryOperatorInput>,
  extension?: Maybe<StringQueryOperatorInput>,
  size?: Maybe<IntQueryOperatorInput>,
  prettySize?: Maybe<StringQueryOperatorInput>,
  modifiedTime?: Maybe<DateQueryOperatorInput>,
  accessTime?: Maybe<DateQueryOperatorInput>,
  changeTime?: Maybe<DateQueryOperatorInput>,
  birthTime?: Maybe<DateQueryOperatorInput>,
  root?: Maybe<StringQueryOperatorInput>,
  dir?: Maybe<StringQueryOperatorInput>,
  base?: Maybe<StringQueryOperatorInput>,
  ext?: Maybe<StringQueryOperatorInput>,
  name?: Maybe<StringQueryOperatorInput>,
  relativeDirectory?: Maybe<StringQueryOperatorInput>,
  dev?: Maybe<IntQueryOperatorInput>,
  mode?: Maybe<IntQueryOperatorInput>,
  nlink?: Maybe<IntQueryOperatorInput>,
  uid?: Maybe<IntQueryOperatorInput>,
  gid?: Maybe<IntQueryOperatorInput>,
  rdev?: Maybe<IntQueryOperatorInput>,
  blksize?: Maybe<IntQueryOperatorInput>,
  ino?: Maybe<IntQueryOperatorInput>,
  blocks?: Maybe<IntQueryOperatorInput>,
  atimeMs?: Maybe<FloatQueryOperatorInput>,
  mtimeMs?: Maybe<FloatQueryOperatorInput>,
  ctimeMs?: Maybe<FloatQueryOperatorInput>,
  atime?: Maybe<DateQueryOperatorInput>,
  mtime?: Maybe<DateQueryOperatorInput>,
  ctime?: Maybe<DateQueryOperatorInput>,
  publicURL?: Maybe<StringQueryOperatorInput>,
  childImageSharp?: Maybe<ImageSharpFilterInput>,
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  childMarkdownRemark?: Maybe<MarkdownRemarkFilterInput>
};


export type QueryAllFileArgs = {
  filter?: Maybe<FileFilterInput>,
  sort?: Maybe<FileSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QueryTwitterStatusesUserTimelineArgs = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  created_at?: Maybe<StringQueryOperatorInput>,
  id_str?: Maybe<StringQueryOperatorInput>,
  text?: Maybe<StringQueryOperatorInput>,
  full_text?: Maybe<StringQueryOperatorInput>,
  truncated?: Maybe<BooleanQueryOperatorInput>,
  linked_site?: Maybe<TwitterStatusesUserTimelineLinked_SiteFilterInput>,
  entities?: Maybe<TwitterStatusesUserTimelineEntitiesFilterInput>,
  source?: Maybe<StringQueryOperatorInput>,
  user?: Maybe<TwitterStatusesUserTimelineUserFilterInput>,
  retweeted_status?: Maybe<TwitterStatusesUserTimelineRetweeted_StatusFilterInput>,
  is_quote_status?: Maybe<BooleanQueryOperatorInput>,
  retweet_count?: Maybe<IntQueryOperatorInput>,
  favorite_count?: Maybe<IntQueryOperatorInput>,
  favorited?: Maybe<BooleanQueryOperatorInput>,
  retweeted?: Maybe<BooleanQueryOperatorInput>,
  lang?: Maybe<StringQueryOperatorInput>,
  display_text_range?: Maybe<IntQueryOperatorInput>,
  possibly_sensitive?: Maybe<BooleanQueryOperatorInput>
};


export type QueryAllTwitterStatusesUserTimelineArgs = {
  filter?: Maybe<TwitterStatusesUserTimelineFilterInput>,
  sort?: Maybe<TwitterStatusesUserTimelineSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QuerySiteSearchIndexArgs = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  pages?: Maybe<StringQueryOperatorInput>,
  index?: Maybe<SiteSearchIndex_IndexQueryOperatorInput>
};


export type QueryAllSiteSearchIndexArgs = {
  filter?: Maybe<SiteSearchIndexFilterInput>,
  sort?: Maybe<SiteSearchIndexSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QueryDirectoryArgs = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  sourceInstanceName?: Maybe<StringQueryOperatorInput>,
  absolutePath?: Maybe<StringQueryOperatorInput>,
  relativePath?: Maybe<StringQueryOperatorInput>,
  extension?: Maybe<StringQueryOperatorInput>,
  size?: Maybe<IntQueryOperatorInput>,
  prettySize?: Maybe<StringQueryOperatorInput>,
  modifiedTime?: Maybe<DateQueryOperatorInput>,
  accessTime?: Maybe<DateQueryOperatorInput>,
  changeTime?: Maybe<DateQueryOperatorInput>,
  birthTime?: Maybe<DateQueryOperatorInput>,
  root?: Maybe<StringQueryOperatorInput>,
  dir?: Maybe<StringQueryOperatorInput>,
  base?: Maybe<StringQueryOperatorInput>,
  ext?: Maybe<StringQueryOperatorInput>,
  name?: Maybe<StringQueryOperatorInput>,
  relativeDirectory?: Maybe<StringQueryOperatorInput>,
  dev?: Maybe<IntQueryOperatorInput>,
  mode?: Maybe<IntQueryOperatorInput>,
  nlink?: Maybe<IntQueryOperatorInput>,
  uid?: Maybe<IntQueryOperatorInput>,
  gid?: Maybe<IntQueryOperatorInput>,
  rdev?: Maybe<IntQueryOperatorInput>,
  blksize?: Maybe<IntQueryOperatorInput>,
  ino?: Maybe<IntQueryOperatorInput>,
  blocks?: Maybe<IntQueryOperatorInput>,
  atimeMs?: Maybe<FloatQueryOperatorInput>,
  mtimeMs?: Maybe<FloatQueryOperatorInput>,
  ctimeMs?: Maybe<FloatQueryOperatorInput>,
  birthtimeMs?: Maybe<FloatQueryOperatorInput>,
  atime?: Maybe<DateQueryOperatorInput>,
  mtime?: Maybe<DateQueryOperatorInput>,
  ctime?: Maybe<DateQueryOperatorInput>,
  birthtime?: Maybe<DateQueryOperatorInput>
};


export type QueryAllDirectoryArgs = {
  filter?: Maybe<DirectoryFilterInput>,
  sort?: Maybe<DirectorySortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QuerySiteArgs = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  port?: Maybe<IntQueryOperatorInput>,
  host?: Maybe<StringQueryOperatorInput>,
  polyfill?: Maybe<BooleanQueryOperatorInput>,
  pathPrefix?: Maybe<StringQueryOperatorInput>,
  buildTime?: Maybe<DateQueryOperatorInput>
};


export type QueryAllSiteArgs = {
  filter?: Maybe<SiteFilterInput>,
  sort?: Maybe<SiteSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QuerySitePluginArgs = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  resolve?: Maybe<StringQueryOperatorInput>,
  name?: Maybe<StringQueryOperatorInput>,
  version?: Maybe<StringQueryOperatorInput>,
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>,
  nodeAPIs?: Maybe<StringQueryOperatorInput>,
  browserAPIs?: Maybe<StringQueryOperatorInput>,
  ssrAPIs?: Maybe<StringQueryOperatorInput>,
  pluginFilepath?: Maybe<StringQueryOperatorInput>,
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>
};


export type QueryAllSitePluginArgs = {
  filter?: Maybe<SitePluginFilterInput>,
  sort?: Maybe<SitePluginSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QuerySitePageArgs = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  path?: Maybe<StringQueryOperatorInput>,
  internalComponentName?: Maybe<StringQueryOperatorInput>,
  component?: Maybe<StringQueryOperatorInput>,
  componentChunkName?: Maybe<StringQueryOperatorInput>,
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>,
  context?: Maybe<SitePageContextFilterInput>,
  pluginCreator?: Maybe<SitePluginFilterInput>,
  pluginCreatorId?: Maybe<StringQueryOperatorInput>,
  componentPath?: Maybe<StringQueryOperatorInput>
};


export type QueryAllSitePageArgs = {
  filter?: Maybe<SitePageFilterInput>,
  sort?: Maybe<SitePageSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};

export type Site = Node & {
   __typename?: 'Site',
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  port?: Maybe<Scalars['Int']>,
  host?: Maybe<Scalars['String']>,
  polyfill?: Maybe<Scalars['Boolean']>,
  pathPrefix?: Maybe<Scalars['String']>,
  buildTime?: Maybe<Scalars['Date']>,
};


export type SiteBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};

export type SiteConnection = {
   __typename?: 'SiteConnection',
  totalCount: Scalars['Int'],
  edges: Array<SiteEdge>,
  nodes: Array<Site>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<SiteGroupConnection>,
};


export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum
};


export type SiteConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: SiteFieldsEnum
};

export type SiteEdge = {
   __typename?: 'SiteEdge',
  next?: Maybe<Site>,
  node: Site,
  previous?: Maybe<Site>,
};

export enum SiteFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Port = 'port',
  Host = 'host',
  Polyfill = 'polyfill',
  PathPrefix = 'pathPrefix',
  BuildTime = 'buildTime'
}

export type SiteFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  port?: Maybe<IntQueryOperatorInput>,
  host?: Maybe<StringQueryOperatorInput>,
  polyfill?: Maybe<BooleanQueryOperatorInput>,
  pathPrefix?: Maybe<StringQueryOperatorInput>,
  buildTime?: Maybe<DateQueryOperatorInput>,
};

export type SiteGroupConnection = {
   __typename?: 'SiteGroupConnection',
  totalCount: Scalars['Int'],
  edges: Array<SiteEdge>,
  nodes: Array<Site>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type SitePage = Node & {
   __typename?: 'SitePage',
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  path?: Maybe<Scalars['String']>,
  internalComponentName?: Maybe<Scalars['String']>,
  component?: Maybe<Scalars['String']>,
  componentChunkName?: Maybe<Scalars['String']>,
  isCreatedByStatefulCreatePages?: Maybe<Scalars['Boolean']>,
  context?: Maybe<SitePageContext>,
  pluginCreator?: Maybe<SitePlugin>,
  pluginCreatorId?: Maybe<Scalars['String']>,
  componentPath?: Maybe<Scalars['String']>,
};

export type SitePageConnection = {
   __typename?: 'SitePageConnection',
  totalCount: Scalars['Int'],
  edges: Array<SitePageEdge>,
  nodes: Array<SitePage>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<SitePageGroupConnection>,
};


export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum
};


export type SitePageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: SitePageFieldsEnum
};

export type SitePageContext = {
   __typename?: 'SitePageContext',
  id?: Maybe<Scalars['String']>,
  tag?: Maybe<Scalars['String']>,
};

export type SitePageContextFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  tag?: Maybe<StringQueryOperatorInput>,
};

export type SitePageEdge = {
   __typename?: 'SitePageEdge',
  next?: Maybe<SitePage>,
  node: SitePage,
  previous?: Maybe<SitePage>,
};

export enum SitePageFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Path = 'path',
  InternalComponentName = 'internalComponentName',
  Component = 'component',
  ComponentChunkName = 'componentChunkName',
  IsCreatedByStatefulCreatePages = 'isCreatedByStatefulCreatePages',
  ContextId = 'context___id',
  ContextTag = 'context___tag',
  PluginCreatorId = 'pluginCreator___id',
  PluginCreatorParentId = 'pluginCreator___parent___id',
  PluginCreatorParentParentId = 'pluginCreator___parent___parent___id',
  PluginCreatorParentParentChildren = 'pluginCreator___parent___parent___children',
  PluginCreatorParentChildren = 'pluginCreator___parent___children',
  PluginCreatorParentChildrenId = 'pluginCreator___parent___children___id',
  PluginCreatorParentChildrenChildren = 'pluginCreator___parent___children___children',
  PluginCreatorParentInternalContent = 'pluginCreator___parent___internal___content',
  PluginCreatorParentInternalContentDigest = 'pluginCreator___parent___internal___contentDigest',
  PluginCreatorParentInternalDescription = 'pluginCreator___parent___internal___description',
  PluginCreatorParentInternalFieldOwners = 'pluginCreator___parent___internal___fieldOwners',
  PluginCreatorParentInternalIgnoreType = 'pluginCreator___parent___internal___ignoreType',
  PluginCreatorParentInternalMediaType = 'pluginCreator___parent___internal___mediaType',
  PluginCreatorParentInternalOwner = 'pluginCreator___parent___internal___owner',
  PluginCreatorParentInternalType = 'pluginCreator___parent___internal___type',
  PluginCreatorChildren = 'pluginCreator___children',
  PluginCreatorChildrenId = 'pluginCreator___children___id',
  PluginCreatorChildrenParentId = 'pluginCreator___children___parent___id',
  PluginCreatorChildrenParentChildren = 'pluginCreator___children___parent___children',
  PluginCreatorChildrenChildren = 'pluginCreator___children___children',
  PluginCreatorChildrenChildrenId = 'pluginCreator___children___children___id',
  PluginCreatorChildrenChildrenChildren = 'pluginCreator___children___children___children',
  PluginCreatorChildrenInternalContent = 'pluginCreator___children___internal___content',
  PluginCreatorChildrenInternalContentDigest = 'pluginCreator___children___internal___contentDigest',
  PluginCreatorChildrenInternalDescription = 'pluginCreator___children___internal___description',
  PluginCreatorChildrenInternalFieldOwners = 'pluginCreator___children___internal___fieldOwners',
  PluginCreatorChildrenInternalIgnoreType = 'pluginCreator___children___internal___ignoreType',
  PluginCreatorChildrenInternalMediaType = 'pluginCreator___children___internal___mediaType',
  PluginCreatorChildrenInternalOwner = 'pluginCreator___children___internal___owner',
  PluginCreatorChildrenInternalType = 'pluginCreator___children___internal___type',
  PluginCreatorInternalContent = 'pluginCreator___internal___content',
  PluginCreatorInternalContentDigest = 'pluginCreator___internal___contentDigest',
  PluginCreatorInternalDescription = 'pluginCreator___internal___description',
  PluginCreatorInternalFieldOwners = 'pluginCreator___internal___fieldOwners',
  PluginCreatorInternalIgnoreType = 'pluginCreator___internal___ignoreType',
  PluginCreatorInternalMediaType = 'pluginCreator___internal___mediaType',
  PluginCreatorInternalOwner = 'pluginCreator___internal___owner',
  PluginCreatorInternalType = 'pluginCreator___internal___type',
  PluginCreatorResolve = 'pluginCreator___resolve',
  PluginCreatorName = 'pluginCreator___name',
  PluginCreatorVersion = 'pluginCreator___version',
  PluginCreatorPluginOptionsPlugins = 'pluginCreator___pluginOptions___plugins',
  PluginCreatorPluginOptionsPluginsResolve = 'pluginCreator___pluginOptions___plugins___resolve',
  PluginCreatorPluginOptionsPluginsId = 'pluginCreator___pluginOptions___plugins___id',
  PluginCreatorPluginOptionsPluginsName = 'pluginCreator___pluginOptions___plugins___name',
  PluginCreatorPluginOptionsPluginsVersion = 'pluginCreator___pluginOptions___plugins___version',
  PluginCreatorPluginOptionsPluginsNodeApIs = 'pluginCreator___pluginOptions___plugins___nodeAPIs',
  PluginCreatorPluginOptionsPluginsBrowserApIs = 'pluginCreator___pluginOptions___plugins___browserAPIs',
  PluginCreatorPluginOptionsPluginsSsrApIs = 'pluginCreator___pluginOptions___plugins___ssrAPIs',
  PluginCreatorPluginOptionsPluginsPluginFilepath = 'pluginCreator___pluginOptions___plugins___pluginFilepath',
  PluginCreatorPluginOptionsPath = 'pluginCreator___pluginOptions___path',
  PluginCreatorPluginOptionsName = 'pluginCreator___pluginOptions___name',
  PluginCreatorPluginOptionsColor = 'pluginCreator___pluginOptions___color',
  PluginCreatorPluginOptionsPaths = 'pluginCreator___pluginOptions___paths',
  PluginCreatorPluginOptionsCredentialsConsumerKey = 'pluginCreator___pluginOptions___credentials___consumer_key',
  PluginCreatorPluginOptionsCredentialsConsumerSecret = 'pluginCreator___pluginOptions___credentials___consumer_secret',
  PluginCreatorPluginOptionsCredentialsBearerToken = 'pluginCreator___pluginOptions___credentials___bearer_token',
  PluginCreatorPluginOptionsQueryEndpoint = 'pluginCreator___pluginOptions___query___endpoint',
  PluginCreatorPluginOptionsToFormat = 'pluginCreator___pluginOptions___toFormat',
  PluginCreatorPluginOptionsMaxWidth = 'pluginCreator___pluginOptions___maxWidth',
  PluginCreatorPluginOptionsLinkImagesToOriginal = 'pluginCreator___pluginOptions___linkImagesToOriginal',
  PluginCreatorPluginOptionsShowCaptions = 'pluginCreator___pluginOptions___showCaptions',
  PluginCreatorPluginOptionsWithWebp = 'pluginCreator___pluginOptions___withWebp',
  PluginCreatorPluginOptionsDestinationDir = 'pluginCreator___pluginOptions___destinationDir',
  PluginCreatorPluginOptionsUsePrefix = 'pluginCreator___pluginOptions___usePrefix',
  PluginCreatorPluginOptionsProvidersInclude = 'pluginCreator___pluginOptions___providers___include',
  PluginCreatorPluginOptionsProvidersExclude = 'pluginCreator___pluginOptions___providers___exclude',
  PluginCreatorPluginOptionsWrapperStyle = 'pluginCreator___pluginOptions___wrapperStyle',
  PluginCreatorPluginOptionsPathToConfigModule = 'pluginCreator___pluginOptions___pathToConfigModule',
  PluginCreatorPluginOptionsOmitGoogleFont = 'pluginCreator___pluginOptions___omitGoogleFont',
  PluginCreatorPluginOptionsFonts = 'pluginCreator___pluginOptions___fonts',
  PluginCreatorPluginOptionsFontsFamily = 'pluginCreator___pluginOptions___fonts___family',
  PluginCreatorPluginOptionsFontsSubsets = 'pluginCreator___pluginOptions___fonts___subsets',
  PluginCreatorPluginOptionsFontsVariants = 'pluginCreator___pluginOptions___fonts___variants',
  PluginCreatorPluginOptionsFields = 'pluginCreator___pluginOptions___fields',
  PluginCreatorPluginOptionsShortName = 'pluginCreator___pluginOptions___short_name',
  PluginCreatorPluginOptionsStartUrl = 'pluginCreator___pluginOptions___start_url',
  PluginCreatorPluginOptionsBackgroundColor = 'pluginCreator___pluginOptions___background_color',
  PluginCreatorPluginOptionsThemeColor = 'pluginCreator___pluginOptions___theme_color',
  PluginCreatorPluginOptionsDisplay = 'pluginCreator___pluginOptions___display',
  PluginCreatorPluginOptionsIcon = 'pluginCreator___pluginOptions___icon',
  PluginCreatorPluginOptionsShortname = 'pluginCreator___pluginOptions___shortname',
  PluginCreatorPluginOptionsTrackingId = 'pluginCreator___pluginOptions___trackingId',
  PluginCreatorPluginOptionsHead = 'pluginCreator___pluginOptions___head',
  PluginCreatorPluginOptionsAnonymize = 'pluginCreator___pluginOptions___anonymize',
  PluginCreatorPluginOptionsRespectDnt = 'pluginCreator___pluginOptions___respectDNT',
  PluginCreatorPluginOptionsModulePath = 'pluginCreator___pluginOptions___modulePath',
  PluginCreatorPluginOptionsManualInit = 'pluginCreator___pluginOptions___manualInit',
  PluginCreatorPluginOptionsEnableIdentityWidget = 'pluginCreator___pluginOptions___enableIdentityWidget',
  PluginCreatorPluginOptionsHtmlTitle = 'pluginCreator___pluginOptions___htmlTitle',
  PluginCreatorPluginOptionsHtmlFavicon = 'pluginCreator___pluginOptions___htmlFavicon',
  PluginCreatorPluginOptionsPathCheck = 'pluginCreator___pluginOptions___pathCheck',
  PluginCreatorNodeApIs = 'pluginCreator___nodeAPIs',
  PluginCreatorBrowserApIs = 'pluginCreator___browserAPIs',
  PluginCreatorSsrApIs = 'pluginCreator___ssrAPIs',
  PluginCreatorPluginFilepath = 'pluginCreator___pluginFilepath',
  PluginCreatorPackageJsonName = 'pluginCreator___packageJson___name',
  PluginCreatorPackageJsonDescription = 'pluginCreator___packageJson___description',
  PluginCreatorPackageJsonVersion = 'pluginCreator___packageJson___version',
  PluginCreatorPackageJsonMain = 'pluginCreator___packageJson___main',
  PluginCreatorPackageJsonAuthor = 'pluginCreator___packageJson___author',
  PluginCreatorPackageJsonLicense = 'pluginCreator___packageJson___license',
  PluginCreatorPackageJsonDependencies = 'pluginCreator___packageJson___dependencies',
  PluginCreatorPackageJsonDependenciesName = 'pluginCreator___packageJson___dependencies___name',
  PluginCreatorPackageJsonDependenciesVersion = 'pluginCreator___packageJson___dependencies___version',
  PluginCreatorPackageJsonDevDependencies = 'pluginCreator___packageJson___devDependencies',
  PluginCreatorPackageJsonDevDependenciesName = 'pluginCreator___packageJson___devDependencies___name',
  PluginCreatorPackageJsonDevDependenciesVersion = 'pluginCreator___packageJson___devDependencies___version',
  PluginCreatorPackageJsonPeerDependencies = 'pluginCreator___packageJson___peerDependencies',
  PluginCreatorPackageJsonPeerDependenciesName = 'pluginCreator___packageJson___peerDependencies___name',
  PluginCreatorPackageJsonPeerDependenciesVersion = 'pluginCreator___packageJson___peerDependencies___version',
  PluginCreatorPackageJsonKeywords = 'pluginCreator___packageJson___keywords',
  PluginCreatorId = 'pluginCreatorId',
  ComponentPath = 'componentPath'
}

export type SitePageFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  path?: Maybe<StringQueryOperatorInput>,
  internalComponentName?: Maybe<StringQueryOperatorInput>,
  component?: Maybe<StringQueryOperatorInput>,
  componentChunkName?: Maybe<StringQueryOperatorInput>,
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>,
  context?: Maybe<SitePageContextFilterInput>,
  pluginCreator?: Maybe<SitePluginFilterInput>,
  pluginCreatorId?: Maybe<StringQueryOperatorInput>,
  componentPath?: Maybe<StringQueryOperatorInput>,
};

export type SitePageGroupConnection = {
   __typename?: 'SitePageGroupConnection',
  totalCount: Scalars['Int'],
  edges: Array<SitePageEdge>,
  nodes: Array<SitePage>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type SitePageSortInput = {
  fields?: Maybe<Array<Maybe<SitePageFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type SitePlugin = Node & {
   __typename?: 'SitePlugin',
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  resolve?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  version?: Maybe<Scalars['String']>,
  pluginOptions?: Maybe<SitePluginPluginOptions>,
  nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>,
  browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>,
  ssrAPIs?: Maybe<Array<Maybe<Scalars['String']>>>,
  pluginFilepath?: Maybe<Scalars['String']>,
  packageJson?: Maybe<SitePluginPackageJson>,
};

export type SitePluginConnection = {
   __typename?: 'SitePluginConnection',
  totalCount: Scalars['Int'],
  edges: Array<SitePluginEdge>,
  nodes: Array<SitePlugin>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<SitePluginGroupConnection>,
};


export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum
};


export type SitePluginConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: SitePluginFieldsEnum
};

export type SitePluginEdge = {
   __typename?: 'SitePluginEdge',
  next?: Maybe<SitePlugin>,
  node: SitePlugin,
  previous?: Maybe<SitePlugin>,
};

export enum SitePluginFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Resolve = 'resolve',
  Name = 'name',
  Version = 'version',
  PluginOptionsPlugins = 'pluginOptions___plugins',
  PluginOptionsPluginsResolve = 'pluginOptions___plugins___resolve',
  PluginOptionsPluginsId = 'pluginOptions___plugins___id',
  PluginOptionsPluginsName = 'pluginOptions___plugins___name',
  PluginOptionsPluginsVersion = 'pluginOptions___plugins___version',
  PluginOptionsPluginsPluginOptionsName = 'pluginOptions___plugins___pluginOptions___name',
  PluginOptionsPluginsPluginOptionsMaxWidth = 'pluginOptions___plugins___pluginOptions___maxWidth',
  PluginOptionsPluginsPluginOptionsLinkImagesToOriginal = 'pluginOptions___plugins___pluginOptions___linkImagesToOriginal',
  PluginOptionsPluginsPluginOptionsShowCaptions = 'pluginOptions___plugins___pluginOptions___showCaptions',
  PluginOptionsPluginsPluginOptionsWithWebp = 'pluginOptions___plugins___pluginOptions___withWebp',
  PluginOptionsPluginsPluginOptionsDestinationDir = 'pluginOptions___plugins___pluginOptions___destinationDir',
  PluginOptionsPluginsPluginOptionsUsePrefix = 'pluginOptions___plugins___pluginOptions___usePrefix',
  PluginOptionsPluginsPluginOptionsWrapperStyle = 'pluginOptions___plugins___pluginOptions___wrapperStyle',
  PluginOptionsPluginsNodeApIs = 'pluginOptions___plugins___nodeAPIs',
  PluginOptionsPluginsBrowserApIs = 'pluginOptions___plugins___browserAPIs',
  PluginOptionsPluginsSsrApIs = 'pluginOptions___plugins___ssrAPIs',
  PluginOptionsPluginsPluginFilepath = 'pluginOptions___plugins___pluginFilepath',
  PluginOptionsPath = 'pluginOptions___path',
  PluginOptionsName = 'pluginOptions___name',
  PluginOptionsColor = 'pluginOptions___color',
  PluginOptionsPaths = 'pluginOptions___paths',
  PluginOptionsCredentialsConsumerKey = 'pluginOptions___credentials___consumer_key',
  PluginOptionsCredentialsConsumerSecret = 'pluginOptions___credentials___consumer_secret',
  PluginOptionsCredentialsBearerToken = 'pluginOptions___credentials___bearer_token',
  PluginOptionsQueryEndpoint = 'pluginOptions___query___endpoint',
  PluginOptionsQueryParamsScreenName = 'pluginOptions___query___params___screen_name',
  PluginOptionsQueryParamsIncludeRts = 'pluginOptions___query___params___include_rts',
  PluginOptionsQueryParamsExcludeReplies = 'pluginOptions___query___params___exclude_replies',
  PluginOptionsQueryParamsTweetMode = 'pluginOptions___query___params___tweet_mode',
  PluginOptionsQueryParamsCount = 'pluginOptions___query___params___count',
  PluginOptionsToFormat = 'pluginOptions___toFormat',
  PluginOptionsMaxWidth = 'pluginOptions___maxWidth',
  PluginOptionsLinkImagesToOriginal = 'pluginOptions___linkImagesToOriginal',
  PluginOptionsShowCaptions = 'pluginOptions___showCaptions',
  PluginOptionsWithWebp = 'pluginOptions___withWebp',
  PluginOptionsDestinationDir = 'pluginOptions___destinationDir',
  PluginOptionsUsePrefix = 'pluginOptions___usePrefix',
  PluginOptionsProvidersInclude = 'pluginOptions___providers___include',
  PluginOptionsProvidersExclude = 'pluginOptions___providers___exclude',
  PluginOptionsSettingsInstagramHidecaption = 'pluginOptions___settings___Instagram___hidecaption',
  PluginOptionsWrapperStyle = 'pluginOptions___wrapperStyle',
  PluginOptionsPathToConfigModule = 'pluginOptions___pathToConfigModule',
  PluginOptionsOmitGoogleFont = 'pluginOptions___omitGoogleFont',
  PluginOptionsFonts = 'pluginOptions___fonts',
  PluginOptionsFontsFamily = 'pluginOptions___fonts___family',
  PluginOptionsFontsSubsets = 'pluginOptions___fonts___subsets',
  PluginOptionsFontsVariants = 'pluginOptions___fonts___variants',
  PluginOptionsFields = 'pluginOptions___fields',
  PluginOptionsShortName = 'pluginOptions___short_name',
  PluginOptionsStartUrl = 'pluginOptions___start_url',
  PluginOptionsBackgroundColor = 'pluginOptions___background_color',
  PluginOptionsThemeColor = 'pluginOptions___theme_color',
  PluginOptionsDisplay = 'pluginOptions___display',
  PluginOptionsIcon = 'pluginOptions___icon',
  PluginOptionsShortname = 'pluginOptions___shortname',
  PluginOptionsTrackingId = 'pluginOptions___trackingId',
  PluginOptionsHead = 'pluginOptions___head',
  PluginOptionsAnonymize = 'pluginOptions___anonymize',
  PluginOptionsRespectDnt = 'pluginOptions___respectDNT',
  PluginOptionsModulePath = 'pluginOptions___modulePath',
  PluginOptionsManualInit = 'pluginOptions___manualInit',
  PluginOptionsEnableIdentityWidget = 'pluginOptions___enableIdentityWidget',
  PluginOptionsHtmlTitle = 'pluginOptions___htmlTitle',
  PluginOptionsHtmlFavicon = 'pluginOptions___htmlFavicon',
  PluginOptionsPathCheck = 'pluginOptions___pathCheck',
  NodeApIs = 'nodeAPIs',
  BrowserApIs = 'browserAPIs',
  SsrApIs = 'ssrAPIs',
  PluginFilepath = 'pluginFilepath',
  PackageJsonName = 'packageJson___name',
  PackageJsonDescription = 'packageJson___description',
  PackageJsonVersion = 'packageJson___version',
  PackageJsonMain = 'packageJson___main',
  PackageJsonAuthor = 'packageJson___author',
  PackageJsonLicense = 'packageJson___license',
  PackageJsonDependencies = 'packageJson___dependencies',
  PackageJsonDependenciesName = 'packageJson___dependencies___name',
  PackageJsonDependenciesVersion = 'packageJson___dependencies___version',
  PackageJsonDevDependencies = 'packageJson___devDependencies',
  PackageJsonDevDependenciesName = 'packageJson___devDependencies___name',
  PackageJsonDevDependenciesVersion = 'packageJson___devDependencies___version',
  PackageJsonPeerDependencies = 'packageJson___peerDependencies',
  PackageJsonPeerDependenciesName = 'packageJson___peerDependencies___name',
  PackageJsonPeerDependenciesVersion = 'packageJson___peerDependencies___version',
  PackageJsonKeywords = 'packageJson___keywords'
}

export type SitePluginFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  resolve?: Maybe<StringQueryOperatorInput>,
  name?: Maybe<StringQueryOperatorInput>,
  version?: Maybe<StringQueryOperatorInput>,
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>,
  nodeAPIs?: Maybe<StringQueryOperatorInput>,
  browserAPIs?: Maybe<StringQueryOperatorInput>,
  ssrAPIs?: Maybe<StringQueryOperatorInput>,
  pluginFilepath?: Maybe<StringQueryOperatorInput>,
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>,
};

export type SitePluginGroupConnection = {
   __typename?: 'SitePluginGroupConnection',
  totalCount: Scalars['Int'],
  edges: Array<SitePluginEdge>,
  nodes: Array<SitePlugin>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type SitePluginPackageJson = {
   __typename?: 'SitePluginPackageJson',
  name?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  version?: Maybe<Scalars['String']>,
  main?: Maybe<Scalars['String']>,
  author?: Maybe<Scalars['String']>,
  license?: Maybe<Scalars['String']>,
  dependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDependencies>>>,
  devDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDevDependencies>>>,
  peerDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonPeerDependencies>>>,
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type SitePluginPackageJsonDependencies = {
   __typename?: 'SitePluginPackageJsonDependencies',
  name?: Maybe<Scalars['String']>,
  version?: Maybe<Scalars['String']>,
};

export type SitePluginPackageJsonDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>,
  version?: Maybe<StringQueryOperatorInput>,
};

export type SitePluginPackageJsonDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDependenciesFilterInput>,
};

export type SitePluginPackageJsonDevDependencies = {
   __typename?: 'SitePluginPackageJsonDevDependencies',
  name?: Maybe<Scalars['String']>,
  version?: Maybe<Scalars['String']>,
};

export type SitePluginPackageJsonDevDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>,
  version?: Maybe<StringQueryOperatorInput>,
};

export type SitePluginPackageJsonDevDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>,
};

export type SitePluginPackageJsonFilterInput = {
  name?: Maybe<StringQueryOperatorInput>,
  description?: Maybe<StringQueryOperatorInput>,
  version?: Maybe<StringQueryOperatorInput>,
  main?: Maybe<StringQueryOperatorInput>,
  author?: Maybe<StringQueryOperatorInput>,
  license?: Maybe<StringQueryOperatorInput>,
  dependencies?: Maybe<SitePluginPackageJsonDependenciesFilterListInput>,
  devDependencies?: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>,
  peerDependencies?: Maybe<SitePluginPackageJsonPeerDependenciesFilterListInput>,
  keywords?: Maybe<StringQueryOperatorInput>,
};

export type SitePluginPackageJsonPeerDependencies = {
   __typename?: 'SitePluginPackageJsonPeerDependencies',
  name?: Maybe<Scalars['String']>,
  version?: Maybe<Scalars['String']>,
};

export type SitePluginPackageJsonPeerDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>,
  version?: Maybe<StringQueryOperatorInput>,
};

export type SitePluginPackageJsonPeerDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>,
};

export type SitePluginPluginOptions = {
   __typename?: 'SitePluginPluginOptions',
  plugins?: Maybe<Array<Maybe<SitePluginPluginOptionsPlugins>>>,
  path?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  color?: Maybe<Scalars['String']>,
  paths?: Maybe<Array<Maybe<Scalars['String']>>>,
  credentials?: Maybe<SitePluginPluginOptionsCredentials>,
  query?: Maybe<SitePluginPluginOptionsQuery>,
  toFormat?: Maybe<Scalars['String']>,
  maxWidth?: Maybe<Scalars['Int']>,
  linkImagesToOriginal?: Maybe<Scalars['Boolean']>,
  showCaptions?: Maybe<Array<Maybe<Scalars['String']>>>,
  withWebp?: Maybe<Scalars['Boolean']>,
  destinationDir?: Maybe<Scalars['String']>,
  usePrefix?: Maybe<Array<Maybe<Scalars['String']>>>,
  providers?: Maybe<SitePluginPluginOptionsProviders>,
  settings?: Maybe<SitePluginPluginOptionsSettings>,
  wrapperStyle?: Maybe<Scalars['String']>,
  pathToConfigModule?: Maybe<Scalars['String']>,
  omitGoogleFont?: Maybe<Scalars['Boolean']>,
  fonts?: Maybe<Array<Maybe<SitePluginPluginOptionsFonts>>>,
  fields?: Maybe<Array<Maybe<Scalars['String']>>>,
  short_name?: Maybe<Scalars['String']>,
  start_url?: Maybe<Scalars['String']>,
  background_color?: Maybe<Scalars['String']>,
  theme_color?: Maybe<Scalars['String']>,
  display?: Maybe<Scalars['String']>,
  icon?: Maybe<Scalars['String']>,
  shortname?: Maybe<Scalars['String']>,
  trackingId?: Maybe<Scalars['String']>,
  head?: Maybe<Scalars['Boolean']>,
  anonymize?: Maybe<Scalars['Boolean']>,
  respectDNT?: Maybe<Scalars['Boolean']>,
  modulePath?: Maybe<Scalars['String']>,
  manualInit?: Maybe<Scalars['Boolean']>,
  enableIdentityWidget?: Maybe<Scalars['Boolean']>,
  htmlTitle?: Maybe<Scalars['String']>,
  htmlFavicon?: Maybe<Scalars['String']>,
  pathCheck?: Maybe<Scalars['Boolean']>,
};

export type SitePluginPluginOptionsCredentials = {
   __typename?: 'SitePluginPluginOptionsCredentials',
  consumer_key?: Maybe<Scalars['String']>,
  consumer_secret?: Maybe<Scalars['String']>,
  bearer_token?: Maybe<Scalars['String']>,
};

export type SitePluginPluginOptionsCredentialsFilterInput = {
  consumer_key?: Maybe<StringQueryOperatorInput>,
  consumer_secret?: Maybe<StringQueryOperatorInput>,
  bearer_token?: Maybe<StringQueryOperatorInput>,
};

export type SitePluginPluginOptionsFilterInput = {
  plugins?: Maybe<SitePluginPluginOptionsPluginsFilterListInput>,
  path?: Maybe<StringQueryOperatorInput>,
  name?: Maybe<StringQueryOperatorInput>,
  color?: Maybe<StringQueryOperatorInput>,
  paths?: Maybe<StringQueryOperatorInput>,
  credentials?: Maybe<SitePluginPluginOptionsCredentialsFilterInput>,
  query?: Maybe<SitePluginPluginOptionsQueryFilterInput>,
  toFormat?: Maybe<StringQueryOperatorInput>,
  maxWidth?: Maybe<IntQueryOperatorInput>,
  linkImagesToOriginal?: Maybe<BooleanQueryOperatorInput>,
  showCaptions?: Maybe<StringQueryOperatorInput>,
  withWebp?: Maybe<BooleanQueryOperatorInput>,
  destinationDir?: Maybe<StringQueryOperatorInput>,
  usePrefix?: Maybe<StringQueryOperatorInput>,
  providers?: Maybe<SitePluginPluginOptionsProvidersFilterInput>,
  settings?: Maybe<SitePluginPluginOptionsSettingsFilterInput>,
  wrapperStyle?: Maybe<StringQueryOperatorInput>,
  pathToConfigModule?: Maybe<StringQueryOperatorInput>,
  omitGoogleFont?: Maybe<BooleanQueryOperatorInput>,
  fonts?: Maybe<SitePluginPluginOptionsFontsFilterListInput>,
  fields?: Maybe<StringQueryOperatorInput>,
  short_name?: Maybe<StringQueryOperatorInput>,
  start_url?: Maybe<StringQueryOperatorInput>,
  background_color?: Maybe<StringQueryOperatorInput>,
  theme_color?: Maybe<StringQueryOperatorInput>,
  display?: Maybe<StringQueryOperatorInput>,
  icon?: Maybe<StringQueryOperatorInput>,
  shortname?: Maybe<StringQueryOperatorInput>,
  trackingId?: Maybe<StringQueryOperatorInput>,
  head?: Maybe<BooleanQueryOperatorInput>,
  anonymize?: Maybe<BooleanQueryOperatorInput>,
  respectDNT?: Maybe<BooleanQueryOperatorInput>,
  modulePath?: Maybe<StringQueryOperatorInput>,
  manualInit?: Maybe<BooleanQueryOperatorInput>,
  enableIdentityWidget?: Maybe<BooleanQueryOperatorInput>,
  htmlTitle?: Maybe<StringQueryOperatorInput>,
  htmlFavicon?: Maybe<StringQueryOperatorInput>,
  pathCheck?: Maybe<BooleanQueryOperatorInput>,
};

export type SitePluginPluginOptionsFonts = {
   __typename?: 'SitePluginPluginOptionsFonts',
  family?: Maybe<Scalars['String']>,
  subsets?: Maybe<Array<Maybe<Scalars['String']>>>,
  variants?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type SitePluginPluginOptionsFontsFilterInput = {
  family?: Maybe<StringQueryOperatorInput>,
  subsets?: Maybe<StringQueryOperatorInput>,
  variants?: Maybe<StringQueryOperatorInput>,
};

export type SitePluginPluginOptionsFontsFilterListInput = {
  elemMatch?: Maybe<SitePluginPluginOptionsFontsFilterInput>,
};

export type SitePluginPluginOptionsPlugins = {
   __typename?: 'SitePluginPluginOptionsPlugins',
  resolve?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  version?: Maybe<Scalars['String']>,
  pluginOptions?: Maybe<SitePluginPluginOptionsPluginsPluginOptions>,
  nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>,
  browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>,
  ssrAPIs?: Maybe<Array<Maybe<Scalars['String']>>>,
  pluginFilepath?: Maybe<Scalars['String']>,
};

export type SitePluginPluginOptionsPluginsFilterInput = {
  resolve?: Maybe<StringQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  name?: Maybe<StringQueryOperatorInput>,
  version?: Maybe<StringQueryOperatorInput>,
  pluginOptions?: Maybe<SitePluginPluginOptionsPluginsPluginOptionsFilterInput>,
  nodeAPIs?: Maybe<StringQueryOperatorInput>,
  browserAPIs?: Maybe<StringQueryOperatorInput>,
  ssrAPIs?: Maybe<StringQueryOperatorInput>,
  pluginFilepath?: Maybe<StringQueryOperatorInput>,
};

export type SitePluginPluginOptionsPluginsFilterListInput = {
  elemMatch?: Maybe<SitePluginPluginOptionsPluginsFilterInput>,
};

export type SitePluginPluginOptionsPluginsPluginOptions = {
   __typename?: 'SitePluginPluginOptionsPluginsPluginOptions',
  name?: Maybe<Scalars['String']>,
  maxWidth?: Maybe<Scalars['Int']>,
  linkImagesToOriginal?: Maybe<Scalars['Boolean']>,
  showCaptions?: Maybe<Array<Maybe<Scalars['String']>>>,
  withWebp?: Maybe<Scalars['Boolean']>,
  destinationDir?: Maybe<Scalars['String']>,
  usePrefix?: Maybe<Array<Maybe<Scalars['String']>>>,
  providers?: Maybe<SitePluginPluginOptionsPluginsPluginOptionsProviders>,
  settings?: Maybe<SitePluginPluginOptionsPluginsPluginOptionsSettings>,
  wrapperStyle?: Maybe<Scalars['String']>,
};

export type SitePluginPluginOptionsPluginsPluginOptionsFilterInput = {
  name?: Maybe<StringQueryOperatorInput>,
  maxWidth?: Maybe<IntQueryOperatorInput>,
  linkImagesToOriginal?: Maybe<BooleanQueryOperatorInput>,
  showCaptions?: Maybe<StringQueryOperatorInput>,
  withWebp?: Maybe<BooleanQueryOperatorInput>,
  destinationDir?: Maybe<StringQueryOperatorInput>,
  usePrefix?: Maybe<StringQueryOperatorInput>,
  providers?: Maybe<SitePluginPluginOptionsPluginsPluginOptionsProvidersFilterInput>,
  settings?: Maybe<SitePluginPluginOptionsPluginsPluginOptionsSettingsFilterInput>,
  wrapperStyle?: Maybe<StringQueryOperatorInput>,
};

export type SitePluginPluginOptionsPluginsPluginOptionsProviders = {
   __typename?: 'SitePluginPluginOptionsPluginsPluginOptionsProviders',
  include?: Maybe<Array<Maybe<Scalars['String']>>>,
  exclude?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type SitePluginPluginOptionsPluginsPluginOptionsProvidersFilterInput = {
  include?: Maybe<StringQueryOperatorInput>,
  exclude?: Maybe<StringQueryOperatorInput>,
};

export type SitePluginPluginOptionsPluginsPluginOptionsSettings = {
   __typename?: 'SitePluginPluginOptionsPluginsPluginOptionsSettings',
  Instagram?: Maybe<SitePluginPluginOptionsPluginsPluginOptionsSettingsInstagram>,
};

export type SitePluginPluginOptionsPluginsPluginOptionsSettingsFilterInput = {
  Instagram?: Maybe<SitePluginPluginOptionsPluginsPluginOptionsSettingsInstagramFilterInput>,
};

export type SitePluginPluginOptionsPluginsPluginOptionsSettingsInstagram = {
   __typename?: 'SitePluginPluginOptionsPluginsPluginOptionsSettingsInstagram',
  hidecaption?: Maybe<Scalars['Boolean']>,
};

export type SitePluginPluginOptionsPluginsPluginOptionsSettingsInstagramFilterInput = {
  hidecaption?: Maybe<BooleanQueryOperatorInput>,
};

export type SitePluginPluginOptionsProviders = {
   __typename?: 'SitePluginPluginOptionsProviders',
  include?: Maybe<Array<Maybe<Scalars['String']>>>,
  exclude?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type SitePluginPluginOptionsProvidersFilterInput = {
  include?: Maybe<StringQueryOperatorInput>,
  exclude?: Maybe<StringQueryOperatorInput>,
};

export type SitePluginPluginOptionsQuery = {
   __typename?: 'SitePluginPluginOptionsQuery',
  endpoint?: Maybe<Scalars['String']>,
  params?: Maybe<SitePluginPluginOptionsQueryParams>,
};

export type SitePluginPluginOptionsQueryFilterInput = {
  endpoint?: Maybe<StringQueryOperatorInput>,
  params?: Maybe<SitePluginPluginOptionsQueryParamsFilterInput>,
};

export type SitePluginPluginOptionsQueryParams = {
   __typename?: 'SitePluginPluginOptionsQueryParams',
  screen_name?: Maybe<Scalars['String']>,
  include_rts?: Maybe<Scalars['Boolean']>,
  exclude_replies?: Maybe<Scalars['Boolean']>,
  tweet_mode?: Maybe<Scalars['String']>,
  count?: Maybe<Scalars['Int']>,
};

export type SitePluginPluginOptionsQueryParamsFilterInput = {
  screen_name?: Maybe<StringQueryOperatorInput>,
  include_rts?: Maybe<BooleanQueryOperatorInput>,
  exclude_replies?: Maybe<BooleanQueryOperatorInput>,
  tweet_mode?: Maybe<StringQueryOperatorInput>,
  count?: Maybe<IntQueryOperatorInput>,
};

export type SitePluginPluginOptionsSettings = {
   __typename?: 'SitePluginPluginOptionsSettings',
  Instagram?: Maybe<SitePluginPluginOptionsSettingsInstagram>,
};

export type SitePluginPluginOptionsSettingsFilterInput = {
  Instagram?: Maybe<SitePluginPluginOptionsSettingsInstagramFilterInput>,
};

export type SitePluginPluginOptionsSettingsInstagram = {
   __typename?: 'SitePluginPluginOptionsSettingsInstagram',
  hidecaption?: Maybe<Scalars['Boolean']>,
};

export type SitePluginPluginOptionsSettingsInstagramFilterInput = {
  hidecaption?: Maybe<BooleanQueryOperatorInput>,
};

export type SitePluginSortInput = {
  fields?: Maybe<Array<Maybe<SitePluginFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type SiteSearchIndex = Node & {
   __typename?: 'SiteSearchIndex',
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  pages?: Maybe<Array<Maybe<Scalars['String']>>>,
  index?: Maybe<Scalars['SiteSearchIndex_Index']>,
};


export type SiteSearchIndex_IndexQueryOperatorInput = {
  eq?: Maybe<Scalars['SiteSearchIndex_Index']>,
  ne?: Maybe<Scalars['SiteSearchIndex_Index']>,
  in?: Maybe<Array<Maybe<Scalars['SiteSearchIndex_Index']>>>,
  nin?: Maybe<Array<Maybe<Scalars['SiteSearchIndex_Index']>>>,
};

export type SiteSearchIndexConnection = {
   __typename?: 'SiteSearchIndexConnection',
  totalCount: Scalars['Int'],
  edges: Array<SiteSearchIndexEdge>,
  nodes: Array<SiteSearchIndex>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<SiteSearchIndexGroupConnection>,
};


export type SiteSearchIndexConnectionDistinctArgs = {
  field: SiteSearchIndexFieldsEnum
};


export type SiteSearchIndexConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: SiteSearchIndexFieldsEnum
};

export type SiteSearchIndexEdge = {
   __typename?: 'SiteSearchIndexEdge',
  next?: Maybe<SiteSearchIndex>,
  node: SiteSearchIndex,
  previous?: Maybe<SiteSearchIndex>,
};

export enum SiteSearchIndexFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Pages = 'pages',
  Index = 'index'
}

export type SiteSearchIndexFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  pages?: Maybe<StringQueryOperatorInput>,
  index?: Maybe<SiteSearchIndex_IndexQueryOperatorInput>,
};

export type SiteSearchIndexGroupConnection = {
   __typename?: 'SiteSearchIndexGroupConnection',
  totalCount: Scalars['Int'],
  edges: Array<SiteSearchIndexEdge>,
  nodes: Array<SiteSearchIndex>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type SiteSearchIndexSortInput = {
  fields?: Maybe<Array<Maybe<SiteSearchIndexFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type SiteSortInput = {
  fields?: Maybe<Array<Maybe<SiteFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export enum SortOrderEnum {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type StringQueryOperatorInput = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
};

export type TwitterStatusesUserTimeline = Node & {
   __typename?: 'twitterStatusesUserTimeline',
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  created_at?: Maybe<Scalars['String']>,
  id_str?: Maybe<Scalars['String']>,
  text?: Maybe<Scalars['String']>,
  full_text?: Maybe<Scalars['String']>,
  truncated?: Maybe<Scalars['Boolean']>,
  linked_site?: Maybe<TwitterStatusesUserTimelineLinked_Site>,
  entities?: Maybe<TwitterStatusesUserTimelineEntities>,
  source?: Maybe<Scalars['String']>,
  user?: Maybe<TwitterStatusesUserTimelineUser>,
  retweeted_status?: Maybe<TwitterStatusesUserTimelineRetweeted_Status>,
  is_quote_status?: Maybe<Scalars['Boolean']>,
  retweet_count?: Maybe<Scalars['Int']>,
  favorite_count?: Maybe<Scalars['Int']>,
  favorited?: Maybe<Scalars['Boolean']>,
  retweeted?: Maybe<Scalars['Boolean']>,
  lang?: Maybe<Scalars['String']>,
  display_text_range?: Maybe<Array<Maybe<Scalars['Int']>>>,
  possibly_sensitive?: Maybe<Scalars['Boolean']>,
};

export type TwitterStatusesUserTimelineConnection = {
   __typename?: 'twitterStatusesUserTimelineConnection',
  totalCount: Scalars['Int'],
  edges: Array<TwitterStatusesUserTimelineEdge>,
  nodes: Array<TwitterStatusesUserTimeline>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<TwitterStatusesUserTimelineGroupConnection>,
};


export type TwitterStatusesUserTimelineConnectionDistinctArgs = {
  field: TwitterStatusesUserTimelineFieldsEnum
};


export type TwitterStatusesUserTimelineConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: TwitterStatusesUserTimelineFieldsEnum
};

export type TwitterStatusesUserTimelineEdge = {
   __typename?: 'twitterStatusesUserTimelineEdge',
  next?: Maybe<TwitterStatusesUserTimeline>,
  node: TwitterStatusesUserTimeline,
  previous?: Maybe<TwitterStatusesUserTimeline>,
};

export type TwitterStatusesUserTimelineEntities = {
   __typename?: 'twitterStatusesUserTimelineEntities',
  hashtags?: Maybe<Array<Maybe<TwitterStatusesUserTimelineEntitiesHashtags>>>,
  user_mentions?: Maybe<Array<Maybe<TwitterStatusesUserTimelineEntitiesUser_Mentions>>>,
  urls?: Maybe<Array<Maybe<TwitterStatusesUserTimelineEntitiesUrls>>>,
  media?: Maybe<Array<Maybe<TwitterStatusesUserTimelineEntitiesMedia>>>,
};

export type TwitterStatusesUserTimelineEntitiesFilterInput = {
  hashtags?: Maybe<TwitterStatusesUserTimelineEntitiesHashtagsFilterListInput>,
  user_mentions?: Maybe<TwitterStatusesUserTimelineEntitiesUser_MentionsFilterListInput>,
  urls?: Maybe<TwitterStatusesUserTimelineEntitiesUrlsFilterListInput>,
  media?: Maybe<TwitterStatusesUserTimelineEntitiesMediaFilterListInput>,
};

export type TwitterStatusesUserTimelineEntitiesHashtags = {
   __typename?: 'twitterStatusesUserTimelineEntitiesHashtags',
  text?: Maybe<Scalars['String']>,
  indices?: Maybe<Array<Maybe<Scalars['Int']>>>,
};

export type TwitterStatusesUserTimelineEntitiesHashtagsFilterInput = {
  text?: Maybe<StringQueryOperatorInput>,
  indices?: Maybe<IntQueryOperatorInput>,
};

export type TwitterStatusesUserTimelineEntitiesHashtagsFilterListInput = {
  elemMatch?: Maybe<TwitterStatusesUserTimelineEntitiesHashtagsFilterInput>,
};

export type TwitterStatusesUserTimelineEntitiesMedia = {
   __typename?: 'twitterStatusesUserTimelineEntitiesMedia',
  id?: Maybe<Scalars['Float']>,
  id_str?: Maybe<Scalars['String']>,
  indices?: Maybe<Array<Maybe<Scalars['Int']>>>,
  media_url?: Maybe<Scalars['String']>,
  media_url_https?: Maybe<Scalars['String']>,
  url?: Maybe<Scalars['String']>,
  display_url?: Maybe<Scalars['String']>,
  expanded_url?: Maybe<Scalars['String']>,
  type?: Maybe<Scalars['String']>,
  sizes?: Maybe<TwitterStatusesUserTimelineEntitiesMediaSizes>,
};

export type TwitterStatusesUserTimelineEntitiesMediaFilterInput = {
  id?: Maybe<FloatQueryOperatorInput>,
  id_str?: Maybe<StringQueryOperatorInput>,
  indices?: Maybe<IntQueryOperatorInput>,
  media_url?: Maybe<StringQueryOperatorInput>,
  media_url_https?: Maybe<StringQueryOperatorInput>,
  url?: Maybe<StringQueryOperatorInput>,
  display_url?: Maybe<StringQueryOperatorInput>,
  expanded_url?: Maybe<StringQueryOperatorInput>,
  type?: Maybe<StringQueryOperatorInput>,
  sizes?: Maybe<TwitterStatusesUserTimelineEntitiesMediaSizesFilterInput>,
};

export type TwitterStatusesUserTimelineEntitiesMediaFilterListInput = {
  elemMatch?: Maybe<TwitterStatusesUserTimelineEntitiesMediaFilterInput>,
};

export type TwitterStatusesUserTimelineEntitiesMediaSizes = {
   __typename?: 'twitterStatusesUserTimelineEntitiesMediaSizes',
  medium?: Maybe<TwitterStatusesUserTimelineEntitiesMediaSizesMedium>,
  small?: Maybe<TwitterStatusesUserTimelineEntitiesMediaSizesSmall>,
  thumb?: Maybe<TwitterStatusesUserTimelineEntitiesMediaSizesThumb>,
  large?: Maybe<TwitterStatusesUserTimelineEntitiesMediaSizesLarge>,
};

export type TwitterStatusesUserTimelineEntitiesMediaSizesFilterInput = {
  medium?: Maybe<TwitterStatusesUserTimelineEntitiesMediaSizesMediumFilterInput>,
  small?: Maybe<TwitterStatusesUserTimelineEntitiesMediaSizesSmallFilterInput>,
  thumb?: Maybe<TwitterStatusesUserTimelineEntitiesMediaSizesThumbFilterInput>,
  large?: Maybe<TwitterStatusesUserTimelineEntitiesMediaSizesLargeFilterInput>,
};

export type TwitterStatusesUserTimelineEntitiesMediaSizesLarge = {
   __typename?: 'twitterStatusesUserTimelineEntitiesMediaSizesLarge',
  w?: Maybe<Scalars['Int']>,
  h?: Maybe<Scalars['Int']>,
  resize?: Maybe<Scalars['String']>,
};

export type TwitterStatusesUserTimelineEntitiesMediaSizesLargeFilterInput = {
  w?: Maybe<IntQueryOperatorInput>,
  h?: Maybe<IntQueryOperatorInput>,
  resize?: Maybe<StringQueryOperatorInput>,
};

export type TwitterStatusesUserTimelineEntitiesMediaSizesMedium = {
   __typename?: 'twitterStatusesUserTimelineEntitiesMediaSizesMedium',
  w?: Maybe<Scalars['Int']>,
  h?: Maybe<Scalars['Int']>,
  resize?: Maybe<Scalars['String']>,
};

export type TwitterStatusesUserTimelineEntitiesMediaSizesMediumFilterInput = {
  w?: Maybe<IntQueryOperatorInput>,
  h?: Maybe<IntQueryOperatorInput>,
  resize?: Maybe<StringQueryOperatorInput>,
};

export type TwitterStatusesUserTimelineEntitiesMediaSizesSmall = {
   __typename?: 'twitterStatusesUserTimelineEntitiesMediaSizesSmall',
  w?: Maybe<Scalars['Int']>,
  h?: Maybe<Scalars['Int']>,
  resize?: Maybe<Scalars['String']>,
};

export type TwitterStatusesUserTimelineEntitiesMediaSizesSmallFilterInput = {
  w?: Maybe<IntQueryOperatorInput>,
  h?: Maybe<IntQueryOperatorInput>,
  resize?: Maybe<StringQueryOperatorInput>,
};

export type TwitterStatusesUserTimelineEntitiesMediaSizesThumb = {
   __typename?: 'twitterStatusesUserTimelineEntitiesMediaSizesThumb',
  w?: Maybe<Scalars['Int']>,
  h?: Maybe<Scalars['Int']>,
  resize?: Maybe<Scalars['String']>,
};

export type TwitterStatusesUserTimelineEntitiesMediaSizesThumbFilterInput = {
  w?: Maybe<IntQueryOperatorInput>,
  h?: Maybe<IntQueryOperatorInput>,
  resize?: Maybe<StringQueryOperatorInput>,
};

export type TwitterStatusesUserTimelineEntitiesUrls = {
   __typename?: 'twitterStatusesUserTimelineEntitiesUrls',
  url?: Maybe<Scalars['String']>,
  expanded_url?: Maybe<Scalars['String']>,
  display_url?: Maybe<Scalars['String']>,
  indices?: Maybe<Array<Maybe<Scalars['Int']>>>,
};

export type TwitterStatusesUserTimelineEntitiesUrlsFilterInput = {
  url?: Maybe<StringQueryOperatorInput>,
  expanded_url?: Maybe<StringQueryOperatorInput>,
  display_url?: Maybe<StringQueryOperatorInput>,
  indices?: Maybe<IntQueryOperatorInput>,
};

export type TwitterStatusesUserTimelineEntitiesUrlsFilterListInput = {
  elemMatch?: Maybe<TwitterStatusesUserTimelineEntitiesUrlsFilterInput>,
};

export type TwitterStatusesUserTimelineEntitiesUser_Mentions = {
   __typename?: 'twitterStatusesUserTimelineEntitiesUser_mentions',
  screen_name?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['Int']>,
  id_str?: Maybe<Scalars['String']>,
  indices?: Maybe<Array<Maybe<Scalars['Int']>>>,
};

export type TwitterStatusesUserTimelineEntitiesUser_MentionsFilterInput = {
  screen_name?: Maybe<StringQueryOperatorInput>,
  name?: Maybe<StringQueryOperatorInput>,
  id?: Maybe<IntQueryOperatorInput>,
  id_str?: Maybe<StringQueryOperatorInput>,
  indices?: Maybe<IntQueryOperatorInput>,
};

export type TwitterStatusesUserTimelineEntitiesUser_MentionsFilterListInput = {
  elemMatch?: Maybe<TwitterStatusesUserTimelineEntitiesUser_MentionsFilterInput>,
};

export enum TwitterStatusesUserTimelineFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  CreatedAt = 'created_at',
  IdStr = 'id_str',
  Text = 'text',
  FullText = 'full_text',
  Truncated = 'truncated',
  LinkedSiteTitle = 'linked_site___title',
  LinkedSiteDescription = 'linked_site___description',
  LinkedSiteImage = 'linked_site___image',
  LinkedSiteUrl = 'linked_site___url',
  EntitiesHashtags = 'entities___hashtags',
  EntitiesHashtagsText = 'entities___hashtags___text',
  EntitiesHashtagsIndices = 'entities___hashtags___indices',
  EntitiesUserMentions = 'entities___user_mentions',
  EntitiesUserMentionsScreenName = 'entities___user_mentions___screen_name',
  EntitiesUserMentionsName = 'entities___user_mentions___name',
  EntitiesUserMentionsId = 'entities___user_mentions___id',
  EntitiesUserMentionsIdStr = 'entities___user_mentions___id_str',
  EntitiesUserMentionsIndices = 'entities___user_mentions___indices',
  EntitiesUrls = 'entities___urls',
  EntitiesUrlsUrl = 'entities___urls___url',
  EntitiesUrlsExpandedUrl = 'entities___urls___expanded_url',
  EntitiesUrlsDisplayUrl = 'entities___urls___display_url',
  EntitiesUrlsIndices = 'entities___urls___indices',
  EntitiesMedia = 'entities___media',
  EntitiesMediaId = 'entities___media___id',
  EntitiesMediaIdStr = 'entities___media___id_str',
  EntitiesMediaIndices = 'entities___media___indices',
  EntitiesMediaMediaUrl = 'entities___media___media_url',
  EntitiesMediaMediaUrlHttps = 'entities___media___media_url_https',
  EntitiesMediaUrl = 'entities___media___url',
  EntitiesMediaDisplayUrl = 'entities___media___display_url',
  EntitiesMediaExpandedUrl = 'entities___media___expanded_url',
  EntitiesMediaType = 'entities___media___type',
  Source = 'source',
  UserId = 'user___id',
  UserIdStr = 'user___id_str',
  UserName = 'user___name',
  UserScreenName = 'user___screen_name',
  UserLocation = 'user___location',
  UserDescription = 'user___description',
  UserUrl = 'user___url',
  UserEntitiesUrlUrls = 'user___entities___url___urls',
  UserProtected = 'user___protected',
  UserFollowersCount = 'user___followers_count',
  UserFriendsCount = 'user___friends_count',
  UserListedCount = 'user___listed_count',
  UserCreatedAt = 'user___created_at',
  UserFavouritesCount = 'user___favourites_count',
  UserUtcOffset = 'user___utc_offset',
  UserTimeZone = 'user___time_zone',
  UserGeoEnabled = 'user___geo_enabled',
  UserVerified = 'user___verified',
  UserStatusesCount = 'user___statuses_count',
  UserLang = 'user___lang',
  UserContributorsEnabled = 'user___contributors_enabled',
  UserIsTranslator = 'user___is_translator',
  UserIsTranslationEnabled = 'user___is_translation_enabled',
  UserProfileBackgroundColor = 'user___profile_background_color',
  UserProfileBackgroundImageUrl = 'user___profile_background_image_url',
  UserProfileBackgroundImageUrlHttps = 'user___profile_background_image_url_https',
  UserProfileBackgroundTile = 'user___profile_background_tile',
  UserProfileImageUrl = 'user___profile_image_url',
  UserProfileImageUrlHttps = 'user___profile_image_url_https',
  UserProfileBannerUrl = 'user___profile_banner_url',
  UserProfileLinkColor = 'user___profile_link_color',
  UserProfileSidebarBorderColor = 'user___profile_sidebar_border_color',
  UserProfileSidebarFillColor = 'user___profile_sidebar_fill_color',
  UserProfileTextColor = 'user___profile_text_color',
  UserProfileUseBackgroundImage = 'user___profile_use_background_image',
  UserHasExtendedProfile = 'user___has_extended_profile',
  UserDefaultProfile = 'user___default_profile',
  UserDefaultProfileImage = 'user___default_profile_image',
  UserFollowing = 'user___following',
  UserFollowRequestSent = 'user___follow_request_sent',
  UserNotifications = 'user___notifications',
  UserTranslatorType = 'user___translator_type',
  RetweetedStatusCreatedAt = 'retweeted_status___created_at',
  RetweetedStatusId = 'retweeted_status___id',
  RetweetedStatusIdStr = 'retweeted_status___id_str',
  RetweetedStatusText = 'retweeted_status___text',
  RetweetedStatusFullText = 'retweeted_status___full_text',
  RetweetedStatusTruncated = 'retweeted_status___truncated',
  RetweetedStatusEntitiesUserMentions = 'retweeted_status___entities___user_mentions',
  RetweetedStatusEntitiesUserMentionsScreenName = 'retweeted_status___entities___user_mentions___screen_name',
  RetweetedStatusEntitiesUserMentionsName = 'retweeted_status___entities___user_mentions___name',
  RetweetedStatusEntitiesUserMentionsId = 'retweeted_status___entities___user_mentions___id',
  RetweetedStatusEntitiesUserMentionsIdStr = 'retweeted_status___entities___user_mentions___id_str',
  RetweetedStatusEntitiesUserMentionsIndices = 'retweeted_status___entities___user_mentions___indices',
  RetweetedStatusEntitiesUrls = 'retweeted_status___entities___urls',
  RetweetedStatusEntitiesUrlsUrl = 'retweeted_status___entities___urls___url',
  RetweetedStatusEntitiesUrlsExpandedUrl = 'retweeted_status___entities___urls___expanded_url',
  RetweetedStatusEntitiesUrlsDisplayUrl = 'retweeted_status___entities___urls___display_url',
  RetweetedStatusEntitiesUrlsIndices = 'retweeted_status___entities___urls___indices',
  RetweetedStatusEntitiesMedia = 'retweeted_status___entities___media',
  RetweetedStatusEntitiesMediaId = 'retweeted_status___entities___media___id',
  RetweetedStatusEntitiesMediaIdStr = 'retweeted_status___entities___media___id_str',
  RetweetedStatusEntitiesMediaIndices = 'retweeted_status___entities___media___indices',
  RetweetedStatusEntitiesMediaMediaUrl = 'retweeted_status___entities___media___media_url',
  RetweetedStatusEntitiesMediaMediaUrlHttps = 'retweeted_status___entities___media___media_url_https',
  RetweetedStatusEntitiesMediaUrl = 'retweeted_status___entities___media___url',
  RetweetedStatusEntitiesMediaDisplayUrl = 'retweeted_status___entities___media___display_url',
  RetweetedStatusEntitiesMediaExpandedUrl = 'retweeted_status___entities___media___expanded_url',
  RetweetedStatusEntitiesMediaType = 'retweeted_status___entities___media___type',
  RetweetedStatusSource = 'retweeted_status___source',
  RetweetedStatusUserId = 'retweeted_status___user___id',
  RetweetedStatusUserIdStr = 'retweeted_status___user___id_str',
  RetweetedStatusUserName = 'retweeted_status___user___name',
  RetweetedStatusUserScreenName = 'retweeted_status___user___screen_name',
  RetweetedStatusUserLocation = 'retweeted_status___user___location',
  RetweetedStatusUserDescription = 'retweeted_status___user___description',
  RetweetedStatusUserUrl = 'retweeted_status___user___url',
  RetweetedStatusUserProtected = 'retweeted_status___user___protected',
  RetweetedStatusUserFollowersCount = 'retweeted_status___user___followers_count',
  RetweetedStatusUserFriendsCount = 'retweeted_status___user___friends_count',
  RetweetedStatusUserListedCount = 'retweeted_status___user___listed_count',
  RetweetedStatusUserCreatedAt = 'retweeted_status___user___created_at',
  RetweetedStatusUserFavouritesCount = 'retweeted_status___user___favourites_count',
  RetweetedStatusUserUtcOffset = 'retweeted_status___user___utc_offset',
  RetweetedStatusUserTimeZone = 'retweeted_status___user___time_zone',
  RetweetedStatusUserGeoEnabled = 'retweeted_status___user___geo_enabled',
  RetweetedStatusUserVerified = 'retweeted_status___user___verified',
  RetweetedStatusUserStatusesCount = 'retweeted_status___user___statuses_count',
  RetweetedStatusUserLang = 'retweeted_status___user___lang',
  RetweetedStatusUserContributorsEnabled = 'retweeted_status___user___contributors_enabled',
  RetweetedStatusUserIsTranslator = 'retweeted_status___user___is_translator',
  RetweetedStatusUserIsTranslationEnabled = 'retweeted_status___user___is_translation_enabled',
  RetweetedStatusUserProfileBackgroundColor = 'retweeted_status___user___profile_background_color',
  RetweetedStatusUserProfileBackgroundImageUrl = 'retweeted_status___user___profile_background_image_url',
  RetweetedStatusUserProfileBackgroundImageUrlHttps = 'retweeted_status___user___profile_background_image_url_https',
  RetweetedStatusUserProfileBackgroundTile = 'retweeted_status___user___profile_background_tile',
  RetweetedStatusUserProfileImageUrl = 'retweeted_status___user___profile_image_url',
  RetweetedStatusUserProfileImageUrlHttps = 'retweeted_status___user___profile_image_url_https',
  RetweetedStatusUserProfileBannerUrl = 'retweeted_status___user___profile_banner_url',
  RetweetedStatusUserProfileLinkColor = 'retweeted_status___user___profile_link_color',
  RetweetedStatusUserProfileSidebarBorderColor = 'retweeted_status___user___profile_sidebar_border_color',
  RetweetedStatusUserProfileSidebarFillColor = 'retweeted_status___user___profile_sidebar_fill_color',
  RetweetedStatusUserProfileTextColor = 'retweeted_status___user___profile_text_color',
  RetweetedStatusUserProfileUseBackgroundImage = 'retweeted_status___user___profile_use_background_image',
  RetweetedStatusUserHasExtendedProfile = 'retweeted_status___user___has_extended_profile',
  RetweetedStatusUserDefaultProfile = 'retweeted_status___user___default_profile',
  RetweetedStatusUserDefaultProfileImage = 'retweeted_status___user___default_profile_image',
  RetweetedStatusUserFollowing = 'retweeted_status___user___following',
  RetweetedStatusUserFollowRequestSent = 'retweeted_status___user___follow_request_sent',
  RetweetedStatusUserNotifications = 'retweeted_status___user___notifications',
  RetweetedStatusUserTranslatorType = 'retweeted_status___user___translator_type',
  RetweetedStatusIsQuoteStatus = 'retweeted_status___is_quote_status',
  RetweetedStatusRetweetCount = 'retweeted_status___retweet_count',
  RetweetedStatusFavoriteCount = 'retweeted_status___favorite_count',
  RetweetedStatusFavorited = 'retweeted_status___favorited',
  RetweetedStatusRetweeted = 'retweeted_status___retweeted',
  RetweetedStatusPossiblySensitive = 'retweeted_status___possibly_sensitive',
  RetweetedStatusLang = 'retweeted_status___lang',
  RetweetedStatusDisplayTextRange = 'retweeted_status___display_text_range',
  IsQuoteStatus = 'is_quote_status',
  RetweetCount = 'retweet_count',
  FavoriteCount = 'favorite_count',
  Favorited = 'favorited',
  Retweeted = 'retweeted',
  Lang = 'lang',
  DisplayTextRange = 'display_text_range',
  PossiblySensitive = 'possibly_sensitive'
}

export type TwitterStatusesUserTimelineFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  created_at?: Maybe<StringQueryOperatorInput>,
  id_str?: Maybe<StringQueryOperatorInput>,
  text?: Maybe<StringQueryOperatorInput>,
  full_text?: Maybe<StringQueryOperatorInput>,
  truncated?: Maybe<BooleanQueryOperatorInput>,
  linked_site?: Maybe<TwitterStatusesUserTimelineLinked_SiteFilterInput>,
  entities?: Maybe<TwitterStatusesUserTimelineEntitiesFilterInput>,
  source?: Maybe<StringQueryOperatorInput>,
  user?: Maybe<TwitterStatusesUserTimelineUserFilterInput>,
  retweeted_status?: Maybe<TwitterStatusesUserTimelineRetweeted_StatusFilterInput>,
  is_quote_status?: Maybe<BooleanQueryOperatorInput>,
  retweet_count?: Maybe<IntQueryOperatorInput>,
  favorite_count?: Maybe<IntQueryOperatorInput>,
  favorited?: Maybe<BooleanQueryOperatorInput>,
  retweeted?: Maybe<BooleanQueryOperatorInput>,
  lang?: Maybe<StringQueryOperatorInput>,
  display_text_range?: Maybe<IntQueryOperatorInput>,
  possibly_sensitive?: Maybe<BooleanQueryOperatorInput>,
};

export type TwitterStatusesUserTimelineGroupConnection = {
   __typename?: 'twitterStatusesUserTimelineGroupConnection',
  totalCount: Scalars['Int'],
  edges: Array<TwitterStatusesUserTimelineEdge>,
  nodes: Array<TwitterStatusesUserTimeline>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type TwitterStatusesUserTimelineLinked_Site = {
   __typename?: 'twitterStatusesUserTimelineLinked_site',
  title?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  image?: Maybe<Scalars['String']>,
  url?: Maybe<Scalars['String']>,
};

export type TwitterStatusesUserTimelineLinked_SiteFilterInput = {
  title?: Maybe<StringQueryOperatorInput>,
  description?: Maybe<StringQueryOperatorInput>,
  image?: Maybe<StringQueryOperatorInput>,
  url?: Maybe<StringQueryOperatorInput>,
};

export type TwitterStatusesUserTimelineRetweeted_Status = {
   __typename?: 'twitterStatusesUserTimelineRetweeted_status',
  created_at?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['Float']>,
  id_str?: Maybe<Scalars['String']>,
  text?: Maybe<Scalars['String']>,
  full_text?: Maybe<Scalars['String']>,
  truncated?: Maybe<Scalars['Boolean']>,
  entities?: Maybe<TwitterStatusesUserTimelineRetweeted_StatusEntities>,
  source?: Maybe<Scalars['String']>,
  user?: Maybe<TwitterStatusesUserTimelineRetweeted_StatusUser>,
  is_quote_status?: Maybe<Scalars['Boolean']>,
  retweet_count?: Maybe<Scalars['Int']>,
  favorite_count?: Maybe<Scalars['Int']>,
  favorited?: Maybe<Scalars['Boolean']>,
  retweeted?: Maybe<Scalars['Boolean']>,
  possibly_sensitive?: Maybe<Scalars['Boolean']>,
  lang?: Maybe<Scalars['String']>,
  display_text_range?: Maybe<Array<Maybe<Scalars['Int']>>>,
};

export type TwitterStatusesUserTimelineRetweeted_StatusEntities = {
   __typename?: 'twitterStatusesUserTimelineRetweeted_statusEntities',
  user_mentions?: Maybe<Array<Maybe<TwitterStatusesUserTimelineRetweeted_StatusEntitiesUser_Mentions>>>,
  urls?: Maybe<Array<Maybe<TwitterStatusesUserTimelineRetweeted_StatusEntitiesUrls>>>,
  media?: Maybe<Array<Maybe<TwitterStatusesUserTimelineRetweeted_StatusEntitiesMedia>>>,
};

export type TwitterStatusesUserTimelineRetweeted_StatusEntitiesFilterInput = {
  user_mentions?: Maybe<TwitterStatusesUserTimelineRetweeted_StatusEntitiesUser_MentionsFilterListInput>,
  urls?: Maybe<TwitterStatusesUserTimelineRetweeted_StatusEntitiesUrlsFilterListInput>,
  media?: Maybe<TwitterStatusesUserTimelineRetweeted_StatusEntitiesMediaFilterListInput>,
};

export type TwitterStatusesUserTimelineRetweeted_StatusEntitiesMedia = {
   __typename?: 'twitterStatusesUserTimelineRetweeted_statusEntitiesMedia',
  id?: Maybe<Scalars['Float']>,
  id_str?: Maybe<Scalars['String']>,
  indices?: Maybe<Array<Maybe<Scalars['Int']>>>,
  media_url?: Maybe<Scalars['String']>,
  media_url_https?: Maybe<Scalars['String']>,
  url?: Maybe<Scalars['String']>,
  display_url?: Maybe<Scalars['String']>,
  expanded_url?: Maybe<Scalars['String']>,
  type?: Maybe<Scalars['String']>,
  sizes?: Maybe<TwitterStatusesUserTimelineRetweeted_StatusEntitiesMediaSizes>,
};

export type TwitterStatusesUserTimelineRetweeted_StatusEntitiesMediaFilterInput = {
  id?: Maybe<FloatQueryOperatorInput>,
  id_str?: Maybe<StringQueryOperatorInput>,
  indices?: Maybe<IntQueryOperatorInput>,
  media_url?: Maybe<StringQueryOperatorInput>,
  media_url_https?: Maybe<StringQueryOperatorInput>,
  url?: Maybe<StringQueryOperatorInput>,
  display_url?: Maybe<StringQueryOperatorInput>,
  expanded_url?: Maybe<StringQueryOperatorInput>,
  type?: Maybe<StringQueryOperatorInput>,
  sizes?: Maybe<TwitterStatusesUserTimelineRetweeted_StatusEntitiesMediaSizesFilterInput>,
};

export type TwitterStatusesUserTimelineRetweeted_StatusEntitiesMediaFilterListInput = {
  elemMatch?: Maybe<TwitterStatusesUserTimelineRetweeted_StatusEntitiesMediaFilterInput>,
};

export type TwitterStatusesUserTimelineRetweeted_StatusEntitiesMediaSizes = {
   __typename?: 'twitterStatusesUserTimelineRetweeted_statusEntitiesMediaSizes',
  medium?: Maybe<TwitterStatusesUserTimelineRetweeted_StatusEntitiesMediaSizesMedium>,
  small?: Maybe<TwitterStatusesUserTimelineRetweeted_StatusEntitiesMediaSizesSmall>,
  thumb?: Maybe<TwitterStatusesUserTimelineRetweeted_StatusEntitiesMediaSizesThumb>,
  large?: Maybe<TwitterStatusesUserTimelineRetweeted_StatusEntitiesMediaSizesLarge>,
};

export type TwitterStatusesUserTimelineRetweeted_StatusEntitiesMediaSizesFilterInput = {
  medium?: Maybe<TwitterStatusesUserTimelineRetweeted_StatusEntitiesMediaSizesMediumFilterInput>,
  small?: Maybe<TwitterStatusesUserTimelineRetweeted_StatusEntitiesMediaSizesSmallFilterInput>,
  thumb?: Maybe<TwitterStatusesUserTimelineRetweeted_StatusEntitiesMediaSizesThumbFilterInput>,
  large?: Maybe<TwitterStatusesUserTimelineRetweeted_StatusEntitiesMediaSizesLargeFilterInput>,
};

export type TwitterStatusesUserTimelineRetweeted_StatusEntitiesMediaSizesLarge = {
   __typename?: 'twitterStatusesUserTimelineRetweeted_statusEntitiesMediaSizesLarge',
  w?: Maybe<Scalars['Int']>,
  h?: Maybe<Scalars['Int']>,
  resize?: Maybe<Scalars['String']>,
};

export type TwitterStatusesUserTimelineRetweeted_StatusEntitiesMediaSizesLargeFilterInput = {
  w?: Maybe<IntQueryOperatorInput>,
  h?: Maybe<IntQueryOperatorInput>,
  resize?: Maybe<StringQueryOperatorInput>,
};

export type TwitterStatusesUserTimelineRetweeted_StatusEntitiesMediaSizesMedium = {
   __typename?: 'twitterStatusesUserTimelineRetweeted_statusEntitiesMediaSizesMedium',
  w?: Maybe<Scalars['Int']>,
  h?: Maybe<Scalars['Int']>,
  resize?: Maybe<Scalars['String']>,
};

export type TwitterStatusesUserTimelineRetweeted_StatusEntitiesMediaSizesMediumFilterInput = {
  w?: Maybe<IntQueryOperatorInput>,
  h?: Maybe<IntQueryOperatorInput>,
  resize?: Maybe<StringQueryOperatorInput>,
};

export type TwitterStatusesUserTimelineRetweeted_StatusEntitiesMediaSizesSmall = {
   __typename?: 'twitterStatusesUserTimelineRetweeted_statusEntitiesMediaSizesSmall',
  w?: Maybe<Scalars['Int']>,
  h?: Maybe<Scalars['Int']>,
  resize?: Maybe<Scalars['String']>,
};

export type TwitterStatusesUserTimelineRetweeted_StatusEntitiesMediaSizesSmallFilterInput = {
  w?: Maybe<IntQueryOperatorInput>,
  h?: Maybe<IntQueryOperatorInput>,
  resize?: Maybe<StringQueryOperatorInput>,
};

export type TwitterStatusesUserTimelineRetweeted_StatusEntitiesMediaSizesThumb = {
   __typename?: 'twitterStatusesUserTimelineRetweeted_statusEntitiesMediaSizesThumb',
  w?: Maybe<Scalars['Int']>,
  h?: Maybe<Scalars['Int']>,
  resize?: Maybe<Scalars['String']>,
};

export type TwitterStatusesUserTimelineRetweeted_StatusEntitiesMediaSizesThumbFilterInput = {
  w?: Maybe<IntQueryOperatorInput>,
  h?: Maybe<IntQueryOperatorInput>,
  resize?: Maybe<StringQueryOperatorInput>,
};

export type TwitterStatusesUserTimelineRetweeted_StatusEntitiesUrls = {
   __typename?: 'twitterStatusesUserTimelineRetweeted_statusEntitiesUrls',
  url?: Maybe<Scalars['String']>,
  expanded_url?: Maybe<Scalars['String']>,
  display_url?: Maybe<Scalars['String']>,
  indices?: Maybe<Array<Maybe<Scalars['Int']>>>,
};

export type TwitterStatusesUserTimelineRetweeted_StatusEntitiesUrlsFilterInput = {
  url?: Maybe<StringQueryOperatorInput>,
  expanded_url?: Maybe<StringQueryOperatorInput>,
  display_url?: Maybe<StringQueryOperatorInput>,
  indices?: Maybe<IntQueryOperatorInput>,
};

export type TwitterStatusesUserTimelineRetweeted_StatusEntitiesUrlsFilterListInput = {
  elemMatch?: Maybe<TwitterStatusesUserTimelineRetweeted_StatusEntitiesUrlsFilterInput>,
};

export type TwitterStatusesUserTimelineRetweeted_StatusEntitiesUser_Mentions = {
   __typename?: 'twitterStatusesUserTimelineRetweeted_statusEntitiesUser_mentions',
  screen_name?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['Int']>,
  id_str?: Maybe<Scalars['String']>,
  indices?: Maybe<Array<Maybe<Scalars['Int']>>>,
};

export type TwitterStatusesUserTimelineRetweeted_StatusEntitiesUser_MentionsFilterInput = {
  screen_name?: Maybe<StringQueryOperatorInput>,
  name?: Maybe<StringQueryOperatorInput>,
  id?: Maybe<IntQueryOperatorInput>,
  id_str?: Maybe<StringQueryOperatorInput>,
  indices?: Maybe<IntQueryOperatorInput>,
};

export type TwitterStatusesUserTimelineRetweeted_StatusEntitiesUser_MentionsFilterListInput = {
  elemMatch?: Maybe<TwitterStatusesUserTimelineRetweeted_StatusEntitiesUser_MentionsFilterInput>,
};

export type TwitterStatusesUserTimelineRetweeted_StatusFilterInput = {
  created_at?: Maybe<StringQueryOperatorInput>,
  id?: Maybe<FloatQueryOperatorInput>,
  id_str?: Maybe<StringQueryOperatorInput>,
  text?: Maybe<StringQueryOperatorInput>,
  full_text?: Maybe<StringQueryOperatorInput>,
  truncated?: Maybe<BooleanQueryOperatorInput>,
  entities?: Maybe<TwitterStatusesUserTimelineRetweeted_StatusEntitiesFilterInput>,
  source?: Maybe<StringQueryOperatorInput>,
  user?: Maybe<TwitterStatusesUserTimelineRetweeted_StatusUserFilterInput>,
  is_quote_status?: Maybe<BooleanQueryOperatorInput>,
  retweet_count?: Maybe<IntQueryOperatorInput>,
  favorite_count?: Maybe<IntQueryOperatorInput>,
  favorited?: Maybe<BooleanQueryOperatorInput>,
  retweeted?: Maybe<BooleanQueryOperatorInput>,
  possibly_sensitive?: Maybe<BooleanQueryOperatorInput>,
  lang?: Maybe<StringQueryOperatorInput>,
  display_text_range?: Maybe<IntQueryOperatorInput>,
};

export type TwitterStatusesUserTimelineRetweeted_StatusUser = {
   __typename?: 'twitterStatusesUserTimelineRetweeted_statusUser',
  id?: Maybe<Scalars['Int']>,
  id_str?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  screen_name?: Maybe<Scalars['String']>,
  location?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  url?: Maybe<Scalars['String']>,
  entities?: Maybe<TwitterStatusesUserTimelineRetweeted_StatusUserEntities>,
  protected?: Maybe<Scalars['Boolean']>,
  followers_count?: Maybe<Scalars['Int']>,
  friends_count?: Maybe<Scalars['Int']>,
  listed_count?: Maybe<Scalars['Int']>,
  created_at?: Maybe<Scalars['String']>,
  favourites_count?: Maybe<Scalars['Int']>,
  utc_offset?: Maybe<Scalars['Int']>,
  time_zone?: Maybe<Scalars['String']>,
  geo_enabled?: Maybe<Scalars['Boolean']>,
  verified?: Maybe<Scalars['Boolean']>,
  statuses_count?: Maybe<Scalars['Int']>,
  lang?: Maybe<Scalars['String']>,
  contributors_enabled?: Maybe<Scalars['Boolean']>,
  is_translator?: Maybe<Scalars['Boolean']>,
  is_translation_enabled?: Maybe<Scalars['Boolean']>,
  profile_background_color?: Maybe<Scalars['String']>,
  profile_background_image_url?: Maybe<Scalars['String']>,
  profile_background_image_url_https?: Maybe<Scalars['String']>,
  profile_background_tile?: Maybe<Scalars['Boolean']>,
  profile_image_url?: Maybe<Scalars['String']>,
  profile_image_url_https?: Maybe<Scalars['String']>,
  profile_banner_url?: Maybe<Scalars['String']>,
  profile_link_color?: Maybe<Scalars['String']>,
  profile_sidebar_border_color?: Maybe<Scalars['String']>,
  profile_sidebar_fill_color?: Maybe<Scalars['String']>,
  profile_text_color?: Maybe<Scalars['String']>,
  profile_use_background_image?: Maybe<Scalars['Boolean']>,
  has_extended_profile?: Maybe<Scalars['Boolean']>,
  default_profile?: Maybe<Scalars['Boolean']>,
  default_profile_image?: Maybe<Scalars['Boolean']>,
  following?: Maybe<Scalars['Boolean']>,
  follow_request_sent?: Maybe<Scalars['Boolean']>,
  notifications?: Maybe<Scalars['Boolean']>,
  translator_type?: Maybe<Scalars['String']>,
};

export type TwitterStatusesUserTimelineRetweeted_StatusUserEntities = {
   __typename?: 'twitterStatusesUserTimelineRetweeted_statusUserEntities',
  url?: Maybe<TwitterStatusesUserTimelineRetweeted_StatusUserEntitiesUrl>,
  description?: Maybe<TwitterStatusesUserTimelineRetweeted_StatusUserEntitiesDescription>,
};

export type TwitterStatusesUserTimelineRetweeted_StatusUserEntitiesDescription = {
   __typename?: 'twitterStatusesUserTimelineRetweeted_statusUserEntitiesDescription',
  urls?: Maybe<Array<Maybe<TwitterStatusesUserTimelineRetweeted_StatusUserEntitiesDescriptionUrls>>>,
};

export type TwitterStatusesUserTimelineRetweeted_StatusUserEntitiesDescriptionFilterInput = {
  urls?: Maybe<TwitterStatusesUserTimelineRetweeted_StatusUserEntitiesDescriptionUrlsFilterListInput>,
};

export type TwitterStatusesUserTimelineRetweeted_StatusUserEntitiesDescriptionUrls = {
   __typename?: 'twitterStatusesUserTimelineRetweeted_statusUserEntitiesDescriptionUrls',
  url?: Maybe<Scalars['String']>,
  expanded_url?: Maybe<Scalars['String']>,
  display_url?: Maybe<Scalars['String']>,
  indices?: Maybe<Array<Maybe<Scalars['Int']>>>,
};

export type TwitterStatusesUserTimelineRetweeted_StatusUserEntitiesDescriptionUrlsFilterInput = {
  url?: Maybe<StringQueryOperatorInput>,
  expanded_url?: Maybe<StringQueryOperatorInput>,
  display_url?: Maybe<StringQueryOperatorInput>,
  indices?: Maybe<IntQueryOperatorInput>,
};

export type TwitterStatusesUserTimelineRetweeted_StatusUserEntitiesDescriptionUrlsFilterListInput = {
  elemMatch?: Maybe<TwitterStatusesUserTimelineRetweeted_StatusUserEntitiesDescriptionUrlsFilterInput>,
};

export type TwitterStatusesUserTimelineRetweeted_StatusUserEntitiesFilterInput = {
  url?: Maybe<TwitterStatusesUserTimelineRetweeted_StatusUserEntitiesUrlFilterInput>,
  description?: Maybe<TwitterStatusesUserTimelineRetweeted_StatusUserEntitiesDescriptionFilterInput>,
};

export type TwitterStatusesUserTimelineRetweeted_StatusUserEntitiesUrl = {
   __typename?: 'twitterStatusesUserTimelineRetweeted_statusUserEntitiesUrl',
  urls?: Maybe<Array<Maybe<TwitterStatusesUserTimelineRetweeted_StatusUserEntitiesUrlUrls>>>,
};

export type TwitterStatusesUserTimelineRetweeted_StatusUserEntitiesUrlFilterInput = {
  urls?: Maybe<TwitterStatusesUserTimelineRetweeted_StatusUserEntitiesUrlUrlsFilterListInput>,
};

export type TwitterStatusesUserTimelineRetweeted_StatusUserEntitiesUrlUrls = {
   __typename?: 'twitterStatusesUserTimelineRetweeted_statusUserEntitiesUrlUrls',
  url?: Maybe<Scalars['String']>,
  expanded_url?: Maybe<Scalars['String']>,
  display_url?: Maybe<Scalars['String']>,
  indices?: Maybe<Array<Maybe<Scalars['Int']>>>,
};

export type TwitterStatusesUserTimelineRetweeted_StatusUserEntitiesUrlUrlsFilterInput = {
  url?: Maybe<StringQueryOperatorInput>,
  expanded_url?: Maybe<StringQueryOperatorInput>,
  display_url?: Maybe<StringQueryOperatorInput>,
  indices?: Maybe<IntQueryOperatorInput>,
};

export type TwitterStatusesUserTimelineRetweeted_StatusUserEntitiesUrlUrlsFilterListInput = {
  elemMatch?: Maybe<TwitterStatusesUserTimelineRetweeted_StatusUserEntitiesUrlUrlsFilterInput>,
};

export type TwitterStatusesUserTimelineRetweeted_StatusUserFilterInput = {
  id?: Maybe<IntQueryOperatorInput>,
  id_str?: Maybe<StringQueryOperatorInput>,
  name?: Maybe<StringQueryOperatorInput>,
  screen_name?: Maybe<StringQueryOperatorInput>,
  location?: Maybe<StringQueryOperatorInput>,
  description?: Maybe<StringQueryOperatorInput>,
  url?: Maybe<StringQueryOperatorInput>,
  entities?: Maybe<TwitterStatusesUserTimelineRetweeted_StatusUserEntitiesFilterInput>,
  protected?: Maybe<BooleanQueryOperatorInput>,
  followers_count?: Maybe<IntQueryOperatorInput>,
  friends_count?: Maybe<IntQueryOperatorInput>,
  listed_count?: Maybe<IntQueryOperatorInput>,
  created_at?: Maybe<StringQueryOperatorInput>,
  favourites_count?: Maybe<IntQueryOperatorInput>,
  utc_offset?: Maybe<IntQueryOperatorInput>,
  time_zone?: Maybe<StringQueryOperatorInput>,
  geo_enabled?: Maybe<BooleanQueryOperatorInput>,
  verified?: Maybe<BooleanQueryOperatorInput>,
  statuses_count?: Maybe<IntQueryOperatorInput>,
  lang?: Maybe<StringQueryOperatorInput>,
  contributors_enabled?: Maybe<BooleanQueryOperatorInput>,
  is_translator?: Maybe<BooleanQueryOperatorInput>,
  is_translation_enabled?: Maybe<BooleanQueryOperatorInput>,
  profile_background_color?: Maybe<StringQueryOperatorInput>,
  profile_background_image_url?: Maybe<StringQueryOperatorInput>,
  profile_background_image_url_https?: Maybe<StringQueryOperatorInput>,
  profile_background_tile?: Maybe<BooleanQueryOperatorInput>,
  profile_image_url?: Maybe<StringQueryOperatorInput>,
  profile_image_url_https?: Maybe<StringQueryOperatorInput>,
  profile_banner_url?: Maybe<StringQueryOperatorInput>,
  profile_link_color?: Maybe<StringQueryOperatorInput>,
  profile_sidebar_border_color?: Maybe<StringQueryOperatorInput>,
  profile_sidebar_fill_color?: Maybe<StringQueryOperatorInput>,
  profile_text_color?: Maybe<StringQueryOperatorInput>,
  profile_use_background_image?: Maybe<BooleanQueryOperatorInput>,
  has_extended_profile?: Maybe<BooleanQueryOperatorInput>,
  default_profile?: Maybe<BooleanQueryOperatorInput>,
  default_profile_image?: Maybe<BooleanQueryOperatorInput>,
  following?: Maybe<BooleanQueryOperatorInput>,
  follow_request_sent?: Maybe<BooleanQueryOperatorInput>,
  notifications?: Maybe<BooleanQueryOperatorInput>,
  translator_type?: Maybe<StringQueryOperatorInput>,
};

export type TwitterStatusesUserTimelineSortInput = {
  fields?: Maybe<Array<Maybe<TwitterStatusesUserTimelineFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type TwitterStatusesUserTimelineUser = {
   __typename?: 'twitterStatusesUserTimelineUser',
  id?: Maybe<Scalars['Int']>,
  id_str?: Maybe<Scalars['Date']>,
  name?: Maybe<Scalars['String']>,
  screen_name?: Maybe<Scalars['String']>,
  location?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  url?: Maybe<Scalars['String']>,
  entities?: Maybe<TwitterStatusesUserTimelineUserEntities>,
  protected?: Maybe<Scalars['Boolean']>,
  followers_count?: Maybe<Scalars['Int']>,
  friends_count?: Maybe<Scalars['Int']>,
  listed_count?: Maybe<Scalars['Int']>,
  created_at?: Maybe<Scalars['String']>,
  favourites_count?: Maybe<Scalars['Int']>,
  utc_offset?: Maybe<Scalars['Int']>,
  time_zone?: Maybe<Scalars['String']>,
  geo_enabled?: Maybe<Scalars['Boolean']>,
  verified?: Maybe<Scalars['Boolean']>,
  statuses_count?: Maybe<Scalars['Int']>,
  lang?: Maybe<Scalars['String']>,
  contributors_enabled?: Maybe<Scalars['Boolean']>,
  is_translator?: Maybe<Scalars['Boolean']>,
  is_translation_enabled?: Maybe<Scalars['Boolean']>,
  profile_background_color?: Maybe<Scalars['String']>,
  profile_background_image_url?: Maybe<Scalars['String']>,
  profile_background_image_url_https?: Maybe<Scalars['String']>,
  profile_background_tile?: Maybe<Scalars['Boolean']>,
  profile_image_url?: Maybe<Scalars['String']>,
  profile_image_url_https?: Maybe<Scalars['String']>,
  profile_banner_url?: Maybe<Scalars['String']>,
  profile_link_color?: Maybe<Scalars['String']>,
  profile_sidebar_border_color?: Maybe<Scalars['String']>,
  profile_sidebar_fill_color?: Maybe<Scalars['String']>,
  profile_text_color?: Maybe<Scalars['String']>,
  profile_use_background_image?: Maybe<Scalars['Boolean']>,
  has_extended_profile?: Maybe<Scalars['Boolean']>,
  default_profile?: Maybe<Scalars['Boolean']>,
  default_profile_image?: Maybe<Scalars['Boolean']>,
  following?: Maybe<Scalars['Boolean']>,
  follow_request_sent?: Maybe<Scalars['Boolean']>,
  notifications?: Maybe<Scalars['Boolean']>,
  translator_type?: Maybe<Scalars['String']>,
};


export type TwitterStatusesUserTimelineUserId_StrArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};

export type TwitterStatusesUserTimelineUserEntities = {
   __typename?: 'twitterStatusesUserTimelineUserEntities',
  url?: Maybe<TwitterStatusesUserTimelineUserEntitiesUrl>,
};

export type TwitterStatusesUserTimelineUserEntitiesFilterInput = {
  url?: Maybe<TwitterStatusesUserTimelineUserEntitiesUrlFilterInput>,
};

export type TwitterStatusesUserTimelineUserEntitiesUrl = {
   __typename?: 'twitterStatusesUserTimelineUserEntitiesUrl',
  urls?: Maybe<Array<Maybe<TwitterStatusesUserTimelineUserEntitiesUrlUrls>>>,
};

export type TwitterStatusesUserTimelineUserEntitiesUrlFilterInput = {
  urls?: Maybe<TwitterStatusesUserTimelineUserEntitiesUrlUrlsFilterListInput>,
};

export type TwitterStatusesUserTimelineUserEntitiesUrlUrls = {
   __typename?: 'twitterStatusesUserTimelineUserEntitiesUrlUrls',
  url?: Maybe<Scalars['String']>,
  expanded_url?: Maybe<Scalars['String']>,
  display_url?: Maybe<Scalars['String']>,
  indices?: Maybe<Array<Maybe<Scalars['Int']>>>,
};

export type TwitterStatusesUserTimelineUserEntitiesUrlUrlsFilterInput = {
  url?: Maybe<StringQueryOperatorInput>,
  expanded_url?: Maybe<StringQueryOperatorInput>,
  display_url?: Maybe<StringQueryOperatorInput>,
  indices?: Maybe<IntQueryOperatorInput>,
};

export type TwitterStatusesUserTimelineUserEntitiesUrlUrlsFilterListInput = {
  elemMatch?: Maybe<TwitterStatusesUserTimelineUserEntitiesUrlUrlsFilterInput>,
};

export type TwitterStatusesUserTimelineUserFilterInput = {
  id?: Maybe<IntQueryOperatorInput>,
  id_str?: Maybe<DateQueryOperatorInput>,
  name?: Maybe<StringQueryOperatorInput>,
  screen_name?: Maybe<StringQueryOperatorInput>,
  location?: Maybe<StringQueryOperatorInput>,
  description?: Maybe<StringQueryOperatorInput>,
  url?: Maybe<StringQueryOperatorInput>,
  entities?: Maybe<TwitterStatusesUserTimelineUserEntitiesFilterInput>,
  protected?: Maybe<BooleanQueryOperatorInput>,
  followers_count?: Maybe<IntQueryOperatorInput>,
  friends_count?: Maybe<IntQueryOperatorInput>,
  listed_count?: Maybe<IntQueryOperatorInput>,
  created_at?: Maybe<StringQueryOperatorInput>,
  favourites_count?: Maybe<IntQueryOperatorInput>,
  utc_offset?: Maybe<IntQueryOperatorInput>,
  time_zone?: Maybe<StringQueryOperatorInput>,
  geo_enabled?: Maybe<BooleanQueryOperatorInput>,
  verified?: Maybe<BooleanQueryOperatorInput>,
  statuses_count?: Maybe<IntQueryOperatorInput>,
  lang?: Maybe<StringQueryOperatorInput>,
  contributors_enabled?: Maybe<BooleanQueryOperatorInput>,
  is_translator?: Maybe<BooleanQueryOperatorInput>,
  is_translation_enabled?: Maybe<BooleanQueryOperatorInput>,
  profile_background_color?: Maybe<StringQueryOperatorInput>,
  profile_background_image_url?: Maybe<StringQueryOperatorInput>,
  profile_background_image_url_https?: Maybe<StringQueryOperatorInput>,
  profile_background_tile?: Maybe<BooleanQueryOperatorInput>,
  profile_image_url?: Maybe<StringQueryOperatorInput>,
  profile_image_url_https?: Maybe<StringQueryOperatorInput>,
  profile_banner_url?: Maybe<StringQueryOperatorInput>,
  profile_link_color?: Maybe<StringQueryOperatorInput>,
  profile_sidebar_border_color?: Maybe<StringQueryOperatorInput>,
  profile_sidebar_fill_color?: Maybe<StringQueryOperatorInput>,
  profile_text_color?: Maybe<StringQueryOperatorInput>,
  profile_use_background_image?: Maybe<BooleanQueryOperatorInput>,
  has_extended_profile?: Maybe<BooleanQueryOperatorInput>,
  default_profile?: Maybe<BooleanQueryOperatorInput>,
  default_profile_image?: Maybe<BooleanQueryOperatorInput>,
  following?: Maybe<BooleanQueryOperatorInput>,
  follow_request_sent?: Maybe<BooleanQueryOperatorInput>,
  notifications?: Maybe<BooleanQueryOperatorInput>,
  translator_type?: Maybe<StringQueryOperatorInput>,
};

export type BlogRollQueryQueryVariables = {};


export type BlogRollQueryQuery = (
  { __typename?: 'Query' }
  & { allMarkdownRemark: (
    { __typename?: 'MarkdownRemarkConnection' }
    & { edges: Array<(
      { __typename?: 'MarkdownRemarkEdge' }
      & { node: (
        { __typename?: 'MarkdownRemark' }
        & Pick<MarkdownRemark, 'excerpt' | 'id'>
        & { fields: Maybe<(
          { __typename?: 'MarkdownRemarkFields' }
          & Pick<MarkdownRemarkFields, 'slug'>
        )>, frontmatter: Maybe<(
          { __typename?: 'MarkdownRemarkFrontmatter' }
          & Pick<MarkdownRemarkFrontmatter, 'title' | 'templateKey' | 'date'>
          & { featuredimage: Maybe<(
            { __typename?: 'File' }
            & { childImageSharp: Maybe<(
              { __typename?: 'ImageSharp' }
              & { fluid: Maybe<(
                { __typename?: 'ImageSharpFluid' }
                & Pick<ImageSharpFluid, 'src' | 'srcSet' | 'aspectRatio' | 'sizes' | 'base64'>
              )> }
            )> }
          )> }
        )> }
      ) }
    )> }
  ) }
);

export type IndexPageDataQueryVariables = {};


export type IndexPageDataQuery = (
  { __typename?: 'Query' }
  & { markdownRemark: Maybe<(
    { __typename?: 'MarkdownRemark' }
    & { frontmatter: Maybe<(
      { __typename?: 'MarkdownRemarkFrontmatter' }
      & Pick<MarkdownRemarkFrontmatter, 'heading'>
      & { image: Maybe<(
        { __typename?: 'File' }
        & { childImageSharp: Maybe<(
          { __typename?: 'ImageSharp' }
          & { fluid: Maybe<(
            { __typename?: 'ImageSharpFluid' }
            & Pick<ImageSharpFluid, 'src' | 'srcSet' | 'aspectRatio' | 'sizes' | 'base64'>
          )> }
        )> }
      )> }
    )> }
  )> }
);

export type SearchIndexQueryQueryVariables = {};


export type SearchIndexQueryQuery = (
  { __typename?: 'Query' }
  & { siteSearchIndex: Maybe<(
    { __typename?: 'SiteSearchIndex' }
    & Pick<SiteSearchIndex, 'index'>
  )> }
);

export type Unnamed_1_QueryVariables = {};


export type Unnamed_1_Query = (
  { __typename?: 'Query' }
  & { allTwitterStatusesUserTimeline: (
    { __typename?: 'twitterStatusesUserTimelineConnection' }
    & { nodes: Array<(
      { __typename?: 'twitterStatusesUserTimeline' }
      & Pick<TwitterStatusesUserTimeline, 'id' | 'id_str' | 'text' | 'full_text' | 'retweet_count' | 'favorite_count' | 'created_at'>
      & { user: Maybe<(
        { __typename?: 'twitterStatusesUserTimelineUser' }
        & Pick<TwitterStatusesUserTimelineUser, 'id' | 'screen_name' | 'url' | 'name' | 'profile_image_url_https'>
      )>, entities: Maybe<(
        { __typename?: 'twitterStatusesUserTimelineEntities' }
        & { urls: Maybe<Array<Maybe<(
          { __typename?: 'twitterStatusesUserTimelineEntitiesUrls' }
          & Pick<TwitterStatusesUserTimelineEntitiesUrls, 'url' | 'expanded_url'>
        )>>>, media: Maybe<Array<Maybe<(
          { __typename?: 'twitterStatusesUserTimelineEntitiesMedia' }
          & Pick<TwitterStatusesUserTimelineEntitiesMedia, 'media_url_https' | 'url' | 'type'>
        )>>> }
      )>, retweeted_status: Maybe<(
        { __typename?: 'twitterStatusesUserTimelineRetweeted_status' }
        & Pick<TwitterStatusesUserTimelineRetweeted_Status, 'id_str' | 'text' | 'full_text' | 'retweet_count' | 'favorite_count' | 'created_at'>
        & { entities: Maybe<(
          { __typename?: 'twitterStatusesUserTimelineRetweeted_statusEntities' }
          & { urls: Maybe<Array<Maybe<(
            { __typename?: 'twitterStatusesUserTimelineRetweeted_statusEntitiesUrls' }
            & Pick<TwitterStatusesUserTimelineRetweeted_StatusEntitiesUrls, 'url' | 'expanded_url'>
          )>>>, media: Maybe<Array<Maybe<(
            { __typename?: 'twitterStatusesUserTimelineRetweeted_statusEntitiesMedia' }
            & Pick<TwitterStatusesUserTimelineRetweeted_StatusEntitiesMedia, 'media_url_https' | 'url' | 'type'>
          )>>> }
        )>, user: Maybe<(
          { __typename?: 'twitterStatusesUserTimelineRetweeted_statusUser' }
          & Pick<TwitterStatusesUserTimelineRetweeted_StatusUser, 'id' | 'screen_name' | 'url' | 'name' | 'profile_image_url_https'>
        )> }
      )>, linked_site: Maybe<(
        { __typename?: 'twitterStatusesUserTimelineLinked_site' }
        & Pick<TwitterStatusesUserTimelineLinked_Site, 'title' | 'description' | 'image' | 'url'>
      )> }
    )> }
  ), allFile: (
    { __typename?: 'FileConnection' }
    & { nodes: Array<(
      { __typename?: 'File' }
      & Pick<File, 'name' | 'ext' | 'publicURL'>
      & { childImageSharp: Maybe<(
        { __typename?: 'ImageSharp' }
        & { fluid: Maybe<(
          { __typename?: 'ImageSharpFluid' }
          & Pick<ImageSharpFluid, 'src' | 'srcSet' | 'aspectRatio' | 'sizes' | 'base64'>
        )> }
      )> }
    )> }
  ) }
);

export type Unnamed_2_QueryVariables = {};


export type Unnamed_2_Query = (
  { __typename?: 'Query' }
  & { fileName: Maybe<(
    { __typename?: 'File' }
    & { childImageSharp: Maybe<(
      { __typename?: 'ImageSharp' }
      & { fluid: Maybe<(
        { __typename?: 'ImageSharpFluid' }
        & Pick<ImageSharpFluid, 'src' | 'srcSet' | 'aspectRatio' | 'sizes' | 'base64'>
      )> }
    )> }
  )> }
);

export type TagsQueryQueryVariables = {};


export type TagsQueryQuery = (
  { __typename?: 'Query' }
  & { allMarkdownRemark: (
    { __typename?: 'MarkdownRemarkConnection' }
    & { group: Array<(
      { __typename?: 'MarkdownRemarkGroupConnection' }
      & Pick<MarkdownRemarkGroupConnection, 'fieldValue' | 'totalCount'>
    )> }
  ) }
);

export type AboutPageQueryVariables = {};


export type AboutPageQuery = (
  { __typename?: 'Query' }
  & { markdownRemark: Maybe<(
    { __typename?: 'MarkdownRemark' }
    & Pick<MarkdownRemark, 'html'>
    & { frontmatter: Maybe<(
      { __typename?: 'MarkdownRemarkFrontmatter' }
      & Pick<MarkdownRemarkFrontmatter, 'title' | 'description'>
      & { image: Maybe<(
        { __typename?: 'File' }
        & { childImageSharp: Maybe<(
          { __typename?: 'ImageSharp' }
          & { fluid: Maybe<(
            { __typename?: 'ImageSharpFluid' }
            & Pick<ImageSharpFluid, 'src' | 'srcSet' | 'aspectRatio' | 'sizes' | 'base64'>
          )> }
        )> }
      )> }
    )> }
  )>, fileName: Maybe<(
    { __typename?: 'File' }
    & { childImageSharp: Maybe<(
      { __typename?: 'ImageSharp' }
      & { fluid: Maybe<(
        { __typename?: 'ImageSharpFluid' }
        & Pick<ImageSharpFluid, 'src' | 'srcSet' | 'aspectRatio' | 'sizes' | 'base64'>
      )> }
    )> }
  )> }
);

export type BlogPostByIdQueryVariables = {
  id: Scalars['String']
};


export type BlogPostByIdQuery = (
  { __typename?: 'Query' }
  & { markdownRemark: Maybe<(
    { __typename?: 'MarkdownRemark' }
    & Pick<MarkdownRemark, 'id' | 'html' | 'fileAbsolutePath'>
    & { frontmatter: Maybe<(
      { __typename?: 'MarkdownRemarkFrontmatter' }
      & Pick<MarkdownRemarkFrontmatter, 'date' | 'title' | 'tags' | 'language' | 'description'>
    )> }
  )> }
);

export type CookiesPageQueryVariables = {};


export type CookiesPageQuery = (
  { __typename?: 'Query' }
  & { markdownRemark: Maybe<(
    { __typename?: 'MarkdownRemark' }
    & Pick<MarkdownRemark, 'html'>
    & { frontmatter: Maybe<(
      { __typename?: 'MarkdownRemarkFrontmatter' }
      & Pick<MarkdownRemarkFrontmatter, 'title' | 'description'>
    )> }
  )>, fileName: Maybe<(
    { __typename?: 'File' }
    & { childImageSharp: Maybe<(
      { __typename?: 'ImageSharp' }
      & { fluid: Maybe<(
        { __typename?: 'ImageSharpFluid' }
        & Pick<ImageSharpFluid, 'src' | 'srcSet' | 'aspectRatio' | 'sizes' | 'base64'>
      )> }
    )> }
  )> }
);

export type IndexPageTemplateQueryVariables = {};


export type IndexPageTemplateQuery = (
  { __typename?: 'Query' }
  & { markdownRemark: Maybe<(
    { __typename?: 'MarkdownRemark' }
    & Pick<MarkdownRemark, 'html'>
    & { frontmatter: Maybe<(
      { __typename?: 'MarkdownRemarkFrontmatter' }
      & Pick<MarkdownRemarkFrontmatter, 'heading' | 'subheading'>
      & { image: Maybe<(
        { __typename?: 'File' }
        & { childImageSharp: Maybe<(
          { __typename?: 'ImageSharp' }
          & { fluid: Maybe<(
            { __typename?: 'ImageSharpFluid' }
            & Pick<ImageSharpFluid, 'src' | 'srcSet' | 'aspectRatio' | 'sizes' | 'base64'>
          )> }
        )> }
      )> }
    )> }
  )> }
);

export type PressImagesPageQueryVariables = {};


export type PressImagesPageQuery = (
  { __typename?: 'Query' }
  & { markdownRemark: Maybe<(
    { __typename?: 'MarkdownRemark' }
    & Pick<MarkdownRemark, 'html'>
    & { frontmatter: Maybe<(
      { __typename?: 'MarkdownRemarkFrontmatter' }
      & Pick<MarkdownRemarkFrontmatter, 'title' | 'description'>
      & { downloadableimages: Maybe<Array<Maybe<(
        { __typename?: 'File' }
        & { childImageSharp: Maybe<(
          { __typename?: 'ImageSharp' }
          & { fluid: Maybe<(
            { __typename?: 'ImageSharpFluid' }
            & Pick<ImageSharpFluid, 'src' | 'srcSet' | 'aspectRatio' | 'sizes' | 'base64' | 'originalName'>
          )>, original: Maybe<(
            { __typename?: 'ImageSharpOriginal' }
            & Pick<ImageSharpOriginal, 'width' | 'height' | 'src'>
          )> }
        )> }
      )>>> }
    )> }
  )>, fileName: Maybe<(
    { __typename?: 'File' }
    & { childImageSharp: Maybe<(
      { __typename?: 'ImageSharp' }
      & { fluid: Maybe<(
        { __typename?: 'ImageSharpFluid' }
        & Pick<ImageSharpFluid, 'src' | 'srcSet' | 'aspectRatio' | 'sizes' | 'base64'>
      )> }
    )> }
  )> }
);

export type PublishedPageQueryVariables = {};


export type PublishedPageQuery = (
  { __typename?: 'Query' }
  & { markdownRemark: Maybe<(
    { __typename?: 'MarkdownRemark' }
    & Pick<MarkdownRemark, 'html'>
    & { frontmatter: Maybe<(
      { __typename?: 'MarkdownRemarkFrontmatter' }
      & Pick<MarkdownRemarkFrontmatter, 'title' | 'description'>
    )> }
  )>, fileName: Maybe<(
    { __typename?: 'File' }
    & { childImageSharp: Maybe<(
      { __typename?: 'ImageSharp' }
      & { fluid: Maybe<(
        { __typename?: 'ImageSharpFluid' }
        & Pick<ImageSharpFluid, 'src' | 'srcSet' | 'aspectRatio' | 'sizes' | 'base64'>
      )> }
    )> }
  )> }
);

export type TagPageQueryVariables = {
  tag?: Maybe<Scalars['String']>
};


export type TagPageQuery = (
  { __typename?: 'Query' }
  & { allMarkdownRemark: (
    { __typename?: 'MarkdownRemarkConnection' }
    & Pick<MarkdownRemarkConnection, 'totalCount'>
    & { edges: Array<(
      { __typename?: 'MarkdownRemarkEdge' }
      & { node: (
        { __typename?: 'MarkdownRemark' }
        & { fields: Maybe<(
          { __typename?: 'MarkdownRemarkFields' }
          & Pick<MarkdownRemarkFields, 'slug'>
        )>, frontmatter: Maybe<(
          { __typename?: 'MarkdownRemarkFrontmatter' }
          & Pick<MarkdownRemarkFrontmatter, 'title'>
        )> }
      ) }
    )> }
  ) }
);

export type WebsitePageQueryVariables = {};


export type WebsitePageQuery = (
  { __typename?: 'Query' }
  & { markdownRemark: Maybe<(
    { __typename?: 'MarkdownRemark' }
    & Pick<MarkdownRemark, 'html'>
    & { frontmatter: Maybe<(
      { __typename?: 'MarkdownRemarkFrontmatter' }
      & Pick<MarkdownRemarkFrontmatter, 'title' | 'description'>
    )> }
  )>, fileName: Maybe<(
    { __typename?: 'File' }
    & { childImageSharp: Maybe<(
      { __typename?: 'ImageSharp' }
      & { fluid: Maybe<(
        { __typename?: 'ImageSharpFluid' }
        & Pick<ImageSharpFluid, 'src' | 'srcSet' | 'aspectRatio' | 'sizes' | 'base64'>
      )> }
    )> }
  )> }
);

export type GatsbyImageSharpFixedFragment = (
  { __typename?: 'ImageSharpFixed' }
  & Pick<ImageSharpFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet'>
);

export type GatsbyImageSharpFixed_TracedSvgFragment = (
  { __typename?: 'ImageSharpFixed' }
  & Pick<ImageSharpFixed, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'>
);

export type GatsbyImageSharpFixed_WithWebpFragment = (
  { __typename?: 'ImageSharpFixed' }
  & Pick<ImageSharpFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>
);

export type GatsbyImageSharpFixed_WithWebp_TracedSvgFragment = (
  { __typename?: 'ImageSharpFixed' }
  & Pick<ImageSharpFixed, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>
);

export type GatsbyImageSharpFixed_NoBase64Fragment = (
  { __typename?: 'ImageSharpFixed' }
  & Pick<ImageSharpFixed, 'width' | 'height' | 'src' | 'srcSet'>
);

export type GatsbyImageSharpFixed_WithWebp_NoBase64Fragment = (
  { __typename?: 'ImageSharpFixed' }
  & Pick<ImageSharpFixed, 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>
);

export type GatsbyImageSharpFluidFragment = (
  { __typename?: 'ImageSharpFluid' }
  & Pick<ImageSharpFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>
);

export type GatsbyImageSharpFluid_TracedSvgFragment = (
  { __typename?: 'ImageSharpFluid' }
  & Pick<ImageSharpFluid, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>
);

export type GatsbyImageSharpFluid_WithWebpFragment = (
  { __typename?: 'ImageSharpFluid' }
  & Pick<ImageSharpFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>
);

export type GatsbyImageSharpFluid_WithWebp_TracedSvgFragment = (
  { __typename?: 'ImageSharpFluid' }
  & Pick<ImageSharpFluid, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>
);

export type GatsbyImageSharpFluid_NoBase64Fragment = (
  { __typename?: 'ImageSharpFluid' }
  & Pick<ImageSharpFluid, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>
);

export type GatsbyImageSharpFluid_WithWebp_NoBase64Fragment = (
  { __typename?: 'ImageSharpFluid' }
  & Pick<ImageSharpFluid, 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>
);

export type GatsbyImageSharpResolutionsFragment = (
  { __typename?: 'ImageSharpResolutions' }
  & Pick<ImageSharpResolutions, 'base64' | 'width' | 'height' | 'src' | 'srcSet'>
);

export type GatsbyImageSharpResolutions_TracedSvgFragment = (
  { __typename?: 'ImageSharpResolutions' }
  & Pick<ImageSharpResolutions, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'>
);

export type GatsbyImageSharpResolutions_WithWebpFragment = (
  { __typename?: 'ImageSharpResolutions' }
  & Pick<ImageSharpResolutions, 'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>
);

export type GatsbyImageSharpResolutions_WithWebp_TracedSvgFragment = (
  { __typename?: 'ImageSharpResolutions' }
  & Pick<ImageSharpResolutions, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>
);

export type GatsbyImageSharpResolutions_NoBase64Fragment = (
  { __typename?: 'ImageSharpResolutions' }
  & Pick<ImageSharpResolutions, 'width' | 'height' | 'src' | 'srcSet'>
);

export type GatsbyImageSharpResolutions_WithWebp_NoBase64Fragment = (
  { __typename?: 'ImageSharpResolutions' }
  & Pick<ImageSharpResolutions, 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>
);

export type GatsbyImageSharpSizesFragment = (
  { __typename?: 'ImageSharpSizes' }
  & Pick<ImageSharpSizes, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>
);

export type GatsbyImageSharpSizes_TracedSvgFragment = (
  { __typename?: 'ImageSharpSizes' }
  & Pick<ImageSharpSizes, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>
);

export type GatsbyImageSharpSizes_WithWebpFragment = (
  { __typename?: 'ImageSharpSizes' }
  & Pick<ImageSharpSizes, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>
);

export type GatsbyImageSharpSizes_WithWebp_TracedSvgFragment = (
  { __typename?: 'ImageSharpSizes' }
  & Pick<ImageSharpSizes, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>
);

export type GatsbyImageSharpSizes_NoBase64Fragment = (
  { __typename?: 'ImageSharpSizes' }
  & Pick<ImageSharpSizes, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>
);

export type GatsbyImageSharpSizes_WithWebp_NoBase64Fragment = (
  { __typename?: 'ImageSharpSizes' }
  & Pick<ImageSharpSizes, 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>
);
