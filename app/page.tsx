import Link from "next/link";
import Hellscape from "@/components/Hellscape";
import ProjectCard from "@/components/ProjectCard";
import SpikeEdge from "@/components/SpikeEdge";
import { projects } from "@/lib/projects";
import { site } from "@/lib/site";

export default function Home() {
  return (
    <>
      <section className="relative flex min-h-[92svh] items-end">
        <Hellscape />
        <div className="relative z-10 mx-auto w-full max-w-5xl px-6 pt-32 pb-20">
          <h1>
            <span className="sr-only">Hi, I&apos;m </span>
            <span className="wordmark block text-[clamp(5rem,18vw,13rem)] leading-[0.85]">
              {site.name}
            </span>
          </h1>
          <p className="headline mt-4 text-2xl text-bone sm:text-4xl">{site.role}</p>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-bone/90">{site.intro}</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link href="/projects" className="btn btn-blood">
              See my projects
            </Link>
            <a href={site.github} className="btn btn-steel">
              GitHub
            </a>
            {site.cv && (
              <a href={site.cv} className="btn btn-steel">
                CV
              </a>
            )}
          </div>
        </div>
        <SpikeEdge className="absolute bottom-0 translate-y-px" />
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="flex items-end justify-between gap-4 border-b border-blood/60 pb-4">
          <h2 className="headline text-4xl text-bone sm:text-5xl">Selected projects</h2>
          <Link href="/projects" className="font-semibold text-ash hover:text-ember">
            All projects
          </Link>
        </div>
        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {projects.slice(0, 4).map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </>
  );
}
