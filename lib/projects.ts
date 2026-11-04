export type Project = {
  slug: string;
  title: string;
  tagline: string;
  summary: string;
  details: string[];
  tech: string[];
  repo?: string;
  live?: string;
};

// Add, remove or reorder projects here. Every page reads from this list.
export const projects: Project[] = [
  {
    slug: "systemfetch",
    title: "SystemFetch",
    tagline: "A Linux system fetch tool in Java, built from the kernel up.",
    summary:
      "A collaborative Java project that reports live system information on Linux by reading /proc and /sys directly, with no monitoring library in between.",
    details: [
      "Reads CPU, memory and hardware data straight from the /proc and /sys virtual filesystems instead of relying on a library like OSHI.",
      "Produces a live-updating report, including a per-CPU usage bar chart rendered as SVG on an HTML page.",
      "Built collaboratively on GitHub.",
    ],
    tech: ["Java", "Linux", "/proc & /sys", "SVG"],
    repo: "https://github.com/KindaViking/SystemFetch",
  },
  {
    slug: "space-blog",
    title: "Space Blog",
    tagline: "A space-themed Astro blog with a full CI/CD pipeline on AWS.",
    summary:
      "A space-themed blog about rovers and space tech, built with Astro and deployed two ways: as a static site and as a server-rendered container.",
    details: [
      "Static build served from AWS S3 and CloudFront, provisioned with the AWS CDK.",
      "Server-side rendered version running as a Docker container on AWS ECS, deployed by its own workflow.",
      "GitHub Actions pipelines for CI, Playwright end-to-end tests and deployment, with Dependabot keeping dependencies up to date.",
    ],
    tech: ["Astro", "Docker", "AWS ECS", "S3 & CloudFront", "AWS CDK", "GitHub Actions", "Playwright"],
    repo: "https://github.com/KindaViking/cs4421-astro-blog",
  },
  {
    slug: "hashedblock",
    title: "HashedBlock",
    tagline: "A crypto education platform, built for the Whop hackathon.",
    summary:
      "My Whopathon entry: a platform that teaches beginners how the blockchain actually works, while still catering to more technical learners.",
    details: [
      "A one-time course covering blockchain fundamentals.",
      "A subscription tier with ongoing Bitcoin tools, such as wallet building.",
      "A deliberately soft, pastel design so the subject feels approachable rather than intimidating.",
    ],
    tech: ["Whop", "Web design", "Product design"],
    live: "https://hashed-block.whop.site",
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
