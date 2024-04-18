import type { Metadata } from "next";

import RossmanithQuiz from "@/components/summaries/components/quizzes/Rossmanith";
import SummaryView from "@/components/summaries/view";
import type { Subjects } from "@/config/subjects";
import { getSummariesMetadata, getSummary } from "@/lib/summaries";

const subject: Subjects = "buk";

export default async function Page({ params }: { params: { slug: string[] } }) {
  return (
    <div>
      <SummaryView
        subject={subject}
        slug={params.slug}
        components={{ RossmanithQuiz }}
      ></SummaryView>
    </div>
  );
}

export async function generateStaticParams() {
  const teachings = await getSummariesMetadata(subject);

  return teachings.map((t) => ({
    slug: t.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string[] };
}): Promise<Metadata> {
  const { meta, url } = await getSummary(params.slug, subject);

  return {
    title: meta.fullTitle,
    description: meta.description,
    twitter: {
      title: meta.fullTitle,
      description: meta.description,
      images: meta.images.map((image) => ({
        url: image.src,
      })),
      card: "summary",
    },
    authors: meta.authors.map((x) => ({ name: x })),
    alternates: {
      canonical: url,
    },
  };
}
