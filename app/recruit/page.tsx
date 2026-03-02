import Link from "next/link";
import Breadcrumbs from "../components/breadcrumbs";
import SectionCta from "../components/section-cta";
import SiteFooter from "../components/site-footer";
import SiteHeader from "../components/site-header";
import { siteData } from "../lib/site-data";

export const metadata = {
  title: "採用",
  description: "株式会社Alloraの採用情報と募集概要です。",
};

export default function RecruitPage() {
  return (
    <div className="bg-background text-foreground">
      <SiteHeader />
      <main className="mx-auto w-full max-w-6xl px-6 py-16">
        <Breadcrumbs items={[{ label: "トップ", href: "/" }, { label: "採用" }]} />
        <section>
          <p className="text-xs uppercase tracking-[0.3em] text-muted">Recruit</p>
          <h1 className="mt-3 text-4xl font-semibold text-foreground font-display">
            採用情報
          </h1>
          <p className="mt-4 max-w-2xl text-sm text-muted">
            カジュアル面談から応募まで、まずは気軽にご連絡ください。
          </p>
        </section>

        <section className="mt-10 rounded-[40px] border border-border bg-surface p-10 shadow-sm">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <h2 className="text-3xl font-semibold text-foreground font-display">
                {siteData.recruit.headline}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                {siteData.recruit.description}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {siteData.recruit.style.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-white px-3 py-1 text-xs text-muted"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-3xl bg-white p-6">
              <h3 className="text-sm font-semibold text-foreground">募集職種</h3>
              <ul className="mt-4 space-y-2 text-sm text-muted">
                {siteData.recruit.roles.map((role) => (
                  <li key={role} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent" />
                    <span>{role}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-xs text-muted">
                雇用形態: {siteData.recruit.employment}
              </p>
              <Link
                href="/contact/recruit"
                className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-foreground px-4 py-3 text-sm font-semibold text-background transition hover:bg-accent-strong"
              >
                採用フォームへ
              </Link>
            </div>
          </div>
        </section>

        <section className="mt-10">
          <SectionCta
            title="採用について詳しく話す"
            body="応募前のカジュアル面談にも対応しています。働き方や業務内容をすり合わせましょう。"
            primaryHref="/contact/recruit"
            primaryLabel="採用フォーム"
            secondaryHref="/contact"
            secondaryLabel="仕事相談フォーム"
          />
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
