import Link from "next/link";
import { siteData } from "../lib/site-data";

export default function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-xs text-muted">
            © {currentYear} {siteData.company.name}
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-4 text-sm text-muted">
          <Link href="/company" className="transition hover:text-foreground">
            会社情報
          </Link>
          <Link href="/services" className="transition hover:text-foreground">
            サービス
          </Link>
          <Link href="/works" className="transition hover:text-foreground">
            実績
          </Link>
          <Link href="/recruit" className="transition hover:text-foreground">
            採用
          </Link>
          <Link href="/privacy" className="transition hover:text-foreground">
            プライバシーポリシー
          </Link>
          <Link href="/contact" className="transition hover:text-foreground">
            お問い合わせ
          </Link>
        </div>
      </div>
    </footer>
  );
}
