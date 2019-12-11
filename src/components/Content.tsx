import React, { ReactElement } from 'react';

interface Content {
  content: string;
  props?: any[];
}

export default function Content({ content, ...props }: Content): ReactElement {
  return <div {...props}>{content}</div>;
}

export function HTMLContent({ content, ...props }: Content): ReactElement {
  return <div {...props} dangerouslySetInnerHTML={{ __html: content }} />;
}
