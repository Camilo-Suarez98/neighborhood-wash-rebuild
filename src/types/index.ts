/**
 * Cross-feature shared types. Feature-specific shapes live inside the
 * feature's own `types.ts`; only types referenced by more than one slice
 * belong here.
 */

/** A navigable service entry, used by services + footer + nav menus. */
export interface ServiceLink {
  label: string;
  href: string;
}

/** A local image asset with the metadata `next/image` needs + accessible alt. */
export interface ImageAsset {
  src: string;
  width: number;
  height: number;
  /** Location-accurate, descriptive alt text (Roanoke, VA — never generic). */
  alt: string;
}
