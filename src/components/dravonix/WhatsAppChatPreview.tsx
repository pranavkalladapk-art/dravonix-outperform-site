import type { ReactNode } from "react";
import { Mic, ShieldCheck } from "lucide-react";
import { DraivaBrand } from "./DraivaBrand";

type Msg = { from: "customer" | "ai"; text: string; voice?: boolean };

/**
 * Original, Dravonix-styled conversation preview.
 * Intentionally NOT a replica of the WhatsApp interface — it uses the site's
 * own card, radius, border and accent language with green only as an accent.
 */
export function WhatsAppChatPreview({
  messages,
  status,
  draivaHeader,
  handover,
  className,
}: {
  messages: Msg[];
  status?: ReactNode;
  /** Use the DRAIVA product identity in the header instead of the generic label. */
  draivaHeader?: boolean;
  handover?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`rounded-2xl border border-white/10 bg-[#0E1626] p-4 shadow-2xl sm:p-5 ${className ?? ""}`}
    >
      <div className="flex items-center gap-3 border-b border-white/10 pb-3">
        <span className="grid h-9 w-9 place-items-center rounded-full bg-[var(--blue-brand)] text-sm font-bold text-white">
          D
        </span>
        <div className="min-w-0">
          {draivaHeader ? (
            <p className="text-sm font-semibold leading-tight">
              <span className="block font-bold tracking-[0.14em] text-[var(--cyan-accent)]">
                DRAIVA
              </span>
              <span className="block text-[11px] font-medium leading-snug text-white/85">
                AI Conversation Assistant by{" "}
                <span className="font-bold text-[var(--cyan-accent)]">Dravonix</span>
              </span>
            </p>
          ) : (
            <p className="truncate text-sm font-semibold text-white">AI Assistant</p>
          )}
          <p className="flex items-center gap-1.5 text-[11px] text-[var(--muted-text)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#25D366]" />
            Assistant active
          </p>
        </div>
      </div>

      <div className="mt-4 space-y-3">
        {messages.map((m, i) => (
          <div
            key={i}
            className={`flex ${m.from === "customer" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                m.from === "customer"
                  ? "rounded-br-sm bg-[#25D366]/12 text-white ring-1 ring-[#25D366]/25"
                  : "rounded-bl-sm bg-white/[0.06] text-white/90 ring-1 ring-white/10"
              }`}
            >
              {m.voice && (
                <span className="mb-1.5 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#25D366]">
                  <Mic className="h-3.5 w-3.5" aria-hidden />
                  Voice note
                </span>
              )}
              {m.text}
            </div>
          </div>
        ))}
      </div>

      {status && (
        <p className="mt-4 border-t border-white/10 pt-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--cyan-accent)] [overflow-wrap:anywhere]">
          {status}
        </p>
      )}

      {handover && (
        <div className="mt-3 flex items-start gap-2 rounded-xl border border-white/10 bg-white/[0.03] p-3">
          <ShieldCheck className="mt-0.5 h-4 w-4 flex-shrink-0 text-[var(--cyan-accent)]" aria-hidden />
          <p className="text-xs leading-relaxed text-[var(--muted-text)]">
            <span className="font-semibold text-white">Human assistance requested.</span> AI remains
            active until paused by your team.
          </p>
        </div>
      )}
    </div>
  );
}
