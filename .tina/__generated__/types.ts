// DO NOT MODIFY THIS FILE. This file is automatically generated by Tina
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** References another document, used as a foreign key */
  Reference: any;
  JSON: any;
};



export type SystemInfo = {
  __typename?: 'SystemInfo';
  filename: Scalars['String'];
  basename: Scalars['String'];
  breadcrumbs: Array<Scalars['String']>;
  path: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  template: Scalars['String'];
  collection: Collection;
};


export type SystemInfoBreadcrumbsArgs = {
  excludeExtension?: Maybe<Scalars['Boolean']>;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  hasPreviousPage: Scalars['Boolean'];
  hasNextPage: Scalars['Boolean'];
  startCursor: Scalars['String'];
  endCursor: Scalars['String'];
};

export type Node = {
  id: Scalars['ID'];
};

export type Document = {
  sys?: Maybe<SystemInfo>;
  id: Scalars['ID'];
};

/** A relay-compliant pagination connection */
export type Connection = {
  totalCount: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  getCollection: Collection;
  getCollections: Array<Collection>;
  node: Node;
  getDocument: DocumentNode;
  getDocumentList: DocumentConnection;
  getPostsDocument: PostsDocument;
  getPostsList: PostsConnection;
  getArttalksDocument: ArttalksDocument;
  getArttalksList: ArttalksConnection;
  getHomeDocument: HomeDocument;
  getHomeList: HomeConnection;
  getAboutDocument: AboutDocument;
  getAboutList: AboutConnection;
};


export type QueryGetCollectionArgs = {
  collection?: Maybe<Scalars['String']>;
};


export type QueryNodeArgs = {
  id?: Maybe<Scalars['String']>;
};


export type QueryGetDocumentArgs = {
  collection?: Maybe<Scalars['String']>;
  relativePath?: Maybe<Scalars['String']>;
};


export type QueryGetDocumentListArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryGetPostsDocumentArgs = {
  relativePath?: Maybe<Scalars['String']>;
};


export type QueryGetPostsListArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryGetArttalksDocumentArgs = {
  relativePath?: Maybe<Scalars['String']>;
};


export type QueryGetArttalksListArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryGetHomeDocumentArgs = {
  relativePath?: Maybe<Scalars['String']>;
};


export type QueryGetHomeListArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryGetAboutDocumentArgs = {
  relativePath?: Maybe<Scalars['String']>;
};


export type QueryGetAboutListArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type DocumentConnectionEdges = {
  __typename?: 'DocumentConnectionEdges';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<DocumentNode>;
};

export type DocumentConnection = Connection & {
  __typename?: 'DocumentConnection';
  pageInfo?: Maybe<PageInfo>;
  totalCount: Scalars['Int'];
  edges?: Maybe<Array<Maybe<DocumentConnectionEdges>>>;
};

export type Collection = {
  __typename?: 'Collection';
  name: Scalars['String'];
  slug: Scalars['String'];
  label: Scalars['String'];
  path: Scalars['String'];
  format?: Maybe<Scalars['String']>;
  matches?: Maybe<Scalars['String']>;
  templates?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  fields?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  documents: DocumentConnection;
};


export type CollectionDocumentsArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type DocumentNode = PostsDocument | ArttalksDocument | HomeDocument | AboutDocument;

export type Posts = {
  __typename?: 'Posts';
  title?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
};

export type PostsDocument = Node & Document & {
  __typename?: 'PostsDocument';
  id: Scalars['ID'];
  sys: SystemInfo;
  data: Posts;
  form: Scalars['JSON'];
  values: Scalars['JSON'];
  dataJSON: Scalars['JSON'];
};

export type PostsConnectionEdges = {
  __typename?: 'PostsConnectionEdges';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<PostsDocument>;
};

export type PostsConnection = Connection & {
  __typename?: 'PostsConnection';
  pageInfo?: Maybe<PageInfo>;
  totalCount: Scalars['Int'];
  edges?: Maybe<Array<Maybe<PostsConnectionEdges>>>;
};

export type ArttalksMainTitle = {
  __typename?: 'ArttalksMainTitle';
  en?: Maybe<Scalars['String']>;
  fr?: Maybe<Scalars['String']>;
  kor?: Maybe<Scalars['String']>;
};

export type ArttalksDescription = {
  __typename?: 'ArttalksDescription';
  en?: Maybe<Scalars['String']>;
  fr?: Maybe<Scalars['String']>;
  kor?: Maybe<Scalars['String']>;
};

export type ArttalksDaysTitle = {
  __typename?: 'ArttalksDaysTitle';
  en?: Maybe<Scalars['String']>;
  fr?: Maybe<Scalars['String']>;
  kor?: Maybe<Scalars['String']>;
};

export type ArttalksDaysSubtitle = {
  __typename?: 'ArttalksDaysSubtitle';
  en?: Maybe<Scalars['String']>;
  fr?: Maybe<Scalars['String']>;
  kor?: Maybe<Scalars['String']>;
};

export type ArttalksDaysBodyTextTitle = {
  __typename?: 'ArttalksDaysBodyTextTitle';
  en?: Maybe<Scalars['String']>;
  fr?: Maybe<Scalars['String']>;
  kor?: Maybe<Scalars['String']>;
};

export type ArttalksDaysBodyText = {
  __typename?: 'ArttalksDaysBodyText';
  title?: Maybe<ArttalksDaysBodyTextTitle>;
};

export type ArttalksDaysBodyVideo = {
  __typename?: 'ArttalksDaysBodyVideo';
  vimeoUrl?: Maybe<Scalars['String']>;
};

export type ArttalksDaysBodyImageCaption = {
  __typename?: 'ArttalksDaysBodyImageCaption';
  en?: Maybe<Scalars['String']>;
  fr?: Maybe<Scalars['String']>;
  kor?: Maybe<Scalars['String']>;
};

export type ArttalksDaysBodyImage = {
  __typename?: 'ArttalksDaysBodyImage';
  caption?: Maybe<ArttalksDaysBodyImageCaption>;
  imageUrl?: Maybe<Scalars['String']>;
};

export type ArttalksDaysBody = ArttalksDaysBodyText | ArttalksDaysBodyVideo | ArttalksDaysBodyImage;

export type ArttalksDays = {
  __typename?: 'ArttalksDays';
  title?: Maybe<ArttalksDaysTitle>;
  subtitle?: Maybe<ArttalksDaysSubtitle>;
  body?: Maybe<Array<Maybe<ArttalksDaysBody>>>;
};

export type Arttalks = {
  __typename?: 'Arttalks';
  mainTitle?: Maybe<ArttalksMainTitle>;
  description?: Maybe<ArttalksDescription>;
  days?: Maybe<Array<Maybe<ArttalksDays>>>;
};

export type ArttalksDocument = Node & Document & {
  __typename?: 'ArttalksDocument';
  id: Scalars['ID'];
  sys: SystemInfo;
  data: Arttalks;
  form: Scalars['JSON'];
  values: Scalars['JSON'];
  dataJSON: Scalars['JSON'];
};

export type ArttalksConnectionEdges = {
  __typename?: 'ArttalksConnectionEdges';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<ArttalksDocument>;
};

export type ArttalksConnection = Connection & {
  __typename?: 'ArttalksConnection';
  pageInfo?: Maybe<PageInfo>;
  totalCount: Scalars['Int'];
  edges?: Maybe<Array<Maybe<ArttalksConnectionEdges>>>;
};

export type HomeDescription = {
  __typename?: 'HomeDescription';
  en?: Maybe<Scalars['String']>;
  fr?: Maybe<Scalars['String']>;
  kor?: Maybe<Scalars['String']>;
};

export type HomeDaysTitle = {
  __typename?: 'HomeDaysTitle';
  en?: Maybe<Scalars['String']>;
  fr?: Maybe<Scalars['String']>;
  kor?: Maybe<Scalars['String']>;
};

export type HomeDaysSubtitle = {
  __typename?: 'HomeDaysSubtitle';
  en?: Maybe<Scalars['String']>;
  fr?: Maybe<Scalars['String']>;
  kor?: Maybe<Scalars['String']>;
};

export type HomeDays = {
  __typename?: 'HomeDays';
  title?: Maybe<HomeDaysTitle>;
  subtitle?: Maybe<HomeDaysSubtitle>;
};

export type Home = {
  __typename?: 'Home';
  description?: Maybe<HomeDescription>;
  days?: Maybe<Array<Maybe<HomeDays>>>;
};

export type HomeDocument = Node & Document & {
  __typename?: 'HomeDocument';
  id: Scalars['ID'];
  sys: SystemInfo;
  data: Home;
  form: Scalars['JSON'];
  values: Scalars['JSON'];
  dataJSON: Scalars['JSON'];
};

export type HomeConnectionEdges = {
  __typename?: 'HomeConnectionEdges';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<HomeDocument>;
};

export type HomeConnection = Connection & {
  __typename?: 'HomeConnection';
  pageInfo?: Maybe<PageInfo>;
  totalCount: Scalars['Int'];
  edges?: Maybe<Array<Maybe<HomeConnectionEdges>>>;
};

export type AboutContent = {
  __typename?: 'AboutContent';
  en?: Maybe<Scalars['String']>;
  fr?: Maybe<Scalars['String']>;
  kor?: Maybe<Scalars['String']>;
};

export type About = {
  __typename?: 'About';
  content?: Maybe<AboutContent>;
};

export type AboutDocument = Node & Document & {
  __typename?: 'AboutDocument';
  id: Scalars['ID'];
  sys: SystemInfo;
  data: About;
  form: Scalars['JSON'];
  values: Scalars['JSON'];
  dataJSON: Scalars['JSON'];
};

export type AboutConnectionEdges = {
  __typename?: 'AboutConnectionEdges';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<AboutDocument>;
};

export type AboutConnection = Connection & {
  __typename?: 'AboutConnection';
  pageInfo?: Maybe<PageInfo>;
  totalCount: Scalars['Int'];
  edges?: Maybe<Array<Maybe<AboutConnectionEdges>>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addPendingDocument: DocumentNode;
  updateDocument: DocumentNode;
  updatePostsDocument: PostsDocument;
  updateArttalksDocument: ArttalksDocument;
  updateHomeDocument: HomeDocument;
  updateAboutDocument: AboutDocument;
};


export type MutationAddPendingDocumentArgs = {
  collection: Scalars['String'];
  relativePath: Scalars['String'];
  template?: Maybe<Scalars['String']>;
};


export type MutationUpdateDocumentArgs = {
  collection: Scalars['String'];
  relativePath: Scalars['String'];
  params: DocumentMutation;
};


export type MutationUpdatePostsDocumentArgs = {
  relativePath: Scalars['String'];
  params: PostsMutation;
};


export type MutationUpdateArttalksDocumentArgs = {
  relativePath: Scalars['String'];
  params: ArttalksMutation;
};


export type MutationUpdateHomeDocumentArgs = {
  relativePath: Scalars['String'];
  params: HomeMutation;
};


export type MutationUpdateAboutDocumentArgs = {
  relativePath: Scalars['String'];
  params: AboutMutation;
};

export type DocumentMutation = {
  posts?: Maybe<PostsMutation>;
  arttalks?: Maybe<ArttalksMutation>;
  home?: Maybe<HomeMutation>;
  about?: Maybe<AboutMutation>;
};

export type PostsMutation = {
  title?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
};

export type ArttalksMainTitleMutation = {
  en?: Maybe<Scalars['String']>;
  fr?: Maybe<Scalars['String']>;
  kor?: Maybe<Scalars['String']>;
};

export type ArttalksDescriptionMutation = {
  en?: Maybe<Scalars['String']>;
  fr?: Maybe<Scalars['String']>;
  kor?: Maybe<Scalars['String']>;
};

export type ArttalksDaysTitleMutation = {
  en?: Maybe<Scalars['String']>;
  fr?: Maybe<Scalars['String']>;
  kor?: Maybe<Scalars['String']>;
};

export type ArttalksDaysSubtitleMutation = {
  en?: Maybe<Scalars['String']>;
  fr?: Maybe<Scalars['String']>;
  kor?: Maybe<Scalars['String']>;
};

export type ArttalksDaysBodyTextTitleMutation = {
  en?: Maybe<Scalars['String']>;
  fr?: Maybe<Scalars['String']>;
  kor?: Maybe<Scalars['String']>;
};

export type ArttalksDaysBodyTextMutation = {
  title?: Maybe<ArttalksDaysBodyTextTitleMutation>;
};

export type ArttalksDaysBodyVideoMutation = {
  vimeoUrl?: Maybe<Scalars['String']>;
};

export type ArttalksDaysBodyImageCaptionMutation = {
  en?: Maybe<Scalars['String']>;
  fr?: Maybe<Scalars['String']>;
  kor?: Maybe<Scalars['String']>;
};

export type ArttalksDaysBodyImageMutation = {
  caption?: Maybe<ArttalksDaysBodyImageCaptionMutation>;
  imageUrl?: Maybe<Scalars['String']>;
};

export type ArttalksDaysBodyMutation = {
  text?: Maybe<ArttalksDaysBodyTextMutation>;
  video?: Maybe<ArttalksDaysBodyVideoMutation>;
  image?: Maybe<ArttalksDaysBodyImageMutation>;
};

export type ArttalksDaysMutation = {
  title?: Maybe<ArttalksDaysTitleMutation>;
  subtitle?: Maybe<ArttalksDaysSubtitleMutation>;
  body?: Maybe<Array<Maybe<ArttalksDaysBodyMutation>>>;
};

export type ArttalksMutation = {
  mainTitle?: Maybe<ArttalksMainTitleMutation>;
  description?: Maybe<ArttalksDescriptionMutation>;
  days?: Maybe<Array<Maybe<ArttalksDaysMutation>>>;
};

export type HomeDescriptionMutation = {
  en?: Maybe<Scalars['String']>;
  fr?: Maybe<Scalars['String']>;
  kor?: Maybe<Scalars['String']>;
};

export type HomeDaysTitleMutation = {
  en?: Maybe<Scalars['String']>;
  fr?: Maybe<Scalars['String']>;
  kor?: Maybe<Scalars['String']>;
};

export type HomeDaysSubtitleMutation = {
  en?: Maybe<Scalars['String']>;
  fr?: Maybe<Scalars['String']>;
  kor?: Maybe<Scalars['String']>;
};

export type HomeDaysMutation = {
  title?: Maybe<HomeDaysTitleMutation>;
  subtitle?: Maybe<HomeDaysSubtitleMutation>;
};

export type HomeMutation = {
  description?: Maybe<HomeDescriptionMutation>;
  days?: Maybe<Array<Maybe<HomeDaysMutation>>>;
};

export type AboutContentMutation = {
  en?: Maybe<Scalars['String']>;
  fr?: Maybe<Scalars['String']>;
  kor?: Maybe<Scalars['String']>;
};

export type AboutMutation = {
  content?: Maybe<AboutContentMutation>;
};

