import {
  SanityImageCrop,
  SanityImageDimensions,
  SanityImageHotspot,
  Slug,
} from "./types";

export type ResolvedFileAsset = {
  _id: string;
  url?: string;
  originalFilename?: string;
  mimeType?: string;
  size?: number;
};

export type ResolvedImageAsset = {
  _id: string;
  url?: string;
  metadata?: {
    lqip?: string;
    dimensions?: SanityImageDimensions;
  };
};

export type TotalImagesData = {
  albumsWithCounts: Array<{
    _key: string;
    albumName?: string;
    imageCount?: number;
  }>;
};

export type HomePageData = {
  _id: string;
  _type: "homePage";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  pageTitle?: string;
  heroSection?: {
    heroImage?: {
      asset?: ResolvedImageAsset;
      media?: unknown;
      hotspot?: SanityImageHotspot;
      crop?: SanityImageCrop;
      alt?: string;
      _type: "image";
    };
    heroText?: string;
  };
  featuredSection?: {
    featuredLinks?: Array<{
      name?: string;
      slug?: Slug;
      _type: "link";
      _key: string;
    }>;
    featuredImages?: Array<{
      asset?: ResolvedImageAsset;
      media?: unknown;
      hotspot?: SanityImageHotspot;
      crop?: SanityImageCrop;
      alt?: string;
      _type: "image";
      _key: string;
    }>;
  };
  aboutText?: string;
  footerImage?: {
    asset?: ResolvedImageAsset;
    media?: unknown;
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  };
};

export type AboutPageData = {
  _id: string;
  _type: "aboutPage";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  pageTitle?: string;
  biography?: {
    biographyContent?: string;
    bioImage?: {
      asset?: ResolvedImageAsset;
      media?: unknown;
      hotspot?: SanityImageHotspot;
      crop?: SanityImageCrop;
      alt?: string;
      _type: "image";
    };
  };
  myPhilosophySection?: {
    myPhilosophyContent?: string;
    aboutVideos?: Array<{
      asset?: ResolvedFileAsset;
    }>;
  };
  instagramSection?: {
    leftSideImages?: {
      instagramLeftSidePhotos?: Array<{
        asset?: ResolvedImageAsset;
        media?: unknown;
        hotspot?: SanityImageHotspot;
        crop?: SanityImageCrop;
        _type: "image";
        _key: string;
      }>;
    };
    rightSideImages?: {
      instagramRightSidePhotos?: Array<{
        asset?: ResolvedImageAsset;
        media?: unknown;
        hotspot?: SanityImageHotspot;
        crop?: SanityImageCrop;
        _type: "image";
        _key: string;
      }>;
    };
    instagramLink?: string;
  };
};

export type WorkSectionData = {
  _type: "workSection";
  sectionTitle?: string;
  slug?: Slug;
  description?: string;
  coverImage?: {
    asset?: ResolvedImageAsset;
    media?: unknown;
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: "image";
  };
};

export type WorksPageData = {
  _id: string;
  _type: "worksPage";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  pageTitle?: string;
  workCategories?: Array<
    {
      _key: string;
    } & WorkSectionData
  >;
};

export type GalleryPageData = {
  _id: string;
  _type: "galleryPage";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  pageTitle?: string;
  album?: {
    albumName?: string;
    slug?: Slug;
    images?: Array<{
      asset?: ResolvedImageAsset;
      media?: unknown;
      hotspot?: SanityImageHotspot;
      crop?: SanityImageCrop;
      alt?: string;
      _type: "image";
      _key: string;
    }>;
  };
};
