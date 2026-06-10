import { createFileRoute, notFound } from "@tanstack/react-router";
import { CaseStudyPage } from "@/components/CaseStudyPage";
import { getCaseStudy } from "@/lib/caseStudies";

export const Route = createFileRoute("/case-studies/$slug")({
  component: Page,
  loader: ({ params }) => {
    const cs = getCaseStudy(params.slug);
    if (!cs) throw notFound();
    return { cs };
  },
  head: ({ loaderData, params }) => {
    const cs = loaderData?.cs;
    const title = cs ? `${cs.shortTitle} — Voxen Case Study` : "Case Study — Voxen";
    const desc = cs?.summary ?? "Voxen case study.";
    const url = `https://voxen-vision-vortex.lovable.app/case-studies/${params.slug}`;
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:type", content: "article" },
        { property: "og:url", content: url },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: cs ? [{
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: cs.title,
          description: cs.summary,
          about: cs.industry,
          keywords: cs.technologies.join(", "),
        }),
      }] : [],
    };
  },
  notFoundComponent: () => (
    <div style={{ minHeight: "60vh", display: "flex", alignItems: "center", justifyContent: "center", color: "#E9D5FF", background: "#0f172a" }}>
      Case study not found.
    </div>
  ),
});

function Page() {
  const { cs } = Route.useLoaderData();
  return <CaseStudyPage cs={cs} />;
}
