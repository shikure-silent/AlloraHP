import Breadcrumbs from "../components/breadcrumbs";
import SectionCta from "../components/section-cta";
import SiteFooter from "../components/site-footer";
import SiteHeader from "../components/site-header";
import { siteData } from "../lib/site-data";

export const metadata = {
  title: "会社情報",
  description: "株式会社Alloraの会社概要と基本情報です。",
};

export default function CompanyPage() {
  return (
    <div className="bg-background text-foreground">
      <SiteHeader />
      <main className="mx-auto w-full max-w-6xl px-6 py-16">
        <Breadcrumbs items={[{ label: "トップ", href: "/" }, { label: "会社情報" }]} />
        <section>
          <p className="text-xs uppercase tracking-[0.3em] text-muted">Company</p>
          <h1 className="mt-3 text-4xl font-semibold text-foreground font-display">
            会社情報
          </h1>
          <p className="mt-4 max-w-2xl text-sm text-muted">
            Web制作・アプリ開発を中心に、設計から実装まで一気通貫で支援しています。
          </p>
        </section>

        <section className="mt-10 rounded-3xl border border-border bg-card p-8 shadow-sm">
          <h2 className="text-xl font-semibold text-foreground">会社概要</h2>
          <dl className="mt-6 space-y-4 text-sm">
            <div className="flex flex-col gap-1 border-b border-dashed border-border pb-3">
              <dt className="text-muted">会社名</dt>
              <dd className="text-foreground">{siteData.company.name}</dd>
            </div>
            <div className="flex flex-col gap-1 border-b border-dashed border-border pb-3">
              <dt className="text-muted">所在地</dt>
              <dd className="text-foreground">{siteData.company.address}</dd>
            </div>
            <div className="flex flex-col gap-1 border-b border-dashed border-border pb-3">
              <dt className="text-muted">電話番号</dt>
              <dd className="text-foreground">{siteData.company.phone}</dd>
            </div>
            <div className="flex flex-col gap-1">
              <dt className="text-muted">メール</dt>
              <dd className="text-foreground">{siteData.company.email}</dd>
            </div>
          </dl>
        </section>

        <section className="mt-10">
          <SectionCta
            title="まずは概要相談から進めたい方へ"
            body="要件が固まっていない段階でもご相談ください。課題整理からご一緒します。"
          />
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
