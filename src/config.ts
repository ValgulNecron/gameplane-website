// Deployment origin + base path for the site.
//
// The site currently deploys to GitHub Pages as a project page, which serves
// it under /gameplane-website. When a custom domain exists, set CUSTOM_DOMAIN
// (e.g. "https://gameplane.dev") — that is the only line that changes; also
// add a public/CNAME file and flip the Pages settings.
const CUSTOM_DOMAIN: string | undefined = undefined;

export const SITE = CUSTOM_DOMAIN ?? "https://valgulnecron.github.io";
export const BASE = CUSTOM_DOMAIN ? "/" : "/gameplane-website";

export const GITHUB_URL = "https://github.com/ValgulNecron/Gameplane";
export const VERSION = "v0.2.0-beta.4";
