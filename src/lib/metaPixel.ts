// Meta Pixel helpers — compatible with Meta Ads & Conversions API standard events.
// The base pixel script is injected in src/routes/__root.tsx.

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

type StandardEvent =
  | "PageView"
  | "ViewContent"
  | "Lead"
  | "Contact"
  | "Schedule"
  | "CompleteRegistration"
  | "Search"
  | "AddToCart"
  | "InitiateCheckout"
  | "Purchase"
  | "Subscribe";

export type PixelEventParams = Record<string, unknown>;

/** Fire any Meta standard event. Safe to call server-side (no-op). */
export function trackEvent(event: StandardEvent, params?: PixelEventParams): void {
  if (typeof window === "undefined" || typeof window.fbq !== "function") return;
  if (params && Object.keys(params).length > 0) {
    window.fbq("track", event, params);
  } else {
    window.fbq("track", event);
  }
}

/** Fire a custom (non-standard) event. */
export function trackCustom(event: string, params?: PixelEventParams): void {
  if (typeof window === "undefined" || typeof window.fbq !== "function") return;
  if (params && Object.keys(params).length > 0) {
    window.fbq("trackCustom", event, params);
  } else {
    window.fbq("trackCustom", event);
  }
}

// -------- Convenience wrappers for common CTAs --------

export const trackPageView = () => trackEvent("PageView");

export const trackViewContent = (params: {
  content_name: string;
  content_category?: string;
  content_ids?: string[];
  value?: number;
  currency?: string;
}) => trackEvent("ViewContent", params);

export const trackLead = (params?: {
  content_name?: string;
  content_category?: string;
  value?: number;
  currency?: string;
}) => trackEvent("Lead", params);

export const trackContact = (
  method: "whatsapp" | "phone" | "email" | "form" | "social" | (string & {}),
  params?: PixelEventParams,
) => trackEvent("Contact", { contact_method: method, ...(params ?? {}) });

export const trackSchedule = (params?: {
  content_name?: string;
  content_category?: string;
}) => trackEvent("Schedule", params);

export const trackCompleteRegistration = (params?: {
  content_name?: string;
  status?: string;
  value?: number;
  currency?: string;
}) => trackEvent("CompleteRegistration", params);
