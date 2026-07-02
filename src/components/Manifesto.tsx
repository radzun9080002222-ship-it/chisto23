import { MANIFESTO } from "../data";

export default function Manifesto() {
  return (
    <section id="standard" className="bg-mist py-20 md:py-28">
      <div className="container-x">
        <div className="kicker">Стандарт Вершины</div>
        <h2 className="mt-3 max-w-2xl text-3xl font-semibold leading-snug text-graphite md:text-4xl">
          Мы убрали из клининга всё,
          <br />за что его не любят.
        </h2>
        <div className="mt-14 grid gap-10 md:grid-cols-3">
          {MANIFESTO.map((m) => (
            <div key={m.n} className="border-t-2 border-emerald pt-6">
              <div className="text-sm font-bold text-emerald">{m.n}</div>
              <h3 className="mt-3 text-lg font-semibold text-graphite">{m.title}</h3>
              <p className="mt-3 text-sm leading-7 text-ink/65">{m.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
