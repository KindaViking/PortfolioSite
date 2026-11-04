import type { IconType } from "react-icons";
import { FaFilePdf, FaGithub, FaLinkedin } from "react-icons/fa6";
import { site } from "@/lib/site";

type ProfileLink = {
  href: string;
  label: string;
  icon: IconType;
  external: boolean;
};

// Big riveted-steel tiles linking to GitHub, LinkedIn and the CV.
// A tile only appears when its link is set in lib/site.ts.
export default function ProfileLinks() {
  const links: ProfileLink[] = [
    { href: site.github, label: "GitHub", icon: FaGithub, external: true },
    { href: site.linkedin, label: "LinkedIn", icon: FaLinkedin, external: true },
    { href: site.cv, label: "CV", icon: FaFilePdf, external: false },
  ].filter((link) => link.href);

  return (
    <ul className="flex flex-wrap gap-3 sm:gap-4">
      {links.map(({ href, label, icon: Icon, external }) => (
        <li key={label}>
          <a
            href={href}
            {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className="panel group flex h-24 w-24 flex-col items-center justify-center gap-2 text-bone sm:h-32 sm:w-32"
          >
            <Icon
              aria-hidden="true"
              className="h-10 w-10 transition-colors group-hover:text-blood sm:h-14 sm:w-14"
            />
            <span className="text-sm font-extrabold tracking-wide group-hover:text-ember">
              {label}
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
}
