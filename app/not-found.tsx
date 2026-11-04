import Link from "next/link";
import PageBanner from "@/components/PageBanner";

export default function NotFound() {
  return (
    <>
      <PageBanner title="Page not found" subtitle="That page doesn't exist." />
      <section className="mx-auto max-w-5xl px-6 py-16">
        <Link href="/" className="btn btn-blood">
          Back home
        </Link>
      </section>
    </>
  );
}
