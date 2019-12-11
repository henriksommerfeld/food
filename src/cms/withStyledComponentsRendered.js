import React, { useState, useEffect } from 'react';
import { StyleSheetManager } from 'styled-components';
import { GlobalStyles } from '../global-styles';

function StyleInjector({ children }) {
  const [iframeRef, setIframeRef] = useState(null);

  useEffect(() => {
    const iframes = document.getElementsByTagName('iframe');
    const previewIframe = Array.from(iframes).find(x => {
      return x.className.includes('PreviewPaneFrame');
    });
    const iframeHeadElem = previewIframe.contentDocument.head;
    setIframeRef(iframeHeadElem);
  }, []);

  return (
    iframeRef && (
      <StyleSheetManager target={iframeRef}>{children}</StyleSheetManager>
    )
  );
}

export default function withStyledComponents(Comp) {
  const renderWithStyle = props => (
    <StyleInjector>
      <>
        <GlobalStyles />
        <Comp {...props} />
      </>
    </StyleInjector>
  );

  return renderWithStyle;
}
