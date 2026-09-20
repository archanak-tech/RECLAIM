"use client";

import { useRef, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Camera,
  Check,
  Clock3,
  MapPin,
  ShieldCheck,
  Upload,
} from "lucide-react";

export default function ReportPage() {
  const [type, setType] = useState<"lost" | "found">(
    typeof window !== "undefined" &&
      new URLSearchParams(window.location.search).get("type") === "found"
      ? "found"
      : "lost"
  );

  const fileInputRef = useRef<HTMLInputElement>(null);

  return (
    <main className="min-h-screen bg-[#f7f8f6] text-[#172019]">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <a
          href="/"
          className="flex items-center gap-2 text-sm text-[#657067] transition hover:text-[#172019]"
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
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#7a847c]">
            Start a recovery
          </p>

          <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
            Tell us what happened.
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-[#657067]">
            The more you tell RECLAIM, the better it can identify the right
            item and connect it to its owner.
          </p>
        </div>

        <div className="mt-10 rounded-[2rem] border border-[#dce1dc] bg-white p-5 shadow-[0_20px_60px_rgba(23,32,25,0.06)] sm:p-8">
          <div className="grid grid-cols-2 rounded-2xl bg-[#f1f3ef] p-1.5">
            <button
              onClick={() => setType("lost")}
              className={`rounded-xl py-3 text-sm font-medium transition ${
                type === "lost"
                  ? "bg-white text-[#172019] shadow-sm"
                  : "text-[#7a847c]"
              }`}
            >
              I lost something
            </button>

            <button
              onClick={() => setType("found")}
              className={`rounded-xl py-3 text-sm font-medium transition ${
                type === "found"
                  ? "bg-white text-[#172019] shadow-sm"
                  : "text-[#7a847c]"
              }`}
            >
              I found something
            </button>
          </div>

          <div className="mt-8">
            <label className="text-sm font-medium">What is it?</label>

            <input
              type="text"
              placeholder="e.g. black Hydro Flask water bottle"
              className="mt-2 w-full rounded-xl border border-[#dce1dc] bg-[#fafbf9] px-4 py-3 text-sm outline-none transition placeholder:text-[#a0a8a1] focus:border-[#172019]"
            />
          </div>

          <div className="mt-6">
            <label className="text-sm font-medium">
              {type === "found"
                ? "Upload private evidence"
                : "Upload a photo, if you have one"}
            </label>

            <div
              onClick={() => fileInputRef.current?.click()}
              className="mt-2 cursor-pointer rounded-2xl border border-dashed border-[#cbd3cc] bg-[#fafbf9] p-8 text-center transition hover:border-[#172019]"
            >
              <input
                ref={fileInputRef}
                type="file"
                accept="image/png,image/jpeg,image/webp"
                className="hidden"
              />

              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-white">
                {type === "found" ? (
                  <Camera className="h-5 w-5 text-[#657067]" />
                ) : (
                  <Upload className="h-5 w-5 text-[#657067]" />
                )}
              </div>

              <p className="mt-4 text-sm font-medium">
                Click to upload an image
              </p>

              <p className="mt-1 text-xs text-[#7a847c]">
                PNG, JPG or WEBP
              </p>
            </div>

            {type === "found" && (
              <div className="mt-3 flex gap-3 rounded-xl bg-[#eef3ed] p-4">
                <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-[#526156]" />

                <div>
                  <p className="text-xs font-semibold">PRIVATE EVIDENCE</p>

                  <p className="mt-1 text-xs leading-5 text-[#657067]">
                    This image will never be shown to people claiming the
                    item. RECLAIM uses it only for ownership verification.
                  </p>
                </div>
              </div>
            )}
          </div>

          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            <div>
              <label className="flex items-center gap-2 text-sm font-medium">
                <MapPin className="h-4 w-4 text-[#7a847c]" />
                Where?
              </label>

              <input
                type="text"
                placeholder="e.g. Library, 2nd floor"
                className="mt-2 w-full rounded-xl border border-[#dce1dc] bg-[#fafbf9] px-4 py-3 text-sm outline-none placeholder:text-[#a0a8a1] focus:border-[#172019]"
              />
            </div>

            <div>
              <label className="flex items-center gap-2 text-sm font-medium">
                <Clock3 className="h-4 w-4 text-[#7a847c]" />
                When?
              </label>

              <input
                type="datetime-local"
                className="mt-2 w-full rounded-xl border border-[#dce1dc] bg-[#fafbf9] px-4 py-3 text-sm outline-none focus:border-[#172019]"
              />
            </div>
          </div>

          <div className="mt-6">
            <label className="text-sm font-medium">
              Anything distinctive?
            </label>

            <textarea
              rows={4}
              placeholder="Color, brand, stickers, scratches, dents, attachments, unique marks..."
              className="mt-2 w-full resize-none rounded-xl border border-[#dce1dc] bg-[#fafbf9] px-4 py-3 text-sm outline-none placeholder:text-[#a0a8a1] focus:border-[#172019]"
            />
          </div>

          <div className="mt-8 flex items-start gap-3 rounded-xl border border-[#e3e7e2] p-4">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#526156]" />

            <p className="text-xs leading-5 text-[#657067]">
              RECLAIM will create an AI object fingerprint from the
              information you provide and use it to find potential matches.
            </p>
          </div>

          <button className="group mt-7 flex w-full items-center justify-center gap-3 rounded-xl bg-[#172019] py-4 text-sm font-medium text-white transition hover:bg-[#27352b]">
            {type === "found" ? "Report found item" : "Report lost item"}
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </button>
        </div>
      </section>
    </main>
  );
}

