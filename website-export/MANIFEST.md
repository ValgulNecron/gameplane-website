# website.pen Export Manifest

## Enumeration method + confidence

High confidence the frames list is complete. The bare root-walk visitor bug described in the task was reproduced exactly: `ctx.depth` was systematically off by one relative to true tree depth (`ctx.depth===1` returned grandchildren, e.g. Badge/Outline's internal "dot"/"label" nodes and Landing Page's Hero/Features/Install/Footer sections; `ctx.depth===2` returned great-grandchildren and eventually crashed with the documented "cannot read property of undefined"). Filtering on `ctx.depth===0` instead (with `ctx.skipChildren()` to avoid descending, wrapped in try/catch) ran with NO crash and returned a flat, non-recursive list of exactly the document's true top-level children: 103 total, of which 6 are reusable component frames (Badge/Outline, Docs/Expanded Sidebar, Nav, Footer, Docs Top Bar, Reference Top Bar — all six already present in `get_app_state`'s "Reusable components" list, confirming consistency), 96 are non-reusable Screen/... page frames, and 1 is a non-screen, non-reusable organizational container ("lunaris: design system components", id `H:frame-1761929672442`) that holds all the `H:`-prefixed design-system components as its children rather than being a screen or component itself — it is deliberately excluded from both lists below. This 103 total closely matches `get_app_state`'s stated "10 shown + 92 others = 102" (off by one, likely a boundary/counting quirk in that summary, not a sign of missing data). The reusable-components list is taken directly from `get_app_state`'s "Reusable components" field, which the task states is normally complete in one call and was not observed truncated (no "+N others" marker on that list, and it already includes all 6 top-level component frames found independently via the depth-0 walk, cross-validating both sources). Internal structure of each of the ~96 doc screens was not further verified — only their existence and names/ids as direct document children.

## Verification performed (this pass)

1. **JSON parse check** — every file in `json/*.json` (202 files) was parsed with Python's `json.load`. All 202 parsed successfully; none were truncated or malformed. No re-export via `Get("<ID>",{depth:6})` was needed.
2. **Screenshot coverage check** — `screenshots/` contains exactly 202 PNG files. Every id in the expected 202-id list (allowing for `:` being sanitized to `_`/`-` in filenames) has a matching screenshot, and every screenshot file matches an id in the list — no missing, no extras.
3. **JSON filename coverage check** — same cross-check applied to `json/*.json` filenames against the id list: no missing, no extras.

## IDs that failed export

None. The provided failed-export list was empty (`[]`), and independent verification in this pass found zero broken or missing files among the 202 JSON exports and 202 screenshots.

## Final validated counts

| Category | Count |
|---|---|
| Screen/page frames (non-reusable) | 96 |
| Reusable component frames (Nav, Footer, Docs Top Bar, Reference Top Bar, Badge/Outline, Docs/Expanded Sidebar) | 6 |
| `H:`-prefixed design-system components | 100 |
| **Total components** (6 reusable frames + 100 `H:` components) | **106** |
| **Total objects exported** (96 frames + 106 components) | **202** |
| JSON files present / parse-clean | 202 / 202 |
| Screenshots present / matched to ids | 202 / 202 |
| Excluded (non-screen, non-reusable organizational container) | `H:frame-1761929672442` ("lunaris: design system components") — 1, not counted in either total above |

**Result: export is complete and valid.** 202/202 objects have both a parse-clean JSON file and a matching screenshot; 0 files required repair.
