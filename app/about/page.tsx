import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import { site } from "@/lib/site";
import { tools } from "@/lib/tools";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <>
      <PageBanner title="About me" />

      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="max-w-[65ch] space-y-5 text-lg leading-relaxed">
          <p>
            I&apos;m {site.name}, a first-year student on the Immersive Software Engineering
            programme, working towards a career in software development.
          </p>
          <p>
            I enjoy understanding how things work underneath. That has meant reading Linux system
            data straight from the kernel&apos;s virtual filesystems, and taking a blog all the way
            from local development through Docker to two separate AWS deployments with automated
            testing.
          </p>
          {/* TODO: add a few sentences in your own words: what you're into, what you want to work on next */}
        </div>

        <h2 className="headline mt-16 text-4xl text-bone">Tools I use</h2>
        <ul className="mt-6 flex max-w-3xl flex-wrap gap-2">
          {tools.map((t) => (
            <li key={t} className="btn btn-steel py-1.5 text-sm">
              {t}
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
