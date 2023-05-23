/* eslint-disable valid-jsdoc */
const styles = require( "./src/styles" );

/**
 * @param {import("@11ty/eleventy/src/UserConfig")} eleventyConfig
 */
module.exports = ( eleventyConfig ) =>
{
	eleventyConfig.addFilter( "styles", styles );
	eleventyConfig.addShortcode( "styles", styles );
};
