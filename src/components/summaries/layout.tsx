import Link from "next/link";
import type { HTMLAttributes, ReactNode } from "react";

import { type Subjects, SubjectConfig } from "@/config/subjects";
import type { ArticleMeta } from "@/lib/articles";
import { getJSONLD } from "@/lib/articles";

export default function SummaryLayout(
  props: {
    children: ReactNode;
    meta: ArticleMeta;
    subject: Subjects;
    next?: ArticleMeta;
    prev?: ArticleMeta;
  } & HTMLAttributes<HTMLDivElement>
) {
  const subjectConfig = SubjectConfig[props.subject];

  if (!subjectConfig) {
    throw Error("unknown subject"); // todo UnknownSubjectError
  }

  return (
    <article className="markdown line-numbers">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getJSONLD(props.meta)),
        }}
      />
      <div>
        <h1 className="inline text-2xl font-bold">{props.meta.meta.title}</h1> |{" "}
        <Link href={subjectConfig.articlesURL}>Back to Overview</Link>
      </div>

      <div
        className={`wrapper m-4 border-1 border-gray-600 p-4 pb-8 lg:px-8 ${props.className}`}
        {...props}
      >
        {props.children}
      </div>

      <div>
        <Link href={subjectConfig.articlesURL}>Back to Overview</Link>{" "}
        {props.prev != null ? (
          <>
            | Vorheriges:{" "}
            <Link href={`${subjectConfig.articlesURL}/${props.prev?.slug}`}>
              {props.prev?.meta.title}
            </Link>{" "}
          </>
        ) : (
          <></>
        )}
        {props.next != null ? (
          <>
            | Nächstes:{" "}
            <Link href={`${subjectConfig.articlesURL}/${props.next?.slug}`}>
              {props.next?.meta.title}
            </Link>{" "}
          </>
        ) : (
          <></>
        )}
      </div>
    </article>
  );
}
