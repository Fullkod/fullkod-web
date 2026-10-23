import { readFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

// Helpers for the generated share images (opengraph-image routes). They read files from /public
// and return data URIs, because the image renderer cannot fetch relative URLs.

export const OG_SIZE = { width: 1200, height: 630 };

export async function brandLogoDataUri() {
  const svg = await readFile(path.join(process.cwd(), "public/brand/fullkod-horizontal-reversed.svg"));
  return `data:image/svg+xml;base64,${svg.toString("base64")}`;
}

// A /public image resized to `width` and re-encoded as JPEG, so share images stay light.
export async function publicImageDataUri(publicPath: string, width: number) {
  const file = path.join(process.cwd(), "public", publicPath);
  const buffer = await sharp(file).resize({ width }).jpeg({ quality: 82 }).toBuffer();
  return `data:image/jpeg;base64,${buffer.toString("base64")}`;
}
