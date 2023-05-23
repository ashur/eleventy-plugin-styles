# eleventy-plugin-styles

An [Eleventy](https://11ty.dev/) plugin — available as a filter and a shortcode — for joining truthy object values into a semicolon-delimited string, suitable for use in an HTML element `style` attribute.

## Setup

Run the following command at the root of your Eleventy project

```shell
npm install @aaashur/eleventy-plugin-styles
```

then include it in your `.eleventy.js` config file:

```javascript
const styles = require("@aaashur/eleventy-plugin-styles");

module.exports = (eleventyConfig) => {
    eleventyConfig.addPlugin(styles);
};
```

## Usage

### Filter

> ✨ Added in v0.2.0

You might use the filter in a [WebC template](https://www.11ty.dev/docs/languages/webc/) like this:

```html
---
backgroundColor: red
customProperty: 10px
sectionTitle: Section Title
---
<h2 :style="styles({
	    'background-color': backgroundColor,
	    '--custom-property': customProperty,
	    '--undefined-var': undefinedVar && 'green',
	})"
	@text="sectionTitle"
></h2>
```

which would return:

```html
<h2 style="background-color: red; --custom-property: 10px">
    Section Title
</h2>
```


### Shortcode

You might use the shortcode in a [Nunjucks template](https://www.11ty.dev/docs/languages/nunjucks/) like this:

```njk
{% set backgroundColor = "red" %}
{% set customProperty = "10px" %}
{% set sectionTitle = "Section Title" %}

<h2 style="{% styles {
    "background-color": backgroundColor,
    "--custom-property": customProperty,
    "--undefined-var": "green" if undefinedVar
} %}">
    {{ sectionTitle }}
</h2>
```

which would return:

```html
<h2 style="background-color: red; --custom-property: 10px">
    Section Title
</h2>
```
