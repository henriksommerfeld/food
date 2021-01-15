import CMS from 'netlify-cms-app';
import RecipePreview from './preview-templates/RecipePreview';
import previewStyles from './previewStyles';
import withStyledComponents from './withStyledComponentsRendered';

CMS.registerPreviewStyle(previewStyles, { raw: true });
CMS.registerPreviewTemplate('recept', withStyledComponents(RecipePreview));

CMS.init();
