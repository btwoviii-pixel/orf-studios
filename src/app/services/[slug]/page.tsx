import Link from "next/link";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;

  const videos = [
    `/videos/${slug}/1.mp4`,
    `/videos/${slug}/2.mp4`,
    `/videos/${slug}/3.mp4`,
    `/videos/${slug}/4.mp4`,
  ];

  const title = slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#FAF9F6]">

      {/* Top Glow */}
      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#D8E5F2]/40 blur-[150px]" />

      <div className="container mx-auto max-w-7xl px-8 py-20">

        {/* Back Button */}
        <div className="flex justify-left">
          <Link
            href="/"
            className="rounded-full bg-white8 py-3 text-sm font-medium text-blckadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            ← Back
          </Link>
        </div>

        {/* Hero */}
        <div className="mx-auto mt-20 mb-32 flex max-w-4xl flex-col items-center text-center">

          <p className="text-xs uppercase tracking-[0.55em] text-zinc-400">
            ORF STUDIOS
          </p>

          <h1 className="mt-5 text-6xl font-bold leading-none tracking-tight text-zinc-900 md:text-7xl">
            {title}
          </h1>

          <p className="mt-10 max-w-3xl text-xl leading-10 text-zinc-500">
            A curated collection showcasing our finest creative work,
            crafted with originality, precision and cinematic storytelling.
          </p>

        </div>

        {/* Videos */}
        <div className="mb-36 flex justify-center">

          <div className="flex flex-wrap justify-center gap-10">

            {videos.map((video, index) => (

              <div
                key={index}
                className="group relative overflow-hidden rounded-[30px] border border-white/60 bg-white/90 p-3 shadow-[0_25px_60px_rgba(0,0,0,.08)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_40px_90px_rgba(0,0,0,.15)]"
              >

                {/* Number */}
                <div className="absolute left-5 top-5 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-xs font-semibold text-zinc-900 shadow-md backdrop-blur">
                  {String(index + 1).padStart(2, "0")}
                </div>

                {/* Shine Effect */}
                <div className="absolute inset-0 z-10 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

                {/* Video */}
                <video
                  src={video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="h-[360px] w-[205px] rounded-[24px] object-cover transition duration-500 group-hover:scale-105"
                />

              </div>

            ))}

          </div>

        </div>

        {/* Bottom Content */}

        <div className="mx-auto mb-20 max-w-3xl text-center">

          <div className="mx-auto mb-12 h-px w-24 bg-zinc-300"></div>

          <p className="text-xs uppercase tracking-[0.45em] text-zinc-400">
            ORF STUDIOS
          </p>

          <h2 className="mt-8 text-5xl font-bold leading-tight text-zinc-900">
            Every frame is designed
            <br />
            to leave an impression.
          </h2>

          <p className="mx-auto mt-10 max-w-2xl text-xl leading-10 text-zinc-500">
            From concept to final delivery, every project is approached
            with creativity, precision and a commitment to producing
            visuals that people remember.
          </p>

        </div>

      </div>

      {/* Bottom Glow */}
      <div className="pointer-events-none absolute bottom-[-180px] left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[#B8C9C2]/25 blur-[150px]" />

    </main>
  );
}