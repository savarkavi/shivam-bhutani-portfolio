import {
  internalGroqTypeReferenceTo,
  SanityImageCrop,
  SanityImageHotspot,
} from "./types";

export type ResolvedFileAsset = {
  _id: string;
  url?: string;
  originalFilename?: string;
  mimeType?: string;
  size?: number;
};

export type AboutPageData = {
  _id: string;
  pageTitle?: string;
  biography?: {
    biographyContent?: string;
    bioImage?: {
      asset?: {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
      };
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
        asset?: {
          _ref: string;
          _type: "reference";
          _weak?: boolean;
          [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
        };
        media?: unknown;
        hotspot?: SanityImageHotspot;
        crop?: SanityImageCrop;
        _type: "image";
        _key: string;
      }>;
    };
    rightSideImages?: {
      instagramRightSidePhotos?: Array<{
        asset?: {
          _ref: string;
          _type: "reference";
          _weak?: boolean;
          [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
        };
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
