import Link from "next/link";
import type { Project } from "@/lib/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/projects/${project.slug}`} className="panel group block p-6 pt-7">
      <h3 className="headline text-3xl text-bone group-hover:text-blood">{project.title}</h3>
      <p className="mt-3 text-ash">{project.tagline}</p>
      <ul className="mt-5 flex flex-wrap gap-x-4 gap-y-1 text-sm font-semibold text-ember">
        {project.tech.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>
    </Link>
  );
}
