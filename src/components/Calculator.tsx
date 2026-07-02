import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { TARIFFS, WHATSAPP } from "../data";

const fmt = (n: number) => n.toLocaleString("ru-RU");

export default function Calculator() {
  const [area, setArea] = useState(60);
  const [tariffId, setTariffId] = useState("general");
  const tariff = TARIFFS.find((t) => t.id === tariffId)!;
  const price = tariff.rate ? Math.max(tariff.rate * area, tariff.minPrice) : null;

  const waLink = `${WHATSAPP}%20—%20${encodeURIComponent(`${tariff.name}, ${area} м²`)}`;

  return (
    <section id="calc" className="bg-graphite py-20 text-white md:py-28">
      <div className="container-x grid gap-12 lg:grid-cols-2">
        <div>
          <div className="kicker">Калькулятор</div>
          <h2 className="mt-3 text-3xl font-semibold leading-snug md:text-4xl">
            Узнайте цену сейчас.
            <br />
            <span className="text-white/50">Без звонков и «менеджер свяжется».</span>
          </h2>
          <p className="mt-6 max-w-md text-sm leading-7 text-white/60">
            Это финальная цена, а не приманка. Фиксируем её до приезда команды —
            на месте она не вырастет.
          </p>
        </div>

        <div className="rounded-3xl bg-white/[0.06] p-7 backdrop-blur md:p-9">
          <div className="flex flex-wrap gap-2">
            {TARIFFS.map((t) => (
              <button
                key={t.id}
                onClick={() => setTariffId(t.id)}
                className={`rounded-full px-4 py-2 text-[13px] font-semibold transition ${
                  t.id === tariffId ? "bg-emerald text-white" : "bg-white/10 text-white/70 hover:bg-white/15"
                }`}
              >
                {t.name}
              </button>
            ))}
          </div>

          <div className="mt-8">
            <div className="flex items-baseline justify-between">
              <label htmlFor="area" className="text-sm text-white/60">Площадь</label>
              <span className="text-xl font-bold">{area} м²</span>
            </div>
            <input
              id="area"
              type="range"
              min={25}
              max={250}
              step={5}
              value={area}
              onChange={(e) => setArea(Number(e.target.value))}
              className="mt-3 w-full accent-emerald"
            />
          </div>

          <div className="mt-8 border-t border-white/10 pt-6">
            {price ? (
              <>
                <div className="text-sm text-white/55">Стоимость · {tariff.duration}</div>
                <div className="mt-1 text-4xl font-bold text-white">{fmt(price)} ₽</div>
              </>
            ) : (
              <>
                <div className="text-sm text-white/55">Под ключ считаем индивидуально</div>
                <div className="mt-1 text-2xl font-bold text-white">Точная смета за 15 минут</div>
              </>
            )}
            <a
              href={waLink}
              target="_blank"
              rel="noreferrer"
              className="btn-primary mt-6 w-full justify-center"
            >
              Забронировать слот <ArrowRight size={16} />
            </a>
            <p className="mt-4 text-center text-[11px] text-white/40">
              Бронь в WhatsApp за 2 минуты. Оплата — после приёмки работы.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
