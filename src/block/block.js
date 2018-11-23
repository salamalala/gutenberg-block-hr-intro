/**
 * BLOCK: homepage-intro
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//  Import CSS.
import './style.scss';
import './editor.scss';

const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks;

const {
	RichText,
	PlainText,
	AlignmentToolbar,
	BlockControls
} = wp.editor;

const { Button } = wp.components;


registerBlockType( 'cgb/block-homepage-intro', {

	title: __( 'Homepage Intro' ),
	icon: 'controls-play',
	category: 'hr-home-blocks',
	keywords: [
		__( 'Homepage Intro' ),
		__( 'Homepage' ),
	],


	attributes: {
	  blockText: {
			type: 'string',
	    source: 'text',
	    selector: '.intro-block__title'
	  },
		alignment: {
      type: 'string',
    },
	},


	edit: ( { attributes, className, setAttributes } ) => {

		const { alignment } = attributes;


		return [
			(
        <BlockControls key="controls">
            <AlignmentToolbar
                value={alignment}
                onChange={( nextAlign ) => { setAttributes( { alignment: nextAlign } );} }
            />
        </BlockControls>
      ),
			<div className={className}>
				 <PlainText
				 		value={ attributes.blockText}
    				placeholder="Your intro text"
    				className="heading"
						onChange={ content => setAttributes({ blockText: content }) }
				 />
 		 	</div>
		];
	},

	save: ({ attributes }) => {
		return (
	    <div className="card">
        <p className="card__text">{ attributes.blockText }</p>
	    </div>
  	);
	},

	supports: {
    align: true,
		align: [ 'full' ],
	}
} );
