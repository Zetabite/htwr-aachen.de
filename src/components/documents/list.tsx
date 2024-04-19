import { join } from "path";

import type { Subjects } from "@/config/subjects";
import { SubjectConfig } from "@/config/subjects";
import { includeLocalDocuments } from "@/lib/documents";
import urlJoin from "@/lib/url";

import type { BaseDocumentListProps } from "./list-ui";
import { BaseDocumentList } from "./list-ui";

/**
 * A component to include local documents from this next server
 */
export async function DocumentList({
  path,
  ...props
}: { path: string } & BaseDocumentListProps) {
  const collection = await includeLocalDocuments(
    path,
    urlJoin("/content-assets", path),
    true
  );
  return <BaseDocumentList docs={collection} {...props}></BaseDocumentList>;
}

/**
 * A convinience component to get the DocumentList with the subjects configured name and path
 * @param props.subject - the subject to show documents for
 * @param props.subpath - join/append this to the root dir of the path
 */
export async function SubjectDocumentList({
  subject,
  subpath = "",
  ...props
}: {
  subject: Subjects;
  subpath?: string;
} & BaseDocumentListProps) {
  return (
    <DocumentList
      path={join(SubjectConfig[subject].name, subpath)}
      {...props}
    ></DocumentList>
  );
}
