import { createFileRoute, redirect } from "@tanstack/react-router";

// The WhatsApp product page now lives under the DRAIVA Connect hierarchy.
// Permanent 301 so the existing WhatsApp SEO equity transfers.
export const Route = createFileRoute("/whatsapp-ai")({
  beforeLoad: () => {
    throw redirect({ to: "/draiva/whatsapp-ai", replace: true, statusCode: 301 });
  },
  component: () => null,
});
