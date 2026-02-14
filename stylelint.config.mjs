export default {
    plugins: ['stylelint-order'],
    rules: {
        'block-no-empty': true,
        'color-no-invalid-hex': true,
        'declaration-block-no-duplicate-properties': [true, {
            ignore: ['consecutive-duplicates-with-different-values']
        }],
        'declaration-block-no-shorthand-property-overrides': true,
        'font-family-no-duplicate-names': true,
        'function-calc-no-unspaced-operator': true,
        'function-linear-gradient-no-nonstandard-direction': true,
        'keyframe-declaration-no-important': true,
        'media-feature-name-no-unknown': true,
        'no-empty-source': true,
        'no-invalid-double-slash-comments': true,
        'property-no-unknown': true,
        'selector-pseudo-class-no-unknown': true,
        'selector-pseudo-element-no-unknown': true,
        'selector-type-no-unknown': true,
        'unit-no-unknown': true,
        'selector-pseudo-element-colon-notation': 'double',
        'shorthand-property-no-redundant-values': true,
        'declaration-block-single-line-max-declarations': 1,
        'length-zero-no-unit': true,
        'max-empty-lines': 1,
        'no-extra-semicolons': true,

        'order/order': [
            'custom-properties',
            'declarations'
        ],
        'order/properties-order': [
            {
                emptyLineBefore: 'always',
                properties: [
                    'font', 'font-family', 'font-size', 'font-weight', 'font-style',
                    'font-variant', 'font-size-adjust', 'font-stretch',
                    'line-height'
                ]
            },
            {
                emptyLineBefore: 'always',
                properties: [
                    'position', 'z-index', 'top', 'right', 'bottom', 'left'
                ]
            },
            {
                emptyLineBefore: 'always',
                properties: [
                    'display', 'visibility', 'float', 'clear',
                    'overflow', 'overflow-x', 'overflow-y',
                    'clip', 'zoom',
                    'flex', 'flex-direction', 'flex-wrap', 'flex-flow',
                    'flex-grow', 'flex-shrink', 'flex-basis',
                    'order', 'justify-content', 'align-items', 'align-self', 'align-content'
                ]
            },
            {
                emptyLineBefore: 'always',
                properties: [
                    'box-sizing', 'width', 'min-width', 'max-width',
                    'height', 'min-height', 'max-height',
                    'margin', 'margin-top', 'margin-right', 'margin-bottom', 'margin-left',
                    'padding', 'padding-top', 'padding-right', 'padding-bottom', 'padding-left'
                ]
            },
            {
                emptyLineBefore: 'always',
                properties: [
                    'table-layout', 'empty-cells', 'caption-side',
                    'border-spacing', 'border-collapse',
                    'list-style', 'list-style-position', 'list-style-type', 'list-style-image'
                ]
            },
            {
                emptyLineBefore: 'always',
                properties: [
                    'content', 'quotes', 'counter-reset', 'counter-increment',
                    'resize', 'cursor', 'user-select',
                    'transition', 'transition-delay', 'transition-timing-function',
                    'transition-duration', 'transition-property',
                    'transform', 'transform-origin',
                    'animation', 'animation-name', 'animation-duration',
                    'animation-play-state', 'animation-timing-function',
                    'animation-delay', 'animation-iteration-count', 'animation-direction',
                    'text-align', 'vertical-align', 'white-space',
                    'text-decoration', 'text-indent', 'text-transform',
                    'text-overflow', 'word-wrap', 'word-break',
                    'letter-spacing', 'word-spacing',
                    'tab-size', 'hyphens', 'pointer-events'
                ]
            },
            {
                emptyLineBefore: 'always',
                properties: [
                    'opacity', 'color',
                    'border', 'border-width', 'border-style', 'border-color',
                    'border-top', 'border-right', 'border-bottom', 'border-left',
                    'border-radius',
                    'border-top-left-radius', 'border-top-right-radius',
                    'border-bottom-right-radius', 'border-bottom-left-radius',
                    'border-image',
                    'outline', 'outline-width', 'outline-style', 'outline-color', 'outline-offset',
                    'background', 'background-color', 'background-image',
                    'background-repeat', 'background-attachment', 'background-position',
                    'background-clip', 'background-origin', 'background-size',
                    'box-shadow', 'text-shadow'
                ]
            }
        ]
    }
};
