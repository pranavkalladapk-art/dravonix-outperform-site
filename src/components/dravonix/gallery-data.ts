import wizardfingersThumb from "@/assets/work-wizardfingers.jpg";
import dtsgulfThumb from "@/assets/work-dtsgulf.jpg";

export type GalleryItemType = "website" | "post" | "reel";

export interface GalleryItem {
  id: string;
  type: GalleryItemType;
  title: string;
  client?: string;
  /** Image URL — screenshot for websites, post image, reel cover */
  thumb: string;
  /** Live website URL, social post URL, or reel URL — opens in new tab */
  link: string;
  /** Optional inline-preview video for reels (mp4/webm), muted+looped on hover */
  videoSrc?: string;
  /** Optional small label shown on website cards */
  domain?: string;
  /** Surface this item in the homepage Selected Work section */
  featured?: boolean;
}

export const galleryItems: GalleryItem[] = [
  {
    id: "wizardfingers",
    type: "website",
    title: "Wizard Fingers",
    client: "Wizard Fingers",
    thumb: wizardfingersThumb,
    link: "https://wizardfingers.com/",
    domain: "wizardfingers.com",
    featured: true,
  },
  {
    id: "dtsgulf",
    type: "website",
    title: "DTS Gulf",
    client: "DTS Gulf",
    thumb: dtsgulfThumb,
    link: "https://dtsgulf.com/",
    domain: "dtsgulf.com",
    featured: true,
  },
];
