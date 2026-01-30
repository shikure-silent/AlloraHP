import Link from "next/link";
import { siteData } from "../lib/site-data";

export default function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm text-muted">{siteData.footer.message}</p>
          <p className="mt-2 text-xs text-muted">
            © {currentYear} {siteData.company.name}
          </p>
        </div>
        <div className="flex items-center gap-6 text-sm text-muted">
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
