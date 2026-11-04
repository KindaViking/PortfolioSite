import Link from "next/link";
import { site } from "@/lib/site";

const links = [
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
];

export default function Nav() {
  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
        <Link href="/" className="wordmark text-2xl leading-none whitespace-nowrap sm:text-3xl">
          {site.name}
        </Link>
        <ul className="flex gap-4 text-sm font-semibold text-bone sm:gap-6 sm:text-base">
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="hover:text-ember">
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <a href={site.github} className="hover:text-ember">
              GitHub
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
