import wizardfingersThumb from "@/assets/work-wizardfingers.webp";
import dtsgulfThumb from "@/assets/work-dtsgulf.webp";
import postDecolux01 from "@/assets/post-decolux-01.webp";
import postDecolux02 from "@/assets/post-decolux-02.webp";
import postDecolux03 from "@/assets/post-decolux-03.webp";
import postDecolux04 from "@/assets/post-decolux-04.webp";
import postDecolux05 from "@/assets/post-decolux-05.webp";
import postDecolux06 from "@/assets/post-decolux-06.webp";
import reelJoineryThumb from "@/assets/reel-joinery.jpg";
import reelCityWalkThumb from "@/assets/reel-city-walk-502.jpg";
import abodooThumb from "@/assets/work-abodoo.webp";

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
  {
    id: "decolux-transforming-villas",
    type: "post",
    title: "Transforming Villas Into Statements",
    client: "DECOLUX",
    thumb: postDecolux01,
    link: "https://dtsgulf.com/",
    featured: true,
  },
  {
    id: "decolux-designed-to-impress",
    type: "post",
    title: "Designed to Impress. Built to Endure.",
    client: "DECOLUX",
    thumb: postDecolux02,
    link: "https://dtsgulf.com/",
    featured: true,
  },
  {
    id: "decolux-spaces-define-status",
    type: "post",
    title: "Spaces That Define Status",
    client: "DECOLUX",
    thumb: postDecolux03,
    link: "https://dtsgulf.com/",
  },
  {
    id: "decolux-design-becomes-distinction",
    type: "post",
    title: "Where Design Becomes Distinction",
    client: "DECOLUX",
    thumb: postDecolux04,
    link: "https://dtsgulf.com/",
    featured: true,
  },
  {
    id: "decolux-crafted-beyond-surface",
    type: "post",
    title: "Crafted Beyond the Surface",
    client: "DECOLUX",
    thumb: postDecolux05,
    link: "https://dtsgulf.com/",
  },
  {
    id: "decolux-new-standard-of-living",
    type: "post",
    title: "A New Standard of Living",
    client: "DECOLUX",
    thumb: postDecolux06,
    link: "https://dtsgulf.com/",
  },
  {
    id: "reel-joinery-ad",
    type: "reel",
    title: "AI Joinery Ad Reel",
    client: "AI Joinery Ad",
    thumb: reelJoineryThumb,
    videoSrc: "/reels/joinery-ad.mp4",
    link: "https://dtsgulf.com/",
    featured: true,
  },
  {
    id: "reel-city-walk-502",
    type: "reel",
    title: "Normal reel",
    client: "Normal reel",
    thumb: reelCityWalkThumb,
    videoSrc: "/reels/city-walk-502.mp4",
    link: "https://dtsgulf.com/",
    featured: true,
  },
];
