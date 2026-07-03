import { ArrowDown } from "lucide-react";
import { WHATSAPP } from "../data";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-white pt-[72px]">
      <div className="container-x grid items-center gap-10 py-14 md:py-20 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <span className="text-sm font-bold uppercase tracking-widest2 text-emerald">Вершина</span>
            <span className="h-px w-11 bg-emerald/40" />
          </div>
          <h1 className="text-[17vw] font-bold leading-[0.95] tracking-tight text-graphite md:text-[120px]">
            Чисто<span className="text-emerald">.</span>
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-ink/70 md:text-xl">
            Премиальный клининг квартир и домов в Сочи.
            Точная цена за 2 минуты — до приезда, а не после.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a href="#calc" className="btn-primary">
              Узнать свою цену <ArrowDown size={16} />
            </a>
            <a href={WHATSAPP} target="_blank" rel="noreferrer" className="btn-ghost">Написать в WhatsApp</a>
          </div>
          <dl className="mt-12 flex gap-10 border-t border-black/5 pt-7">
            <div>
              <dt className="text-2xl font-bold text-graphite">47</dt>
              <dd className="mt-1 text-xs text-ink/55">пунктов чек-листа приёмки</dd>
            </div>
            <div>
              <dt className="text-2xl font-bold text-graphite">48 ч</dt>
              <dd className="mt-1 text-xs text-ink/55">гарантии после уборки</dd>
            </div>
            <div>
              <dt className="text-2xl font-bold text-graphite">0 ₽</dt>
              <dd className="mt-1 text-xs text-ink/55">доплат на месте</dd>
            </div>
          </dl>
        </div>
        <div className="relative">
          <img src="/images/hero.jpg" alt="Интерьер после уборки «Вершины»" className="aspect-[4/5] w-full rounded-3xl object-cover" />
          <div className="absolute -bottom-5 -left-5 hidden rounded-2xl bg-white p-5 shadow-card md:block">
            <div className="text-[11px] font-semibold uppercase tracking-widest2 text-emerald">сегодня убрано</div>
            <div className="mt-1 text-2xl font-bold text-graphite">1 240 м²</div>
          </div>
        </div>
      </div>
    </section>
  );
}
