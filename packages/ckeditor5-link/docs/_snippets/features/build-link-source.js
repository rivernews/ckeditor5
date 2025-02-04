/**
 * @license Copyright (c) 2003-2022, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* globals window */

import ClassicEditor from '@ckeditor/ckeditor5-build-classic/src/ckeditor';
import { CS_CONFIG } from '@ckeditor/ckeditor5-cloud-services/tests/_utils/cloud-services-config';
import AutoLink from '@ckeditor/ckeditor5-link/src/autolink';

window.CKEditorPlugins = {
	AutoLink
};

window.ClassicEditor = ClassicEditor;
window.CS_CONFIG = CS_CONFIG;
