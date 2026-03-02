import Link from "next/link";

type SectionCtaProps = {
  title: string;
  body: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

export default function SectionCta({
  title,
  body,
  primaryHref = "/contact",
  primaryLabel = "お問い合わせ",
  secondaryHref = "/contact/recruit",
  secondaryLabel = "採用フォーム",
}: SectionCtaProps) {
  return (
    <section className="rounded-3xl border border-border bg-surface p-8 shadow-sm">
      <h2 className="text-2xl font-semibold text-foreground font-display">
        {title}
      </h2>
      <p className="mt-3 text-sm text-muted">{body}</p>
      <div className="mt-6 flex flex-wrap gap-3">
        <Link
          href={primaryHref}
          className="inline-flex items-center justify-center rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-accent-strong"
        >
          {primaryLabel}
        </Link>
        <Link
          href={secondaryHref}
          className="inline-flex items-center justify-center rounded-full border border-border bg-white px-5 py-2.5 text-sm font-semibold text-foreground transition hover:border-accent hover:text-accent-strong"
        >
          {secondaryLabel}
        </Link>
      </div>
    </section>
  );
}
