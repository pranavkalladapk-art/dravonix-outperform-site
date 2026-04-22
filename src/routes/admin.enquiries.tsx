import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

export const Route = createFileRoute("/admin/enquiries")({
  component: AdminEnquiries,
  head: () => ({
    meta: [
      { title: "Enquiries — Dravonix Admin" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
});

interface Enquiry {
  id: string;
  name: string;
  business: string;
  email: string;
  phone: string;
  need: string;
  created_at: string;
}

function AdminEnquiries() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    let active = true;
    (async () => {
      const { data: sessionData } = await supabase.auth.getSession();
      if (!sessionData.session) {
        navigate({ to: "/admin/login" });
        return;
      }

      // @ts-expect-error - table not yet in generated types
      const { data: rows, error } = await supabase
        .from("contact_enquiries")
        .select("id, name, business, email, phone, need, created_at")
        .order("created_at", { ascending: false })
        .limit(100);

      if (!active) return;

      if (error) {
        // Likely an unauthorized non-admin user — RLS blocks the read
        if (error.code === "PGRST301" || error.message.toLowerCase().includes("permission")) {
          toast.error("You don't have admin access.");
        } else {
          toast.error("Couldn't load enquiries.");
          console.error(error);
        }
        setLoading(false);
        return;
      }

      setAuthorized(true);
      setEnquiries((rows ?? []) as Enquiry[]);
      setLoading(false);
    })();
    return () => {
      active = false;
    };
  }, [navigate]);

  const signOut = async () => {
    await supabase.auth.signOut();
    navigate({ to: "/admin/login" });
  };

  return (
    <main className="min-h-screen bg-[var(--navy,#0b1220)] px-4 py-10 text-white sm:px-8">
      <div className="mx-auto max-w-6xl">
        <header className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="font-display text-3xl font-bold tracking-tight">Recent Enquiries</h1>
            <p className="mt-1 text-sm text-white/60">
              Last 100 submissions from the contact form
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Link
              to="/"
              className="rounded-full border border-white/15 px-4 py-2 text-sm text-white/80 hover:bg-white/5"
            >
              View site
            </Link>
            <button
              onClick={signOut}
              className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-[var(--navy,#0b1220)] hover:opacity-90"
            >
              Sign out
            </button>
          </div>
        </header>

        <div className="mt-8 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
          {loading ? (
            <div className="p-10 text-center text-white/60">Loading…</div>
          ) : !authorized ? (
            <div className="p-10 text-center text-white/60">
              You don't have access to view enquiries.
            </div>
          ) : enquiries.length === 0 ? (
            <div className="p-10 text-center text-white/60">No enquiries yet.</div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="border-b border-white/10 text-left text-xs uppercase tracking-widest text-white/50">
                    <th className="px-4 py-3 font-semibold">Name</th>
                    <th className="px-4 py-3 font-semibold">Business</th>
                    <th className="px-4 py-3 font-semibold">Email</th>
                    <th className="px-4 py-3 font-semibold">Phone</th>
                    <th className="px-4 py-3 font-semibold">Need</th>
                    <th className="px-4 py-3 font-semibold">When</th>
                  </tr>
                </thead>
                <tbody>
                  {enquiries.map((e) => (
                    <tr
                      key={e.id}
                      className="border-b border-white/5 last:border-0 hover:bg-white/[0.02]"
                    >
                      <td className="px-4 py-3 font-medium">{e.name}</td>
                      <td className="px-4 py-3 text-white/80">{e.business}</td>
                      <td className="px-4 py-3">
                        <a
                          href={`mailto:${e.email}`}
                          className="text-cyan-300 hover:underline"
                        >
                          {e.email}
                        </a>
                      </td>
                      <td className="px-4 py-3 text-white/80">
                        <a href={`tel:${e.phone}`} className="hover:underline">
                          {e.phone}
                        </a>
                      </td>
                      <td className="px-4 py-3">
                        <span className="rounded-full bg-cyan-400/10 px-2.5 py-1 text-xs font-medium text-cyan-300">
                          {e.need}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-white/60">
                        {new Date(e.created_at).toLocaleString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
