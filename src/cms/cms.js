import CMS from 'netlify-cms-app';
import RecipePreview from './preview-templates/RecipePreview';
import previewStyles from './previewStyles';
import withStyledComponents from './withStyledComponentsRendered';

const isDevelopment = process.env.NODE_ENV === 'development';

if (isDevelopment) {
  window.CMS_ENV = 'localhost_development';
  const fileSystemBackend = require('netlify-cms-backend-fs');
  CMS.registerBackend('file-system', fileSystemBackend);
}

CMS.registerPreviewStyle(previewStyles, { raw: true });
//CMS.registerPreviewTemplate('recept', withStyledComponents(RecipePreview));

CMS.init();
