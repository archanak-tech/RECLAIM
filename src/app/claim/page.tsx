"use client";

import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  FileText,
  ImagePlus,
  LockKeyhole,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

export default function ClaimPage() {
  const [method, setMethod] = useState<"photo" | "details">("photo");
  const [submitted, setSubmitted] = useState(false);

  return (
    <main className="min-h-screen bg-[#f7f8f6] text-[#172019]">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <a
          href="/"
          className="flex items-center gap-2 text-sm text-[#657067] hover:text-[#172019]"
        >
          <ArrowLeft className="h-4 w-4" />
          Back
        </a>

        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#172019] text-xs font-bold text-white">
            R
          </div>
          <span className="font-semibold tracking-tight">RECLAIM</span>
        </div>

        <div className="w-16" />
      </nav>

      <section className="mx-auto max-w-3xl px-6 pb-20 pt-10">
        <div className="text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#e8eee8]">
            <ShieldCheck className="h-5 w-5" />
          </div>

          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-[#7a847c]">
            Ownership verification
          </p>

          <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
            Prove it’s yours.
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-[#657067]">
            The finder’s evidence stays completely private. Give RECLAIM
            evidence that only the rightful owner would reasonably have.
          </p>
        </div>

        <div className="mt-10 rounded-[2rem] border border-[#dce1dc] bg-white p-5 shadow-[0_20px_60px_rgba(23,32,25,0.06)] sm:p-8">
          {/* Private evidence notice */}
          <div className="flex gap-4 rounded-2xl bg-[#172019] p-5 text-white">
            <LockKeyhole className="mt-0.5 h-5 w-5 shrink-0 text-[#c8d2ca]" />

            <div>
              <p className="text-sm font-semibold">
                The finder’s photo is hidden from you.
              </p>

              <p className="mt-1 text-xs leading-5 text-[#b8c2ba]">
                This prevents someone from simply looking at the found item
                and claiming it. Your evidence is compared privately against
                the finder’s evidence.
              </p>
            </div>
          </div>

          {/* Item */}
          <div className="mt-8 rounded-2xl border border-[#e0e4df] bg-[#fafbf9] p-5">
            <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#89938b]">
              Potential match
            </p>

            <div className="mt-3 flex items-center justify-between gap-4">
              <div>
                <h2 className="font-semibold">Black water bottle</h2>
                <p className="mt-1 text-xs text-[#7a847c]">
                  Found near the library · Sept 20, 2026
                </p>
              </div>

              <div className="hidden rounded-full bg-[#e8eee8] px-3 py-1.5 text-xs font-medium sm:block">
                Potential match
              </div>
            </div>
          </div>

          {/* Method */}
          <div className="mt-8">
            <p className="text-sm font-medium">How would you like to prove it?</p>

            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              <button
                onClick={() => setMethod("photo")}
                className={`rounded-2xl border p-5 text-left transition ${
                  method === "photo"
                    ? "border-[#172019] bg-[#f1f3ef]"
                    : "border-[#dce1dc] bg-white hover:border-[#aeb8af]"
                }`}
              >
                <ImagePlus className="h-5 w-5" />

                <p className="mt-4 text-sm font-semibold">
                  I have a photo
                </p>

                <p className="mt-1 text-xs leading-5 text-[#7a847c]">
                  Upload an old photo showing your item.
                </p>
              </button>

              <button
                onClick={() => setMethod("details")}
                className={`rounded-2xl border p-5 text-left transition ${
                  method === "details"
                    ? "border-[#172019] bg-[#f1f3ef]"
                    : "border-[#dce1dc] bg-white hover:border-[#aeb8af]"
                }`}
              >
                <FileText className="h-5 w-5" />

                <p className="mt-4 text-sm font-semibold">
                  I don’t have a photo
                </p>

                <p className="mt-1 text-xs leading-5 text-[#7a847c]">
                  Describe details only the owner would know.
                </p>
              </button>
            </div>
          </div>

          {/* Evidence */}
          {method === "photo" ? (
            <div className="mt-6">
              <label className="text-sm font-medium">
                Upload your photo
              </label>

              <div className="mt-2 cursor-pointer rounded-2xl border border-dashed border-[#cbd3cc] bg-[#fafbf9] p-10 text-center hover:border-[#172019]">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-white">
                  <ImagePlus className="h-5 w-5 text-[#657067]" />
                </div>

                <p className="mt-4 text-sm font-medium">
                  Upload a photo of your item
                </p>

                <p className="mt-1 text-xs text-[#7a847c]">
                  An old gallery photo works too.
                </p>
              </div>
            </div>
          ) : (
            <div className="mt-6">
              <label className="text-sm font-medium">
                Describe your item
              </label>

              <textarea
                rows={6}
                placeholder="Tell us details such as color, brand, stickers, scratches, dents, attachments, where you bought it, or anything distinctive..."
                className="mt-2 w-full resize-none rounded-2xl border border-[#dce1dc] bg-[#fafbf9] px-4 py-4 text-sm outline-none placeholder:text-[#a0a8a1] focus:border-[#172019]"
              />
            </div>
          )}

          {/* What gets checked */}
          <div className="mt-8">
            <p className="text-sm font-medium">
              RECLAIM will privately compare
            </p>

            <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {[
                ["Visual", "Shape & color"],
                ["Details", "Unique marks"],
                ["Context", "Time & place"],
                ["Object", "Characteristics"],
              ].map(([title, description]) => (
                <div
                  key={title}
                  className="rounded-xl border border-[#e0e4df] bg-white p-4"
                >
                  <p className="text-xs font-semibold">{title}</p>
                  <p className="mt-1 text-[11px] leading-4 text-[#7a847c]">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {!submitted ? (
            <button
              onClick={() => setSubmitted(true)}
              className="group mt-8 flex w-full items-center justify-center gap-3 rounded-xl bg-[#172019] py-4 text-sm font-medium text-white transition hover:bg-[#27352b]"
            >
              Submit ownership evidence
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </button>
          ) : (
            <div className="mt-8 rounded-2xl border border-[#cbdacb] bg-[#eef5ed] p-6">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0" />

                <div>
                  <div className="flex items-center gap-2">
                    <Sparkles className="h-4 w-4" />
                    <p className="font-semibold">Evidence received</p>
                  </div>

                  <p className="mt-2 text-sm leading-6 text-[#5e6b61]">
                    RECLAIM is comparing your evidence against the private
                    finder evidence. No hidden evidence has been revealed.
                  </p>

                  <div className="mt-4 flex items-center gap-2 text-xs font-medium">
                    <span className="h-2 w-2 animate-pulse rounded-full bg-[#526156]" />
                    Verification in progress
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}