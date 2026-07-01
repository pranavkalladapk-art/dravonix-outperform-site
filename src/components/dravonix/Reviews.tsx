import { useEffect, useState } from "react";
import { Star, CheckCircle2 } from "lucide-react";
import { z } from "zod";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

type Review = {
  id: string;
  name: string;
  business: string;
  rating: number;
  message: string;
};




const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  business: z.string().trim().min(1, "Business or role is required").max(120),
  rating: z.number().int().min(1, "Please select a rating").max(5),
  message: z.string().trim().min(10, "Please write at least 10 characters").max(1000),
});

function Stars({
  value,
  size = "sm",
  onChange,
}: {
  value: number;
  size?: "sm" | "lg";
  onChange?: (n: number) => void;
}) {
  const interactive = !!onChange;
  const [hover, setHover] = useState(0);
  const dim = size === "lg" ? "h-8 w-8" : "h-4 w-4";
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((n) => {
        const active = (hover || value) >= n;
        return (
          <button
            key={n}
            type={interactive ? "button" : "button"}
            disabled={!interactive}
            onClick={() => onChange?.(n)}
            onMouseEnter={() => interactive && setHover(n)}
            onMouseLeave={() => interactive && setHover(0)}
            aria-label={`${n} star${n > 1 ? "s" : ""}`}
            className={cn(
              interactive && "transition-transform hover:scale-110",
              !interactive && "pointer-events-none",
            )}
          >
            <Star
              className={cn(
                dim,
                active ? "fill-[var(--cyan-accent)] text-[var(--cyan-accent)]" : "text-white/25",
              )}
            />
          </button>
        );
      })}
    </div>
  );
}

export function Reviews() {
  const [reviews, setReviews] = useState<Review[]>(PLACEHOLDER_REVIEWS);
  const [rating, setRating] = useState(0);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    (async () => {
      const { data, error } = await supabase
        .from("reviews")
        .select("id,name,business,rating,message")
        .eq("approved", true)
        .order("created_at", { ascending: false })
        .limit(9);
      if (!error && data && data.length > 0) {
        setReviews(data as Review[]);
      }
    })();
  }, []);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const parsed = schema.safeParse({
      name: fd.get("name"),
      business: fd.get("business"),
      rating,
      message: fd.get("message"),
    });
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please check your details");
      return;
    }
    setSubmitting(true);
    try {
      const { error } = await supabase.from("reviews").insert({
        name: parsed.data.name,
        business: parsed.data.business,
        rating: parsed.data.rating,
        message: parsed.data.message,
        approved: false,
      });
      if (error) throw error;
      setSubmitted(true);
      form.reset();
      setRating(0);
    } catch (err) {
      console.error("Review submit failed:", err);
      toast.error("Couldn't submit right now. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="reviews" className="bg-[var(--navy)] py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--cyan-accent)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--cyan-accent)]" />
            Client Reviews
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
            What Our Clients Say
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-5 md:mt-14 md:grid-cols-3 md:gap-6">
          {reviews.map((r, i) => (
            <Reveal key={r.id} delay={i * 80}>
              <figure className="flex h-full flex-col rounded-xl border border-white/10 border-l-2 border-l-[var(--blue-brand)] bg-[var(--card-dark)] p-6 transition-colors hover:border-[var(--cyan-accent)]/50 hover:border-l-[var(--blue-brand)]">
                <Stars value={r.rating} />
                <blockquote className="mt-4 flex-1 text-base leading-relaxed text-white/85">
                  "{r.message}"
                </blockquote>
                <figcaption className="mt-6 border-t border-white/10 pt-4">
                  <div className="font-display text-sm font-bold text-white">{r.name}</div>
                  <div className="text-xs text-[var(--muted-text)]">{r.business}</div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        {/* Submit form */}
        <div className="mt-16 md:mt-20">
          <Reveal className="mx-auto max-w-2xl">
            <div className="rounded-2xl border border-white/10 bg-[var(--card-dark)] p-6 sm:p-8 md:p-10">
              {submitted ? (
                <div className="flex flex-col items-center text-center">
                  <CheckCircle2 className="h-12 w-12 text-emerald-400" strokeWidth={2} />
                  <p className="mt-4 text-lg font-semibold text-white sm:text-xl">
                    Thank you! Your review is awaiting approval.
                  </p>
                  <div className="my-6 h-px w-full bg-white/10" />
                  <p className="text-sm text-white/75 sm:text-base">
                    Enjoying working with us? A Google review would mean the world to us 🙌
                  </p>
                  <a
                    href="https://g.page/r/CcNWk2tuYx9zEBM/review"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center justify-center rounded-full bg-[#2563EB] px-7 py-3.5 text-base font-semibold text-white shadow-lg transition-transform hover:-translate-y-0.5 hover:bg-[#1d4fd8]"
                  >
                    Leave us a Google Review ⭐
                  </a>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-5 text-xs text-white/60 underline underline-offset-4 hover:text-white"
                  >
                    Submit another review
                  </button>
                </div>
              ) : (
                <>
                  <div className="text-center">
                    <h3 className="font-display text-2xl font-bold text-white sm:text-3xl">
                      Share Your Experience
                    </h3>
                    <p className="mt-2 text-sm text-[var(--muted-text)]">
                      Worked with us? We'd love to hear it.
                    </p>
                  </div>
                  <form onSubmit={onSubmit} className="mt-6 grid gap-4">
                    <div>
                      <label htmlFor="r-name" className="text-xs font-semibold uppercase tracking-widest text-white/60">
                        Name
                      </label>
                      <input
                        id="r-name"
                        name="name"
                        required
                        maxLength={100}
                        className="mt-2 w-full rounded-md border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-white/30 focus:border-[var(--cyan-accent)] focus:outline-none"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="r-business" className="text-xs font-semibold uppercase tracking-widest text-white/60">
                        Business / Role
                      </label>
                      <input
                        id="r-business"
                        name="business"
                        required
                        maxLength={120}
                        className="mt-2 w-full rounded-md border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-white/30 focus:border-[var(--cyan-accent)] focus:outline-none"
                        placeholder="Founder, Acme Co."
                      />
                    </div>
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-widest text-white/60">
                        Rating
                      </span>
                      <div className="mt-2">
                        <Stars value={rating} size="lg" onChange={setRating} />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="r-message" className="text-xs font-semibold uppercase tracking-widest text-white/60">
                        Review
                      </label>
                      <textarea
                        id="r-message"
                        name="message"
                        required
                        maxLength={1000}
                        rows={5}
                        className="mt-2 w-full rounded-md border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-white/30 focus:border-[var(--cyan-accent)] focus:outline-none"
                        placeholder="Tell us about your experience..."
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={submitting}
                      className="mt-2 inline-flex items-center justify-center rounded-full bg-[#2563EB] px-8 py-4 text-base font-semibold text-white shadow-xl transition-transform hover:-translate-y-0.5 hover:bg-[#1d4fd8] disabled:opacity-60"
                    >
                      {submitting ? "Submitting..." : "Submit Review"}
                    </button>
                  </form>
                </>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
