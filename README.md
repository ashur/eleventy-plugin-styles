# eleventy-plugin-styles

An [Eleventy](https://11ty.dev/) shortcode for joining truthy object values into a semicolon-delimited string, suitable for use in an HTML element `style` attribute.

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

```njk
{% set backgroundColor = "red" %}
{% set customProperty = "10px" %}
{% set sectionTitle = "Section Title" %}

<h2 style="{% styles {
    "background-color": backgroundColor,
    "--custom-property": customProperty,
    "--undefined-property": "green" if undefinedProperty
} %}">
    {{ sectionTitle }}
</h2>
```

would return

```html
<h2 style="background-color: red; --custom-property: 10px">
    Section Title
</h2>
```
