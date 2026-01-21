import Link from "next/link";
import SiteFooter from "./components/site-footer";
import SiteHeader from "./components/site-header";
import { siteData } from "./lib/site-data";

export default function Home() {
  return (
    <div className="bg-[var(--paper)] text-[var(--ink)]">
      <SiteHeader />
      <main>
        <section className="relative isolate overflow-hidden">
          <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-[radial-gradient(circle_at_center,rgba(243,212,196,0.9),rgba(243,212,196,0))] blur-2xl motion-safe:animate-[drift_12s_ease-in-out_infinite]" />
          <div className="absolute -right-32 top-40 h-80 w-80 rounded-full bg-[radial-gradient(circle_at_center,rgba(195,106,75,0.35),rgba(195,106,75,0))] blur-3xl motion-safe:animate-[drift_16s_ease-in-out_infinite]" />
          <div className="mx-auto w-full max-w-6xl px-6 pb-20 pt-16 lg:pb-28 lg:pt-20">
            <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
              <div className="motion-safe:animate-[rise_0.8s_ease-out_both]">
                <p className="text-xs uppercase tracking-[0.28em] text-(--muted)">
                  {siteData.hero.lead}
                </p>
                <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-tight text-[var(--ink)] sm:text-5xl lg:text-6xl font-[family:var(--font-display)]">
                  {siteData.hero.headline}
                </h1>
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-(--muted)">
                  {siteData.hero.subhead}
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-[var(--accent-strong)]"
                  >
                    {siteData.hero.ctaPrimary}
                  </Link>
                  <Link
                    href="/contact/recruit"
                    className="inline-flex items-center justify-center rounded-full border border-[var(--line)] px-6 py-3 text-sm font-semibold text-[var(--ink)] transition hover:border-[var(--accent)] hover:text-[var(--accent-strong)]"
                  >
                    {siteData.hero.ctaSecondary}
                  </Link>
                </div>
              </div>
              <div className="rounded-3xl border border-[var(--line)] bg-[var(--card)] p-8 shadow-[0_25px_60px_rgba(31,23,19,0.08)] motion-safe:animate-[rise_0.9s_ease-out_0.1s_both]">
                <p className="text-sm font-semibold text-(--muted)">
                  Alloraが大切にしていること
                </p>
                <ul className="mt-6 space-y-4 text-sm text-[var(--ink)]">
                  {siteData.hero.highlights.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 rounded-2xl bg-[var(--paper-muted)] px-4 py-3"
                    >
                      <span className="mt-1 h-2 w-2 rounded-full bg-[var(--accent)]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 rounded-2xl border border-dashed border-[var(--line)] px-4 py-4 text-xs text-(--muted)">
                  相談・採用ともにオンライン完結。カジュアルなご相談から歓迎です。
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="mx-auto w-full max-w-6xl px-6 py-16">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-(--muted)">
                Services
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-[var(--ink)] font-[family:var(--font-display)]">
                目的から逆算した制作と開発
              </h2>
            </div>
            <p className="max-w-md text-sm text-(--muted)">
              シンプルで見やすいUIを軸に、伝えたい内容が届く構成を丁寧に設計します。
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {siteData.services.map((service, index) => (
              <div
                key={service.title}
                className="flex h-full flex-col gap-6 rounded-3xl border border-[var(--line)] bg-[var(--card)] p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-[var(--ink)]">
                    {service.title}
                  </h3>
                  <span className="rounded-full bg-[var(--accent-soft)] px-3 py-1 text-xs font-semibold text-[var(--accent-strong)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-(--muted)">
                  {service.description}
                </p>
                <ul className="mt-auto space-y-2 text-sm text-[var(--ink)]">
                  {service.points.map((point) => (
                    <li key={point} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section
          id="works"
          className="mx-auto w-full max-w-6xl px-6 py-16"
        >
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="rounded-3xl border border-[var(--line)] bg-[linear-gradient(135deg,#fffdfa,#f7e9de)] p-8 shadow-[0_20px_50px_rgba(31,23,19,0.08)]">
              <div className="flex items-center justify-between">
                <p className="text-xs uppercase tracking-[0.3em] text-(--muted)">
                  Works
                </p>
                <span className="rounded-full border border-[var(--line)] px-3 py-1 text-xs text-(--muted)">
                  {siteData.works.status}
                </span>
              </div>
              <h3 className="mt-4 text-2xl font-semibold text-[var(--ink)] font-[family:var(--font-display)]">
                {siteData.works.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-(--muted)">
                {siteData.works.description}
              </p>
              <div className="mt-6 rounded-2xl border border-dashed border-[var(--line)] px-4 py-4 text-xs text-(--muted)">
                スクリーンショットは準備中。仮画像やモックで差し替え可能です。
              </div>
            </div>
            <div className="rounded-3xl border border-[var(--line)] bg-[var(--card)] p-8 shadow-sm">
              <p className="text-sm font-semibold text-[var(--ink)]">
                担当領域
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {siteData.works.roles.map((role) => (
                  <span
                    key={role}
                    className="rounded-full bg-[var(--paper-muted)] px-3 py-1 text-xs text-(--muted)"
                  >
                    {role}
                  </span>
                ))}
              </div>
              <p className="mt-6 text-sm font-semibold text-[var(--ink)]">
                技術要素
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {siteData.works.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-[var(--accent-soft)] px-3 py-1 text-xs font-semibold text-[var(--accent-strong)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <p className="mt-6 text-xs text-(--muted)">
                {siteData.works.note}
              </p>
            </div>
          </div>
        </section>

        <section id="recruit" className="mx-auto w-full max-w-6xl px-6 py-16">
          <div className="rounded-[40px] border border-[var(--line)] bg-[var(--paper-muted)] p-10 shadow-sm">
            <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-(--muted)">
                  Recruit
                </p>
                <h2 className="mt-3 text-3xl font-semibold text-[var(--ink)] font-[family:var(--font-display)]">
                  {siteData.recruit.headline}
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-(--muted)">
                  {siteData.recruit.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {siteData.recruit.style.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-white px-3 py-1 text-xs text-(--muted)"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-3xl bg-white p-6">
                <p className="text-sm font-semibold text-[var(--ink)]">
                  募集職種（仮）
                </p>
                <ul className="mt-4 space-y-2 text-sm text-(--muted)">
                  {siteData.recruit.roles.map((role) => (
                    <li key={role} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                      <span>{role}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-5 text-xs text-(--muted)">
                  雇用形態: {siteData.recruit.employment}
                </p>
                <Link
                  href="/contact/recruit"
                  className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-[var(--ink)] px-4 py-3 text-sm font-semibold text-[var(--paper)] transition hover:bg-[var(--accent-strong)]"
                >
                  採用フォームへ
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section id="company" className="mx-auto w-full max-w-6xl px-6 py-16">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-(--muted)">
                Company
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-[var(--ink)] font-[family:var(--font-display)]">
                会社概要
              </h2>
              <p className="mt-4 text-sm text-(--muted)">
                相談・採用の窓口は以下にて承ります。内容は設定ファイルで差し替えできます。
              </p>
            </div>
            <div className="rounded-3xl border border-[var(--line)] bg-[var(--card)] p-6">
              <dl className="space-y-4 text-sm">
                <div className="flex flex-col gap-1 border-b border-dashed border-[var(--line)] pb-3">
                  <dt className="text-(--muted)">会社名</dt>
                  <dd className="text-[var(--ink)]">{siteData.company.name}</dd>
                </div>
                <div className="flex flex-col gap-1 border-b border-dashed border-[var(--line)] pb-3">
                  <dt className="text-(--muted)">所在地</dt>
                  <dd className="text-[var(--ink)]">{siteData.company.address}</dd>
                </div>
                <div className="flex flex-col gap-1 border-b border-dashed border-[var(--line)] pb-3">
                  <dt className="text-(--muted)">電話番号</dt>
                  <dd className="text-[var(--ink)]">{siteData.company.phone}</dd>
                </div>
                <div className="flex flex-col gap-1">
                  <dt className="text-(--muted)">メール</dt>
                  <dd className="text-[var(--ink)]">{siteData.company.email}</dd>
                </div>
              </dl>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
