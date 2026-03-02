import Breadcrumbs from "../components/breadcrumbs";
import SiteFooter from "../components/site-footer";
import SiteHeader from "../components/site-header";
import { siteData } from "../lib/site-data";

export const metadata = {
  title: "プライバシーポリシー",
  description: "株式会社Alloraのプライバシーポリシーです。",
};

export default function PrivacyPage() {
  return (
    <div className="bg-background text-foreground">
      <SiteHeader />
      <main className="mx-auto w-full max-w-4xl px-6 py-16">
        <Breadcrumbs
          items={[{ label: "トップ", href: "/" }, { label: "プライバシーポリシー" }]}
        />
        <section className="rounded-3xl border border-border bg-card p-8 shadow-sm">
          <p className="text-xs uppercase tracking-[0.3em] text-muted">
            Privacy Policy
          </p>
          <h1 className="mt-3 text-3xl font-semibold text-foreground font-display">
            プライバシーポリシー
          </h1>
          <p className="mt-4 text-sm text-muted">
            株式会社Allora（以下「当社」）は、お問い合わせ・採用応募により取得した個人情報を
            以下の方針に基づき適切に取り扱います。
          </p>

          <div className="mt-8 space-y-6 text-sm text-muted">
            <div>
              <h2 className="text-base font-semibold text-foreground">
                取得する情報
              </h2>
              <p className="mt-2">
                氏名、メールアドレス、電話番号、会社名、相談内容、ポートフォリオURLなど、
                フォームに入力いただいた情報を取得します。
              </p>
            </div>
            <div>
              <h2 className="text-base font-semibold text-foreground">
                利用目的
              </h2>
              <p className="mt-2">
                お問い合わせへの回答、採用連絡、サービス向上のための検討に利用します。
              </p>
            </div>
            <div>
              <h2 className="text-base font-semibold text-foreground">
                第三者提供
              </h2>
              <p className="mt-2">
                法令に基づく場合を除き、本人の同意なく第三者に提供することはありません。
              </p>
            </div>
            <div>
              <h2 className="text-base font-semibold text-foreground">
                保存期間
              </h2>
              <p className="mt-2">
                利用目的に必要な期間保存し、不要となった場合は適切な方法で廃棄します。
              </p>
            </div>
            <div>
              <h2 className="text-base font-semibold text-foreground">
                お問い合わせ窓口
              </h2>
              <p className="mt-2">
                本ポリシーに関するお問い合わせは下記までご連絡ください。
              </p>
              <p className="mt-2 text-foreground">
                {siteData.company.name} / {siteData.company.email}
              </p>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
