"use client";

import {
  ArrowRight,
  Bell,
  CheckCircle2,
  Clock3,
  LockKeyhole,
  Package,
  Search,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const matches = [
  {
    id: 1,
    item: "Black water bottle",
    location: "Library · 2nd floor",
    date: "Today",
    confidence: "Strong potential match",
    status: "Verification needed",
  },
  {
    id: 2,
    item: "Grey wireless earbuds case",
    location: "Student lounge",
    date: "Yesterday",
    confidence: "Possible match",
    status: "Awaiting evidence",
  },
];

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-[#f7f8f6] text-[#172019]">
      {/* Navigation */}
      <nav className="border-b border-[#e2e6e1] bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="/" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#172019] text-sm font-bold text-white">
              R
            </div>
            <span className="font-semibold tracking-tight">RECLAIM</span>
          </a>

          <div className="hidden items-center gap-7 text-sm text-[#657067] sm:flex">
            <a href="/dashboard" className="font-medium text-[#172019]">
              Dashboard
            </a>
            <a href="/report" className="transition hover:text-[#172019]">
              Report
            </a>
            <a href="/claim" className="transition hover:text-[#172019]">
              Verify ownership
            </a>
          </div>

          <button className="flex h-9 w-9 items-center justify-center rounded-full border border-[#dce1dc] bg-white">
            <Bell className="h-4 w-4 text-[#657067]" />
          </button>
        </div>
      </nav>

      <section className="mx-auto max-w-7xl px-6 py-10">
        {/* Header */}
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#7a847c]">
              Recovery center
            </p>

            <h1 className="mt-2 text-4xl font-semibold tracking-tight sm:text-5xl">
              Find what belongs to you.
            </h1>

            <p className="mt-3 max-w-xl text-sm leading-6 text-[#657067]">
              RECLAIM continuously checks lost and found reports while keeping
              private ownership evidence hidden.
            </p>
          </div>

          <a
            href="/report"
            className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#172019] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#27352b]"
          >
            Report an item
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </a>
        </div>

        {/* Stats */}
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-[#dce1dc] bg-white p-5">
            <div className="flex items-center justify-between">
              <Package className="h-5 w-5 text-[#657067]" />
              <span className="text-xs text-[#89938b]">Your reports</span>
            </div>

            <p className="mt-6 text-3xl font-semibold">3</p>
            <p className="mt-1 text-xs text-[#7a847c]">
              Items currently being tracked
            </p>
          </div>

          <div className="rounded-2xl border border-[#dce1dc] bg-white p-5">
            <div className="flex items-center justify-between">
              <Search className="h-5 w-5 text-[#657067]" />
              <span className="text-xs text-[#89938b]">Potential matches</span>
            </div>

            <p className="mt-6 text-3xl font-semibold">2</p>
            <p className="mt-1 text-xs text-[#7a847c]">
              Waiting for your evidence
            </p>
          </div>

          <div className="rounded-2xl border border-[#dce1dc] bg-white p-5">
            <div className="flex items-center justify-between">
              <ShieldCheck className="h-5 w-5 text-[#657067]" />
              <span className="text-xs text-[#89938b]">Protected</span>
            </div>

            <p className="mt-6 text-3xl font-semibold">100%</p>
            <p className="mt-1 text-xs text-[#7a847c]">
              Finder evidence kept private
            </p>
          </div>
        </div>

        {/* Main grid */}
        <div className="mt-10 grid gap-6 lg:grid-cols-[1.5fr_1fr]">
          {/* Matches */}
          <div className="rounded-[2rem] border border-[#dce1dc] bg-white p-6 sm:p-8">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#89938b]">
                  AI detected
                </p>

                <h2 className="mt-2 text-xl font-semibold">
                  Potential matches
                </h2>
              </div>

              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#eef3ed]">
                <Sparkles className="h-4 w-4" />
              </div>
            </div>

            <div className="mt-6 space-y-3">
              {matches.map((match) => (
                <a
                  href="/claim"
                  key={match.id}
                  className="group block rounded-2xl border border-[#e1e5e0] p-5 transition hover:border-[#aeb8af] hover:bg-[#fafbf9]"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-semibold">{match.item}</p>

                      <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs text-[#7a847c]">
                        <span>{match.location}</span>
                        <span>{match.date}</span>
                      </div>
                    </div>

                    <ArrowRight className="h-4 w-4 shrink-0 text-[#89938b] transition group-hover:translate-x-1" />
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="rounded-full bg-[#eef3ed] px-3 py-1.5 text-[11px] font-medium">
                      {match.confidence}
                    </span>

                    <span className="rounded-full bg-[#f2f3f1] px-3 py-1.5 text-[11px] text-[#657067]">
                      {match.status}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Privacy panel */}
          <div className="rounded-[2rem] bg-[#172019] p-6 text-white sm:p-8">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10">
              <LockKeyhole className="h-5 w-5" />
            </div>

            <p className="mt-8 text-xs font-semibold uppercase tracking-[0.16em] text-[#aeb9b0]">
              Blind verification
            </p>

            <h2 className="mt-3 text-2xl font-semibold leading-tight">
              We don't show you the evidence.
              <br />
              We compare it.
            </h2>

            <p className="mt-4 text-sm leading-6 text-[#b9c3bb]">
              A finder can submit private evidence without exposing it to
              claimants. RECLAIM compares that evidence against what the
              claimant provides.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex gap-3">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />

                <div>
                  <p className="text-sm font-medium">Visual characteristics</p>
                  <p className="mt-1 text-xs text-[#9eaaa1]">
                    Shape, color, brand and appearance
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />

                <div>
                  <p className="text-sm font-medium">Unique details</p>
                  <p className="mt-1 text-xs text-[#9eaaa1]">
                    Scratches, stickers and attachments
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />

                <div>
                  <p className="text-sm font-medium">Context</p>
                  <p className="mt-1 text-xs text-[#9eaaa1]">
                    Time and location consistency
                  </p>
                </div>
              </div>
            </div>

            <a
              href="/claim"
              className="mt-8 flex items-center justify-center gap-2 rounded-xl bg-white py-3.5 text-sm font-medium text-[#172019] transition hover:bg-[#edf0ec]"
            >
              See verification flow
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Recovery timeline */}
        <div className="mt-6 rounded-[2rem] border border-[#dce1dc] bg-white p-6 sm:p-8">
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#eef3ed]">
              <Clock3 className="h-4 w-4" />
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#89938b]">
                Recovery timeline
              </p>

              <h2 className="mt-1 text-xl font-semibold">
                Your latest item
              </h2>
            </div>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-4">
            {[
              ["01", "Lost", "Report submitted"],
              ["02", "Match", "Potential match detected"],
              ["03", "Verify", "Ownership evidence needed"],
              ["04", "Reclaim", "Secure handoff"],
            ].map(([number, title, description], index) => (
              <div key={number} className="relative">
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#172019] text-[10px] font-semibold text-white">
                    {number}
                  </span>

                  <span className="text-sm font-semibold">{title}</span>
                </div>

                <p className="ml-11 mt-2 text-xs leading-5 text-[#7a847c]">
                  {description}
                </p>

                {index < 3 && (
                  <div className="absolute left-8 top-4 hidden h-px w-[calc(100%-1rem)] bg-[#dce1dc] sm:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

