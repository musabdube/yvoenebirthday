export default function Home() {
  const confettiPieces = Array.from({ length: 36 }, (_, index) => ({
    id: index,
    left: `${(index * 9) % 100}%`,
    delay: `${(index % 10) * 0.3}s`,
    duration: `${5 + (index % 6) * 0.55}s`,
    rotate: `${(index * 19) % 360}deg`,
  }));

  return (
    <div
      className="relative min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/image1.jpeg')",
      }}
    >
      <div className="pointer-events-none absolute inset-0 z-10">
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
      <div className="absolute inset-0 bg-black/45" />
      <main className="relative z-20 flex min-h-screen items-center justify-center px-6 py-10">
        <section className="max-w-3xl rounded-3xl bg-black/35 p-8 text-center text-white shadow-2xl backdrop-blur-sm md:p-12">
          <h1 className="text-4xl font-extrabold md:text-5xl">For Yvoune Sauramba ❤️</h1>
          <pre className="mx-auto mt-8 w-fit whitespace-pre text-left font-mono text-[10px] leading-5 text-rose-100 sm:text-xs sm:leading-6 md:text-sm md:leading-7">
{`              i miss you, like everyday         i want to be with you
          but you're far away, hold you        may god grant your wishes
        and may all your dreems come true      i miss you, like everyday
      i want to be with you, you're far away, i caant way to see you
      hold you, may god grant your wishes and may all your dreems
        come true, i miss you like everyday, i want to be with you
          but you're far away, i caant way to see you, hold you
             may god grant your wishes and all your dreems
                    come true, my love, come true
                         i miss you always
                             yvoune ❤️`}
          </pre>
        </section>
      </main>
    </div>
  );
}
