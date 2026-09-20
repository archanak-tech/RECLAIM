import { ArrowRight, LockKeyhole, ShieldCheck, Sparkles } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f8f6] text-[#172019]">
      {/* Navigation */}
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#172019] text-sm font-bold text-white">
            R
          </div>
          <span className="text-xl font-semibold tracking-tight">RECLAIM</span>
        </div>

        <div className="hidden items-center gap-8 text-sm text-[#657067] md:flex">
          <a href="#how-it-works" className="transition hover:text-[#172019]">
            How it works
          </a>
          <a href="#trust" className="transition hover:text-[#172019]">
            Trust & privacy
          </a>
        </div>

        <button className="rounded-full border border-[#dce1dc] bg-white px-5 py-2.5 text-sm font-medium transition hover:border-[#172019]">
          Get started
        </button>
      </nav>

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 pb-24 pt-16 lg:px-10 lg:pt-24">
        <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#dce1dc] bg-white px-4 py-2 text-xs font-medium text-[#59645c]">
              <Sparkles className="h-3.5 w-3.5" />
              AI-powered lost & found
            </div>

            <h1 className="max-w-3xl text-5xl font-semibold leading-[1.02] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
              Lost shouldn’t
              <br />
              mean <span className="text-[#68756b]">gone.</span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-[#657067]">
              RECLAIM helps lost things find their rightful owners with
              intelligent matching and blind ownership verification.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <button className="group flex items-center justify-center gap-3 rounded-full bg-[#172019] px-6 py-3.5 text-sm font-medium text-white transition hover:bg-[#27352b]">
                I lost something
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </button>

              <button className="flex items-center justify-center gap-3 rounded-full border border-[#ccd4cd] bg-white px-6 py-3.5 text-sm font-medium transition hover:border-[#172019]">
                I found something
              </button>
            </div>

            <div className="mt-9 flex flex-wrap gap-5 text-xs text-[#737d75]">
              <span className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4" />
                Privacy-first
              </span>
              <span className="flex items-center gap-2">
                <LockKeyhole className="h-4 w-4" />
                Private evidence
              </span>
            </div>
          </div>

          {/* Verification visual */}
          <div className="relative">
            <div className="rounded-[2rem] border border-[#dce1dc] bg-white p-5 shadow-[0_25px_70px_rgba(23,32,25,0.08)]">
              <div className="rounded-[1.5rem] bg-[#f1f3ef] p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-[0.16em] text-[#879188]">
                      Ownership check
                    </p>
                    <h2 className="mt-1 text-xl font-semibold">
                      Prove it’s yours.
                    </h2>
                  </div>

                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white">
                    <LockKeyhole className="h-4 w-4 text-[#59645c]" />
                  </div>
                </div>

                <div className="mt-6 rounded-2xl border border-dashed border-[#cbd3cc] bg-white p-6">
                  <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-2xl bg-[#e5e9e4]">
                    <div className="h-16 w-16 rounded-full border-[7px] border-[#aeb8af] border-t-[#172019]" />
                  </div>

                  <p className="mt-5 text-center text-sm font-medium">
                    Evidence is private
                  </p>
                  <p className="mt-1 text-center text-xs leading-5 text-[#7a847c]">
                    Claimants never see the finder’s private evidence.
                  </p>
                </div>

                <div className="mt-4 grid grid-cols-3 gap-3">
                  <div className="rounded-xl bg-white p-3">
                    <p className="text-[10px] uppercase tracking-wider text-[#929b94]">
                      Visual
                    </p>
                    <p className="mt-1 text-sm font-semibold">Matched</p>
                  </div>
                  <div className="rounded-xl bg-white p-3">
                    <p className="text-[10px] uppercase tracking-wider text-[#929b94]">
                      Details
                    </p>
                    <p className="mt-1 text-sm font-semibold">Matched</p>
                  </div>
                  <div className="rounded-xl bg-white p-3">
                    <p className="text-[10px] uppercase tracking-wider text-[#929b94]">
                      Trust
                    </p>
                    <p className="mt-1 text-sm font-semibold">Verified</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-[#dce1dc] bg-white px-5 py-4 shadow-lg sm:block">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#e8eee8]">
                  <ShieldCheck className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-xs text-[#7b857d]">Verification</p>
                  <p className="text-sm font-semibold">Owner confirmed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section
        id="how-it-works"
        className="border-y border-[#e0e4df] bg-white"
      >
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#7a847c]">
              How RECLAIM works
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Find it. Prove it. Reclaim it.
            </h2>
          </div>

          <div className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-[#e0e4df] bg-[#e0e4df] md:grid-cols-4">
            {[
              ["01", "Report", "Tell RECLAIM what was lost or found."],
              ["02", "Match", "AI compares objects, details, time and location."],
              ["03", "Verify", "The claimant proves ownership without seeing private evidence."],
              ["04", "Reclaim", "A verified owner gets their item back safely."],
            ].map(([number, title, description]) => (
              <div key={number} className="bg-white p-7">
                <span className="text-xs font-semibold text-[#8a948c]">
                  {number}
                </span>
                <h3 className="mt-8 text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#707a72]">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust */}
      <section id="trust" className="bg-[#172019] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#aeb8af]">
                The difference
              </p>
              <h2 className="mt-4 max-w-xl text-3xl font-semibold tracking-tight sm:text-4xl">
                We don’t ask if you recognize the item.
                <br />
                We ask if you can prove it’s yours.
              </h2>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-7">
              <div className="flex gap-4">
                <LockKeyhole className="mt-1 h-5 w-5 shrink-0 text-[#c6d0c8]" />
                <div>
                  <h3 className="font-semibold">Blind ownership verification</h3>
                  <p className="mt-2 text-sm leading-6 text-[#aeb8af]">
                    Finder evidence stays private. RECLAIM evaluates a
                    claimant’s evidence against it without revealing the
                    hidden details that make the item identifiable.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#172019] px-6 pb-10 text-[#89958c] lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 border-t border-white/10 pt-7 text-xs sm:flex-row">
          <span>RECLAIM — Lost shouldn’t mean gone.</span>
          <span>Built for HACKDAY 1.0</span>
        </div>
      </footer>
    </main>
  );
}