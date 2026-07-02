type Props = {
  /** высота видимого логотипа (контента) в px */
  height?: number;
  className?: string;
};

/* Поля вокруг логотипа в исходном PNG (доли от размера файла).
   Если знак подрезан или, наоборот, остаётся воздух — подвинь эти значения. */
const MARGIN = { top: 0.21, right: 0.21, bottom: 0.34, left: 0.19 };
const IMG_W = 1536;
const IMG_H = 1024;

export default function Logo({ height = 42, className = "" }: Props) {
  const fullH = height / (1 - MARGIN.top - MARGIN.bottom);
  const fullW = fullH * (IMG_W / IMG_H);
  const boxW = fullW * (1 - MARGIN.left - MARGIN.right);

  return (
    <a
      href="#top"
      className={`inline-flex items-center ${className}`}
      aria-label="Вершина — профессиональный клининг"
    >
      <span
        style={{ height, width: boxW, overflow: "hidden", position: "relative", display: "inline-block" }}
      >
        <img
          src="/images/logo.png"
          alt="Вершина — профессиональный клининг"
          style={{
            position: "absolute",
            height: fullH,
            width: fullW,
            maxWidth: "none",
            left: -MARGIN.left * fullW,
            top: -MARGIN.top * fullH,
          }}
          className="select-none"
        />
      </span>
    </a>
  );
}
