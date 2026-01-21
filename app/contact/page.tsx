import Link from "next/link";
import SiteFooter from "../components/site-footer";
import SiteHeader from "../components/site-header";
import { siteData } from "../lib/site-data";

export const metadata = {
  title: "お問い合わせ（仕事依頼）",
  description: "仕事依頼のフォームはこちらから。",
};

const inputBase =
  "w-full rounded-2xl border border-[var(--line)] bg-white/90 px-4 py-3 text-sm text-[var(--ink)] shadow-sm transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]";

export default function ContactPage() {
  return (
    <div className="bg-[var(--paper)] text-[var(--ink)]">
      <SiteHeader />
      <main className="mx-auto w-full max-w-6xl px-6 py-16">
        <section className="mb-12">
          <p className="text-xs uppercase tracking-[0.3em] text-(--muted)">
            Contact
          </p>
          <h1 className="mt-3 text-4xl font-semibold text-[var(--ink)] font-[family:var(--font-display)]">
            お問い合わせ
          </h1>
          <p className="mt-4 max-w-2xl text-sm text-(--muted)">
            仕事依頼はこちらのフォームからご連絡ください。
          </p>
          <p className="mt-2 text-sm text-(--muted)">
            {siteData.contact.responseNote}
          </p>
        </section>

        <div className="mb-10 flex flex-wrap gap-3">
          <span className="inline-flex items-center justify-center rounded-full bg-[var(--ink)] px-5 py-2 text-xs font-semibold text-[var(--paper)]">
            仕事依頼フォーム
          </span>
          <Link
            href="/contact/recruit"
            className="inline-flex items-center justify-center rounded-full border border-[var(--line)] px-5 py-2 text-xs font-semibold text-(--muted) transition hover:border-[var(--accent)] hover:text-[var(--accent-strong)]"
          >
            採用フォーム
          </Link>
        </div>

        <div className="flex flex-col gap-10 lg:gap-12">
          <section
            id="work-form"
            className="rounded-3xl border border-[var(--line)] bg-[var(--card)] p-8 shadow-sm"
          >
            <h2 className="text-xl font-semibold text-[var(--ink)]">
              仕事依頼フォーム
            </h2>
            <p className="mt-2 text-sm text-(--muted)">
              Web制作やアプリ開発のご相談はこちらから。
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
                  htmlFor="work-name"
                  className="text-xs font-medium text-(--muted)"
                >
                  お名前（必須）
                </label>
                <input
                  className={inputBase}
                  id="work-name"
                  name="name"
                  required
                  placeholder="山田 太郎"
                />
              </div>
              <div>
                <label
                  htmlFor="work-company"
                  className="text-xs font-medium text-(--muted)"
                >
                  会社名（任意）
                </label>
                <input
                  className={inputBase}
                  id="work-company"
                  name="company"
                  placeholder="株式会社〇〇"
                />
              </div>
              <div>
                <label
                  htmlFor="work-email"
                  className="text-xs font-medium text-(--muted)"
                >
                  メールアドレス（必須）
                </label>
                <input
                  className={inputBase}
                  type="email"
                  id="work-email"
                  name="email"
                  required
                  placeholder="example@email.com"
                />
              </div>
              <div>
                <label
                  htmlFor="work-tel"
                  className="text-xs font-medium text-(--muted)"
                >
                  電話番号（任意）
                </label>
                <input
                  className={inputBase}
                  type="tel"
                  id="work-tel"
                  name="tel"
                  placeholder="000-0000-0000"
                />
              </div>
              <div>
                <label
                  htmlFor="work-type"
                  className="text-xs font-medium text-(--muted)"
                >
                  依頼種別（必須）
                </label>
                <select
                  className={inputBase}
                  id="work-type"
                  name="type"
                  required
                >
                  <option value="">選択してください</option>
                  {siteData.contact.workTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label
                  htmlFor="work-message"
                  className="text-xs font-medium text-(--muted)"
                >
                  相談内容（必須）
                </label>
                <textarea
                  className={`${inputBase} min-h-[140px]`}
                  id="work-message"
                  name="message"
                  required
                  maxLength={2000}
                  placeholder="ご相談内容、希望時期、予算感などをお聞かせください。"
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
                className="mt-2 inline-flex w-full items-center justify-center rounded-full bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[var(--accent-strong)]"
              >
                送信する
              </button>
              <p className="text-xs text-(--muted)">
                送信後は担当者よりメールでご連絡します。
              </p>
            </form>
          </section>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
