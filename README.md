# eslint-plugin-lorem

[![npm](https://img.shields.io/npm/v/eslint-plugin-lorem.svg)](https://www.npmjs.com/package/eslint-plugin-lorem)

ESLint plugin to prevent Lorem Ipsum placeholder text in your code.

## Install

```bash
npm install eslint-plugin-lorem --save-dev
```

## Quick Start

Add to your `.eslintrc.json`:
```json
{
  "extends": ["plugin:lorem/recommended"]
}
```

That's it! The plugin will work with default settings.

## Manual Configuration

If you prefer manual setup or need customization:

```json
{
  "plugins": ["lorem"],
  "rules": {
    "lorem/no-lorem": "error"
  }
}
```

## Framework Support

Works out of the box with raw HTML files, React/JSX, Vue, Svelte. It is also compatible with template literals (escapes special characters) and regular TypeScript/JavaScript strings.

For HTML files, add to your `.eslintrc.json`:
```json
{
  "overrides": [
    {
      "files": ["*.html"],
      "parser": "eslint-html-parser"
    }
  ]
}
```

## Customization

### Add More Strings to Check
```json
{
  "lorem/no-lorem": ["error", {
    "strings": ["dummy text", "placeholder content"]
  }]
}
```

### Override Default Strings
```json
{
  "lorem/no-lorem": ["error", {
    "strings": ["only check this text"],
    "override": true
  }]
}
```

### Custom Error Message
```json
{
  "lorem/no-lorem": ["error", {
    "message": "Please replace placeholder text"
  }]
}
```

## Disabling the Rule

### For a Single Line
```js
// eslint-disable-next-line lorem/no-lorem
const text = "Lorem ipsum dolor sit amet";
```

### For a Block
```js
/* eslint-disable lorem/no-lorem */
const text1 = "Lorem ipsum dolor sit amet";
const text2 = "Lorem ipsum dolor sit amet";
/* eslint-enable lorem/no-lorem */
```

### For an Entire File
At the top of the file:
```js
/* eslint-disable lorem/no-lorem */
```

## Default Strings Checked
- "lorem"
- "ipsum"
- "לורם"
- "איפסום"

## License

MIT-0