import { useState } from "react";
import { Plus } from "lucide-react";
import { FAQ } from "../data";

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="bg-white py-20 md:py-28">
      <div className="container-x grid gap-10 lg:grid-cols-[1fr_1.6fr]">
        <div>
          <div className="kicker">Вопросы</div>
          <h2 className="mt-3 text-3xl font-semibold text-graphite md:text-4xl">Спрашивают перед заказом.</h2>
        </div>
        <div className="divide-y divide-black/8 border-y border-black/8">
          {FAQ.map((f, i) => (
            <div key={f.q}>
              <button onClick={() => setOpen(open === i ? null : i)} className="flex w-full items-center justify-between gap-6 py-5 text-left">
                <span className="text-base font-semibold text-graphite">{f.q}</span>
                <Plus size={18} className={`shrink-0 text-emerald transition ${open === i ? "rotate-45" : ""}`} />
              </button>
              {open === i && <p className="pb-6 text-sm leading-7 text-ink/65">{f.a}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
