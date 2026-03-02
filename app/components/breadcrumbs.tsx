import Link from "next/link";

type Crumb = {
  label: string;
  href?: string;
};

type BreadcrumbsProps = {
  items: Crumb[];
};

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="パンくず" className="mb-6">
      <ol className="flex flex-wrap items-center gap-2 text-xs text-muted">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={`${item.label}-${index}`} className="flex items-center gap-2">
              {index > 0 ? <span aria-hidden>›</span> : null}
              {isLast || !item.href ? (
                <span aria-current={isLast ? "page" : undefined}>{item.label}</span>
              ) : (
                <Link href={item.href} className="hover:text-foreground">
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
