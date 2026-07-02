import { PROCESS } from "../data";

export default function Process() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container-x">
        <div className="kicker">Как это работает</div>
        <h2 className="mt-3 text-3xl font-semibold text-graphite md:text-4xl">От заявки до приёмки.</h2>
        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {PROCESS.map((p, i) => (
            <div key={p.n} className="relative">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-emerald-light text-base font-bold text-emerald">{p.n}</div>
              {i < PROCESS.length - 1 && <div className="absolute left-14 top-5 hidden h-px w-[calc(100%-72px)] bg-black/8 lg:block" />}
              <h3 className="mt-5 text-base font-semibold text-graphite">{p.title}</h3>
              <p className="mt-2 text-sm leading-7 text-ink/60">{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
