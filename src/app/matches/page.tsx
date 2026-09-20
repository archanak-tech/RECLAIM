"use client";

import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Clock3,
  LockKeyhole,
  MapPin,
  Sparkles,
} from "lucide-react";

const matches = [
  {
    item: "Black water bottle",
    location: "Library · 2nd floor",
    date: "Today, 11:42 AM",
    score: "Strong match",
    description:
      "Visual characteristics and reported details are consistent.",
  },
  {
    item: "Grey wireless earbuds case",
    location: "Student lounge",
    date: "Yesterday, 4:18 PM",
    score: "Possible match",
    description:
      "Some characteristics match. More ownership evidence is needed.",
  },
];

export default function MatchesPage() {
  return (
    <main className="min-h-screen bg-[#f7f8f6] text-[#172019]">
      <nav className="border-b border-[#e2e6e1] bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <a
            href="/dashboard"
            className="flex items-center gap-2 text-sm text-[#657067] hover:text-[#172019]"
          >
            <ArrowLeft className="h-4 w-4" />
            Dashboard
          </a>

          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#172019] text-xs font-bold text-white">
              R
            </div>
            <span className="font-semibold">RECLAIM</span>
          </div>

          <div className="w-20" />
        </div>
      </nav>

      <section className="mx-auto max-w-4xl px-6 py-12">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#7a847c]">
            Intelligent matching
          </p>

          <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
            Potential matches.
          </h1>

          <p className="mt-4 max-w-2xl text-sm leading-6 text-[#657067]">
            RECLAIM compares object characteristics, descriptions, time and
            location to surface possible matches without exposing private
            finder evidence.
          </p>
        </div>

        <div className="mt-10 space-y-4">
          {matches.map((match, index) => (
            <div
              key={match.item}
              className="rounded-[2rem] border border-[#dce1dc] bg-white p-6 shadow-[0_15px_40px_rgba(23,32,25,0.04)] sm:p-8"
            >
              <div className="flex flex-col justify-between gap-5 sm:flex-row">
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#eef3ed]">
                    <Sparkles className="h-5 w-5" />
                  </div>

                  <div>
                    <p className="text-xs text-[#89938b]">
                      MATCH #{String(index + 1).padStart(2, "0")}
                    </p>

                    <h2 className="mt-1 text-xl font-semibold">
                      {match.item}
                    </h2>

                    <div className="mt-2 flex flex-wrap gap-x-4 gap-y-2 text-xs text-[#7a847c]">
                      <span className="flex items-center gap-1">
                        <MapPin className="h-3.5 w-3.5" />
                        {match.location}
                      </span>

                      <span className="flex items-center gap-1">
                        <Clock3 className="h-3.5 w-3.5" />
                        {match.date}
                      </span>
                    </div>
                  </div>
                </div>

                <span className="h-fit rounded-full bg-[#eef3ed] px-3 py-1.5 text-xs font-medium">
                  {match.score}
                </span>
              </div>

              <div className="mt-6 rounded-2xl bg-[#fafbf9] p-5">
                <div className="flex gap-3">
                  <LockKeyhole className="mt-0.5 h-4 w-4 shrink-0 text-[#657067]" />

                  <div>
                    <p className="text-xs font-semibold">
                      PRIVATE EVIDENCE PROTECTED
                    </p>

                    <p className="mt-1 text-xs leading-5 text-[#7a847c]">
                      {match.description} The finder&apos;s original evidence
                      remains hidden.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href="/claim"
                  className="group flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#172019] py-3.5 text-sm font-medium text-white hover:bg-[#27352b]"
                >
                  Verify ownership
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </a>

                <button className="rounded-xl border border-[#dce1dc] px-6 py-3.5 text-sm font-medium text-[#657067] hover:bg-[#fafbf9]">
                  Not my item
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex items-start gap-3 rounded-2xl border border-[#dce1dc] bg-white p-5">
          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />

          <p className="text-xs leading-5 text-[#657067]">
            <span className="font-semibold text-[#172019]">
              Privacy by design.
            </span>{" "}
            Match results never reveal the finder&apos;s private photo or
            hidden evidence. Only ownership verification can unlock recovery.
          </p>
        </div>
      </section>
    </main>
  );
}

