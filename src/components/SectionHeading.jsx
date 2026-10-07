import "./SectionHeading.css";

/* Interlocking heading: an outlined word above a solid one, plus a rule.
   `top` and `main` share `color`; `ruleColor` defaults to it. */
function SectionHeading({
  top,
  main,
  color = "#13285b",
  ruleColor,
  className = "",
}) {
  const heading = (
    <h2 className={`sec-head__title${className ? ` ${className}` : ""}`}>
      <span
        className="sec-head__top"
        style={{ color: "transparent", WebkitTextStroke: `1.5px ${color}` }}
      >
        {top}
      </span>{" "}
      <span className="sec-head__main" style={{ color }}>
        {main}
      </span>
    </h2>
  );

  return (
    <header className="sec-head">
      {heading}
      <span
        className="sec-head__rule"
        aria-hidden="true"
        style={{ backgroundColor: ruleColor ?? color }}
      />
    </header>
  );
}

export default SectionHeading;
