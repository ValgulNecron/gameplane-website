import { BASE } from "../config";

/**
 * Prefix an internal path with the deploy base. Astro does not rewrite plain
 * <a href> values, so every internal link must go through this helper —
 * root-relative hrefs break on GitHub Pages project sites.
 *
 * Pass root-relative paths with a trailing slash ("/docs/getting-started/");
 * the base is joined without doubling slashes.
 */
export function withBase(path: string): string {
  const base = BASE.endsWith("/") ? BASE.slice(0, -1) : BASE;
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}
