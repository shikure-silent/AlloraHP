import Link from "next/link";
import SiteFooter from "../../components/site-footer";
import SiteHeader from "../../components/site-header";
import { siteData } from "../../lib/site-data";

export const metadata = {
  title: "お問い合わせ（採用）",
  description: "採用応募のフォームはこちらから。",
};

const inputBase =
  "w-full rounded-2xl border border-[var(--line)] bg-white/90 px-4 py-3 text-sm text-[var(--ink)] shadow-sm transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]";

export default function RecruitContactPage() {
  return (
    <div className="bg-[var(--paper)] text-[var(--ink)]">
      <SiteHeader />
      <main className="mx-auto w-full max-w-6xl px-6 py-16">
        <section className="mb-12">
          <p className="text-xs uppercase tracking-[0.3em] text-(--muted)">
            Contact
          </p>
          <h1 className="mt-3 text-4xl font-semibold text-[var(--ink)] font-[family:var(--font-display)]">
            採用お問い合わせ
          </h1>
          <p className="mt-4 max-w-2xl text-sm text-(--muted)">
            カジュアル面談や採用応募はこちらからご連絡ください。
          </p>
          <p className="mt-2 text-sm text-(--muted)">
            {siteData.contact.responseNote}
          </p>
        </section>

        <div className="mb-10 flex flex-wrap gap-3">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full border border-[var(--line)] px-5 py-2 text-xs font-semibold text-(--muted) transition hover:border-[var(--accent)] hover:text-[var(--accent-strong)]"
          >
            仕事依頼フォーム
          </Link>
          <span className="inline-flex items-center justify-center rounded-full bg-[var(--ink)] px-5 py-2 text-xs font-semibold text-[var(--paper)]">
            採用フォーム
          </span>
        </div>

        <section
          id="recruit-form"
          className="rounded-3xl border border-[var(--line)] bg-[var(--paper-muted)] p-8 shadow-sm"
        >
          <h2 className="text-xl font-semibold text-[var(--ink)]">
            採用フォーム
          </h2>
          <p className="mt-2 text-sm text-(--muted)">
            カジュアル面談や応募のご連絡はこちらから。
          </p>
          <form className="mt-6 space-y-5">
            <input
              type="text"
              name="fax"
              tabIndex={-1}
              autoComplete="off"
              className="hidden"
            />
            <div>
              <label
                htmlFor="recruit-name"
                className="text-xs font-medium text-(--muted)"
              >
                お名前（必須）
              </label>
              <input
                className={inputBase}
                id="recruit-name"
                name="name"
                required
                placeholder="山田 太郎"
              />
            </div>
            <div>
              <label
                htmlFor="recruit-email"
                className="text-xs font-medium text-(--muted)"
              >
                メールアドレス（必須）
              </label>
              <input
                className={inputBase}
                type="email"
                id="recruit-email"
                name="email"
                required
                placeholder="example@email.com"
              />
            </div>
            <div>
              <label
                htmlFor="recruit-role"
                className="text-xs font-medium text-(--muted)"
              >
                希望職種（任意）
              </label>
              <select className={inputBase} id="recruit-role" name="role">
                <option value="">選択してください</option>
                {siteData.contact.recruitRoles.map((role) => (
                  <option key={role} value={role}>
                    {role}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label
                htmlFor="recruit-portfolio"
                className="text-xs font-medium text-(--muted)"
              >
                ポートフォリオURL（任意）
              </label>
              <input
                className={inputBase}
                type="url"
                id="recruit-portfolio"
                name="portfolio"
                placeholder="https://"
              />
            </div>
            <div>
              <label
                htmlFor="recruit-message"
                className="text-xs font-medium text-(--muted)"
              >
                メッセージ（必須）
              </label>
              <textarea
                className={`${inputBase} min-h-[140px]`}
                id="recruit-message"
                name="message"
                required
                maxLength={2000}
                placeholder="ご経験やご希望の働き方などをお聞かせください。"
              />
            </div>
            <div className="flex items-start gap-3 text-xs text-(--muted)">
              <input type="checkbox" required className="mt-1" />
              <span>
                <Link
                  href="/privacy"
                  className="font-medium text-[var(--ink)] underline-offset-2 hover:underline"
                >
                  プライバシーポリシー
                </Link>
                に同意します。
              </span>
            </div>
            <button
              type="submit"
              className="mt-2 inline-flex w-full items-center justify-center rounded-full bg-[var(--ink)] px-5 py-3 text-sm font-semibold text-[var(--paper)] transition hover:bg-[var(--accent-strong)]"
            >
              送信する
            </button>
            <p className="text-xs text-(--muted)">
              送信後は担当者よりメールでご連絡します。
            </p>
          </form>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
