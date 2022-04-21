const StyleDictionary = require('style-dictionary')
const _ = require('lodash')

let StyleDictionaryExtended

/**
 * Custom formatter for style dictionary that takes in the tokens property files
 * and returns a styled-components globals style as a typescript file.
 */
StyleDictionary.registerFormat({
	name: 'scGlobalStyles',
	formatter: (dictionary) => {
		const tokens = dictionary.allProperties
			.map((property) => {
				const tokenPath = property.path.join('.')
				
				if (property.attributes.type === 'breakpoint') {
					const gridContext = `${property.attributes.type}s.${property.attributes.item}.${property.attributes.subitem}`
					return `--${property.name}: ` + '${({ theme }) => theme.' + `${gridContext} };`
				
				} else if (property.attributes.type === 'tag') {
					const attr = property.attributes
					const gridContext = `${attr.item}.${attr.subitem}.${attr.state}`
					return `--${property.name}: ` + '${({ theme }) => theme.context.typography.' + `${gridContext} };`
				
				} else {
					return `--${property.name}: ` + '${({ theme }) => theme.' + `${tokenPath} };`
				}
			})
			.join('\n' + '        ');

		return (
			"import { css } from 'styled-components' \n \n" +
			'export const ThemeVariables = css` \n' +
			'    :root { \n' +
			`        ${tokens} \n` +
			'    } \n' +
			'`'
		)
	}
})

/**
 * Custom formatter for style dictionary that takes in the tokens property files
 * and returns a styled-components globals style as a typescript file.
 */
StyleDictionary.registerFormat({
	name: 'typescript',
	formatter: (dictionary) => {
		const tokens = JSON.stringify(
			_.reduce(
				dictionary.allProperties,
				(properties, property) =>
					_.setWith(
						properties,
						property.path,
						typeof property.value === 'string' && property.original.value.match(/^{.*}$/)
							? property.value
							: property.value,
						Object
					),
				{}
			),
			null,
			4
		)

        return 'const Theme = ' + tokens + '\n\n' + 'export { Theme } \n' + 'export default Theme'
	}
})

/**
 * Custom formatter for style dictionary that takes in the tokens property files
 * and returns them as a JSON object.
*/
StyleDictionary.registerFormat({
	name: 'Json',
	formatter: (dictionary) => {
		return JSON.stringify(
			_.reduce(
				dictionary.allProperties,
				(properties, property) =>
					_.setWith(
						properties,
						property.path,
						typeof property.value === 'string' && property.original.value.match(/^{.*}$/)
							? property.value
							: property.value,
						Object
					),
				{}
			),
			null,
			4
		);
	}
})

/**
 * Custom formatter for style dictionary that takes in the tokens property files
 * and returns them as a CSS vars string.
*/
StyleDictionary.registerFormat({
    name: 'cssvars',
    formatter: (dictionary) => {
        return [
            ':root {',
            ...(_.map(
                dictionary.allProperties,
                (property) => `    --${property.name}: ${property.value};`,
            )),
            '}',
        ].join('\n')
    },
})

/**
 * Custom formatter for style dictionary that takes in the tokens property files
 * and returns them as a JSON of all properties.
*/
StyleDictionary.registerFormat({
    name: 'properties',
    formatter: (dictionary) => {
        return JSON.stringify(
			dictionary.allProperties,
			null,
			4
		)
    },
})

/** 
 * Custom transform for web properties. Converts those tokens that are
 * related to sizing to REM. Overrides default size/rem attribute from
 * Style-Dictionary library.
 */
StyleDictionary.registerTransform({
	name: 'size/rem',
	type: 'value',
	matcher: (prop) => {
		const checker = prop.attributes.category;
		return checker === 'sizes' || checker === 'grid' || checker === 'border'
	},
	transformer: (prop) => {
		return `${prop.value}rem`
	}
});

/**
 * Registered TransformGroup for custom JS.
 */
StyleDictionary.registerTransformGroup({
	name: 'custom/js',
	transforms: [ 'attribute/cti', 'name/cti/pascal', 'size/rem' ]
});

/**
 * Registered TransformGroup for custom CSS.
 */
 StyleDictionary.registerTransformGroup({
	name: 'custom/css',
	transforms: [ 'attribute/cti', 'name/cti/kebab', 'size/rem' ]
});

/**
 * Runs the two config files to build platforms
 */
StyleDictionaryExtended = StyleDictionary.extend(__dirname + '/config.light.json')
StyleDictionaryExtended.buildAllPlatforms()

StyleDictionaryExtended = StyleDictionary.extend(__dirname + '/config.dark.json')
StyleDictionaryExtended.buildAllPlatforms()
