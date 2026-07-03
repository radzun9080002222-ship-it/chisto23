import { useEffect, useState } from "react";
import { MaxIcon, PhoneIcon } from "../icons";
import { MAX_LINK, PHONE_HREF } from "../data";

export default function FloatBar() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const fn = () => setShow(window.scrollY > 560);
    fn();
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);
  return (
    <div
      className={`fixed left-1/2 z-[60] flex -translate-x-1/2 gap-2 rounded-full border border-graphite/10 bg-white p-2 transition-all duration-300 ${show ? "bottom-5 opacity-100" : "-bottom-24 opacity-0"}`}
      style={{ boxShadow: "0 14px 44px -10px rgba(34,39,43,.32)" }}
    >
      <a href={MAX_LINK} aria-label="MAX" className="inline-flex items-center gap-2 rounded-full bg-emerald px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-dark"><MaxIcon className="h-[18px] w-[18px] fill-current" />MAX</a>
      <a href={PHONE_HREF} aria-label="Позвонить" className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-graphite transition hover:text-emerald"><PhoneIcon className="h-[18px] w-[18px] fill-current" />Позвонить</a>
    </div>
  );
}
