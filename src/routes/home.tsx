import { createFileRoute, redirect } from "@tanstack/react-router";

// /home duplicated the homepage — permanently consolidate on "/" for SEO.
export const Route = createFileRoute("/home")({
  beforeLoad: ({ location }) => {
    throw redirect({ to: "/", hash: location.hash, replace: true, statusCode: 301 });
  },
  component: () => null,
});
