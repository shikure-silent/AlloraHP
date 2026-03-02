import Breadcrumbs from "../components/breadcrumbs";
import SectionCta from "../components/section-cta";
import SiteFooter from "../components/site-footer";
import SiteHeader from "../components/site-header";
import { siteData } from "../lib/site-data";

export const metadata = {
  title: "サービス",
  description:
    "株式会社Alloraが提供するWeb制作・Webアプリ開発・iOSアプリ開発の紹介です。",
};

export default function ServicesPage() {
  return (
    <div className="bg-background text-foreground">
      <SiteHeader />
      <main className="mx-auto w-full max-w-6xl px-6 py-16">
        <Breadcrumbs items={[{ label: "トップ", href: "/" }, { label: "サービス" }]} />
        <section>
          <p className="text-xs uppercase tracking-[0.3em] text-muted">Services</p>
          <h1 className="mt-3 text-4xl font-semibold text-foreground font-display">
            サービス
          </h1>
          <p className="mt-4 max-w-2xl text-sm text-muted">
            目的から逆算して設計し、長く運用できる構成と実装を提供します。
          </p>
        </section>

        <section className="mt-10 grid gap-6 md:grid-cols-3">
          {siteData.services.map((service, index) => (
            <article
              key={service.title}
              className="flex h-full flex-col gap-6 rounded-3xl border border-border bg-card p-6 shadow-sm"
            >
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold text-foreground">
                  {service.title}
                </h2>
                <span className="rounded-full bg-accent-soft px-3 py-1 text-xs font-semibold text-accent-strong">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <p className="text-sm leading-relaxed text-muted">
                {service.description}
              </p>
              <ul className="mt-auto space-y-2 text-sm text-foreground">
                {service.points.map((point) => (
                  <li key={point} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </section>

        <section className="mt-10">
          <SectionCta
            title="サービスの適用範囲を相談する"
            body="課題や予算に応じて、必要な範囲を絞った提案にも対応しています。"
          />
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
