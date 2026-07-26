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
import projectEstimatorThumb from "@/assets/work-project-estimator.webp";

export type GalleryItemType = "website" | "post" | "reel";

export interface GalleryItem {
  id: string;
  type: GalleryItemType;
  title: string;
  client?: string;
  /** One-line description of what was delivered, e.g. "Brand identity + website" */
  description?: string;
  /** Industry / niche label, e.g. "Real Estate · UK" */
  niche?: string;
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
    id: "dravonix-project-estimator",
    type: "website",
    title: "Dravonix Project Estimator",
    client: "Dravonix Media",
    description:
      "AI-powered estimation tool that delivers instant budget ranges across Essential, Recommended, and Advanced tiers.",
    niche: "Web App · AI · SaaS Tool",
    thumb: projectEstimatorThumb,
    link: "https://estimate.dravonix.dev/",
    domain: "estimate.dravonix.dev",
    featured: true,
  },
  {
    id: "wizardfingers",
    type: "website",
    title: "Wizard Fingers",
    client: "Wizard Fingers",
    description: "Brand identity + website",
    niche: "Music & Arts · International",
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
    description: "Website design + build",
    niche: "Interiors & Joinery · UAE",
    thumb: dtsgulfThumb,
    link: "https://dtsgulf.com/",
    domain: "dtsgulf.com",
    featured: true,
  },
  {
    id: "abodoo-properties",
    type: "website",
    title: "Abodoo Properties",
    client: "Abodoo Properties",
    description: "Brand identity + website",
    niche: "Real Estate · UK",
    thumb: abodooThumb,
    link: "https://abodooproperties.co.uk/",
    domain: "abodooproperties.co.uk",
    featured: true,
  },
  {
    id: "decolux-transforming-villas",
    type: "post",
    title: "Transforming Villas Into Statements",
    client: "DECOLUX",
    description: "Social campaign creative",
    niche: "Luxury Interiors · UAE",
    thumb: postDecolux01,
    link: "https://dtsgulf.com/",
    featured: true,
  },
  {
    id: "decolux-designed-to-impress",
    type: "post",
    title: "Designed to Impress. Built to Endure.",
    client: "DECOLUX",
    description: "Social campaign creative",
    niche: "Luxury Interiors · UAE",
    thumb: postDecolux02,
    link: "https://dtsgulf.com/",
    featured: true,
  },
  {
    id: "decolux-spaces-define-status",
    type: "post",
    title: "Spaces That Define Status",
    client: "DECOLUX",
    description: "Social campaign creative",
    niche: "Luxury Interiors · UAE",
    thumb: postDecolux03,
    link: "https://dtsgulf.com/",
  },
  {
    id: "decolux-design-becomes-distinction",
    type: "post",
    title: "Where Design Becomes Distinction",
    client: "DECOLUX",
    description: "Social campaign creative",
    niche: "Luxury Interiors · UAE",
    thumb: postDecolux04,
    link: "https://dtsgulf.com/",
    featured: true,
  },
  {
    id: "decolux-crafted-beyond-surface",
    type: "post",
    title: "Crafted Beyond the Surface",
    client: "DECOLUX",
    description: "Social campaign creative",
    niche: "Luxury Interiors · UAE",
    thumb: postDecolux05,
    link: "https://dtsgulf.com/",
  },
  {
    id: "decolux-new-standard-of-living",
    type: "post",
    title: "A New Standard of Living",
    client: "DECOLUX",
    description: "Social campaign creative",
    niche: "Luxury Interiors · UAE",
    thumb: postDecolux06,
    link: "https://dtsgulf.com/",
  },
  {
    id: "reel-joinery-ad",
    type: "reel",
    title: "AI Joinery Ad",
    client: "AI Joinery Ad",
    description: "AI-assisted short-form reel",
    niche: "Interiors & Joinery · UAE",
    thumb: reelJoineryThumb,
    videoSrc: "/reels/joinery-ad.mp4",
    link: "https://dtsgulf.com/",
    featured: true,
  },
  {
    id: "reel-city-walk-502",
    type: "reel",
    title: "City Walk 502",
    client: "City Walk 502",
    description: "Short-form social reel",
    niche: "Lifestyle · UAE",
    thumb: reelCityWalkThumb,
    videoSrc: "/reels/city-walk-502.mp4",
    link: "https://dtsgulf.com/",
    featured: true,
  },
];
