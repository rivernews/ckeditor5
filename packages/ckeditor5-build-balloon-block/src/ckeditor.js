/**
 * @license Copyright (c) 2003-2022, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

// The editor creator to use.
import BalloonEditorBase from '@ckeditor/ckeditor5-editor-balloon/src/ballooneditor';

import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import UploadAdapter from '@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment'; // https://ckeditor.com/docs/ckeditor5/latest/features/text-alignment.html
import BlockToolbar from '@ckeditor/ckeditor5-ui/src/toolbar/block/blocktoolbar';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import Strikethrough from '@ckeditor/ckeditor5-basic-styles/src/strikethrough';
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote';
import Code from '@ckeditor/ckeditor5-basic-styles/src/code';
// import CKFinder from '@ckeditor/ckeditor5-ckfinder/src/ckfinder';
import EasyImage from '@ckeditor/ckeditor5-easy-image/src/easyimage';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import Image from '@ckeditor/ckeditor5-image/src/image';
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle';
import ImageResize from '@ckeditor/ckeditor5-image/src/imageresize';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar';
import InsertUrlImage from './insert-image-by-url/insert-image-by-url';
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload';
import Indent from '@ckeditor/ckeditor5-indent/src/indent';
import Link from '@ckeditor/ckeditor5-link/src/link';
import List from '@ckeditor/ckeditor5-list/src/list';
import TodoList from '@ckeditor/ckeditor5-list/src/todolist'; // https://ckeditor.com/docs/ckeditor5/latest/features/todo-lists.html
import MediaEmbed from '@ckeditor/ckeditor5-media-embed/src/mediaembed';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
// import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice';
import Table from '@ckeditor/ckeditor5-table/src/table';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar';
import TextTransformation from '@ckeditor/ckeditor5-typing/src/texttransformation';
import CloudServices from '@ckeditor/ckeditor5-cloud-services/src/cloudservices';
import KeyboardShortcuts from './keyboard-shortcut/keyboard-shortcuts';

import '../theme/theme.css';

export default class BalloonEditor extends BalloonEditorBase {}

// Plugins to include in the build.
BalloonEditor.builtinPlugins = [
	Essentials,
	UploadAdapter,
	Autoformat,
	BlockToolbar,
	Alignment,
	Bold,
	Italic,
	Strikethrough,
	Code,
	BlockQuote,
	// CKFinder,
	CloudServices,
	EasyImage,
	Heading,
	Image,
	ImageCaption,
	ImageStyle,
	ImageResize,
	ImageToolbar,
	ImageUpload,
	Indent,
	Link,
	List,
	TodoList,
	MediaEmbed,
	InsertUrlImage,
	Paragraph,
	// PasteFromOffice,
	Table,
	TableToolbar,
	TextTransformation,
	KeyboardShortcuts
];

// Editor configuration.
BalloonEditor.defaultConfig = {
	blockToolbar: [
		'heading',
		'|',
		'bulletedList',
		'numberedList',
		'todoList',
		'|',
		'alignment',
		'outdent',
		'indent',
		'|',
		'uploadImage',
		'insertUrlImage',
		'blockQuote',
		'insertTable',
		'mediaEmbed',
		'|',
		'undo',
		'redo'
	],
	toolbar: {
		items: [
			'bold',
			'italic',
			'link',
			'strikethrough',
			'code'
		]
	},
	heading: {
		options: [
			/** Customizing headings: https://docs.ckeditor.com/ckeditor5/latest/features/headings.html#configuring-heading-levels */
			{
				model: 'paragraph',
				title: 'Paragraph',
				view: { name: 'p', classes: '' },
				priority: 'high'
			},
			{
				model: 'heading1',
				view: { name: 'h1', classes: '' },
				title: 'Heading 1',
				priority: 'high'
			},
			{
				model: 'heading2',
				view: { name: 'h2', classes: '' },
				title: 'Heading 2',
				priority: 'high'
			},
			{
				model: 'heading3',
				view: { name: 'h3', classes: '' },
				title: 'Heading 3',
				priority: 'high'
			},
			{
				model: 'heading4',
				view: { name: 'h4', classes: '' },
				title: 'Heading 4',
				priority: 'high'
			}
		]
	},
	image: {
		toolbar: [
			'imageStyle:inline',
			'imageStyle:block',
			'imageStyle:side',
			'|',
			'toggleImageCaption',
			'imageTextAlternative'
		]
	},
	link: {
		decorators: {
			addTargetToLinks: {
				mode: 'automatic',
				callback: url => (

                    /*
                        Create external links for
                        http://google.com, https://google.com and //google.com

                        Note that `google.com` won't work,
                        because even if you set href like that, browser will prepand the website hostname.

                        For `/google.com`, it will be treated as internal page.
                    */
					/^(https?:)?\/\//.test( url )
				),
				// label: 'Open in new tab', /* only needed when in manual mode */
				attributes: {
					target: '_blank',
					rel: 'noopener noreferrer'
				}
			}
		}
	},
	table: {
		contentToolbar: [
			'tableColumn',
			'tableRow',
			'mergeTableCells'
		]
	},
	transformations: {
		include: [
			'arrowLeft', 'arrowRight'
		]
	},
	// This value must be kept in sync with the language defined in webpack.config.js.
	language: 'en'
};
