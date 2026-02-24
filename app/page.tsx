"use client";

import { useState } from "react";

export default function Home() {
  const [page, setPage] = useState(0);

  const confettiPieces = Array.from({ length: 36 }, (_, index) => ({
    id: index,
    left: `${(index * 9) % 100}%`,
    delay: `${(index % 10) * 0.3}s`,
    duration: `${5 + (index % 6) * 0.55}s`,
    rotate: `${(index * 19) % 360}deg`,
  }));

  const pages = [
    "I was thinking of reasons I love you.",
    "I remember the first day we met; you thought I was arrogant, and I thought you were a bully...",
    "Then, with one look from your eyes, I fell from grace.",
    "I loved you since then, and through.",
    "My feelings have never changed one bit; I still love you the same, always and for as long as I can.",
    "I miss you — no metaphor has ever captured how much.",
    "I can’t wait to see you soon.",
    "Happy birthday, my love.",
    "May you have a wonderful day and be blessed.",
    "May your light continue to shine so bright.",
    "P.S. See you soon, and I love you.",
  ];

  return (
    <div
      className="relative min-h-screen overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('image1.jpeg')",
      }}
    >
      <div className="pointer-events-none absolute inset-0 z-10 overflow-hidden">
        {confettiPieces.map((piece) => (
          <span
            key={piece.id}
            className="confetti-piece"
            style={{
              left: piece.left,
              animationDelay: piece.delay,
              animationDuration: piece.duration,
              transform: `rotate(${piece.rotate})`,
            }}
          />
        ))}
      </div>
      <div className="absolute inset-0 bg-black/50" />
      <main className="relative z-20 flex min-h-screen items-center justify-center px-6 py-10">
        <section className="w-full max-w-3xl rounded-3xl bg-black/35 p-8 text-center text-white shadow-2xl backdrop-blur-sm md:p-12">
          <h1 className="text-4xl font-extrabold drop-shadow-[0_3px_10px_rgba(0,0,0,0.7)] md:text-5xl">To My Love ❤️</h1>
          <p className="mt-6 text-lg font-semibold text-rose-100 drop-shadow-[0_2px_8px_rgba(0,0,0,0.75)] md:text-xl">
            I have been jotting down notes thinking of you.
          </p>

          <div className="mx-auto mt-8 w-full max-w-2xl">
            <div className="sticky-stage">
              <div className="sticky-note shadow-note-1" />
              <div className="sticky-note shadow-note-2" />
              <article key={page} className="sticky-note sticky-note-active h-72 px-6 py-8 text-zinc-900 md:h-80 md:px-10 md:py-10">
                <span className="note-tape note-tape-left" />
                <span className="note-tape note-tape-right" />
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-rose-700">
                  Page {page + 1}
                </p>
                <p className="mt-6 text-2xl font-semibold leading-10 text-zinc-950 md:text-3xl md:leading-12">
                  {pages[page]}
                </p>
              </article>
            </div>
          </div>

          <div className="mx-auto mt-7 flex max-w-2xl items-center justify-between gap-4">
            <button
              type="button"
              onClick={() => setPage((current) => Math.max(0, current - 1))}
              disabled={page === 0}
              className="rounded-full bg-amber-100/90 px-5 py-2 text-sm font-semibold text-zinc-900 transition hover:bg-amber-100 disabled:cursor-not-allowed disabled:opacity-45"
            >
              Previous
            </button>
            <p className="text-sm font-medium text-rose-100">
              {page + 1} / {pages.length}
            </p>
            <button
              type="button"
              onClick={() => setPage((current) => Math.min(pages.length - 1, current + 1))}
              disabled={page === pages.length - 1}
              className="rounded-full bg-amber-100/90 px-5 py-2 text-sm font-semibold text-zinc-900 transition hover:bg-amber-100 disabled:cursor-not-allowed disabled:opacity-45"
            >
              Next
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
