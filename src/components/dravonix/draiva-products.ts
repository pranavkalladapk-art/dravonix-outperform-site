import {
  MessageCircle,
  AppWindow,
  Mail,
  Share2,
  AudioLines,
  type LucideIcon,
} from "lucide-react";

export type DraivaStatus = "NOW ONBOARDING" | "COMING SOON";

export type DraivaProduct = {
  key: "whatsapp" | "web-chat" | "mail" | "social" | "voice";
  icon: LucideIcon;
  /** Full product name, e.g. "DRAIVA WhatsApp" */
  name: string;
  /** Word after "DRAIVA" */
  suffix: string;
  /** Short nav label */
  navLabel: string;
  status: DraivaStatus;
  path: string;
  desc: string;
  cta: string;
};

export const DRAIVA_PRODUCTS: DraivaProduct[] = [
  {
    key: "whatsapp",
    icon: MessageCircle,
    name: "DRAIVA WhatsApp",
    suffix: "WhatsApp",
    navLabel: "WhatsApp",
    status: "NOW ONBOARDING",
    path: "/draiva/whatsapp-ai",
    desc: "AI-powered WhatsApp customer conversations with intelligent replies, multilingual communication, lead capture, conversation management and seamless human handover.",
    cta: "Explore WhatsApp AI",
  },
  {
    key: "web-chat",
    icon: AppWindow,
    name: "DRAIVA Web Chat",
    suffix: "Web Chat",
    navLabel: "Web Chat",
    status: "COMING SOON",
    path: "/draiva/web-chat",
    desc: "Bring DRAIVA directly into your website and turn visitors into intelligent customer conversations, enquiries and qualified leads.",
    cta: "Discover Web Chat",
  },
  {
    key: "mail",
    icon: Mail,
    name: "DRAIVA Mail",
    suffix: "Mail",
    navLabel: "Mail",
    status: "COMING SOON",
    path: "/draiva/mail",
    desc: "An intelligent email communication layer designed to help businesses understand customer enquiries, organize conversations and prepare context-aware responses.",
    cta: "Discover DRAIVA Mail",
  },
  {
    key: "social",
    icon: Share2,
    name: "DRAIVA Social",
    suffix: "Social",
    navLabel: "Social",
    status: "COMING SOON",
    path: "/draiva/social",
    desc: "A future AI communication layer designed for customer conversations across supported social messaging channels.",
    cta: "Discover DRAIVA Social",
  },
  {
    key: "voice",
    icon: AudioLines,
    name: "DRAIVA Voice",
    suffix: "Voice",
    navLabel: "Voice",
    status: "COMING SOON",
    path: "/draiva/voice",
    desc: "A conversational voice intelligence layer designed for future customer enquiries, lead handling and AI-powered business voice interactions.",
    cta: "Discover DRAIVA Voice",
  },
];

export const DRAIVA_PATHS = ["/draiva", ...DRAIVA_PRODUCTS.map((p) => p.path)];
