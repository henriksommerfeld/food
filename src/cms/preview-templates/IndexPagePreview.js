import React from 'react';
import { IndexPageTemplate } from '../../templates/index-page-template';
import { toJsSafe } from '../toJsSafe';

const IndexPagePreview = ({ entry, widgetFor }) => {
  const dataRaw = entry.getIn(['data']);
  const data = toJsSafe(dataRaw);

  if (!data) return <div>Loading...</div>;

  return (
    <IndexPageTemplate
      image={data.image}
      heading={data.heading}
      subheading={data.subheading}
      description={widgetFor('body')}
      isPreview={true}
    />
  );
};

export default IndexPagePreview;
