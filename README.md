# eslint-plugin-lorem

ESLint plugin to prevent Lorem Ipsum placeholder text in your code.

## Install

```bash
npm install eslint-plugin-lorem --save-dev
```

## Usage

Configure in your preferred ESLint config format:

### .eslintrc.json
```json
{
  "plugins": ["lorem"],
  "rules": {
    "lorem/no-lorem": "error"
  }
}
```

### .eslintrc.js
```js
module.exports = {
  plugins: ["lorem"],
  rules: {
    "lorem/no-lorem": "error"
  }
};
```

### .eslintrc.yaml
```yaml
plugins:
  - lorem
rules:
  lorem/no-lorem: error
```

### package.json
```json
{
  "eslintConfig": {
    "plugins": ["lorem"],
    "rules": {
      "lorem/no-lorem": "error"
    }
  }
}
```

### .eslintrc.cjs (for ESM projects)
```js
module.exports = {
  plugins: ["lorem"],
  rules: {
    "lorem/no-lorem": "error"
  }
};
```

## Configuration

Customize the pattern and message:
```json
{
  "lorem/no-lorem": ["error", {
    "pattern": "custom-regex-here",
    "message": "No placeholder text please!"
  }]
}
```

Default pattern checks for "Lorem Ipsum" in English and Hebrew: `/lorem\s+ipsum|לורם\s+איפסום/i`

## License

MIT