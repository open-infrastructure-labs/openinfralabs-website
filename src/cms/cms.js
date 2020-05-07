import CMS from 'netlify-cms-app'

import BlogPostPreview from './preview-templates/BlogPostPreview'
import IndexPagePreview from './preview-templates/IndexPagePreview'

import { Widget as FileRelationWidget } from '@ncwidgets/file-relation'
import { Widget as IdWidget } from '@ncwidgets/id'

CMS.registerWidget(IdWidget)
CMS.registerWidget(FileRelationWidget)

CMS.registerPreviewStyle('style/styles.scss');

CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('blog', BlogPostPreview)