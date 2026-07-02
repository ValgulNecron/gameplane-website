import { getCollection, type CollectionEntry } from "astro:content";
import { withBase } from "./url";

export type DocEntry = CollectionEntry<"docs">;

/** Sidebar groups in display order — single source for sidebar AND prev/next. */
export const SECTIONS: { id: DocEntry["data"]["section"]; label: string }[] = [
  { id: "start-here", label: "START HERE" },
  { id: "core-concepts", label: "CORE CONCEPTS" },
  { id: "extending", label: "EXTENDING" },
  { id: "development", label: "DEVELOPMENT" },
  { id: "reference", label: "REFERENCE" },
  { id: "community", label: "COMMUNITY" },
];

const sectionIndex = new Map(SECTIONS.map((section, index) => [section.id, index]));

export async function getOrderedDocs(): Promise<DocEntry[]> {
  const docs = await getCollection("docs");
  return docs.sort(
    (a, b) =>
      (sectionIndex.get(a.data.section) ?? 0) - (sectionIndex.get(b.data.section) ?? 0) ||
      a.data.order - b.data.order,
  );
}

export function docHref(doc: DocEntry): string {
  return withBase(`/docs/${doc.id}/`);
}

export function sidebarLabel(doc: DocEntry): string {
  return doc.data.sidebarLabel ?? doc.data.title;
}
