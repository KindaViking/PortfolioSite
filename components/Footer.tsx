import Year from "@/components/Year";
import { projects } from "@/lib/projects";
import { site } from "@/lib/site";
import { tools } from "@/lib/tools";

// A status-bar footer in the spirit of an old-school FPS HUD.
// The counts come from the site's real data, so they stay accurate as you add things.
function Readout({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="flex flex-col items-center justify-center border-r border-black/60 px-4 py-3 last:border-r-0">
      <span className="font-hud text-3xl leading-none text-blood sm:text-4xl">{value}</span>
      <span className="mt-1.5 text-xs font-bold tracking-wide text-ash">{label}</span>
    </div>
  );
}

export default function Footer() {
  const contacts = [
    { href: site.github, label: "GitHub", color: "#3d6ee0" },
    { href: site.linkedin, label: "LinkedIn", color: "#e0b33d" },
    { href: site.email ? `mailto:${site.email}` : "", label: "Email", color: "#c8161d" },
  ].filter((c) => c.href);

  return (
    <footer className="mt-auto">
      <div className="panel border-x-0 border-b-0">
        <div className="mx-auto grid max-w-5xl grid-cols-3 sm:grid-cols-[1fr_1fr_1fr_1.4fr]">
          <Readout label="Projects" value={projects.length} />
          <Readout label="Tools" value={tools.length} />
          <Readout label="Year" value={1} />
          <div className="col-span-3 flex flex-col items-center justify-center gap-2 border-t border-black/60 px-4 py-3 sm:col-span-1 sm:border-t-0">
            <ul className="flex gap-3">
              {contacts.map((c) => (
                <li key={c.label}>
                  <a
                    href={c.href}
                    className="flex items-center gap-1.5 text-sm font-semibold text-bone hover:text-ember"
                  >
                    <span
                      aria-hidden="true"
                      className="inline-block h-3 w-2 rounded-[2px]"
                      style={{ background: c.color, boxShadow: `0 0 6px ${c.color}` }}
                    />
                    {c.label}
                  </a>
                </li>
              ))}
            </ul>
            <span className="text-xs text-ash">
              © <Year /> {site.fullName}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
