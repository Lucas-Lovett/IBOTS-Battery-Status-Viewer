import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "IBOTS Battery Status Viewer",
    short_name: "Battery View",
    description: "IBOTS Battery Status Viewer for FRC Competitions",
    start_url: "/",
    display: "standalone",
    background_color: "#191919",
    theme_color: "#97d700",
    icons: [
      {
        src: "/ibots_logo_96.png",
        sizes: "96x96",
        type: "image/png",
      },
    ],
  };
}
