import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DesignSwitcher } from "@/components/designs/parts";
import { designComponents } from "@/components/designs/registry";
import { designBySlug, designs } from "@/lib/designs";

export function generateStaticParams() {
  return designs.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const design = designBySlug.get(slug);
  if (!design) return { title: "Không tìm thấy mẫu" };
  return {
    title: `${design.name} — ${design.style} | AEROTECH`,
    description: design.description,
  };
}

export default async function DesignPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const design = designBySlug.get(slug);
  const Component = designComponents[slug];
  if (!design || !Component) notFound();

  return (
    <>
      <Component />
      <DesignSwitcher designs={designs} current={slug} themeClass={design.themeClass} />
    </>
  );
}
