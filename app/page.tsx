import Link from "next/link";
import SectionCta from "./components/section-cta";
import SiteFooter from "./components/site-footer";
import SiteHeader from "./components/site-header";
import { siteData } from "./lib/site-data";

export const metadata = {
  title: "トップ",
  description:
    "株式会社Alloraの会社情報・サービス・実績・採用・お問い合わせへの導線をまとめたトップページです。",
};

export default function Home() {
  const featuredProject = siteData.works.projects[0];

  return (
    <div className="bg-background text-foreground">
      <SiteHeader />
      <main>
        <section className="relative isolate overflow-hidden">
          <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-[radial-gradient(circle_at_center,rgba(243,212,196,0.9),rgba(243,212,196,0))] blur-2xl motion-safe:animate-[drift_12s_ease-in-out_infinite]" />
          <div className="absolute -right-32 top-40 h-80 w-80 rounded-full bg-[radial-gradient(circle_at_center,rgba(195,106,75,0.35),rgba(195,106,75,0))] blur-3xl motion-safe:animate-[drift_16s_ease-in-out_infinite]" />
          <div className="mx-auto w-full max-w-6xl px-6 pb-20 pt-16 lg:pb-28 lg:pt-20">
            <p className="text-xs uppercase tracking-[0.28em] text-muted">
              {siteData.hero.lead}
            </p>
            <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl font-display">
              {siteData.hero.headline}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
              {siteData.hero.subhead}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-accent-strong"
              >
                {siteData.hero.ctaPrimary}
              </Link>
              <Link
                href="/recruit"
                className="inline-flex items-center justify-center rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition hover:border-accent hover:text-accent-strong"
              >
                {siteData.hero.ctaSecondary}
              </Link>
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-6 pb-8">
          <div className="grid gap-6 md:grid-cols-2">
            <article
              id="company"
              className="rounded-3xl border border-border bg-card p-6 shadow-sm"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-muted">
                Company
              </p>
              <h2 className="mt-3 text-2xl font-semibold font-display">
                会社情報
              </h2>
              <p className="mt-3 text-sm text-muted">
                会社概要、所在地、連絡先などの基本情報を掲載しています。
              </p>
              <Link
                href="/company"
                className="mt-5 inline-flex rounded-full border border-border bg-white px-4 py-2 text-sm font-semibold transition hover:border-accent hover:text-accent-strong"
              >
                会社情報ページへ
              </Link>
            </article>

            <article
              id="services"
              className="rounded-3xl border border-border bg-card p-6 shadow-sm"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-muted">
                Services
              </p>
              <h2 className="mt-3 text-2xl font-semibold font-display">
                サービス
              </h2>
              <p className="mt-3 text-sm text-muted">
                Web制作、Webアプリ開発の提供内容を紹介しています。
              </p>
              <Link
                href="/services"
                className="mt-5 inline-flex rounded-full border border-border bg-white px-4 py-2 text-sm font-semibold transition hover:border-accent hover:text-accent-strong"
              >
                サービスページへ
              </Link>
            </article>

            <article
              id="works"
              className="rounded-3xl border border-border bg-card p-6 shadow-sm"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-muted">
                Works
              </p>
              <h2 className="mt-3 text-2xl font-semibold font-display">実績</h2>
              <p className="mt-3 text-sm text-muted">
                最新実績: {featuredProject.title}（{featuredProject.status}）
              </p>
              <Link
                href="/works"
                className="mt-5 inline-flex rounded-full border border-border bg-white px-4 py-2 text-sm font-semibold transition hover:border-accent hover:text-accent-strong"
              >
                実績ページへ
              </Link>
            </article>

            <article
              id="recruit"
              className="rounded-3xl border border-border bg-card p-6 shadow-sm"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-muted">
                Recruit
              </p>
              <h2 className="mt-3 text-2xl font-semibold font-display">採用</h2>
              <p className="mt-3 text-sm text-muted">
                募集職種、働き方、応募の流れを掲載しています。
              </p>
              <Link
                href="/recruit"
                className="mt-5 inline-flex rounded-full border border-border bg-white px-4 py-2 text-sm font-semibold transition hover:border-accent hover:text-accent-strong"
              >
                採用ページへ
              </Link>
            </article>
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-6 py-16">
          <SectionCta
            title="プロジェクトの相談・採用応募はこちら"
            body="サービス相談から採用応募まで、用途に応じたフォームをご用意しています。"
          />
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
