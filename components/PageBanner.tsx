import Flier from "@/components/Flier";
import SpikeEdge from "@/components/SpikeEdge";

// The burning strip at the top of inner pages, a smaller echo of the home page hero.
export default function PageBanner({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#000_0%,#3a0607_45%,#a3260f_85%,#e8651a_100%)]">
      <Flier top="34%" size={40} duration={28} delay={2} />
      <Flier top="58%" size={26} duration={36} delay={14} reverse />
      <div className="relative mx-auto max-w-5xl px-6 pt-16 pb-14 sm:pt-24">
        {children}
        <h1 className="headline text-5xl text-bone sm:text-7xl">{title}</h1>
        {subtitle && <p className="mt-4 max-w-2xl text-lg text-bone/85">{subtitle}</p>}
      </div>
      <SpikeEdge className="absolute bottom-0 translate-y-px" />
    </section>
  );
}
