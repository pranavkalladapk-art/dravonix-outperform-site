import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

export const Route = createFileRoute("/admin/login")({
  component: AdminLogin,
  head: () => ({
    meta: [
      { title: "Admin Login — Dravonix" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
});

function AdminLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      if (data.session) navigate({ to: "/admin/enquiries" });
    });
  }, [navigate]);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setSubmitting(false);
    if (error) {
      toast.error(error.message);
      return;
    }
    toast.success("Signed in");
    navigate({ to: "/admin/enquiries" });
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-[var(--navy,#0b1220)] px-4 py-16">
      <form
        onSubmit={onSubmit}
        className="w-full max-w-md rounded-2xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur"
      >
        <h1 className="font-display text-2xl font-bold text-white">Admin Sign In</h1>
        <p className="mt-1 text-sm text-white/60">Access enquiries dashboard</p>

        <label className="mt-6 block text-xs font-semibold uppercase tracking-widest text-white/60">
          Email
        </label>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-2 w-full rounded-md border border-white/15 bg-white/5 px-4 py-3 text-white focus:border-cyan-400 focus:outline-none"
        />

        <label className="mt-4 block text-xs font-semibold uppercase tracking-widest text-white/60">
          Password
        </label>
        <input
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mt-2 w-full rounded-md border border-white/15 bg-white/5 px-4 py-3 text-white focus:border-cyan-400 focus:outline-none"
        />

        <button
          type="submit"
          disabled={submitting}
          className="mt-6 w-full rounded-full bg-white px-6 py-3 font-semibold text-[var(--navy,#0b1220)] transition-transform hover:-translate-y-0.5 disabled:opacity-60"
        >
          {submitting ? "Signing in…" : "Sign In"}
        </button>

        <p className="mt-6 text-center text-xs text-white/40">
          <Link to="/" className="hover:text-white/70">← Back to site</Link>
        </p>
      </form>
    </main>
  );
}
