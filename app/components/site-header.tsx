import Image from "next/image";
import Link from "next/link";
import { siteData } from "../lib/site-data";

const navItems = [
  { label: "会社情報", href: "/#company" },
  { label: "サービス", href: "/#services" },
  { label: "実績", href: "/#works" },
  { label: "採用", href: "/#recruit" },
  { label: "お問い合わせ", href: "/contact" },
];

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--line)] bg-[rgba(255,247,241,0.92)] backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-6 px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.svg" alt="Allora logo" width={44} height={44} />
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-medium">{siteData.company.name}</span>
            <span className="text-xs text-(--muted)">
              {siteData.company.nameEn}
            </span>
          </div>
        </Link>
        <nav className="hidden items-center gap-6 text-sm text-(--muted) md:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="transition hover:text-[var(--ink)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center rounded-full bg-[var(--ink)] px-5 py-2 text-sm font-medium text-[var(--paper)] shadow-sm transition hover:bg-[var(--accent-strong)]"
        >
          相談する
        </Link>
      </div>
      <div className="border-t border-[var(--line)] md:hidden">
        <div className="mx-auto w-full max-w-6xl px-6 py-3">
          <nav className="flex items-center gap-4 overflow-x-auto text-xs text-(--muted)">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="whitespace-nowrap transition hover:text-[var(--ink)]"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
