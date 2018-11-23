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
	AlignmentToolbar,
	BlockControls,
	InnerBlocks
} = wp.editor;

const TEMPLATE = [
	[ 'core/paragraph', { placeholder: 'Enter side content...' } ],
	[ 'core/button' ]
];

/**
 * Register: aa Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @link https://wordpress.org/gutenberg/handbook/block-api/
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */
registerBlockType( 'cgb/block-homepage-intro', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __( 'Homepage Intro' ), // Block title.
	icon: 'controls-play', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'hr-home-blocks', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__( 'Homepage Intro' ),
		__( 'Homepage' ),
	],

	attributes: {
    alignment: {
      type: 'string',
    },
  },

	edit: ( { attributes, className, setAttributes } ) => {
		// const { className } = props;
			// const { attributes: { categoryAlign }, setAttributes, isSelected } = props;
		const { alignment } = attributes;
		// function onChangeContent( newContent ) {
    //         setAttributes( { content: newContent } );
    //     }
		// function onChangeAlignment( newAlignment ) {
    //     setAttributes( { alignment: newAlignment } );
    // }

		return [
			(
        <BlockControls key="controls">
            <AlignmentToolbar
                value={alignment}
                onChange={( nextAlign ) => {
                    setAttributes( { alignment: nextAlign } );
                }}
            />
        </BlockControls>
      ),
			<div className={ className }>

			 	 <InnerBlocks
				 		template={TEMPLATE}
						templateLock="all"
				 />
			</div>
		];
	},

	save: function( props ) {
		return (
			<div>
      	<InnerBlocks.Content />
    	</div>
		);
	},

	supports: {
    align: true,
		align: [ 'full' ],
	}
} );
