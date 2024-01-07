import { MetadataRoute } from "next";
import { tagline } from "./metadata";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Tadika Desa Jaya",
    short_name: "TDJ",
    description: tagline,
    start_url: "/",
    icons: [
      {
        src: "/assets/images/logos/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/assets/images/logos/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    theme_color: "#ffffff",
    background_color: "#ffffff",
    display: "standalone",
  };
}
