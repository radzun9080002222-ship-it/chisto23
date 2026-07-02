import { ArrowRight, Camera, Clock4, RotateCcw } from "lucide-react";
import { WHATSAPP } from "../data";

const POINTS = [
  { icon: Clock4, title: "Слот за 3 часа", text: "Уборка между выездом и заездом гостей — без срыва брони." },
  { icon: Camera, title: "Фотоотчёт", text: "Видите состояние объекта после каждой уборки, где бы вы ни были." },
  { icon: RotateCcw, title: "Абонемент", text: "Постоянная команда, приоритетные слоты и цена ниже разовой." },
];

export default function Rent() {
  return (
    <section id="rent" className="bg-graphite py-20 text-white md:py-28">
      <div className="container-x">
        <div className="grid items-end gap-8 lg:grid-cols-[1fr_auto]">
          <div>
            <div className="kicker">Для посуточной аренды и арендодателей</div>
            <h2 className="mt-3 max-w-2xl text-3xl font-semibold leading-snug md:text-4xl">
              Ваши квартиры зарабатывают.
              <br />
              <span className="text-white/50">Чистоту мы берём на себя.</span>
            </h2>
          </div>
          <a href={WHATSAPP} target="_blank" rel="noreferrer" className="btn-primary self-start lg:self-end">
            Обсудить объекты <ArrowRight size={16} />
          </a>
        </div>
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {POINTS.map((p) => (
            <div key={p.title} className="rounded-2xl bg-white/[0.06] p-7">
              <p.icon size={26} strokeWidth={1.6} className="text-emerald" />
              <h3 className="mt-4 text-base font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm leading-7 text-white/60">{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
