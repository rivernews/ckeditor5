import Plugin from '@ckeditor/ckeditor5-core/src/plugin';

import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';

export default class KeyboardShortcuts extends Plugin {
	init() {
		const editor = this.editor;

		const headingNumbers = [ 1, 2, 3, 4 ];

		/** Headings & Paragraph */
		for ( const number of headingNumbers ) {
			editor.keystrokes.set( `ctrl+alt+${ number }`, ( data, stop ) => {
				editor.execute( 'heading', { value: `heading${ number }` } );
				stop(); /* stop browser's keyboard shortcut */
			} );
		}
		editor.keystrokes.set( 'ctrl+alt+0', ( data, stop ) => {
			editor.execute( 'paragraph' );
			stop();
		} );

		/** Bullit List */
		editor.keystrokes.set( 'ctrl+shift+8', ( data, stop ) => {
			editor.execute( 'bulletedList' );
			stop();
		} );
	}

	static get requires() {
		return [ Paragraph ];
	}
}
