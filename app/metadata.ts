import type { Metadata } from "next";

export const WEBSITE_URL =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:3000"
    : "https://tadikadesajaya.edu.my";

export const tagline =
  "Tadika Desa Jaya is a kindergarten that is situated in Kepong, Malaysia. We nurture young minds with love. Every child's adventure begins at TDJ!";

export const baseMetadata: Metadata = {
  metadataBase: new URL(WEBSITE_URL),
  title: {
    default: "Tadika Desa Jaya",
    template: "%s",
  },
  description: tagline,
  keywords: [
    "elementary school",
    "kindergarten",
    "kindergarten kepong",
    "kindergarten school",
    "kindergarten school kepong",
    "tadika",
    "tadika kepong",
    "kepong",
    "kepong tadika",
    "tadika desa",
    "desa jaya",
    "tadika desa jaya",
    "tadika desa jaya kepong",
    "tdj",
    "tdj kepong",
    "malaysia",
    "kepong malaysia",
  ],
  authors: [
    {
      name: "Jun Hong",
      url: "https://github.com/kleeJH",
    },
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Tadika Desa Jaya",
    description: tagline,
    siteName: "Tadika Desa Jaya",
    images: [
      {
        url: "/assets/images/tdj/tdj_front-gate.jpg",
        width: 1920,
        height: 1080,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    title: "Tadika Desa Jaya",
    card: "summary_large_image",
    images: [
      {
        url: "/assets/images/tdj/tdj_front-gate.jpg",
        width: 1920,
        height: 1080,
      },
    ],
  },
};

interface MetaParamsForPath {
  title: string;
  description: string;
}

/** Helper to build opengraph metadata for a user, you should call this in generateMetadata() next function */
export const buildMetaForUser = async ({
  title,
  description,
}: MetaParamsForPath): Promise<Metadata> => {
  const ogImageUrl = `${WEBSITE_URL}/api/user`;

  return buildMeta({
    ogImageUrl,
    title,
    description,
  });
};

const buildMeta = async ({
  ogImageUrl,
  description,
  title,
}: {
  ogImageUrl: string;
  description?: string;
  title?: string;
}): Promise<Metadata> => {
  baseMetadata.openGraph!.images = ogImageUrl;
  baseMetadata.twitter!.images = ogImageUrl;

  if (description) {
    baseMetadata.description = description;
    baseMetadata.twitter!.description = description;
    baseMetadata.openGraph!.description = description;
  }

  if (title) {
    baseMetadata.title = title;
    baseMetadata.twitter!.title = title;
    baseMetadata.openGraph!.title = title;
  }

  return baseMetadata;
};

export default baseMetadata;
