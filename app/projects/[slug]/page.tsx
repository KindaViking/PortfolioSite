import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageBanner from "@/components/PageBanner";
import { getProject, projects } from "@/lib/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  return project ? { title: project.title, description: project.tagline } : {};
}

export default async function ProjectPage({ params }: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <>
      <PageBanner title={project.title} subtitle={project.tagline}>
        <Link
          href="/projects"
          className="mb-6 inline-block font-semibold text-bone/80 hover:text-ember"
        >
          ← All projects
        </Link>
      </PageBanner>

      <section className="mx-auto grid max-w-5xl gap-10 px-6 py-16 md:grid-cols-[1fr_17rem]">
        <article>
          <p className="max-w-[65ch] text-lg leading-relaxed">{project.summary}</p>

          <h2 className="headline mt-12 text-3xl text-bone">Highlights</h2>
          <ul className="mt-5 max-w-[65ch] space-y-4">
            {project.details.map((d) => (
              <li key={d} className="flex gap-4 leading-relaxed">
                <span
                  aria-hidden="true"
                  className="mt-2 h-2.5 w-2.5 shrink-0 rotate-45 bg-blood"
                />
                <span>{d}</span>
              </li>
            ))}
          </ul>
        </article>

        <aside className="panel h-fit p-6 pt-7">
          <h2 className="headline text-2xl text-blood">Built with</h2>
          <ul className="mt-4 space-y-1.5 font-semibold">
            {project.tech.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
          {(project.repo || project.live) && (
            <div className="mt-7 flex flex-col gap-3">
              {project.repo && (
                <a href={project.repo} className="btn btn-blood justify-center">
                  View code
                </a>
              )}
              {project.live && (
                <a href={project.live} className="btn btn-steel justify-center">
                  Visit site
                </a>
              )}
            </div>
          )}
        </aside>
      </section>
    </>
  );
}
