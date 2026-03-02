import Breadcrumbs from "../components/breadcrumbs";
import SectionCta from "../components/section-cta";
import SiteFooter from "../components/site-footer";
import SiteHeader from "../components/site-header";
import { siteData } from "../lib/site-data";

export const metadata = {
  title: "実績",
  description: "株式会社Alloraのプロジェクト実績を紹介します。",
};

export default function WorksPage() {
  return (
    <div className="bg-background text-foreground">
      <SiteHeader />
      <main className="mx-auto w-full max-w-6xl px-6 py-16">
        <Breadcrumbs items={[{ label: "トップ", href: "/" }, { label: "実績" }]} />
        <section>
          <p className="text-xs uppercase tracking-[0.3em] text-muted">Works</p>
          <h1 className="mt-3 text-4xl font-semibold text-foreground font-display">
            実績
          </h1>
          <p className="mt-4 max-w-2xl text-sm text-muted">
            進行中・公開中のプロジェクトを掲載しています。
          </p>
        </section>

        <section className="mt-10 space-y-6">
          {siteData.works.projects.map((project) => (
            <article
              key={project.id}
              className="rounded-3xl border border-border bg-card p-8 shadow-sm"
            >
              <div className="flex flex-wrap items-center gap-3">
                <h2 className="text-2xl font-semibold text-foreground font-display">
                  {project.title}
                </h2>
                <span className="rounded-full border border-border px-3 py-1 text-xs text-muted">
                  {project.status}
                </span>
              </div>
              <p className="mt-4 text-sm text-muted">{project.description}</p>
              <a
                href={project.url}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-full border border-border bg-white px-5 py-2 text-xs font-semibold text-foreground shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                {project.urlLabel}
                <span aria-hidden className="text-sm">
                  ↗
                </span>
              </a>
              <div className="mt-6">
                <p className="text-sm font-semibold text-foreground">担当領域</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.roles.map((role) => (
                    <span
                      key={role}
                      className="rounded-full bg-surface px-3 py-1 text-xs text-muted"
                    >
                      {role}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-6">
                <p className="text-sm font-semibold text-foreground">技術要素</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-accent-soft px-3 py-1 text-xs font-semibold text-accent-strong"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
          <p className="text-xs text-muted">{siteData.works.note}</p>
        </section>

        <section className="mt-10">
          <SectionCta
            title="同様の開発事例を相談する"
            body="用途や予算感に近い事例をベースに、進め方を具体化できます。"
          />
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
