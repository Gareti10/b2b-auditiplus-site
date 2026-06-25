interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : ""}>
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="section-title">{title}</h2>
      {description && (
        <p className={`section-copy ${centered ? "mx-auto" : ""}`}>{description}</p>
      )}
    </div>
  );
}
